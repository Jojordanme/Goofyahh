const { EmbedBuilder } = require("discord.js");

module.exports.run = (client, message, args) => {
  const dmEmbed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle("all non slash commands:")
    .addFields({ name: "**?help**", value: "basically a help command" })
    .addFields({
      name: "**?spam** <integer>",
      value:
        "spam random words only works when your administrator tho\n**<integer>**\ninteger is the amount of times you want to spam",
    })
    .addFields({
      name: "**?stopspam**",
      value: "stops ongoing spam must have kickmembers permission",
    })
    .addFields({ name: "**?snipe**", value: "snipe a recent deleted message" })
    .addFields({
      name: "**?herbert**",
      value: "sends a gif of herbert but with a 30 second cooldown",
    })
    .addFields({ name: "**?cat**", value: "send cat media" })
    .addFields({
      name: "**?roast** <user>",
      value:
        "roast people with yo mama jokes\n**<user>**\nthe user you want to roast",
    })
    .addFields({
      name: "**?8ball** <string>",
      value:
        "make a session of 8ball\n**<string>**\nThe question your gonna ask to mr 8ball",
    })
    .addFields({
      name: "**?rps** <string>",
      value:
        "play a game of rock paper scissors\n**<string>**\nChoose either rock paper scissors duh.",
    })
    .addFields({ name: "**?balance**", value: "Check yur balance!" })
    .addFields({ name: "**?shop**", value: "see our items in the shop" })
    .addFields({
      name: "?**buy <string>**",
      value:
        "buy an item from the shop\n**<string>**\nThe item you want to buy. If you wanna buy multiple items here is an example ?buy 5seaweed this will buy you 5 seaweed and its important to not put spaces ebtween the word and the number",
    })

    .addFields({ name: "**?inventory**", value: "See your owned items!" })
    .addFields({
      name: "**?sell <string>**",
      value:
        "Works the same way as buy command except you get money by giving your items",
    })
    .addFields({
      name: "**?transfer <user> <integer>**",
      value:
        "Give people money\n**<user>**\nThe user you want to give money to\n**<integer>**\nThe amount of money you want to give",
    })
    .addFields({ name: "**?trivia**", value: "Play a game of trivia" })

    .addFields({ name: "**?guess**", value: "Play a game of guess the number" })
    .addFields({ name: "**?use**", value: "Use your items!" })
    .addFields({
      name: "**?underwater**",
      value: "Go underwater to get items!",
    })

    .setTimestamp();

  message.author.send({ embeds: [dmEmbed] }).catch((err) => {
    console.log(err);
    return;
  });
};

module.exports.name = "help";
