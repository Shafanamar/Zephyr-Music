const { EmbedBuilder } = require('discord.js');
const { supportServer } = require('../config/config.json');

module.exports = {
  name: 'help',
  description: 'Show help information',
  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor('PURPLE')
      .setTitle('Help - Zephyr Music Bot')
      .setDescription('Here are the commands you can use:')
      .addFields(
        { name: '!play [song]', value: 'Play a song from a URL or search query.' },
        { name: '!stop', value: 'Stop the current song.' },
        { name: '!skip', value: 'Skip the current song.' },
        { name: '!queue', value: 'Show the current queue.' },
        { name: '!about', value: 'Show information about the bot.' },
      )
      .addField('Support Server', supportServer);
      
    message.reply({ embeds: [embed] });
  },
};
