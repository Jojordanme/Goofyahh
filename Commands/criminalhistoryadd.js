const {PermissionsBitField} = require('discord.js')
const ecoScheme = require('../src/SCHEMAS/moneySchema.js')
module.exports.run = async (client,message,args) => {
  if (message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    const criminal = message.mentions.members.first()
    if (!criminal) return message.reply("Please mention a user to add criminal history to.")

    const criminalhistory = args.slice(1).join(" ")
    let Data = await ecoScheme.findOne({Guild: message.guild.id,User: criminal.id})
    if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
    });
  }
    let {CriminalHistory} = Data

    CriminalHistory.push(criminalhistory)
    Data.save()
    message.channel.send('Added criminal history to ' + criminal.user.tag)
  }
}