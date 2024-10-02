module.exports = {
  name: 'stop',
  description: 'Stop the music',
  async execute(message) {
    const queue = message.client.player.getQueue(message.guild);
    if (!queue || !queue.playing) return message.reply('No music is currently playing!');

    queue.destroy();
    message.reply('⏹ Stopped the music!');
  },
};
