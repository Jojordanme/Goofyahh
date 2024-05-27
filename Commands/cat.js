const { EmbedBuilder } = require("discord.js");
let able = 0;
const gifs = [
  "https://discord.com/channels/820093197933740062/1032736014495653938/1177217103439339530",
  "https://tenor.com/view/urmom-gif-22801285",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1177582792264138792/cat_zooming_towards_camera.gif?ex=65730870&is=65609370&hm=b578a0ddad62e2a845ca762035647664f859db5134f54bb5f2d99ed7fa0f1bbb&",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1177971381971980348/serious.png?ex=65747257&is=6561fd57&hm=5274c698b48b5fc8bb86425d90883aad2d82c2106ace708148e930068a03d38c&",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1178626457912746005/VID_29110901_121919_963.mp4?ex=6576d46d&is=65645f6d&hm=8d2fe34cad710e2b3c304b5c0ec657d3a0ef8b51e2bedd31266cfcdb7cc4be66&",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1178063520294768690/IMG_0244.png?ex=6574c826&is=65625326&hm=86f49e1bbfba89ab8a34068e248732275e39a2f1b755be503b1753360c240d0a&",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1178915900104118292/v14044g50000cli70kvog65rpfkkhnj0.mov?ex=6577e1fd&is=65656cfd&hm=660414ebcbeb049e24f85f7b8a5ce953039f3b2d88c5b3e22eaf0dba65999679&",
  "https://tenor.com/view/watercoasting-gif-9834191338382762098",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1179826997682253874/shocked_restaurant.jpg?ex=657b3284&is=6568bd84&hm=8ff7a4c3a12f02824f498fb7bc71a513cdeebdd0d5e02fe6895a2b5e13f3e156&",
  "https://cdn.discordapp.com/attachments/1032736014495653938/1179875956312260619/image.png?ex=657b601d&is=6568eb1d&hm=4915d5cf742b0c3ee5f1fa598b14db5efdc7a7cb2ada37565618665b81b1c3a4&",
  "https://cdn.discordapp.com/attachments/523282321303142400/1179330978179731556/caption-8-2.gif?ex=65796490&is=6566ef90&hm=bda79f99131ed75c0efddf31c411f9d63dbcb597c3889968d063d6fc511f0735&",
  "https://media.tenor.com/zBdboxlH4JcAAAAi/maxwell-cat.gif",
  "https://media.tenor.com/sh_5zpuzWs4AAAAd/cat-pull-cat-snatch.gif",
  "https://media.tenor.com/NpKEX5SFLUIAAAAi/cat-explosion.gif",
  "https://media.tenor.com/Q4HZvCQ-8F4AAAAC/cute-cat-cat-saying-ok.gif",
  "https://media.tenor.com/DCd-sK7uyH0AAAAC/cute-cat-tiny.gif",
  "https://media.tenor.com/sAqMHb0yzHgAAAAd/dancing-cat-jump-cat.gif",
  "https://64.media.tumblr.com/tumblr_lt7bswjhFd1r4ghkoo1_250.gif",
];
module.exports.run = (client, message, args) => {
  const chosenGif = gifs[Math.floor(Math.random() * gifs.length)];

  if (able == 0) {
    message.channel.send(`${chosenGif}`);

    able = 1;
    setTimeout(function () {
      able = 0;
    }, 5000);
  } else {
    message.channel.send("wait another 5 seconds");
  }
};

module.exports.name = "gif";
