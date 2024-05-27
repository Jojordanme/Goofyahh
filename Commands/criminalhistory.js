const {EmbedBuilder} = require('discord.js')

const ecoScheme = require('../src/SCHEMAS/moneySchema.js')
module.exports.run = async (client,message,args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author

  let Data = await ecoScheme.findOne({Guild: message.guild.id, User: member.id})

  if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
    });
  }
  embed = new EmbedBuilder()
  embed.setTitle(`${member.user.tag}'s Criminal History`)
  if (Data.CriminalHistory.length < 1) {
    embed.setColor('Green')
    embed.setDescription(`No criminal history so far yet..`)
    
  } else {
    embed.setColor('DarkRed')
    embed.setDescription(`Oh...`)
    console.log(Data.CriminalHistory.length)
    for (let i=0; i < Data.CriminalHistory.length; i++){
      embed.addFields({name: `Criminal History #${i + 1}`, value: `${Data.CriminalHistory[i]}`})
    }
  }
  message.channel.send({embeds: [embed]})

}