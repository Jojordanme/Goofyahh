module.exports.run = (client, message, args) => {
  message.delete();
  message.channel.send("🤨");
};
