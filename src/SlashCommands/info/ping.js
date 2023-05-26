const { Command } = require("reconlx");

module.exports = new Command({
  name: "ping",
  description: "Return The Ping.",
  run: async ({ client, interaction, args }) => {
    interaction.followUp({ content: `${client.ws.ms}Ms!` });
  },
});
