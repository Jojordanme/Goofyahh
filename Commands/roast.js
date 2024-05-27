const ecoScheme = require("../src/SCHEMAS/moneySchema.js");
module.exports.run = async (client, message, args) => {
  Data.Inventory.push("Chest");
  await Data.save();
  const yoMamaJokes = [
    "Yo mama is so fat, when she walks by the TV, I miss a whole season.",
    "Yo mama is so ugly, even Hello Kitty said goodbye.",
    "Yo mama is so old, her birth certificate is in Roman numerals.",
    "Yo mama is so short, she poses for trophies.",
    "Yo mama is so fat, when she jumps, she gets stuck.",
    "Yo mama is so lazy, she's got a remote control just to operate her remote.",
    "Yo mama is so ugly, she made a Happy Meal cry.",
    "Yo mama is so old, when she was in school, there was no history class.",
    "Yo mama is so bad, she can't even beat a arcane odyssey boss in lvl 125",
    "Yo mama is so fat, her blood type is Nutella.",
    "Yo mama is so ugly, she turned Medusa to stone.",
    "Yo mama is so old, her birth certificate is on a scroll.",
    "Yo mama is so short, she can do backflips under the bed.",
    "Yo mama is so fat, she doesn't need the internet, she's already worldwide.",
    "Yo mama is so lazy, she's a member of the Couch Potato Hall of Fame.",
    "Yo mama is so ugly, when she looks in the mirror, the mirror looks away.",
    "Yo mama is so old, when she farts, dust comes out.",
    "Yo mama is so fat, she uses Google Earth to take a selfie.",
    "Yo mama is so ugly, her portraits hang themselves.",
    "Yo mama is so old, she knew Burger King when he was a prince.",
    "Yo mama is so short, you can see her feet on her driver's license.",
    "Yo mama is so fat, she sweats gravy.",
    "Yo mama is so lazy, she's got a callus on her finger from pressing the elevator button.",
    "Yo mama is so ugly, she threw a boomerang, and it refused to come back.",
    "Yo mama is so old, her memory is in black and white.",
    "Yo mama is so short, she makes cookies on a Cheerio.",
    "Yo mama is so fat, she doesn't need the elevator; she needs an escalator.",
    "Yo mama is so ugly, she could make an onion cry.",
    "Yo mama is so old, she knew Mr. Clean when he had an afro.",
    "Yo mama is so short, she can sit on a dime and swing her legs.",
    "Yo mama is so fat, she's on both sides of the family.",
    "Yo mama is so lazy, she thinks a two-income family is where yo daddy has two jobs.",
    "Yo mama is so ugly, when she walks into a bank, they turn off the surveillance cameras.",
    "Yo mama is so old, when she was a kid, rainbows were in black and white.",
    "Yo mama is so short, you can see her feet on her ID card.",
    "Yo mama is so fat, when she wears a red dress, everyone yells, 'Hey, Kool-Aid!'",
    "Yo mama is so ugly, she had to get a beauty mark tattooed on her face.",
    "Yo mama is so old, she has an autographed Bible.",
    "Yo mama is so short, she poses for trophies.",
    "Yo mama is so fat, she can't even jump to conclusions.",
    "Yo mama is so lazy, she's got a remote control for her microwave.",
    "Yo mama is so ugly, when she looked out the window, she was arrested for mooning.",
    "Yo mama is so old, her social security number is 1.",
    "Yo mama is so short, she does backflips under the bed.",
    "Yo mama is so fat, when she turns around, people give her a welcome back party.",
    "Yo mama is so ugly, she could make an onion cry.",
    "Yo mama is so old, her first Christmas was the first Christmas.",
    "Yo mama is so short, she can hang glide on a Dorito.",
    "Yo mama is so fat, her shadow weighs more than you.",
    "Yo mama is so lazy, she thinks a light sweat is a workout.",
    "Yo mama is so ugly, when she went to the beauty salon, it took 12 hours. They had to do shifts.",
    "Yo mama is so old, she preordered the Bible.",
    "Yo mama is so short, she has to use a ladder to reach a skateboard.",
    "Yo mama is so fat, when she goes camping, bears hide their food.",
    "Yo mama is so ugly, she has to sneak up on her mirror.",
  ];
  const yoMama = yoMamaJokes[Math.floor(Math.random() * yoMamaJokes.length)];
  function extractNumbers(inputString) {
    // Use a regular expression to match only digits (0-9) and extract them
    const numbers = inputString.match(/\d+/g);

    // If there are no numbers, return an empty string; otherwise, join them together
    return numbers ? numbers.join("") : "";
  }

  if (args) {
    const removeTags = extractNumbers(args.toString());
    const member = message.guild.members.cache.get(removeTags);
    if (member) {
      let replaced = yoMama.replaceAll("Yo mama", `${member}`);
      let replaced2 = replaced.replaceAll("her", `${member}'s`);
      let replaced3 = replaced2.replaceAll("she", `${member}'s`);
      message.channel.send(replaced3);
    } else {
      message.channel.send(yoMama);
    }
  } else {
    message.channel.send(yoMama);
  }
};
