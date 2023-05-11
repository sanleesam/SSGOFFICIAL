const { ApplicationCommandType, Client, Interaction } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Check bot's ping.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  /**
   * @param {Client} client
   * @param {Interaction} interaction
   */
  run: async (client, interaction) => {
    interaction.reply({
      content: `🏓 Pong! Latency: **${Math.round(client.ws.ping)} ms**`,
    });
  },
};
