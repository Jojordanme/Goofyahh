var working = [];
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  if (working.includes(message.author.id)) {
    message.channel.send("You are already working");
    return;
  }
  working.push(message.author.id);
  var jobs = [
    "You worked as a developer and got paid $250",
    "You worked as a teacher and got paid $50",
    "You worked as a janitor and got paid $25",
    "You worked as a mechanic and got paid $75",
    "You worked as a doctor and got paid $150",
    "You worked as a nurse and got paid $100",
    "You worked as a teacher and got paid $50",
    "You worked as an actor and got paid $500",
  ];
  var pay = [250, 50, 25, 75, 150, 100, 50,500];
  const random = Math.round(Math.random() * jobs.length);
  let Data = await moneySchema.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });

  if (!Data) {
    Data = new moneySchema({
      Guild: message.guild.id,
      User: message.author.id,
      Money: 0,
    });
  }

  Data.Money += pay[random];
  message.channel.send(jobs[random]);
  Data.save();
  setTimeout(() => {
    working.shift();
  }, 300000);
};
