const Discord = require("discord.js");
const {
  Client,
  GatewayIntentBits,
  ComponentType,
  Message,
  EmbedBuilder,
  PermissionsBitField,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  TextInputStyle,
  ActivityType,
  ButtonStyle,
  SlashCommandBuilder,
  Permissions,
  Events,
  AttachmentBuilder,
} = Discord;
module.exports.run = async (client, message, args) => {
  try {
    console.log(args);
    if (!args) return message.channel.send("Please type a question!");
    const choice = [
      "Yes",
      "No",
      "Maybe",
      "Probably",
      "Probably Not",
      "Definitely",
      "Definitely Not",
      "I dont know",
      "aw hell naw",
      "yep",
      "nope",
      "yes, very yes",
      "Absolutely!",
      "Absolutely not!",
      "It's possible",
      "Not likely",
      "Absolutely unsure",
      "Ask again later",
      "Outlook not so good",
      "Signs point to yes",
    ];

    const question = args.join(" ");
    let thechoice = choice[Math.floor(Math.random() * choice.length)];

    const embed = new EmbedBuilder()
      .setColor("#f0190a")
      .setTitle(`Session | ${message.author.username}`)
      .addFields({ name: `Question`, value: `${question}`, inline: true });

    const embed2 = new EmbedBuilder()
      .setColor("#32a852")
      .setTitle(`Session | ${message.author.username}`)
      .addFields({ name: `Question`, value: `${question}`, inline: true })
      .addFields({ name: `Answer`, value: `${thechoice}`, inline: true });

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("Roll")
        .setStyle(ButtonStyle.Danger)
        .setLabel("Ask")
    );

    const msg = await message.channel.send({
      embeds: [embed],
      components: [button],
    });

    const collector = msg.createMessageComponentCollector();

    collector.on("collect", async (interaction) => {
      if (interaction.customId == "Roll") {
        interaction.update({ embeds: [embed2], components: [] });
      }
    });
  } catch (err) {
    message.channel.send(`error message: ${err}`);
  }
};
