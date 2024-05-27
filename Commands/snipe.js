const { EmbedBuilder } = require("discord.js");

module.exports.run = async (client, message, args) => {
  const msg = client.snipes.get(message.channel.id);
  if (!msg)
    return message.channel.send({
      content: "i see no deleted messages",
      ephemeral: true,
    });

  const ID = msg.author.id;
  const member = message.guild.members.cache.get(ID);
  const URL = member.displayAvatarURL();

  const embed = new EmbedBuilder()
    .setColor("DarkRed")
    .setTitle("Sniped bozo")
    .setDescription(`${msg.content}`)
    .setTimestamp()
    .setFooter({
      text: `Member username: ${msg.author.username}`,
      iconURL: `${URL}`,
    });

  if (msg.image) embed.setImage(msg.image);
  else embed.setDescription(`${msg.content}`);
  message.channel.send({ embeds: [embed] });
};
