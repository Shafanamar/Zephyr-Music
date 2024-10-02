const { Client, GatewayIntentBits } = require('discord.js');
const { Player } = require('discord-player');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Initialize Discord Player
const player = new Player(client);
client.player = player; // Attach player to client for global access

// Log in to Discord
client.login(process.env.TOKEN).then(() => {
  console.log(`Logged in as ${client.user.tag}!`);
}).catch(console.error);

// Event handlers
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
