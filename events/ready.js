const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}!`);
    
    // Set a presence/status for the bot
    client.user.setPresence({
      activities: [{ name: 'music', type: 'LISTENING' }],
      status: 'online'
    });

    // Log the number of servers the bot is in
    console.log(`The bot is connected to ${client.guilds.cache.size} servers.`);
  },
};

