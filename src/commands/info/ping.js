const { Client, Message } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Check bot's ping.",
  cooldown: 3000,
  userPerms: [],
  botPerms: [],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const msg = await message.reply("Pinging...");
    await msg.edit(`Pong! **${client.ws.ping} ms**`);
  },
};
