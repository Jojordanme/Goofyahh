var trivcool = [];
const { EmbedBuilder } = require("discord.js");
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
const triviaQuestions = [
  {
    question: "[Arcane Odyssey] Rookie, ......, Strong fill the blank!",
    answers: ["average"],
    difflevel: 2, // level
  },
  {
    question:
      "[The strongest battleground] name all of the orignal saitama ult/awakening moveset",
    answers: ["tableflip", "death counter"],
  },

  {
    question: "[Deepwoken] how much robux do you need to pay to play it",
    answers: ["400", "four hundred"],
    difflevel: 1, // level
  },
  {
    question: "[Deepwoken] what origin kills players for xp",
    answers: ["Voidwalker"],
    difflevel: 2, // level
  },
  {
    question: "[The strongest battleground] which character uses a bat",
    answers: ["Brutal demon", "metal bat"],
    difflevel: 1, // level
  },
  {
    question: "[The strongest battleground] what is the game based off",
    answers: ["OPM", "one punch man"],
    difflevel: 1, // level
  },
  {
    question:
      "[The strongest battleground] what is the exclusive private server character",
    answers: ["sorcerer", "gojo", "the divided one"],
    difflevel: 1, // level
  },
  {
    question:
      "[The strongest battleground] how much kills do you need to get the red gloves cosmetic",
    answers: ["25", "twenty five"],
    difflevel: 4, // level
  },
  {
    question: "[Deepwoken] name 1 type of weapon",
    answers: ["light", "medium", "heavy"],
    difflevel: 2, // level
  },
  {
    question: "[Deepwoken] what is the actual name of sharko?",
    answers: ["megalodaunt"],
    difflevel: 3, // level
  },
  {
    question: "[Arcane Odyssey] who was the idiot theos was fighting",
    answers: ["durza"],
    difflevel: 2, // level
  },
  {
    question:
      "[Arcane Odyssey] i am a dark sea exclusive reagent that gives the love effect",
    answers: ["life remnant"],
    difflevel: 3, // level
  },
  {
    question: "[Arcane Odyssey] how much does the brig cost",
    answers: ["20k", "20000", "20,000", "20 thousand", "20 thousand galleons"],
    difflevel: 1, // level
  },
  {
    question:
      "[Arcane Odyssey] can you open private storage if you have 1000 fame?",
    answers: ["nah", "no"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] When there is a highlord there is ... barons",
    answers: ["2 barons", "two", "2", "two barons"],
    difflevel: 2, // level
  },
  {
    question: "[Arcane Odyssey] what tier 1 gems give you power?",
    answers: ["ruby", "zircon", "sunstone"],
    difflevel: 3, // level
  },
  {
    question: "[Arcane Odyssey] what tier 1 gems give you defense?",
    answers: ["onyx", "diamond", "amethyst"],
    difflevel: 3, // level
  },
  {
    question:
      "[Arcane Odyssey] there are 5 ships in arcane odyssey, which of the following is the weakest to strongest in durability? ketch, brig, rowboat, sailboat, caravel. use comas too",
    answers: ["rowboat, sailboat, caravel, ketch, brig"],
    difflevel: 2, // level
  },
  {
    question: "[Arcane Odyssey] Which god gave humans magic",
    answers: ["Prometheus"],
    difflevel: 4, // level
  },
  {
    question:
      "[Arcane Odyssey] What color is the light flashed in akursius keep according to rackham's journal",
    answers: ["teal"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] who leads the assasins syndicate",
    answers: ["red council"],
    difflevel: 2,
  },
  {
    question: "[Arcane Odyssey] What is the strongest type of atlanthean",
    answers: ["legendary"],
    difflevel: 1,
  },
  {
    question: "[Arcane Odyssey] Is epicenter island real?",
    answers: ["yes"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] What are the highest rank in the bronze legion",
    answers: ["general"],
    difflevel: 1, // level
  },
  {
    question:
      "[Arcane Odyssey] What kind of magic that uses the charred effect",
    answers: ["explosion"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] who made the dark sea",
    answers: ["durza"],
    difflevel: 2, // level
  },
  {
    question:
      "[Arcane Odyssey] what is the minimum for sirens to spawn in dark sea",
    answers: ["layer one", "layer 1"],
    difflevel: 1, // level
  },
  {
    question:
      "[Arcane Odyssey] name the 7th order of exotic gems category in the arcane odyssey wiki",
    answers: ["Musgravite"],
    difflevel: 4, // level
  },
  {
    question:
      "[Arcane Odyssey] I am made of wind, i am spotted a lot in the dark sea, but only 1 in the bronze sea, what am i?",
    answers: ["Tornado"],
    difflevel: 5, // level
  },
  {
    question: "[Arcane Odyssey] who is the king of ravenna",
    answers: ["king calvus the III", "calcium"],
    difflevel: 2, // level
  },
  {
    question: "[Arcane Odyssey] what sea monster is a big anglerfish",
    answers: ["obolus"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] what is arcane odyssey lore based on",
    answers: ["greek mythology", "greek"],
    difflevel: 2, // level
  },
  {
    question: "[Arcane Odyssey] I am a behemoth shark",
    answers: ["white eyes"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] I am a abberant shark",
    answers: ["poison jaws", "poison jaw"],
    difflevel: 1, // level
  },
  {
    question:
      "[Arcane Odyssey] I am a rare reagant im used to make waterbreathing potions",
    answers: ["auric seaweed"],
    difflevel: 1, // level
  },
  {
    question: "[Arcane Odyssey] This ship can reach up to 7000 health",
    answers: ["caravel", "ketch"],
    difflevel: 1, // level
  },
];
let ongoing = 0;
let difficulty = null;
module.exports.run = async (client, message, args) => {
  if (ongoing == 0) {
    if (trivcool.includes(message.author.id)) {
      return message.reply(
        "You can only start a new trivia round once every 10 sec. while premium herberts dont need to wait 10 seconds"
      );
    }

    const randomQuestion =
      triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    ongoing = 1;
    if (randomQuestion.difflevel == 5) difficulty = ["Extreme", 200, "#e00bd9"];
    if (randomQuestion.difflevel == 4)
      difficulty = ["Very Hard", 140, "#e00b0b"];
    if (randomQuestion.difflevel == 3) difficulty = ["Hard", 75, "#c4b20e"];
    if (randomQuestion.difflevel == 2) difficulty = ["Medium", 40, "#3ec40e"];
    if (randomQuestion.difflevel == 1) difficulty = ["Easy", 20, "#1042e6"];
    if (!difficulty) difficulty = ["Easy", 20, "#1042e6"];
    const embed = new EmbedBuilder()
      .setColor(difficulty[2])
      .setTitle(`${difficulty[0]} Question`)
      .setDescription(randomQuestion.question);
    message.channel.send({ embeds: [embed] });

    try {
      const filter = (response) =>
        randomQuestion.answers.some(
          (answer) => response.content.toLowerCase() === answer.toLowerCase()
        );

      const collected = await message.channel.awaitMessages({
        filter,
        max: 1,
        time: 30000,
        errors: ["time"],
      });
      const winner = collected.first().author;

      let data = await moneySchema.findOne({
        Guild: message.guild.id,
        User: winner.id,
      });

      if (!data) {
        data = new moneySchema({
          Guild: message.guild.id,
          User: winner.id,
          Money: 0,
        });
      }
      if (data.Inventory.includes("Premium")) {
        message.channel.send(
          `gg ${winner} answered the correct answer and got $${
            difficulty[1] * 2
          } because of premium`
        );
        data.Money += difficulty[1] * 2;
      } else {
        message.channel.send(
          `gg ${winner} answered the correct answer and got $${difficulty[1]}`
        );
        data.Money += difficulty[1];
      }

      data.save();
      ongoing = 0;
      difficulty = null;
      if (!data.Inventory.includes("Premium")) {
        trivcool.push(winner.id);
        setTimeout(() => {
          trivcool.shift();
        }, 10000); // Cooldown period (1 minute)
      }
    } catch (error) {
      console.log(error);
      if (randomQuestion.difflevel >= 3) {
        message.channel.send(`Time is up! The answer will remain unknown`);
      } else {
        message.channel.send(
          `Time is up! The answer was ${randomQuestion.answers[0]}.`
        );
      }
      ongoing = 0;
      difficulty = null;
    }
  } else {
    message.channel.send("A trivia round is already ongoing.");
  }
};
