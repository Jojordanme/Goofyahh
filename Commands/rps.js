const Discord = require("discord.js");
const { EmbedBuilder } = Discord;
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  const choices = ["rock", "paper", "scissors"];
  if (!args)
    return message.channel.send(
      "Please provide a valid choice: rock, paper, or scissors."
    );
  const userChoice = args[0].toLowerCase();

  // Check if the user has provided a valid choice
  if (!choices.includes(userChoice)) {
    return message.channel.send(
      "Please provide a valid choice: rock, paper, or scissors."
    );
  }

  // Randomly select computer's choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let Data = await moneySchema.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });
  // Determine the result
  if (!Data) {
    Data = new moneySchema({
      Guild: message.guild.id,
      User: message.author.id,
      Money: 0,
    });
  }
  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    if (Data.Inventory.includes("Premium")) {
      result = "Congrats! You got $85 because you have premium!";
      Data.Money += 85;
    } else {
      result = "Congrats! You got $30";
      Data.Money += 30;
    }
  } else {
    Data.Money -= 40;
    if (Data.Money < 0) Data.Money = 0;
    result = "L bozo you lost $40";
  }
  Data.save();
  // Send the result message
  message.channel.send(
    `You chose ${userChoice}, I chose ${computerChoice}. ${result}`
  );
};
