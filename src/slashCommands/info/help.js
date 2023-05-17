const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Displays the list of available commands.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async(client, interaction) => {
    const { slashCommands } = client;

    const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Bot Commands')
      .setDescription('Here is a list of available commands:')
      .setTimestamp();

    slashCommands.forEach(command => {
      embed.addFields([
        {
          name: `/${command.name}`, value: command.description
      }
      ]);
    });

    interaction.reply({ embeds: [embed] });
  },
};

