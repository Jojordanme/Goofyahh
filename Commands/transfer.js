const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  const { guild, member } = message;
  const target =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  const coins = parseInt(args[1]) || 0;
  let Data = await ecoScheme.findOne({ Guild: guild.id, User: member.id });
  let Data2 = await ecoScheme.findOne({ Guild: guild.id, User: target.id });
  if (!target) return message.channel.send("please mention a user first");

  if (coins < 1) return message.channel.send("please enter a valid amount");
  if (!Data) {
    Data = new ecoScheme({
      Guild: guild.id,
      User: member.id,
      Money: 0,
    });
  }

  if (!Data2) {
    Data2 = new ecoScheme({
      Guild: guild.id,
      User: target.id,
      Money: 0,
    });
  }

  if (Data.Money < coins)
    return message.channel.send("you do not have enough money to transfer");

  Data.Money -= coins;
  await Data.save();
  Data2.Money += coins;

  await Data2.save();
  message.channel.send(`you have transferred $${coins} to ${target}`);
};
