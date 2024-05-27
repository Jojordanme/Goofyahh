var trivcool = [];
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const moneySchema = require("../src/SCHEMAS/moneySchema.js");
const senegalflag = new AttachmentBuilder("../Attachments/Senegal.png");
const triviaQuestions = [
  {
    question:
      "1 Jenis fungsi lembaga keluarga adalah",
    answers: ["ekonomi","reproduksi","proteksi","sosialisasi","afeksi","pengawasaan sosial"],
    difflevel: 1, // level
  },
  {
    question:
      "Apa yang dimaksud dengan lembaga sosial menurut slide?",
    answers: ["atanan sistem nilai dan norma yang ada di dalam masyarakat untuk mengatur dan membentuk kehidupan sosial"],
    difflevel: 4, // level
  },
  {
    question:
      "Mitokondria berfungsi menghasilkan energi yang diperoleh dari proses respirasi sel? ",
    answers: ["ok"],
    difflevel: 0, // level
  },
  
  {
    question:
      "Tempat penyimpanan bahan kimia guna membantu proses dalam sel adalah fungsi sel...",
    answers: ["sitoplasma"],
    difflevel: 3, // level
  },
  {
    question:
      "Vakuola berfungsi untuk menyimpan cadangan makanan",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:
      "Diffrences:\n1. Hewan Tidak Ada Kloroplas tetapi Tumbuhan ada\n2. Vakuola di hewan lebih kecil sehingga tumbuhan lebih besar\n3. Lisossom hewan selalu ada tetapi tumbuhan sering ada",
    answers: ["ok"],
    difflevel: 0, // level
  },
{
    question:
      "A proses or method to reduce diffrences among inviduals or groups",
    answers: ["assimilasi","assimilation"],
    difflevel: 1, // level
  },
  {
    question:
      "Imitasi adalah tindakan meniru sebagian contohnya: saya masak karena mama masak",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:
      "Perempuan melakukan operasi plastik agar dapat mirip dengan boneka barbie ini adalah contoh faktor pendorong interaksi sosial...",
    answers: ["identifikasi","identification"],
    difflevel: 1, // level
    explanation: "why not imitation? because imitation only copy some but idenifaction is to copy like everything okay?"
  },
    {
    question:
      "peniruan yang dilakukan secara keseluruhan, mulai dari penampilan, perilaku, dan pola pikir disebut dengan...",
    answers: ["identifikasi","identification"],
    difflevel: 3, // level
  },
    {
    question:
      "Suatu usaha menempatkan diri pada situasi yang dirasakan orang lain dengan acuan diri sendiri disebut...",
    answers: ["simpati", "simpathy"],
    difflevel: 2, // level
  },
  {
    question:
      "Suatu usaha untuk menempatkan diri dan membayangkan diri pada posisi orang laim demgan acuan orang lain disebut...",
    answers: ["empati","empathy"],
    difflevel: 2, // level
  },
  {
    question:
      "since i cant put images here if you see some stuff that sticks to those RE things thats a ribossom",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:
      "RE means retikulum endoplasma btw",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:"mengatur pengangkutan zat-zat dari dan ke luar sel adalah fungsi sel",
    answers: ["membran sel","membran cell"],
    difflevel: 2, // level
  },
  {
    question:"Types of status:\n1. Acribed status - You just get this automatically\n2. Achieved Status - Status that you obtained for your hard work or your intentional efforts\n3. Assigned status - Obtained because it is granted by another party",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:"Fungsi lembaga agama singkat: Pendoman hidup",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:"mengendalikan aktivitas sel adalah fungsi sel...",
    answers: ["inti sel","nucleus"],
    difflevel: 2, // level
  },
  {
    question:
      "ada 2 jenis RE, RE kasar, dan RE halus, jenis apa yang memiliki ribossom yang menempel",
    answers: ["kasar","rough"],
    difflevel: 1, // level
  },
  {
    question:
      "unit struktural dan fungsional terkecil yang menyusun makhluk hidup disebut",
    answers: ["sel","cell"],
    difflevel: 2, // level
  },
  {
    question:
      "ribossom berfungsi sintesis protein",
    answers: ["ok"],
    difflevel: 0, // level
  },
  {
    question:
      "sel apa yang membantu prose pengeluaran zat?",
    answers: ["badan golgi","aparatus golgi","kompleks golgi"],
    difflevel: 3, // level
  },
  {
    question:
      "since i cant put images here if you see some stuff that sticks to those RE things thats a ribossom",
    answers: ["ok"],
    difflevel: 0, // level
    image: ""
  },
  {
    question:
      "Fun fact:\nIdentifikasi kata kuncinya adalah meniru keseluruhan\nImitasi kata kunci adalah meniru sebagian",
    answers: ["ok"],
    difflevel: 0, // level
  },
]
let ongoing = 0;
let difficulty = null;
module.exports.run = async (client, message, args) => {
  try {
    if (ongoing == 0) {
      if (trivcool.includes(message.author.id)) {
        return message.reply(
          "You can only start a new trivia round once every 10 sec. while premium herberts dont need to wait 10 seconds"
        );
      }

      const randomQuestion =
        triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];

      ongoing = 1;
      if (randomQuestion.difflevel == 5)
        difficulty = ["Extreme", 300, "#e00bd9"];
      if (randomQuestion.difflevel == 4)
        difficulty = ["Very Hard", 160, "#e00b0b"];
      if (randomQuestion.difflevel == 3) difficulty = ["Hard", 90, "#c4b20e"];
      if (randomQuestion.difflevel == 2) difficulty = ["Medium", 50, "#3ec40e"];
      if (randomQuestion.difflevel == 1) difficulty = ["Easy", 30, "#1042e6"];
      if (randomQuestion.difflevel == 0) difficulty = ["Explanation", 0, "#FFFFFF"];
      if (!difficulty) difficulty = ["Easy", 20, "#1042e6"];
      const embed = new EmbedBuilder()
        .setColor(difficulty[2])
        .setTitle(`${difficulty[0]} Question`)
        .setDescription(randomQuestion.question);
      if (randomQuestion.difflevel == 0) {
        embed.setFooter({text:'say ok to finish the explanation'})
      }
      if (randomQuestion.image) {
        embed.setImage(randomQuestion.image);
      }
      message.channel.send({ embeds: [embed] });

      try {
        const filter = (response) =>
          randomQuestion.answers.some(
            (answer) => response.content.toLowerCase() === answer.toLowerCase()
          );

        const collected = await message.channel.awaitMessages({
          filter,
          max: 1,
          time: 30000,
          errors: ["time"],
        });
        const winner = collected.first().author;

        let data = await moneySchema.findOne({
          Guild: message.guild.id,
          User: winner.id,
        });

        if (!data) {
          data = new moneySchema({
            Guild: message.guild.id,
            User: winner.id,
            Money: 0,
          });
        }
        if (data.Inventory.includes("Premium")) {
          message.channel.send(
            `gg ${winner} answered the correct answer and got $${
              difficulty[1] * 2
            } because of premium`
          );
          data.Money += difficulty[1] * 2;
        } else {
          if (randomQuestion.difflevel == 0){
            message.channel.send(
            `alright now use ?review again`);
          } else {
          message.channel.send(
            `gg ${winner} answered the correct answer and got $${difficulty[1]}`)
          }
          data.Money += difficulty[1];
        }

        data.save();
        ongoing = 0;
        difficulty = null;
        if (!data.Inventory.includes("Premium")) {
          trivcool.push(winner.id);
          setTimeout(() => {
            trivcool.shift();
          }, 10000); // Cooldown period (1 minute)
        }
      } catch (error) {
        console.log(error);
        message.channel.send(
          `Time is up! The answer was ${randomQuestion.answers[0]}.`
        );
        if (randomQuestion.explanation) {
          message.channel.send(
            `How?: ${randomQuestion.explanation}`
          );
        }
        ongoing = 0;
        difficulty = null;
      }
    } else {
      message.channel.send("A trivia round is already ongoing.");
    }
  } catch (err) {
    console.log(err);
    ongoing = 0;
  }
};
