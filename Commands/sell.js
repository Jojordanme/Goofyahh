const SHOPITEMS = [
  {
    name: "Seaweed",
    newname: "Seaweed",
    price: 10,
  },
  {
    name: "Fish",
    newname: "Fish",
    price: 40,
  },
  {
    name: "Chest",
    newname: "Chest",
    price: 5000,
  },
  {
    name: "Ruby",
    newname: "Ruby",
    price: 8500,
  },
  {
    name: "Guess Ticket",
    newname: "Guess Ticket",
    price: 0,
  },
  {
    name: "Gem",
    newname: "Gem",
    price: 700,
  },
  {
    name: "Auric seaweed",
    newname: "Auric seaweed",
    price: 300,
  },

  {
    name: "Brig",
    newname: "Nice Herbert",
    price: 0,
  },
  {
    name: "Premium",
    newname: "Premium Herbert",
    price: 0,
  },
];
const { EmbedBuilder } = require("discord.js");
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  if (args) {
    let vip = 0;
    if (!args)
      return message.channel.send("Please enter a valid item in the ?shop");
    const { author, guild } = message;
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
    let itEm = blockNumbersAndReturnString(args.join(" "));
    console.log(itEm);
    let amount = allowNumbersOnly(args.join(" "));
    let Data = await ecoScheme.findOne({ Guild: guild.id, User: author.id });
    let boughtItem = SHOPITEMS.find(
      (item) => item.newname.toLowerCase() === itEm.toLowerCase()
    );

    if (!boughtItem) return message.channel.send("Please provide a valid item");
    let idx = 0;
    for (let i = 0; i < SHOPITEMS.length; i++) {
      if (SHOPITEMS[i].name == boughtItem.name) {
        idx = i;
      }
    }

    if (!boughtItem)
      return message.channel.send("Please enter a valid item in the ?shop");
    if (boughtItem.price == 0)
      return message.channel.send("You cant sell this item!");
    if (Data) {
      if (amount) {
        let stuff = 0;
        let idxs = [];
        for (let i = 0; i < Data.Inventory.length; i++) {
          if (Data.Inventory[i] == boughtItem.name) {
            stuff++;
            idxs.push(i);
          }
        }
        if (stuff >= amount) {
          for (let i = 0; i < amount; i++) {
            Data.Inventory.splice(idxs[i], 1);
          }

          Data.Money += SHOPITEMS[idx].price * amount;
          if (!SHOPITEMS[idx].newname) {
            message.channel.send({
              content: `Sold ${amount} ${SHOPITEMS[idx].name} sucessfully`,
              ephemeral: true,
            });
          } else {
            message.channel.send({
              content: `Sold ${amount} ${SHOPITEMS[idx].newname} sucessfully`,
              ephemeral: true,
            });
          }

          Data.save();
        } else {
          idxs = [];
          for (let i = 0; i < Data.Inventory.length; i++) {
            if (Data.Inventory[i] == "Brig") {
              vip = 1;
              break;
            }
          }
          for (let i = 0; i < Data.Inventory.length; i++) {
            if (Data.Inventory[i] == "Premium") {
              vip = 2;
              break;
            }
          }
          console.log(vip);
          if (vip == 1) {
            message.channel.send({
              content: "POO-, i mean you dont have enough stuff :)",
              ephemeral: true,
            });
          } else if (vip == 2) {
            message.channel.send({
              content:
                "my dude you dont have enough stuff, please humbly grind",
              ephemeral: true,
            });
          } else {
            message.channel.send({ content: "POOR", ephemeral: true });
          }
        }
      } else {
        let stuff = 0;
        let idex = 0;
        for (let i = 0; i < Data.Inventory.length; i++) {
          if (Data.Inventory[i] == boughtItem.name) {
            stuff++;
            idex = i;
            break;
          }
        }
        if (stuff == 1) {
          Data.Inventory.splice(idex, 1);
          Data.Money += SHOPITEMS[idx].price;
          if (!SHOPITEMS[idx].newname) {
            message.channel.send({
              content: `Sold ${SHOPITEMS[idx].name} sucessfully`,
              ephemeral: true,
            });
          } else {
            message.channel.send({
              content: `Sold ${SHOPITEMS[idx].newname} sucessfully`,
              ephemeral: true,
            });
          }

          Data.save();
        } else {
          idxs = [];
          for (let i = 0; i < Data.Inventory.length; i++) {
            if (Data.Inventory[i] == "Brig") {
              vip = 1;
              break;
            }
          }
          for (let i = 0; i < Data.Inventory.length; i++) {
            if (Data.Inventory[i] == "Premium") {
              vip = 2;
              break;
            }
          }
          console.log(vip);
          if (vip == 1) {
            message.channel.send({
              content: "POO-, i mean you dont have enough stuff :)",
              ephemeral: true,
            });
          } else if (vip == 2) {
            message.channel.send({
              content:
                "my dude you dont have enough stuff, please humbly grind",
              ephemeral: true,
            });
          } else {
            message.channel.send({ content: "POOR", ephemeral: true });
          }
        }
      }
    } else {
      Data = new ecoScheme({
        Guild: guild.id,
        User: author.id,
        Money: 0,
      });
      Data.save();
      message.channel.send({ content: "POOR", ephemeral: true });
    }

    vip = 0;
  } else {
    const embed = new EmbedBuilder()
      .setTitle(`Sell prices`)
      .setDescription(`Use ?buy <item> in order to purchase the items`)
      .addFields({ name: "Seaweed", value: ":coin:**10**" })
      .addFields({ name: "Fish", value: ":coin:**40**" })
      .addFields({ name: "Auric Seaweed", value: ":coin:**300**" })
      .addFields({ name: "Gem", value: ":coin:**700**" })

      .addFields({ name: "Chest", value: ":coin:**5,000**" })
      .addFields({ name: "Ruby", value: ":coin:**8,500**" });
    message.channel.send({ embeds: [embed] });
  }
};
