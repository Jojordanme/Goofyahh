const ecoScheme = require('../src/SCHEMAS/moneySchema.js')

module.exports.run = async (client,message,args) => {
  let Data = await ecoScheme.findOne({
    Guild: message.guild.id,
    User: message.author.id,
  });
  if (!Data) {
    Data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
    });
  }
}