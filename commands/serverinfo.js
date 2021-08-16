const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setColor("#d18cd7")
            .addField("Bot naam", client.user.username)
            .addField("Je bent deze server gejoined op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}