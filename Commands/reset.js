const ecoScheme = require('../src/SCHEMAS/moneySchema.js');
module.exports.run = async (client, message, args) => {
  if (
    message.author.id == "792915059004801064" ||
    message.author.id == "627030860100534272"
  ) {
  const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!member)
      return message.channel.send(
        "Please mention a member or provide a valid member ID"
      );
  let Data = await ecoScheme.findOne({Guild: message.guild.id, User: member.id});

  if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: member.id,
      Money: 0,
      Inventory: [],
    });
    Data.save();
  }
  Data.Money = 0;
    Data.Inventory = []
  Data.save()
    message.channel.send(`Reseted ${member.user.tag}'s Data`)
  member.send(`You have been reseted by ${message.author.tag}.`).catch(err => {
    console.log(err);
  })
  }
}