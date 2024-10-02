module.exports = {
  name: 'skip',
  description: 'Skip the current track',
  async execute(message) {
    const queue = message.client.player.getQueue(message.guild);
    if (!queue || !queue.playing) return message.reply('No music is currently playing!');

    const track = queue.skip();
    message.reply(`⏭ Skipped **${track.title}**!`);
  },
};
