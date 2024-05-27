const { EmbedBuilder } = require("discord.js");

module.exports.run = (client, message, args) => {
  const embed = new EmbedBuilder()
    .setTitle(`My Stuff`)
    .setDescription(`Use ?buy <item> in order to purchase the items`)
    .addFields({ name: "Seaweed", value: ":coin:**50**" })
    .addFields({ name: "Fish", value: ":coin:**125**" })
    .addFields({ name: "Guess Ticket", value: ":coin:**150**" })
    .addFields({ name: "Auric Seaweed", value: ":coin:**500**" })
    .addFields({ name: "Gem", value: ":coin:**1000**" })

    .addFields({ name: "Nice Herbert", value: ":coin:**20,000**" })
    .addFields({ name: "Premium Herbert", value: ":coin:**150,000**" });

  message.channel.send({ embeds: [embed] });
};
