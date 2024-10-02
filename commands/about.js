const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'about',
  description: 'Show about information',
  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor('BLUE')
      .setTitle('About Zephyr Music Bot')
      .setDescription('Zephyr Music Bot is a powerful music bot for Discord that supports various streaming platforms including Spotify and YouTube.')
      .addField('Creator', 'Your Name')
      .addField('Version', '1.0.0')
      .addField('GitHub Repository', '[Link](https://github.com/Shafanamar/Zephyr-Music)');
    
    message.reply({ embeds: [embed] });
  },
};
