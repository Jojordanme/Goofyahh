const { EmbedBuilder } = require("discord.js");
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
let member;
module.exports.run = async (client, message, args) => {
  let vip = 0;
  if (!args) {
    member = message.member;
  } else {
    member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
  }

  if (!member)
    message.channel.send("Please mention a valid member of this server");

  let data = await moneySchema.findOne({
    Guild: message.guild.id,
    User: member.id,
  });
  if (!data) {
    data = new moneySchema({
      Guild: message.guild.id,
      User: member.id,
      Money: 0,
    });
  }

  for (let i = 0; i < data.Inventory.length; i++) {
    if (data.Inventory[i] == "Brig") {
      vip = 1;
      break;
    }
  }
  for (let i = 0; i < data.Inventory.length; i++) {
    if (data.Inventory[i] == "Premium") {
      vip = 2;
      break;
    }
  }
  if (vip == 1) {
    message.channel.send(
      `my favourite dude ${member.user.tag} has $${data.Money}, impressive.`
    );
  } else if (vip == 2) {
    const embed = new EmbedBuilder()
      .setColor("Gold")
      .setTitle(`${member.user.tag}'s Balance`)
      .setDescription(`Premium dude ${member.user.tag} has $${data.Money}`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
    message.channel.send(`${member.user.tag} has $${data.Money}`);
  } else {
    message.channel.send(`${member.user.tag} has $${data.Money}`);
  }
};
