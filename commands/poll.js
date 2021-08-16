const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if (!args[0]) return message.reply("Geen poll meegegeven..");

    const embed = new discord.MessageEmbed()
    .setTitle('Nieuwe Poll!')
    .setColor('#d18cd7')
    .setDescription(args.join(" "))
    .setFooter('Stem hieronder')
    .setTimestamp()

var msg = await message.channel.send(embed);

    await msg.react('👍');
    await msg.react('👎');

    message.delete({ timeout: 1000 });

}
 
module.exports.help = {
    name: "poll",
}