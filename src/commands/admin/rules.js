const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "rules",
  description: "Return server rules.",
  /*
   * @param {Client} client
   * @param {Message} message
   * */
  run: async (client, message, args) => {
    const rules = [
      "1. Be respectful - You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.",
      "2. No Inappropriate Language - The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.",
      "3. No spamming - Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.",
      "4. No pornographic/adult/other NSFW material - This is a community server and not meant to share this kind of material.",
      "6. No offensive names and profile pictures - You will be asked to change your name or picture if the staff deems them inappropriate.",
      "5. No advertisements - We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)",
      "7. Server Raiding - Raiding or mentions of raiding are not allowed.",
      "8. Direct & Indirect Threats - Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.",
      "9. Follow the Discord Community Guidelines - You can find them here: https://discordapp.com/guidelines",
      "10. Do not join voice chat channels without permission of the people already in there - If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first",
    ];

    if (message.author.id !== "820638721857814538" || "711145429110358048") {
      return message.reply("You can't use this command.");
    }

    const embed = new EmbedBuilder()
      .setColor("#FF0000") // Customize the color as desired
      .setTitle("Server Rules")
      .setDescription(rules.join("\n"))
      .setFooter({
        text: "Please follow these rules to maintain a friendly environment.",
      });

    message.channel.send({ embeds: [embed] });
  },
};
