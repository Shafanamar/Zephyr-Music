const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'play',
  description: 'Play a song from a URL or search query',
  async execute(message, args) {
    const channel = message.member.voice.channel;
    if (!channel) return message.reply('You need to be in a voice channel to play music!');

    const query = args.join(' ');
    if (!query) return message.reply('Please provide a song name or URL!');

    const queue = await message.client.player.createQueue(message.guild);
    try {
      if (!queue.connection) await queue.connect(channel);
    } catch {
      queue.destroy();
      return message.reply('Could not join the voice channel!');
    }

    const track = await message.client.player.search(query, {
      requestedBy: message.author
    }).then(x => x.tracks[0]);

    if (!track) return message.reply('No results found!');

    queue.play(track);
    const embed = new EmbedBuilder()
      .setColor('GREEN')
      .setDescription(`🎶 Playing **${track.title}**!`);
    message.reply({ embeds: [embed] });
  },
};
