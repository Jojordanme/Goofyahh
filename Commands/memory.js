const randomWords = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "forest",
  "guitar",
  "happiness",
  "igloo",
  "jazz",
  "kangaroo",
  "lemon",
  "mountain",
  "notebook",
  "ocean",
  "piano",
  "quokka",
  "rainbow",
  "sunset",
  "tiger",
  "umbrella",
  "volcano",
  "waterfall",
  "xylophone",
  "yacht",
  "zebra",
  "aardvark",
  "balloon",
  "candle",
  "dolphin",
  "eagle",
  "flamingo",
  "giraffe",
  "hedgehog",
  "iguana",
  "jellyfish",
  "koala",
  "lemur",
  "mongoose",
  "narwhal",
  "octopus",
  "arcane",
  "odyssey",
  "spamming",
  "bruh",
  "volcano",
  "penguin",
  "quokka",
  "rhinoceros",
  "sloth",
  "toucan",
  "unicorn",
  "vulture",
  "walrus",
  "x-ray",
  "yeti",
  "zeppelin",
  "astronaut",
  "butterfly",
  "caterpillar",
  "dragonfly",
  "elephant",
  "fireworks",
  "goldfish",
  "honeybee",
  "insect",
  "jaguar",
  "kangaroo",
  "ladybug",
  "mushroom",
  "nightingale",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "scorpion",
  "tiger",
  "umbrella",
  "vampire",
  "wombat",
  "x-ray",
  "yacht",
  "zeppelin",
  "alien",
  "bicycle",
  "cheetah",
  "dinosaur",
  "elephant",
  "flamingo",
  "giraffe",
  "hedgehog",
  "iguana",
  "jellyfish",
  "kangaroo",
  "lemur",
  "mongoose",
  "narwhal",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "sloth",
  "toucan",
  "unicorn",
  "vulture",
  "walrus",
  "x-ray",
  "yeti",
  "zeppelin",
  "astronaut",
  "butterfly",
  "caterpillar",
  "dragonfly",
  "elephant",
  "fireworks",
  "goldfish",
  "honeybee",
  "insect",
  "jaguar",
  "kangaroo",
  "ladybug",
  "mushroom",
  "nightingale",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "scorpion",
  "tiger",
  "umbrella",
  "vampire",
  "wombat",
  "x-ray",
  "yacht",
  "zeppelin",
  "alien",
  "bicycle",
  "cheetah",
  "dinosaur",
  "elephant",
  "flamingo",
  "giraffe",
  "hedgehog",
  "iguana",
  "jellyfish",
  "kangaroo",
  "lemur",
  "mongoose",
  "narwhal",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "sloth",
  "toucan",
  "unicorn",
  "vulture",
  "walrus",
  "x-ray",
  "yeti",
  "zeppelin",
  "astronaut",
  "butterfly",
  "caterpillar",
  "dragonfly",
  "elephant",
  "fireworks",
  "goldfish",
  "honeybee",
  "insect",
  "jaguar",
  "kangaroo",
  "ladybug",
  "mushroom",
  "nightingale",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "scorpion",
  "tiger",
  "umbrella",
  "vampire",
  "wombat",
  "x-ray",
  "yacht",
  "zeppelin",
  "alien",
  "bicycle",
  "cheetah",
  "dinosaur",
  "elephant",
  "flamingo",
  "giraffe",
  "hedgehog",
  "iguana",
  "jellyfish",
  "kangaroo",
  "lemur",
  "mongoose",
  "narwhal",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "sloth",
  "toucan",
  "unicorn",
  "vulture",
  "walrus",
  "x-ray",
  "yeti",
  "zeppelin",
  "astronaut",
  "butterfly",
  "caterpillar",
  "dragonfly",
  "elephant",
  "fireworks",
  "goldfish",
  "honeybee",
  "insect",
  "jaguar",
  "kangaroo",
  "ladybug",
  "mushroom",
  "nightingale",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "scorpion",
  "tiger",
  "umbrella",
  "vampire",
  "wombat",
  "x-ray",
  "yacht",
  "zeppelin",
  "alien",
  "bicycle",
  "cheetah",
  "dinosaur",
  "elephant",
  "flamingo",
  "giraffe",
  "hedgehog",
  "iguana",
  "jellyfish",
  "kangaroo",
  "lemur",
  "mongoose",
  "narwhal",
  "octopus",
  "parrot",
  "quokka",
  "rhinoceros",
  "sloth",
  "toucan",
  "unicorn",
  "vulture",
  "walrus",
  "x-ray",
  "yeti",
  "zeppelin",
];
const { EmbedBuilder } = require("discord.js");
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
// Function to generate a random sentence
function generateRandomSentence() {
  const sentenceLength = Math.floor(Math.random() * 7) + 2; // Random sentence length (2-11 words)
  const sentence = [];

  for (let i = 0; i < sentenceLength; i++) {
    const randomWordIndex = Math.floor(Math.random() * randomWords.length);
    sentence.push(randomWords[randomWordIndex]);
  }

  return [sentence.join(" "), sentenceLength];
}
let running = false;
module.exports.run = async (client, message, args) => {
  if (running == false) {
    running = true;
    const answerseb = generateRandomSentence();
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("Focus!")
      .setDescription(answerseb[0]);
    message.channel.send("FOCUS").then((msg) => {
      setTimeout(() => {
        msg.edit({ embeds: [embed] }).then((msge) => {
          setTimeout(() => {
            msge.edit({ content: "Type in your answer!", embeds: [] });
          }, 700 * answerseb[1]);
        });
      }, Math.floor(Math.random() * 5001) + Math.floor(Math.random() * 5000) + 1);
    });

    try {
      const filter = (response) =>
        response.content.toLowerCase() === answerseb[0].toLowerCase() &&
        response.author.id === message.author.id;

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
        data.Money += 35 * answerseb[1] * 2;
        data.save();
        message.channel.send(
          `ggs ${winner.tag} got the correct answer and got $${
            35 * answerseb[1] * 2
          } because of premium`
        );
      } else {
        data.Money += 35 * answerseb[1];
        data.save();
        message.channel.send(
          `ggs ${winner.tag} got the correct answer and got $${
            35 * answerseb[1]
          }`
        );
      }
    } catch (err) {
      console.log(err);
      message.channel.send("Times up!");
    }
    running = false;
  } else {
    message.channel.send("There is a memory game running right now!");
  }
};
