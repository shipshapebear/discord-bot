require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (e) => {
  console.log(`${e.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.content === "murahin mo si jormiel") {
    message.reply("Tang ina mo jormiel");
  }
});

client.login(process.env.ACCESS_TOKEN);