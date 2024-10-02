const { Client, GatewayIntentBits } = require('discord.js');
const { Player } = require('discord-player');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const player = new Player(client);
client.player = player; // Attach player to client for global access

// Load commands
client.commands = new Map();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Load events
const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  require(`./events/${file}`)(client);
}

// Log in to Discord
client.login(process.env.TOKEN).then(() => {
  console.log(`Logged in as ${client.user.tag}!`);
});
