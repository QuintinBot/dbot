const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    try{
//var text = alle regels. \n = een nieuwe regel.
        var text = "**Welkom bij de commands van Pieter Knolraap Bot!** \n \n **__Normale Commands__** \n 1. -info = Info van de Knolraap Army server. \n 2. -serverinfo = Geeft aan wanneer je de Knolraap Army bent gejoined. \n 3. -ping = Je ping in de server. \n 4. -leden = Je ziet hoeveel mensen in de Knolraap Army zitten.  \n \n **__Spelletjes__** \n 1. -dobbel = Lekker dobbelen! \n 2. -kopofmunt = Weddenschap doen? Wat kies je... Kop of Munt? \n 3. -meme = Lekker kijken naar meme's! \n \n **__Admin Commands__**  \n 1. -tempmute = Iemand muten voor een bepaalde tijd. \n 2. -warn = Iemand waarschuwen. \n 3. -clear = Berichten weghalen. \n 4. -announcement = Een aankonding doen. \n 5. -kick = Iemand kicken uit Knolraap Army. \n 6. -prefix = De prefix veranderen! \n 7. -lockdown = Jongens! Het kanaal gaat dicht... \n 8. -clear = Paar berichten verwijderen. \n 9. -poll = Een poll aanmaken. \n 10. -unlock = Het kanaal gaat weer open!";
        
        message.author.send(text);

        message.reply("Pssstt... Ik zit in je dm!")

    }catch(error){
        message.reply("Er iets fouts gegaan!");
    }


}
module.exports.help = {
    name: "help"
}