// jordan was here
const express = require("express");
const app = express();
const undomained = [
  '.link',
  '.life',
  '.site',
  '.block',
  '.fun',
  '.dog',
]
let event = false
let evenpar = []
app.listen(3000, () => {
  console.log("Project is online");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

// 1176855108315795616
const mongoose = require("mongoose");
const Discord = require("discord.js");
const {
  Client,
  GatewayIntentBits,
  ComponentType,
  Message,
  EmbedBuilder,
  PermissionsBitField,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  Partials,
  TextInputStyle,
  ActivityType,
  ButtonStyle,
  SlashCommandBuilder,
  Permissions,
  Events,
  AttachmentBuilder,
} = Discord;
const ecoScheme = require("./src/SCHEMAS/moneySchema.js");
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction] 
});
console.log('okay')
client.on("ready", async () => {
  
  
  const chanodoje = client.channels.cache.get("1162219015415017593");
  const messages = await chanodoje.messages.fetch();
  const botMessages = messages.filter(
    (message) => message.author.id === client.user.id
  );
  const first = botMessages.first();

  const embed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle("Welcome")
    .setDescription("More information click one of our buttons!");

  const roww = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setEmoji("📖")
      .setCustomId("therules")
      .setLabel("View Rules")
      .setStyle(ButtonStyle.Primary)
  );

  if (first) {
    first.edit({ embeds: [embed] });
  } else {
    chanodoje.send({ embeds: [embed], components: [roww] });
  }

  const chanodoje2 = client.channels.cache.get("1177185495730638948");
  const messages2 = await chanodoje2.messages.fetch();
  const botMessages2 = messages2.filter(
    (message) => message.author.id === client.user.id
  );
  const first2 = botMessages2.first();

  const embed2 = new EmbedBuilder()
    .setColor("Blue")
    .setTitle("Reaction roles")
    .setDescription("React for certain types of roles")
  .addFields({name:"❌ for people who play tower defense games", value: "\u200B"})
  .addFields({name:"🧊 for people who play geometry dash", value: "\u200B"})
  .addFields({name:"🛌 for people who play bedwars", value: "\u200B"});
  let msg;
  if (first2) {
    msg = await first2.edit({ embeds: [embed2] });
  } else {
    msg = await chanodoje2.send({ embeds: [embed2] });
  }
  msg.react("❌")
  msg.react("🧊")
  msg.react("🛌")
  console.log("bot ready");
  mongoose
    .connect(process.env.MONGODBURL, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database is ready in action!");
    });
  client.user.setActivity({
    type: ActivityType.Custom,
    name: "typehelp",
    state: "Type ?help for more info",
  });

  const poll = new SlashCommandBuilder()
    .setName("poll")
    .setDescription("create a poll")
    .addStringOption((option) =>
      option
        .setName("option1")
        .setDescription("The Title")
        .setMaxLength(50)
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName("option2")
        .setDescription("Option 1")
        .setMaxLength(50)
        .setRequired(true),
    )
    .addStringOption((option) =>
      option.setName("option3").setDescription("Option 2").setMaxLength(50),
    )
    .addStringOption((option) =>
      option.setName("option4").setDescription("Option 3").setMaxLength(50),
    )
    .addStringOption((option) =>
      option.setName("option5").setDescription("Option 4").setMaxLength(50),
    )
    .addStringOption((option) =>
      option.setName("option6").setDescription("Option 5").setMaxLength(50),
    );
client.application.commands.create(poll);
});

const fs = require("fs");

const prefix = "?";
client.commands = new Discord.Collection();
const commands = fs
  .readdirSync("./Commands")
  .filter((file) => file.endsWith(".js"));
for (file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./Commands/${commandName}`);
  client.commands.set(commandName, command);
}

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId == "therules") {
      const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("The Rules")
        .addFields({
          name: "No spamming",
          value: "Spamming can result in a scheduled timeout",
        })
        .addFields({
          name: "No racism behaviour",
          value: "Seriously dont pls",
        })
        .addFields({
          name: "Use common sense",
          value:
            "Dont just break the rules from other rules pls use common sense",
        })
        .addFields({
          name: "Make sure to follow discord rules",
          value: "This includes the guidlines and terms of service (tos)",
        })

        .setFooter({ text: "Breaking The Rules Can Result In A Warning" });
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()

          .setURL("https://discord.com/terms")
          .setLabel("Discord Terms Of Services")
          .setStyle(ButtonStyle.Link),
        new ButtonBuilder()

          .setURL("https://discord.com/guidelines")
          .setLabel("Discord Guidelines")
          .setStyle(ButtonStyle.Link)
      );

      await interaction.reply({
        embeds: [embed],
        components: [row],
        ephemeral: true,
      });
    }
  }
  if (interaction.commandName == "poll") {
    const { channel } = await interaction;
    const options = await interaction.options.data;
    const emojis = ["🔵", "🔴", "🟢", "🟡", "🟣"];
    let embed = new EmbedBuilder()
      .setTitle(`${options[0].value}`)
      .setColor("Blue");
    for (let i = 1; i < options.length; i++) {
      let emoji = emojis[i - 1];
      let option = options[i];
      embed.addFields({
        name: `${emoji} ${option.value}`,
        value: " ",
      });
    }
    const message = await channel.send({ embeds: [embed] });
    for (let i = 1; i < options.length; i++) {
      let emoji = emojis[i - 1];
      message.react(emoji);
    }
  }
});

client.on("messageCreate", async (message) => {
  let data = await ecoScheme.findOne({ Guild: message.guild.id ,User: message.author.id });
  if (!data) {
    data = new ecoScheme({
      Guild: message.guild.id,
      User: message.author.id
    })
  }
  if (!data.Health) {
    data.Health = 0
    data.save()
  }
  if (message.content.toLowerCase().includes("nigg") || message.content.toLowerCase().includes("nlgg") || message.content.toLowerCase().includes("n1gg") || 
message.content.toLowerCase().includes("ni99") || message.content.toLowerCase().includes("n199") || message.content.toLowerCase().includes("n!gg") || message.content.toLowerCase().includes("n!99") || message.content.toLowerCase().includes('n/gg') || message.content.toLowerCase().includes('n/99') || message.content.toLowerCase().includes('nihg') || message.content.toLowerCase().includes('nih9')) {
    console.log(`oh shoot`);
    message.delete()
    if(!message.member.roles.cache.find(r => r.id === '1166976840401965177')) {
      await message.member.roles.remove(message.member.roles.cache);
      let role = message.guild.roles.cache.get('1166976840401965177')
      await message.member.roles.add(role)
      const channel = client.channels.cache.get("1166976409307185182");

      channel.send(`Welcome <@${message.author.id}> to solitary confinement you are here because of saying a sentende which contains a N WORD grrrr`)
    }
    
  }
  if (message.content.startsWith(prefix)) {
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if (!command) return;
    console.log(args);

    if (args.length == 0) {
      args = null;
    }
    
    command.run(client, message, args);
  }
  let undo = false

  for (let i=0;i < undomained.length; i++){
    if (message.content.includes(undomained[i])){
      undo = true
    }
  }
  if (undo){
    message.delete()

    message.channel.send(`Blocked domain`)
  }
  const guild = await client.guilds.cache.get("1161897674526687284")
  
  await message.guild.members.fetch('792915059004801064')
  .then(user => {
    user.timeout(null, 'Admin timed you out.')
    .catch(console.error)
  })
  .catch(console.error)
  
  
  
  if (!event){
    if (Math.floor(Math.random() * 100) + 1 == 1){
      const embed = new EmbedBuilder()
      .setColor("#ffd500")
      .setTitle("**IS THAT A CHEST!?**")
      .setDescription("Grab your chest before its gone!")

      const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
        .setLabel("GRAB")
        .setStyle(ButtonStyle.Success)
        .setCustomId("Catch")
        )

     const reply = await message.channel.send({embeds: [embed], components: [row]})

      const collector = reply.createMessageComponentCollector({time: 30000, componentType: ComponentType.Button})

      collector.on('collect', async i => {
        if (i.customId == "Catch"){
          if (!evenpar.includes(i.user.id)){
            evenpar.push(i.user.id)
            i.reply({content:'sucessfully joined', ephemeral: true})
          }
          
        }
      })

      collector.on('end', async collected => {
        for (let i=0;i<evenpar.length;i++){
          let Data = await ecoScheme.findOne({ Guild: message.guild.id, User: evenpar[i] });

          if(!Data){
            Data = new ecoScheme({
              Guild: message.guild.id,
              User: evenpar[i],

            })


            Data.Inventory.push('Chest')
            Data.save()
            message.channel.send('Everyone who joined will recieve their chest')
            event = true
            
          }
        }
        evenpar = [];
      })
    }
  }

});
/*
client.on('channelCreate', (channel) => {
  
  channel.guild.fetchAuditLogs({
    type: 'channelCreate'
  }).then(async (audit) =>{
    const {executor} = audit.entries.first()

    const chN = channel.name;
    const chId = channel.id;
    let chType = channel.type;

    if (chType == 0) chType = "Text";
    if (chType == 2) chType = "Voice";
    if (chType == 13) chType = "Stage";
    if (chType == 15) chType = "Announcement";
    if (chType == 5) chType = "Forum";
    if (chType == 4) chType = "Category";

    const ch = await channel.guild.channels.cache.get('1162970106205319198');

    
    
  })
  
})
*/

client.snipes = new Map();
client.on("messageDelete", function (message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null,
  });
});

client.on("messageReactionAdd", async (reaction, user) => {


  if (user.bot) return;
  const guild = await client.guilds.cache.get(reaction.message.guild.id)
    var member = await guild.members.cache.get(user.id)
  var member2 = await guild.members.cache.get('792915059004801064')
  if (reaction.message.id == "1177191080253460540"){
  if (reaction.emoji.name == '❌') {
    var role = reaction.message.guild.roles.cache.get("1177189150236086352")
    var role2 = reaction.message.guild.roles.cache.get("1176855108315795616")
    
  await member.roles.add(role)
    
    

  } else if (reaction.emoji.name == '🧊') {
    var role = reaction.message.guild.roles.cache.get("1177195850565423196")
    
    await member.roles.add(role)
  } else if (reaction.emoji.name == '🛌') {
    var role = reaction.message.guild.roles.cache.get("1179245778120749176")
    
    await member.roles.add(role)
  }
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (!reaction.message.guildId) return;
  if (user.bot) return;
const guild = await client.guilds.cache.get(reaction.message.guild.id)
    var member = await guild.members.cache.get(user.id)
  if (reaction.emoji.name == '❌') {
    var role = reaction.message.guild.roles.cache.get("1177189150236086352")
    
    await member.roles.remove(role)
  } else if (reaction.emoji.name == '🧊') {
    var role = reaction.message.guild.roles.cache.get("1177195850565423196")
    
    await member.roles.remove(role)
  } else if (reaction.emoji.name == '🛌') {
    var role = reaction.message.guild.roles.cache.get("1179245778120749176")
    
    await member.roles.remove(role)
  }
})

client.login(process.env.TOKEN);
