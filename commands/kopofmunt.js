module.exports.run = async (client, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    message.channel.send(`Ik heb **${result}** in gedachten!`);

}

module.exports.help = {
    name: "kopofmunt"
}