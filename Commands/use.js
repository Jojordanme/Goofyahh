const moneySchema = require("../src/SCHEMAS/moneySchema.js");
const { EmbedBuilder } = require("discord.js");
module.exports.run = async (client, message, args) => {
  try {
    let Data = await moneySchema.findOne({
      Guild: message.guild.id,
      User: message.author.id,
    });
    const embed = new EmbedBuilder()
      .setColor("#03fc13")
      .setTitle(`${message.author.tag}'s Chest'`);
    console.log(args.join(' '));
    if (args.join(" ").toLowerCase() == "chest") {
      console.log("no chest?");
      if (!Data) return message.reply("You dont have a chest");

      if (Data.Inventory.includes("chest")) {
        for (let i = 0; i < Data.Inventory.length; i++) {
          if (Data.Inventory[i] == "chest") {
            Data.Inventory.splice(i, 1);
            break;
          }
        }
        if (Math.floor(Math.random() * 8) == 1) {
          Data.Inventory.push("Ruby");

          embed.addFields({ name: "+1 Ruby", value: "\u200B" });
        }

        if (Math.floor(Math.random() * 5) <= 4) {
          let random = Math.round(Math.random() * 26 + 10);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Seaweed");
          }
          embed.addFields({ name: `+${random} Seaweed`, value: "\u200B" });
        }

        if (Math.floor(Math.random() * 2) == 1) {
          let random = Math.round(Math.random() * 15 + 5);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Auric seaweed");
          }
          embed.addFields({
            name: `+${random} Auric seaweeds`,
            value: "\u200B",
          });
        }
        if (Math.floor(Math.random() * 3) == 1) {
          let random = Math.round(Math.random() * 8 + 4);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Gem");
          }
          embed.addFields({ name: `+${random} Gems`, value: "\u200B" });
        } else {
          Data.Money += 4500;
          embed.addFields({ name: "+4500 Coins", value: "\u200B" });
        }
        Data.save();
        message.channel.send({ embeds: [embed] });
      } else {
        console.log(`wsit what`);
        message.channel.send("you dont have a chest");
      }
    } else if (args.join(" ").toLowerCase() == "health amulet"){
      
      if (Data.Inventory.includes("health")){
        Data.Inventory.splice(Data.Inventory.indexOf("health"), 1);
        Data.Health += 5;
        await Data.save();
        message.channel.send("You got +5 Health!");
      } else {
        message.channel.send("You dont have a health amulet");
      }
    
    }else if (args.join(" ").toLowerCase() == "epic chest") {
      console.log(`real?`);
      if (!Data) return message.reply("You dont have a chest");

      if (Data.Inventory.includes("epichest")) {
        for (let i = 0; i < Data.Inventory.length; i++) {
          if (Data.Inventory[i] == "epichest") {
            Data.Inventory.splice(i, 1);
            break;
          }
        }
        if (Math.floor(Math.random() * 5) == 1) {
        let random = Math.round(Math.random() * 1 + 1);
        for (let i = 0; i < random; i++) {
          Data.Inventory.push("diamond");
        }
        embed.addFields({ name: `+${random} Diamonds`, value: "\u200B" });

        
    }
        if (Math.floor(Math.random() * 5) <= 3) {
        let random = Math.round(Math.random() * 3 + 3);
        for (let i = 0; i < random; i++) {
          Data.Inventory.push("Ruby");
        }
        embed.addFields({ name: `+${random} Ruby`, value: "\u200B" });

        
    }
        if (Math.floor(Math.random() * 5) <= 4) {
          let random = Math.round(Math.random() * 26 + 10);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Auric seaweed");
          }
          embed.addFields({ name: `+${random} Auric seaweed`, value: "\u200B" });
        }

        
          let random = Math.round(Math.random() * 48 + 5);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Seaweed");
          }
          embed.addFields({
            name: `+${random} Seaweed`,
            value: "\u200B",
          });
        
        if (Math.floor(Math.random() * 2) == 1) {
          let random = Math.round(Math.random() * 12 + 8);
          for (let i = 0; i < random; i++) {
            Data.Inventory.push("Gem");
          }
          embed.addFields({ name: `+${random} Gems`, value: "\u200B" });
        } else {
          Data.Money += 6000;
          embed.addFields({ name: "+6,000 Coins", value: "\u200B" });
        }
        Data.save();
        message.channel.send({ embeds: [embed] });
      }  else {
      message.channel.send("no chest?");
    }
  } else {
      message.channel.send("This item is not usable!");
    }
}catch (err){
    console.log(err)
}
}