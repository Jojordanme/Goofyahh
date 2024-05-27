const SHOPITEMS = [
  {
    name: "Seaweed",
    newname: "Seaweed",
    price: 50,
  },
  {
    name: "Fish",
    newname: "Fish",
    price: 125,
  },
  {
    name: "Guess Ticket",
    newname: "Guess Ticket",
    price: 150,
  },
  {
    name: "Gem",
    newname: "Gem",
    price: 450,
  },
  {
    name: "Auric seaweed",
    newname: "Auric seaweed",
    price: 750,
  },

  {
    name: "Brig",
    newname: "Nice Herbert",
    price: 20000,
  },
  {
    name: "Premium",
    newname: "Premium Herbert",
    price: 150000,
  },
];
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
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

  if (Data) {
    if (amount) {
      if (Data.Money >= SHOPITEMS[idx].price * amount) {
        for (let i = 0; i < amount; i++) {
          Data.Inventory.push(`${boughtItem.name}`);
        }
        Data.Money -= SHOPITEMS[idx].price * amount;
        if (!SHOPITEMS[idx].newname) {
          message.channel.send({
            content: `Purchased  ${amount} ${SHOPITEMS[idx].name} sucessfully`,
            ephemeral: true,
          });
        } else {
          message.channel.send({
            content: `Purchased ${amount} ${SHOPITEMS[idx].newname} sucessfully`,
            ephemeral: true,
          });
        }

        Data.save();
      } else {
        console.log(Data.Inventory);

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
            content: "POO-, i mean you dont enough money :)",
            ephemeral: true,
          });
        } else if (vip == 2) {
          message.channel.send({
            content: "my dude you dont have enough money please humbly grind",
            ephemeral: true,
          });
        } else {
          message.channel.send({ content: "POOR", ephemeral: true });
        }
      }
    } else {
      if (Data.Money >= SHOPITEMS[idx].price) {
        Data.Inventory.push(`${boughtItem.name}`);
        Data.Money -= SHOPITEMS[idx].price;
        if (!SHOPITEMS[idx].newname) {
          message.channel.send({
            content: `Purchased ${SHOPITEMS[idx].name} sucessfully`,
            ephemeral: true,
          });
        } else {
          message.channel.send({
            content: `Purchased ${SHOPITEMS[idx].newname} sucessfully`,
            ephemeral: true,
          });
        }

        Data.save();
      } else {
        console.log(Data.Inventory);

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
            content: "POO-, i mean you dont enough money :)",
            ephemeral: true,
          });
        } else if (vip == 2) {
          message.channel.send({
            content: "my dude you dont have enough money please humbly grind",
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
};
