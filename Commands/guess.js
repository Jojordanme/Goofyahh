const Discord = require("discord.js");
const maxAttempts = 5;
var cooldown = [];
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  let Data = await ecoScheme.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });
  if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
      Money: 1,
    });
  }

  if (!cooldown.includes(message.author.id)) {
    let eligable = 0;
    for (let i = 0; i < Data.Inventory.length; i++) {
      if (Data.Inventory[i] == "Guess Ticket") {
        eligable = 1;
        Data.Inventory.splice(i, 1);
        await Data.save();
        break;
      }
    }
    cooldown.push(message.author.id);
    if (eligable == 1) {
      const authorId = message.author.id;
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number (1-100)
      let attempts = 0;
      let attemptsleft = maxAttempts + 1;
      let isGameRunning = true;
      console.log(randomNumber);

      message.channel.send(
        `I'm thinking of a number between 1 and 100. You have ${maxAttempts} attempts to guess it.`
      );
      if (Data.Inventory.includes("Premium")) {
        if (randomNumber > 50) {
          message.channel.send("Premium clue: its above 50");
        } else {
          message.channel.send("Premium clue: its below 50");
        }
      }

      const filter = (response) =>
        !isNaN(response.content) &&
        response.content >= 1 &&
        response.content <= 100 &&
        !response.author.bot &&
        response.author.id == authorId;
      const collector = message.channel.createMessageCollector({
        filter,
        time: 60000,
      }); // Adjust the time limit as needed
      collector.on("collect", (response) => {
        const guess = parseInt(response.content);
        attempts++;
        attemptsleft -= 1;
        if (guess === randomNumber) {
          if (Data.Inventory.includes("Premium")) {
            Data.Money += 1000 * attemptsleft * 2;
            message.channel.send(
              `Congratulations, ${
                message.author
              }! You guessed the number (${randomNumber}) correctly in ${attempts} attempts, You also get $${
                1000 * attemptsleft * 2
              } because of premium`
            );
          } else {
            Data.Money += 1000 * attemptsleft;
            message.channel.send(
              `Congratulations, ${
                message.author
              }! You guessed the number (${randomNumber}) correctly in ${attempts} attempts, You also get $${
                1000 * attemptsleft
              }`
            );
          }

          Data.save();
          collector.stop();
        } else if (attempts >= maxAttempts) {
          attemptsleft = 0;
          message.channel.send(
            `Sorry, ${message.author}, you've used all your attempts. The correct number was ${randomNumber}.`
          );
          collector.stop();
        } else if (guess < randomNumber) {
          message.channel.send("Try a higher number.");
        } else if (guess > randomNumber) {
          message.channel.send("Try a lower number.");
        }
      });

      collector.on("end", (collected, reason) => {
        if (reason === "time" && isGameRunning) {
          message.channel.send(
            `Time's up, ${message.author}! The correct number was ${randomNumber}.`
          );
        }
        isGameRunning = false;
      });
    } else {
      message.channel.send({
        content:
          "You dont have a guess ticket buy one for $150 using the ?buy command",
      });
    }
    for (let i = 0; i < cooldown.length; i++) {
      if (cooldown[i] == message.author.id) {
        cooldown.splice(i, 1);
      }
    }
  }
};
