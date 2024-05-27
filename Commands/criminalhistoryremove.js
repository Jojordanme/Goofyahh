const {PermissionsBitField} = require('discord.js')
const ecoScheme = require('../src/SCHEMAS/moneySchema.js')
module.exports.run = async (client,message,args) => {
  if (message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    const criminal = message.mentions.members.first()
    if (!criminal) return message.reply("Please mention a user to add criminal history to.")
    function allowNumbersOnly(input) {
    // Use a regular expression to keep only numbers in the input
    const numbersOnly = input.replace(/\D/g, "");

    return numbersOnly;
  }
    const criminalhistory = allowNumbersOnly(args.slice(1).join(' '))
    if (!criminalhistory || criminalhistory < 1) return message.reply("Please mention an index")
    let Data = await ecoScheme.findOne({Guild: message.guild.id,User: criminal.id})
    if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
    });
  }
    let {CriminalHistory} = Data

    
    if (criminalhistory > CriminalHistory.length){criminalhistory = CriminalHistory.length}
    
    CriminalHistory.splice((criminalhistory - 1),1)
    Data.save()
    message.channel.send('Removed criminal history #' + criminalhistory + ' from ' + criminal.user.tag)
  }
}