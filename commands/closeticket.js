const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
// Dit is de id van je Cotegory
    const categoryID = "822208116216037458";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Deze ticket is gesloten.")
            .setFooter("Ticket gesloten")
            .setColor("ORANGE");

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Dit kan jij niet.");

    }



}

module.exports.help = {
    name: "closeticket"
}