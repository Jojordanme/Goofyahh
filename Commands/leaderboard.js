const { EmbedBuilder } = require("discord.js");
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");

module.exports.run = async (client, message, args) => {
  let msg = await message.channel.send("wait");
  let data = await ecoScheme.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });

  if (!data) {
    data = new ecoScheme({
      Guild: guild.id,
      User: author.id,
      Money: 0,
    });
    data.save();
  }

  const { guild } = message;

  let text = "";

  const embed1 = new EmbedBuilder()
    .setColor("Red")
    .setDescription(`No one is at the leaderboard.. yet`);

  const Data = await ecoScheme
    .find({ Guild: guild.id })
    .sort({
      Money: -1,
    })
    .limit(10);

  if (!Data) return await interaction.reply({ embeds: [embed1] });

  for (let counter = 0; counter < Data.length; counter++) {
    let { User, Money } = Data[counter];

    const value = (await client.users.fetch(User)) || "Anonymous";

    const member = value.tag;

    text += `#${counter + 1} ${value.displayName} (${member}) $${Money}\n`;
  }
  const embed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle(`${message.guild.name}'s Top 10 Richest Leaderboard`)
    .setDescription(`${text}`)
    .setTimestamp()
    .setFooter({ text: `You have $${data.Money}` });

  await msg.edit({ embeds: [embed] });
};
