module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, jij kan dit niet");

    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    message.channel.send("**LOCKDOWN**! Dit kanaal is tijdelijk gesloten!")

}

module.exports.help = {
    name: "lockdown"
}