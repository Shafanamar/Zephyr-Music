// commands/queue.js
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'queue',
  description: 'Show the current queue',
  async execute(message) {
    const queue = message.client.player.getQueue(message.guild);
    if (!queue || !queue.playing) return message.reply('No music is currently playing!');

    const embed = new EmbedBuilder()
      .setColor('BLUE')
      .setTitle('Current Queue')
      .setDescription(queue.tracks.map((track, i) => `**${i + 1}.** ${track.title}`).join('\n'));

    message.reply({ embeds: [embed] });
  },
};
