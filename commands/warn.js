const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Geef een redenen op.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("818149835625594913");

    if (!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 4) {

        var embed = new discord.MessageEmbed()
            .setColor("ff0000")
            .setDescription("PAS OP")
            .addField("Bericht", "Je hebt nog **__1__** waarschuwing voor een ban.");

        message.channel.send(embed);

    } else if (warns[warnUser.id].warns == 5) {
        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} Is verbannen, omdat hij/zij teveel warns heeft!`);
    }
}

module.exports.help = {
    name: "warn"
}