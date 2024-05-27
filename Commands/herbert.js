let able = 0;

module.exports.run = (client, message, run) => {
  if (able == 0) {
    message.channel.send(
      "https://media.tenor.com/-hYWYH2Jk6AAAAAC/hi-herbert.gif"
    );
    able = 1;
    setTimeout(function () {
      able = 0;
    }, 30000);
  } else {
    message.channel.send("please wait some time before doing it again");
  }
};
