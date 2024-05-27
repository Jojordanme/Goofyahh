const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
var currentGames = [];
module.exports.run = async (client, message, args) => {
  if (!args) return message.channel.send("Please enter a valid amount!");
  if (!currentGames.includes(message.author.id)) {
    let BetAmount = parseInt(args[0]) || 0;
    let times = 0;
    let Data = await ecoScheme.findOne({
      Guild: message.guild.id,
      User: message.author.id,
    });
    if (Data.Money >= BetAmount) {
      currentGames.push(message.author.id);
      Triggered();
    }

    async function Triggered() {
      if (BetAmount < 1)
        return message.chanmel.send("Please enter a valid amount!");

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Trigger")
          .setCustomId(`Trigger-${message.author.id}`)
          .setStyle(ButtonStyle.Danger)
      );
      const msg = await message.channel.send({
        content: `Are you sure ${message.author.tag} want to bet $ ${BetAmount}?`,
        components: [row],
      });
      const collector = msg.createMessageComponentCollector({ time: 15000 });

      collector.on("collect", async (i) => {
        if (i.customId === `Trigger-${i.user.id}`) {
          Data.Money -= BetAmount;
          Data.save();
          let updated = await msg.edit({
            content: `Pulls the trigger aaaaaaaannd`,
            components: [],
          });
          setTimeout(async () => {
            if (Math.round(Math.random() * 2) == 1) {
              times += 1;
              BetAmount = BetAmount * 2;
              Data.Money += BetAmount;
              await Data.save();
              console.log(updated);
              updated.edit({
                content: `You won ${BetAmount}!`,
                components: [],
              });

              setTimeout(() => {
                Triggered();
              }, 4000);
            } else {
              for (let i = 0; i < currentGames.length; i++) {
                if (currentGames[i] === message.author.id) {
                  currentGames.splice(i, 1);
                }
              }
              updated.edit(`Unlucky!`);
              times = 0;
              collector.stop();
            }
          }, 5000);
        } else {
          await i.reply({
            content: "You clicked the button not for you!",
            ephemeral: true,
          });
        }
      });
    }
  } else {
    message.channel.send("You are already in a game");
  }
};
