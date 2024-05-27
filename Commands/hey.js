module.exports.run = (client, message, args) => {
  console.log(args.join(" "));
  message.channel.send("Hey!");
};

module.exports.name = "hey";
