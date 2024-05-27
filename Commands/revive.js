
const moneySchema = require("../src/SCHEMAS/moneySchema.js")
let had = false
module.exports.run = async (client, message, args) => {
  let Data = await moneySchema.findOne({Guild: message.guild.id, User: message.author.id})

  
  for (let i=0; i < Data.Inventory.length;i++) {
    if (Data.Inventory[i] == "Totem"){
      Data.Inventory.splice(i, 1)
      Data.save()
      had = true
      break
    }
  }
  if (had){
    if (message.member.roles.cache.find(r => r.name == "dead bozo" || r.name == "dead bozo but evil")){
    message.channel.send("Your no longer dead");
      let deadbozo = message.guild.roles.cache.get("1166981105333833739")
      let deadbozobutbad = message.guild.roles.cache.get("1167326765564317766")
    message.member.roles.remove(deadbozo);
      message.member.roles.remove(deadbozobutbad)
  } else {
    message.channel.send("your not dead yet")
  } 
  } else {
    message.channel.send("You dont have a totem")
  
  
}}