const { EmbedBuilder } = require("discord.js");
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  let banana = 0;
  let bread = 0;
  let robbershield = 0;
  let auric = 0;
  let guess = 0;
  let brig = 0;
  let premium = 0;
  let ruby = 0;
  let chest = 0;
  let totem = 0;
  let healthitem = 0;
  let logitech = 0;
  let epik = 0;
  let diamonds = 0;
  const { guild, member } = message;
  let target;
  if (!args) {
    target = member;
  } else {
    target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
  }
  if (!target) {
    target = member;
  }
  const userTag = target.user.tag;
  `${target.username}#${target.discriminator}`;
  let Data = await ecoScheme.findOne({ Guild: guild.id, User: target.id });

  if (Data) {
    for (let i = 0; i < Data.Inventory.length; i++) {
      if (Data.Inventory[i] == "Seaweed") {
        banana++;
      } else if (Data.Inventory[i] == "Fish") {
        bread++;
      } else if (Data.Inventory[i] == "Gem") {
        robbershield++;
      } else if (Data.Inventory[i] == "Auric seaweed") {
        auric++;
      } else if (Data.Inventory[i] == "Guess Ticket") {
        guess++;
      } else if (Data.Inventory[i] == "Brig") {
        brig++;
      } else if (Data.Inventory[i] == "Premium") {
        premium++;
      } else if (Data.Inventory[i] == "Ruby") {
        ruby++;
      } else if (Data.Inventory[i] == "diamond") {
        diamonds++;
      } else if (Data.Inventory[i].toLowerCase() == "chest") {
        chest++;
      } else if (Data.Inventory[i].toLowerCase() == "totem") {
        totem++
      } else if (Data.Inventory[i].toLowerCase() == "health") {
        healthitem++
      } else if (Data.Inventory[i].toLowerCase() == "logitech") {
        logitech++
      } else if (Data.Inventory[i].toLowerCase() == "epichest") {
        epik++
      }
    }

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${userTag}'s Inventory'`);
    if (banana > 0) {
      embed.addFields({ name: "Seaweed", value: `${banana}`, inline: false });
    }
    if (bread > 0) {
      embed.addFields({ name: "Fish", value: `${bread}`, inline: false });
    }
    if (guess > 0) {
      embed.addFields({
        name: "Guess Ticket",
        value: `${guess}`,
        inline: false,
      });
    }
    if (robbershield > 0) {
      embed.addFields({
        name: "Gem",
        value: `${robbershield}`,
        inline: false,
      });
    }
    if (auric > 0) {
      embed.addFields({
        name: "Auric Seaweed",
        value: `${auric}`,
        inline: false,
      });
    }
    if (chest > 0) {
      embed.addFields({ name: "Chest", value: `${chest}`, inline: false });
    }
    if (epik > 0) {
      embed.addFields({
        name: "EPIC CHEST",
        value: `${epik}`,
        inline: false,
      });
    }
    if (totem > 0) {
      embed.addFields({ name: "Totem Of Undying", value: `${totem}`, inline: false });
    }
    if (healthitem > 0) {
      embed.addFields({ name: "Health Amulet", value: `${healthitem}`, inline: false });
    }
    if (ruby > 0) {
      embed.addFields({ name: "Ruby", value: `${ruby}`, inline: false });
    }
    if (diamonds > 0) {
      embed.addFields({ name: "Diamond", value: `${diamonds}`, inline: false });
    }
    if (brig > 0) {
      embed.addFields({
        name: "Nice Herbert",
        value: `${brig}`,
        inline: false,
      });
    }
    if (premium > 0) {
      embed.addFields({
        name: "Premium Herbert",
        value: `${premium}`,
        inline: false,
      });
    }
    if (logitech > 0) {
      embed.addFields({
        name: "Logitech Controller",
        value: `${logitech}`,
        inline: false,
      });
    }
    
    if (Data.Inventory.includes("Premium")) embed.setColor("Gold");
    message.channel.send({ embeds: [embed] });
  } else {
    if (!target.id == user.id) {
      Data = new ecoScheme({
        Guild: guild.id,
        User: target.id,
      });
      message.channel.send({
        content: `${target.tag} doesn't have anything`,
        ephemeral: true,
      });
    } else {
      Data = new ecoScheme({
        Guild: guild.id,
        User: user.id,
      });
      message.channel.send({
        content: `You dont have anything`,
        ephemeral: true,
      });
    }
  }

  robbershield = 0;
  banana = 0;
  bread = 0;
  auric = 0;
  brig = 0;
};
