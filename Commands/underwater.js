const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
var cooldown = [];
module.exports.run = async (client, message, args) => {
  let seaweed = 0;
  let idxs = [];
  let Data = await ecoScheme.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });
  if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
    });
  }
  if (!cooldown.includes(message.author.id)) {
    available = 1;

    for (let i = 0; i < Data.Inventory.length; i++) {
      if (Data.Inventory[i] == "Seaweed") {
        if (seaweed == 5) {
          break;
        } else {
          seaweed++;
          idxs.push(i);
        }
      }
    }
    if (seaweed < 5)
      return message.reply(
        "You dont have 5 seaweed! how are you supposed to survive!?"
      );
    cooldown.push(message.author.id);
    for (let i = 0; i < idxs.length; i++) {
      Data.Inventory.splice(idxs[i], 1);
    }
    let msg = await message.channel.send("We are going down to the sea...");
    setTimeout(() => {
      let item = ["epichest", 1];
      const number = Math.floor(Math.random() * 100) + 1;
      if (number < 35) item = ["Seaweed", Math.floor(Math.random() * 10) + 3];
      else if (number < 60) item = ["Fish", Math.floor(Math.random() * 8) + 2];
      else if (number < 80)
        item = ["Auric seaweed", Math.floor(Math.random() * 7) + 3];
      else if (number < 95) item = ["Gem", Math.floor(Math.random() * 7) + 1];
      else if (number < 99) item = ["Chest", 2];
      msg.edit(
        `You got ${item[1]} ${item[0]} from that underwater experience!`
      );
      for (let i = 0; i < item[1]; i++) {
        Data.Inventory.push(item[0]);
      }
      for (let i = 0; i < cooldown.length; i++) {
        if (cooldown[i] == message.author.id) {
          cooldown.splice(i, 1);
        }
      }

      Data.save();
    }, Math.floor(Math.random() * 30000 + Math.random() * 30000));
    available = 0;
  } else {
    message.channel.send("you are underwater");
  }
};
