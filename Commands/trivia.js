var trivcool = [];
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
const senegalflag = new AttachmentBuilder("../Attachments/Senegal.png");
const triviaQuestions = [
  {
    question: "Who was the first President of the United States?",
    answers: ["George Washington"],
    difflevel: 3, // Difficulty level (1-5)
  },
  {
    question: "What event marked the beginning of World War I?",
    answers: [
      "The assassination of Archduke Franz Ferdinand of Austria-Hungary",
    ],
    difflevel: 4,
  },
  {
    question:
      "In which year did Christopher Columbus first arrive in the Americas?",
    answers: ["1492"],
    difflevel: 2,
  },
  {
    question:
      "Who was the famous Egyptian queen known for her relationships with Julius Caesar and Mark Antony?",
    answers: ["Cleopatra"],
    difflevel: 3,
  },
  {
    question:
      "What was the main goal of the Lewis and Clark expedition in the early 19th century?",
    answers: ["To explore the newly acquired Louisiana Purchase territory"],
    difflevel: 3,
  },
  {
    question:
      "Which empire was ruled by Emperor Justinian I in the 6th century?",
    answers: ["Byzantine Empire"],
    difflevel: 4,
  },
  {
    question: "What event led to the founding of the United Nations in 1945?",
    answers: [
      "The end of World War II",
      "end of ww2",
      "end of world war 2",
      "the end of world war 2",
    ],
    difflevel: 4,
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    answers: ["Amelia Earhart"],
    difflevel: 3,
  },
  {
    question:
      "Which ancient civilization is known for constructing the Great Wall of China?",
    answers: ["The Qin Dynasty of China"],
    difflevel: 4,
  },
  {
    question:
      "What was the name of the ship that carried the Pilgrims to America in 1620?",
    answers: ["The Mayflower"],
    difflevel: 2,
  },
  {
    question: "Who discovered florida",
    answers: ["Juan ponce de leon"],
    difflevel: 3,
  },
  {
    question:
      "Who wrote the 'Declaration of Independence' for the United States?",
    answers: ["Thomas Jefferson"],
    difflevel: 3,
  },
  {
    question:
      "What major event took place on October 29, 1929, leading to the Great Depression?",
    answers: ["The Stock Market Crash"],
    difflevel: 4,
  },
  {
    question: "Who was the primary author of 'The Communist Manifesto'?",
    answers: ["Karl Marx"],
    difflevel: 4,
  },
  {
    question:
      "What was the significance of the Battle of Gettysburg during the American Civil War?",
    answers: ["It was a turning point in favor of the Union forces"],
    difflevel: 4,
  },
  {
    question:
      "Who was the first woman to be elected as the Prime Minister of a country?",
    answers: ["Sirimavo Bandaranaike of Sri Lanka"],
    difflevel: 3,
  },
  {
    question: "What was the purpose of the Berlin Wall during the Cold War?",
    answers: [
      "To divide East and West Berlin and prevent people from fleeing East Germany",
      "prevent the West from having further influence on the East, stop the flow of migrants out of the communist sector",
    ],
    difflevel: 4,
  },
  {
    question: "Who is often credited with inventing the World Wide Web?",
    answers: ["Tim Berners-Lee", "Tim Berners", "Tim berners lee"],
    difflevel: 4,
  },
  {
    question:
      "What event is often considered the start of the Space Race between the USA and the USSR?",
    answers: [
      "The launch of Sputnik 1 by the Soviet Union",
      "the launch of Sputnik",
    ],
    difflevel: 4,
  },
  {
    question: "What are the towers that are destroyed in 9/11 attack?",
    answers: ["twin towers", "towers twin", "twin tower"],
    difflevel: 2, // level
  },
  {
    question: "which river is the longest in the world?",
    answers: ["the nile river", "nile river"],
    difflevel: 3, // level
  },
  {
    question: "what is the smallest continent by land area",
    answers: ["australia"],
    difflevel: 4, // level
  },
  {
    question: "Which country has the eiffel tower?",
    answers: ["france", "paris"],
    difflevel: 1, // level
  },
  {
    question: "what is the largest desert",
    answers: ["sahara desert", "desert of sahara", "desert sahara", "sahara"],
    difflevel: 3, // level
  },
  {
    question: "whats the highest mountain",
    answers: [
      "mount everest",
      "mountain of everest",
      "mountain everest",
      "everest",
    ],
    difflevel: 1, // level
  },
  {
    question: "what is the official languange of BRAZIL",
    answers: ["portuguese", "portugal"],
    difflevel: 2, // level
  },
  {
    question: "Which country is known as the land of the rising sun",
    answers: ["japan"],
    difflevel: 3, // level
  },
  {
    question: "The capital of canada is..",
    answers: ["ottawa"],
    difflevel: 2, // level
  },
  {
    question: "Whats the deepest ocean trench",
    answers: ["mariana trench"],
    difflevel: 3, // level
  },
  {
    question: "Whats the largest country in south america",
    answers: ["brazil"],
    difflevel: 2, // level
  },
  {
    question: "What country has the pyramid of giza",
    answers: ["egypt"],
    difflevel: 1, // level
  },
  {
    question: "Whats the capital of the united states",
    answers: ["washington dc", "washington", "dc washington"],
    difflevel: 1, // level
  },
  {
    question: "Whats the ocean in the west coast of the us",
    answers: ["the pacific ocean", "pacific ocean", "ocean pacific"],
    difflevel: 1, // level
  },
  {
    question: "Whats the capital of russia",
    answers: ["moscow"],
    difflevel: 1, // level
  },
  {
    question:
      "What is the name of the sea that lies between Kazakhstan and Uzbekistan?",
    answers: ["Aral sea"],
    difflevel: 5, // level
  },
  {
    question:
      "Which two countries dispute the region of Kashmir in South Asia?",
    answers: [
      "india and pakistan",
      "pakistan and india",
      "india, pakistan",
      "pakistan, india",
    ],
    difflevel: 4, // level
  },
  {
    question:
      "Which island nation in the Indian Ocean is the only one to have a single-letter abbreviation in its name?",
    answers: ["sri lanka"],
    difflevel: 5, // level
  },
];
let ongoing = 0;
let difficulty = null;
module.exports.run = async (client, message, args) => {
  try {
    if (ongoing == 0) {
      if (trivcool.includes(message.author.id)) {
        return message.reply(
          "You can only start a new trivia round once every 10 sec. while premium herberts dont need to wait 10 seconds"
        );
      }

      const randomQuestion =
        triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];

      ongoing = 1;
      if (randomQuestion.difflevel == 5)
        difficulty = ["Extreme", 300, "#e00bd9"];
      if (randomQuestion.difflevel == 4)
        difficulty = ["Very Hard", 160, "#e00b0b"];
      if (randomQuestion.difflevel == 3) difficulty = ["Hard", 90, "#c4b20e"];
      if (randomQuestion.difflevel == 2) difficulty = ["Medium", 50, "#3ec40e"];
      if (randomQuestion.difflevel == 1) difficulty = ["Easy", 30, "#1042e6"];
      if (!difficulty) difficulty = ["Easy", 20, "#1042e6"];
      const embed = new EmbedBuilder()
        .setColor(difficulty[2])
        .setTitle(`${difficulty[0]} Question`)
        .setDescription(randomQuestion.question);
      if (randomQuestion.image) {
        embed.setImage(randomQuestion.image);
      }
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
        message.channel.send(
          `Time is up! The answer was ${randomQuestion.answers[0]}.`
        );
        ongoing = 0;
        difficulty = null;
      }
    } else {
      message.channel.send("A trivia round is already ongoing.");
    }
  } catch (err) {
    console.log(err);
    ongoing = 0;
  }
};
