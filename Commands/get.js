const ecoScheme = require("../src/SCHEMAS/moneySchema.js");

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
    let Data = await ecoScheme.findOne({
      Guild: message.guild.id,
      User: member.id,
    });
    if (!Data) {
      Data = new ecoScheme({
        Guild: message.guild.id,
        User: member.id,
      });
    }
    function blockNumbersAndReturnString(input) {
      // Use a regular expression to remove numbers from the input
      const stringWithoutNumbers = input.replace(/\d/g, "");

      return stringWithoutNumbers;
    }
 
    function allowNumbersOnly(input) {
      // Use a regular expression to keep only numbers in the input
      const numbersOnly = input.replace(/\D/g, "");

      return numbersOnly;
    }

    const sliced = args.slice(1, 999);
    const item = blockNumbersAndReturnString(sliced.join(""));
    const amount = allowNumbersOnly(sliced.join("")) || 1
    
    if (item == "dollars") {
      Data.Money += parseInt(amount);
      Data.save();
      message.channel.send(
        `Added ${amount} dollars to ${member.user.username}'s wallet`
      );
    } else {
    if (parseInt(amount) <= 1) {
      Data.Inventory.push(item);
    } else {
      for (let i = 0; i < parseInt(amount); i++) {
        Data.Inventory.push(item);
      }
    }

    Data.save();
  }
}
}

