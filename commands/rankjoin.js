const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    client.on("guildMemberAdd", member => {
 
        // Rol vinden
        var role = member.guild.roles.cache.get('868507144947912754');
     
        if (!role) return;
     
        // Rol toevoegen aan de persoon.
        member.roles.add(role);
     
        // Welkom kanaal.
        const channel = member.guild.channels.cache.get('866362598789873686');
     
        if (!channel) return;
     
        channel.send(`Welkom op de server, ${member}`);
     
    });

}

module.exports.help = {
    name: "JoinRank"
}