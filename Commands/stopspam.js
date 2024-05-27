const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports.run = (client, message, args) => {
  if (message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
    message.channel.send("Spam stopped");
    console.log("stopped");
    require("./spam.js").run(client, message, args, 1);
  } else {
    message.channel.send("You don't have permission to do that");
  }
};

module.exports.name = "stopspam";
