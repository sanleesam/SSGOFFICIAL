const { ActivityType } = require("discord.js");
const client = require("..");
const chalk = require("chalk");

client.on("ready", () => {
  const activities = [
    {
      name: `${client.guilds.cache.size} Servers`,
      type: ActivityType.Listening,
    },
    {
      name: `${client.channels.cache.size} Channels`,
      type: ActivityType.Playing,
    },
    { name: `${client.users.cache.size} Users`, type: ActivityType.Watching },
    { name: `Created By Sanleesam :)`, type: ActivityType.Watching },
  ];
  const status = ["online", "dnd", "idle"];
  let i = 0;
  setInterval(() => {
    if (i >= activities.length) i = 0;
    client.user.setActivity(activities[i]);
    i++;
  }, 5000);

  let s = 0;
  setInterval(() => {
    if (s >= activities.length) s = 0;
    client.user.setStatus(status[s]);
    s++;
  }, 30000);
  console.log(chalk.red(`Logged in as ${client.user.tag}!`));

  const voiceChannelId = "1108347868516986911"; // Replace with the ID of the voice channel you want to update
  const guildId = "1108347867782987836"; // Replace with the ID of your server/guild
  const guild = client.guilds.cache.get(guildId);
  const voiceChannel = guild.channels.cache.get(voiceChannelId);

  setInterval(() => {
    const memberCount = guild.memberCount;
    voiceChannel.setName(`All Members: ${memberCount}`);
  }, 10000); // Update every 5 minutes

  client.on("voiceStateUpdate", (oldState, newState) => {
    if (newState.channel && newState.channel.id === voiceChannelId) {
      const memberCount = guild.memberCount;
      voiceChannel.setName(`All Members: ${memberCount}`);
    }
  });
});
