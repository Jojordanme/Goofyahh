const { PermissionsBitField } = require("discord.js");
let able = 1;
let status = 1;
module.exports.run = (client, message, args, stat) => {
  var i = 0; //  set your counter to 1.
  status = stat || 0;
  let arg = parseInt(args) || 25;
  if (arg > 26) {
    message.channel.send("You can't spam more than 25 messages");
    return;
  }
  const randomWords = [
    "THIS IS A RAID PUT YOUR HANDS UP",
    "SUFFER",
    "nigger",
    "nigga",
    "IM IN UNBEARABLE PAIN",
    "HAHAHA",
    "HEHEHE HA!",
    "A SPAM",
    "SPAM",
    "TEAM HERBERT",
    "YEAAAA",
    "ARCANE ODYSSEY",
    "LETS GO",
    "spam",
    "phishing",
    "junk",
    "bots",
    "https://cdn.discordapp.com/attachments/988648668515168356/1180026389785747578/a7xsec3ncf3c1.mp4",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179358972604579870/84806849-38E6-489E-8BB7-DFC6FCB9522E.gif?ex=65797ea2&is=656709a2&hm=f83c33c721b6ac7c49fa60ee09311d2c18aa7227ad051b1d3bd885170ee88a2f&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179370184251809802/meme.png?ex=65798913&is=65671413&hm=bdf8f8de914ef3bd4a176b39a10cf0f6b7623c17fe7467655c06a71967b61a38&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179826930938298488/20231128_022416.jpg?ex=657b3274&is=6568bd74&hm=463403856439a7178966fb3f89a8683fa23f6e3cfc47079983ada1411d764b4d&",
    "https://tenor.com/view/kill-this-guy-hammers-water-lebron-james-nba-gif-4933832124243046210",
    "https://tenor.com/view/kanye-kanye-west-roblox-roblox-memes-roblox-meme-gif-1028997715501554265",
"https://cdn.discordapp.com/attachments/827062919257653269/1179883722913353768/F_4C7dEW0AAp-Te.png?ex=657b6758&is=6568f258&hm=f39dd34aa510e93ec5e9ff746b30589d2c57f3487e6696dd7c41bcb34fea20d0&",
"https://cdn.discordapp.com/attachments/523282321303142400/1179874504592347278/meme-171.png?ex=657b5ec2&is=6568e9c2&hm=6d84727898f82a0b6c0f1707c21261e9d2f0b69be38de64bb480df412b39295c&",
    "https://cdn.discordapp.com/attachments/1172948281903562813/1177674641255436448/image.png?ex=65735dfa&is=6560e8fa&hm=06894268e7b8a26eab07958a7d2368b0dc07f2aeb9fdcb3d86e03589a15030d9&",
    "https://cdn.discordapp.com/attachments/1032736014495653938/1179875956312260619/image.png?ex=657b601d&is=6568eb1d&hm=4915d5cf742b0c3ee5f1fa598b14db5efdc7a7cb2ada37565618665b81b1c3a4&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179785968245559389/image0.png?ex=657b0c4e&is=6568974e&hm=93e8f6717a461dd7e52cc54870d8d6b23a3fb4b307521911a0d0971ae6962c9d&",
    "https://cdn.discordapp.com/attachments/841699651766059052/1179536507741159451/ezgif.com-video-to-gif_2.gif?ex=657a23fa&is=6567aefa&hm=09fb87b48ec5d87eccf6a7acdb4682b4a373ab33bd3bad0cb9a9776ddb72cb57&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179822737385062440/baa6a3db584dfa3eb4f71d75dde67098.png?ex=657b2e8c&is=6568b98c&hm=732761d75c8754c856d5752c9826a9f3a79b94fea331992307fbfdccc8a6a5cf&",
    "https://media.discordapp.net/attachments/966672317147144262/1179224267842404392/ezgif-3-60400c4310.gif?ex=6579012e&is=65668c2e&hm=2e3689ef97fd40a81ba1209c3be7bf6add1599e224eb261cd0e992dcb38ede5b&",
    "https://cdn.discordapp.com/attachments/986969893503127572/1178669382830919721/ezgif.com-gif-maker_6.gif?ex=6576fc67&is=65648767&hm=2cc55e4d1b6b6f8527fea126c79d9cb3b8c54cffd8af7555798edf681a1f1af9&",
    "https://tenor.com/view/reigen-arataka-mob-psycho-gif-23605216",
    "https://cdn.discordapp.com/attachments/938850984543809557/1179947784334475284/meme.mp4?ex=657ba302&is=65692e02&hm=d53ebe441f5dca3c8df8e751c9e465a32eb4f9f59d30bbba60c693533e5bea56&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179947607167090779/christmas11.mp4?ex=657ba2d7&is=65692dd7&hm=f168fcf57af07ece6c5b9841ab92e86518c308227511a13438753ba321ad4b70&",
    "So, how's work?",
    "Wow, this breeze is great, right?",
    "Hey hivekin, can I bug you for a moment?",
    "Me-wow! is that the latest Felinor fashion?",
    "So, what's keeping you busy these days?",
    "Sometimes I have really deep thoughts about life and stuff.",
    "You ever been to a Canor restaurant? The food's pretty howlright.",
    "It has been 59 seconds...  without Arcane Odyssey  I am shivering, the voices are getting louder, and all i hear in my head is The Arcane Odyssey Loading Screen. Please help me, every second without Arcane Odyssey, i get more insane. My mom told me Giant White Eyes isn't real! what are you doing! But in my eyes, i see him. with that look in his face, ready to bite me.i already have tier 4 insanity. my vision is tinted blue, and i am shivering constantly. just then, i felt a knock on my door. come out honey, its time for dinner. it must be another player. little do they know im a metamage. i equip my lightning magic from my hands. time to start progressing. i step out into the hallway and oneshot my bounty. this build must be dealing alot of damage already. i hear a scream from the other room. must be their clanmate. as i burst into their room, i see a player with an atlantean mace. a warrior main, this could be trouble. i immediately grip him with two blasts of my magic and move onto the next room. a little freshie standing in a crib. free xp. as i execute the freshie, i remember im hungry. luckily i have the shark pie. as i restore my hunger and thirst from the shark pie, i hear a knock on the front door. MARINES the room is suddenly filled by players. shit, they are all warrior mains, i dont think i can dark sea expedition. luckily, i crafted some harming potions beforehand incase i got into a sticky situation. as i use my 50 harming potions, i fall into the dark sea once more. damn devs added self damage to harming potions",
    "21 mins of roblox being down. I think i'm losing my mind. My whole body aches and my limbs are trembling. I feel my bones breaking and i'm in a straight panic attack because i have to go see the scary outside world and the tall green grass. I feel my organs degenerate and i'm losing power. Please, Roblox CEO, put your game back up. I'm dying and in endless eternal pain. I don't think i'm going to make it. How many years?…. Months even has it been without roblox? I still can’t comprehend my only reason of life has been stripped away from me, my body has gone into withdrawal, my hands are currently shaking as I am currently typing this. My brain has no purpose other than to fulfill the duty of playing roblox. What do i do now? I see no purpose of life… There is no purpose of life. I am going to send one final message before I cease to exist. I’m feeling sick to my stomach, my body is sick, my legs are shaking. I’m about to throw up. This is a disease, a mental disorder and disease that has taken my life away, Hope you’re happy now… roblox. I'm dying. Is this the end of the world. Everytime I see a gun, I instantly think of mm2. Saw grass for the first time but that only reminded me of bee simulator. I can't tell what real and what's not. I woke up today expecting Roblox to be working and it's not. My house reminds me of bloxburg. My clothes remind me of fashion famous. I think im- I think I'm turning into a alien you sussy wussy baka smirk. Wait- oh no- I think I'm turning. Sussy smirk. My mind is spinning. I can't grind the games I love ever so much. I think this is the end of Roblox, or maybe even the end of the world. My whole body hurts. I can feel the energy slowly crawling out from my body. This all over... Adopt me? No this can't be. There's no other game I can play. Ate pizza with my family for the first time and that reminded me of work at a pizza place. My Roblox girl probably is cheating on me. Is my life... Is my life a lie?",
    "it has been 50 seconds...  without Deepwoken, I am shivering, the voices are getting louder, and all i hear in my head is The Deepwoken Loading Screen. Please help me, every second without Deepwoken, i get more insane. My mom told me Nautilodaunt isn't real! what are you doing! But in my eyes, i see him. with that look in his face, ready to punch me.i already have tier 2 insanity. my vision is tinted blue, and i am shivering constantly. just then, i felt a knock on my door. come out honey, its time for dinner. it must be another player. little do they know im a voidwalker. i grab my flintlock from my bedside drawer. time to start progressing. i step out into the hallway and oneshot my bounty. this build must be dealing alot of damage already. i hear a scream from the other room. must be their guildmate. as i burst into their room, i see a player with a baseball bat. a meduim main, this could be trouble. i immidiately grip him with two shots of my flintlock and move onto the next room. a little freshie standing in a crib. free xp. as i grip the freshie, i remember im hungry. luckily i have the carnivore talent. as i restore my hunger and thirst from the freshie, i hear a knock on the front door. POLICE the room is suddenly filled by players. shit, they are all flintlock mains, i dont think i can bossraid. luckily, i crafted some iron bombs beforehand incase i got into a sticky situation. as i use my 50 iron bombs, i fall into the depths once more. damn devs added self damage to bombs",
    "Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy. Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy.",
    "https://youtu.be/dQw4w9WgXcQ?si=PLMlxDXuG5ScpGHm",
    "https://youtu.be/6WBnjQOAy7Y?si=6QjE5LjRTEyh912d",
    "https://youtu.be/wEkjg9EWwgg?si=fYIWGsDel1OTVwNB",
    "https://youtu.be/qDsLgWLK6NM?si=5RWyZzBQcKElHcmd",
    "https://youtu.be/UGTeuy2v4z8?si=M89zPMt7QmcVqK8u",
    "https://youtu.be/_3_Pf2eicc4?si=ID2ulpUIaOvBmWPv",
    "https://youtu.be/fuFlMtZmvY0?si=XqvotK675WHU_OXq",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "@everyone",
    "https://tenor.com/view/kill-this-guy-hammers-icicles-lebron-james-nba-gif-3627015687221735402",
    "https://tenor.com/view/viking-jump-viking-leap-off-man-jump-man-axe-jump-gif-12256084104266267790",
    "https://tenor.com/view/kill-people-gif-25984064",
    "https://media.discordapp.net/attachments/1049830284255834172/1176578649273679903/ezgif.com-video-to-gif.gif?ex=656f6141&is=655cec41&hm=3198e23d12b4329a15206bfbf7185484ea178ab70d4eb9348152172a666fc6a1&",
    "https://tenor.com/view/ftderpy-gif-24624735",
    "https://media.discordapp.net/attachments/678068458432495629/1117302598375055431/bnuuy.gif",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179507376349532170/image0-5.png?ex=657a08d8&is=656793d8&hm=3f63c54edabaca50046ff1b5e23673b3dda295575de7d6cbbe298da9252abc4f&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179532236257763368/repost-1.mp4?ex=657a1fff&is=6567aaff&hm=a939da729c13bc48d486c54dbc007176dd4304104d1672c20a9fb82b8dc56627&",
    "https://tenor.com/view/ah-jolly-cat-jolly-cat-merry-christmas-gif-9272976883674260918",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179638053925556355/tree.gif?ex=657a828c&is=65680d8c&hm=e9d9756fac0ea6b50aa0dfeaf183401712161ad35e7bf7e5edab3dbc15919f35&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179644772785340446/jolly.gif?ex=657a88ce&is=656813ce&hm=62996a905ece3dd13fc9b0cf12226ed96ca1589d38658f09be7c8aba78c76864&",
    "https://cdn.discordapp.com/attachments/523282321303142400/1179668752929923152/crhistmas.mp4?ex=657a9f23&is=65682a23&hm=01f17c4c7054e2e7752280dca68559a3f683ecd150be936a1d11b67ea19340bb&",
    "https://tenor.com/view/low-tier-god-ltg-wrap-him-up-and-gift-him-to-the-grinch-gif-14687752621353435155",
    "https://media.discordapp.net/attachments/171098141460922369/1176703156885921843/ezgif-2-b3f6413781.gif?ex=656fd536&is=655d6036&hm=76690527419170e8a61f0e994d30eee3b99341ee19be4b8d3f1690444c8987c3&",
    "https://media.discordapp.net/attachments/1124728814518415432/1178022895742631976/Untitled_video_-_Made_with_Clipchamp_2.gif?ex=6574a250&is=65622d50&hm=263df0616234b15bba47c6baf2cca1ba3c7d2974c761157d84c7539f1b7a9b1a&",
    "email",
    "overload",
    "advertisements",
    "unsolicited",
    "repeated",
    "malicious",
    "unwanted",
    "inundate",
    "harassment",
    "fraud",
    "abuse",
    "excessive",
    "irritating",
    "automated",
    "disturb",
    "annoying",
    "bulk",
    "pop-ups",
    "catfishing",
    "scam",
    "clickbait",
  ];

  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      if (status == 0) {
        message.channel.send(
          `${randomWords[Math.floor(Math.random() * randomWords.length)]}`
        );
      } //  your code her}
      i++; //  increment the counter
      if (i < arg) {
        if (status == 0) {
          myLoop();
        }
        //  ..  again which will trigger another
      } //  ..  setTimeout()
    }, 1000);
  }
  if (able == 1) {
    if (
      message.member.permissions.has(PermissionsBitField.Flags.Administrator)
    ) {
      able = 0;
      if (status == 0) {
        myLoop();
      }
      //  start the loop
      able = 1;
    } else {
      message.channel.send({ files: ["Attachments/nuh.gif"], ephemeral: true });
      able = 0;
      setTimeout(function () {
        able = 1;
      }, 60000);
    }
  } else {
    message.channel.send("nah");
  }
};

module.exports.name = "spam";
