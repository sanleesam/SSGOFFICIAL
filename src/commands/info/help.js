const { Message, Client, EmbedBuilder } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'show all commands of the bot',
  /*
   * @param {Client} client
   * @param {Message} Message
   * @param {String[]}
   */
  run: async(client, message, args) => {
    const {commands} = client;

    const embed = new EmbedBuilder()
    .setColor("Random")
    .setTitle("Bot Commands:")
    .setDescription('Here is a list of available commands:')
      .setTimestamp();

    commands.forEach(command => {
      embed.addFields([
        {
          name: `s!${command.name}`,
          value: `${command.description}`
        }
      ])
    })

    message.channel.send({ embeds: [embed] })
  }
}
