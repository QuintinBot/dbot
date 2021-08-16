const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Sorry, je kan dit command niet gebruiken.");

    if(!args[0]) return message.reply("Gebruikt het command goed!");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefix: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setTitle("Prefix")
    .setColor("#ff0000")
    .setDescription(`De prefix is aangepast naar ${args[0]}`);

    message.channel.send(embed);
    

}

module.exports.help = {
    name: "prefix"
}