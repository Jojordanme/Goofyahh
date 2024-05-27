let lives1 = 100
let lives2 = 100
let accepted = 0
let plr1choice = "Punch"
let plr2choice = "Punch"
let battling = []
let enemies = [
  {
    enemy: 'Larry',
    health: 125,
    attacks: [{
                 name: 'Raging Rush',
                 minattack: 10,
                 maxattack: 20,
              },
            {
              name: 'Rush',
              minattack: 4,
              maxattack: 9,
            },
            ],
    
    pattern: ['Rush','Rush','Raging Rush'],
    cooldowns: [2,2,5], 
    image: 'https://static.wikia.nocookie.net/roblox-slap-battles/images/8/81/RattlebonesSecret.png'
  }
]
let done = false
const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
module.exports.run = async (client,message,args) => {
  let Data = await ecoScheme.findOne({Guild: message.guild.id, User: message.author.id});
  lives1 = 100 + parseInt(Data.Health) || 100
  max1 = lives1
  if (!args) {
    if (battling.includes(message.author.id)) return i.reply({content: 'You are already fight', ephermeral: true});
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let lives2 = enemy.health
    let max2 = lives2
    let embed = new EmbedBuilder()
    .setColor('Blue')
      .setTitle(`${message.author.tag} vs ${enemy.enemy}`)
    .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
    .addFields({name:`${enemy.enemy} ${lives2}/${max2}`,value: "\u200B"})
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel(`Start`)
      .setCustomId('StartBattle2')
      .setStyle(ButtonStyle.Success)
    )
    const newrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel(`Punch`)
      .setCustomId('Punch')
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setLabel(`Defend`)
      .setCustomId('Defend')
      .setStyle(ButtonStyle.Primary)
    )
    const msg = await message.channel.send({embeds: [embed], components: [row]})

    const collector = msg.createMessageComponentCollector()
    let log = ["NAN","NAN"]
    let negated = [0,0]
    collector.on('collect', async i => {
      try {
      let damage1 = 0
      
      if (i.customId === 'StartBattle2') {
        if (battling.includes(i.user.id)) return i.reply({content: 'You are already fight', ephermeral: true});
        if (i.user.id == message.author.id) {
          done = true
          msg.edit({embeds: [embed],components: [row]})
        }
      } else if (i.customId === 'Punch'){

        const speeches = [`{player} just punched {target} dealing {damage} Damage`,"OMG {player} punched {target} SO HARD! it dealed {damage} Damage"]
        if (i.user.id == message.author.id) {
          plr1choice = "Punch"
          damage1 = (Math.floor(Math.random() * 10) + 6)

          let speech = speeches[Math.floor(Math.random() * speeches.length)]
          console.log(damage1)
          log[1] = speech.replaceAll('{player}',message.author.tag).replaceAll('{target}',enemy.enemy).replaceAll('{damage}',damage1)
          lives2 -= (damage1 - negated[1])
          if (lives2 <= 0) {
            lives2 = 0

          }

          embed = new EmbedBuilder()
    .setColor('Blue')
      .setTitle(`${message.author.tag} vs ${enemy.enemy}`)
            .setThumbnail(enemy.image)
    .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
    .addFields({name:`${enemy.enemy} ${lives2}/${max2}`,value: "\u200B"})
          .addFields({name:`\u200B`,value:`${log[1]}`})

            console.log('ok')
          try {
            
            await msg.edit({ embeds: [embed], components: [newrow] });
          } catch (err) {
            console.error(err);
            // Handle the error appropriately, such as logging and informing users
            i.deferUpdate(); // Defer the update to avoid errors
          }
          console.log('?')
          if (lives2 <= 0) {
            embed = new EmbedBuilder()
            .setColor('Green')
              .setTitle(`${message.author.tag} WON!`)
              .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
            .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})
            clearInterval(attackInterval)
            newrow.components[0].setDisabled(true)
            newrow.components[1].setDisabled(true)
            await msg.edit({embeds: [embed], components: [newrow]})
            battling.splice(battling.indexOf(message.author.id), 1);
            clearInterval(attackInterval)

            collector.stop()

          }
          
          
        }
      }
      else if (i.customId === 'Defend'){
        let speeches = ["{player} now has {damage} defense!"]
        negated[0] = Math.floor(Math.random() * 5) + 1
            log[1] = speeches[Math.floor(Math.random() * speeches.length)].replaceAll('{player}',target.user.tag).replaceAll('{damage}',negated[0])
          embed = new EmbedBuilder()
            .setColor('Blue')
              .setTitle(`${message.author.tag} vs ${enemy.enemy}`)
            .setThumbnail(enemy.image)
            .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
            .addFields({name:`${enemy.enemy} ${lives2}/${max2}`,value: "\u200B"})
                  .addFields({name:`\u200B`,value:`${log[1]}`})
        }
          msg.edit({embeds: [embed], components: [newrow]})
      i.deferUpdate();
      } catch (err) {console.log(err)}
      })
    // continue
    var i = 0
    attackInterval = setInterval(() => {
      if (done == true) {
      
        let speech = "{guy} used {choice} and dealt {damage} damage"
        
        setTimeout(() => {

          if (i > (enemy.pattern.length - 1)) {
            i = 0
          }
        let objectfromatk = enemy.attacks.find(obj => obj.name === enemy.pattern[i]);

          let damage = (Math.floor(Math.random() * (objectfromatk.maxattack - objectfromatk.minattack)) + objectfromatk.minattack)
        lives1 -= damage - negated[0]
          log[1] = speech.replaceAll("{guy}",enemy.enemy).replaceAll("{choice}", enemy.pattern[i]).replaceAll("{damage}",damage)
        embed = new EmbedBuilder()
            .setColor('Blue')
              .setTitle(`${message.author.tag} vs ${enemy.enemy}`)
          .setThumbnail(enemy.image)
            .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
            .addFields({name:`${enemy.enemy} ${lives2}/${max2}`,value: "\u200B"})
                  .addFields({name:`\u200B`,value:`${log[1]}`})
        msg.edit({embeds: [embed], components: [newrow]})
          if (lives1 <= 0) {
            embed = new EmbedBuilder()
            .setColor('Red')
              .setTitle(`${enemy.enemy} WON!`)
              .setThumbnail(enemy.image)
            .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})

            newrow.components[0].setDisabled(true)
            
            msg.edit({embeds: [embed], components: [newrow]})
            battling.splice(battling.indexOf(message.author.id), 1);
            clearInterval(attackInterval)
            done = false
            collector.stop()
            

          }
        i++ // after endingn everything increment
          
          
        },5000);
      }
    },enemy.cooldowns[i] * 1000)
  } else {
  const target =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!target) return message.reply('Please provide a valid user to battle');
  if (target.id === message.author.id) return message.reply('You cannot battle yourself');
  if (battling.includes(message.author.id)) return message.reply('your currently fighting someone');
  if (battling.includes(target.id)) return message.reply('cant battle this guy');

  let Data2 = await ecoScheme.findOne({Guild: message.guild.id, User: target.id});
  accepted = 0
  if (!Data2) {
    Data2 = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id,
      Health: 0
    })
  }

  lives2 = 100 + parseInt(Data2.Health) || 100
  let max1 =lives1
  let max2 = lives2
  let embed = new EmbedBuilder()
  .setColor('Blue')
    .setTitle(`${message.author.tag} vs ${target.user.tag}`)
  .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
  .addFields({name:`${target.user.tag} ${lives2}/${max2}`,value: "\u200B"})
  
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setLabel(`Ready (0/2)`)
    .setCustomId('StartBattle')
    .setStyle(ButtonStyle.Success)
  )
  const newrow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setLabel(`Punch`)
    .setCustomId('Punch')
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setLabel(`Defend`)
    .setCustomId('Defend')
    .setStyle(ButtonStyle.Primary)
  )

  const msg = await message.channel.send({embeds: [embed], components: [row]})

  const collector = msg.createMessageComponentCollector()
  let log = ["NAN","NAN"]

  collector.on('collect', async i => {
    let damage1 = 0
    let damage2 = 0
    let defended = [false,false]
    let negated = [0,0]
    if (i.customId === 'StartBattle') {
      if (battling.includes(i.user.id)) return i.reply({content: 'You are already fight', ephermeral: true});
      if (i.user.id == target.id){

        
        
        if (battling.includes(message.author.id)) {
          msg.edit({embeds: [embed], components: [newrow]})
          
        } else {
          battling.push(target.id)
          row.components[0].setLabel('Ready (1/2)')
          msg.edit({embeds: [embed],components: [row]})
        }
      } else if (i.user.id == message.author.id) {
        
        
        if (battling.includes(target.id)) {
          msg.edit({embeds: [embed], components: [newrow]})
          
        } else {
          battling.push(message.author.id)

          row.components[0].setLabel('Ready (1/2)')
          msg.edit({embeds: [embed],components: [row]})
        }
        
      }
    } 
    else if (i.customId === 'Punch'){
      
      const speeches = [`{player} just punched {target} dealing {damage} Damage`,"OMG {player} punched {target} SO HARD! it dealed {damage} Damage"]
      if (i.user.id == target.id){
        
        let speech = speeches[Math.floor(Math.random() * speeches.length)]

        plr2choice = "Punch"
        damage2 = (Math.floor(Math.random() * 10) + 6)
        log[0] = speech.replaceAll('{player}',target.user.tag).replaceAll('{target}',message.author.tag).replaceAll('{damage}',damage2)


        lives1 -= (damage2 - negated[0])
        if (lives1 <= 0) {
          lives1 = 0
          
        }
        embed = new EmbedBuilder()
  .setColor('Blue')
    .setTitle(`${message.author.tag} vs ${target.user.tag}`)
  .addFields({name:`${message.author.tag} ${lives1}/${max1}`,value: "\u200B"})
  .addFields({name:`${target.user.tag} ${lives2}/${max2}`,value: "\u200B"})
        .addFields({name:`\u200B`,value:`${log[0]}`})

        msg.edit({embeds: [embed], components: [newrow]})
        
        if (lives1 <= 0) {
          embed = new EmbedBuilder()
          .setColor('Green')
            .setTitle(`${target.user.tag} WON!`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.png?size=256`)
          .addFields({name:`${target.user.tag} ${lives2}/100`,value: "\u200B"})
          newrow.components[0].setDisabled(true)
          msg.edit({embeds: [embed], components: [newrow]})
          battling.splice(battling.indexOf(message.author.id), 1);
          battling.splice(battling.indexOf(target.id), 1);
          collector.stop()
          
        }
        
      } 
      else if (i.user.id == message.author.id) {
        plr1choice = "Punch"
        damage1 = (Math.floor(Math.random() * 10) + 6)

        let speech = speeches[Math.floor(Math.random() * speeches.length)]
        console.log(damage1)
        log[1] = speech.replaceAll('{player}',message.author.tag).replaceAll('{target}',target.user.tag).replaceAll('{damage}',damage1)
        lives2 -= (damage1 - negated[1])
        if (lives2 <= 0) {
          lives2 = 0
          
        }
        
        embed = new EmbedBuilder()
  .setColor('Blue')
    .setTitle(`${message.author.tag} vs ${target.user.tag}`)
          
  .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})
  .addFields({name:`${target.user.tag} ${lives2}/100`,value: "\u200B"})
        .addFields({name:`\u200B`,value:`${log[1]}`})
        try {
          msg.edit({embeds: [embed], components: [newrow]})
        } catch (error) {
          console.error(error)
          i.deferUpdate()
        }
        
        if (lives2 <= 0) {
          embed = new EmbedBuilder()
          .setColor('Green')
            .setTitle(`${message.author.tag} WON!`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
          .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})

          newrow.components[0].setDisabled(true)
          msg.edit({embeds: [embed], components: [newrow]})
          battling.splice(battling.indexOf(message.author.id), 1);
          battling.splice(battling.indexOf(target.id), 1);
          collector.stop()
          
        }
        
      }
    }
    else if (i.customId === 'Defend'){
      let speeches = ["{player} now has {damage} defense!"]
      
      if (i.user.id == target.id){
        if (Math.floor(Math.random() * 5) <= 3){
        negated[1] = Math.floor(Math.random() * 5) + 1
          log[0] = speeches[Math.floor(Math.random() * speeches.length)].replaceAll('{player}',target.user.tag).replaceAll('{damage}',negated[1])
        embed = new EmbedBuilder()
          
  .setColor('Blue')
    .setTitle(`${message.author.tag} vs ${target.user.tag}`)
          
  .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})
  .addFields({name:`${target.user.tag} ${lives2}/100`,value: "\u200B"})
        .addFields({name:`\u200B`,value:`${log[0]}`})
        
        
      } else {
          negated[0] = Math.floor(Math.random() * 5) + 1
          log[1] = speeches[Math.floor(Math.random() * speeches.length)].replaceAll('{player}',target.user.tag).replaceAll('{damage}',negated[0])
        embed = new EmbedBuilder()
          .setColor('Blue')
            .setTitle(`${message.author.tag} vs ${target.user.tag}`)

          .addFields({name:`${message.author.tag} ${lives1}/100`,value: "\u200B"})
          .addFields({name:`${target.user.tag} ${lives2}/100`,value: "\u200B"})
                .addFields({name:`\u200B`,value:`${log[1]}`})
      }
        msg.edit({embeds: [embed], components: [newrow]})
      }
      
      
      
    }
    i.deferUpdate();
  })
  }
}