const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const fs = require("fs");
 
const client = new discord.Client();

client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Kan geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
      console.log(`De file ${f} is geladen`);

      client.commands.set(fileGet.help.name, fileGet);
        
    })

});
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("|| -help || Developer: Quintin#1000 ||", { type: "PLAYING" });
 
});

client.on("messageUpdate", async(oldMessage, newMessage) => {

    if(newMessage.author.bot) return;

    var embed = new discord.MessageEmbed()
    .setAuthor(`${newMessage.author.tag} (${newMessage.author.id})`, newMessage.author.avatarURL({size: 4096}))
    .setDescription(`Bericht ${newMessage.id} is bewerkt in ${newMessage.channel}\n **Voor:** ${oldMessage.content}\n **Nu:** ${newMessage.content}`)
    .setTimestamp()
    .setColor("GREEN")

    client.channels.cache.get('866393131732959253').send;
});

var swearWords = ["Kanker", "kanker"];

client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;

    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearWords.length; i++) {

        if(msg.includes(swearWords[i])){

            message.delete();

            return message.reply("Niet schelden aub!").then(msg => msg.delete({timeout: 3000}));

        }

    }

    

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefix: botConfig.prefix
        };

    }

    var prefix = prefixes[message.guild.id].prefix;


   // var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client,message, arguments);

});

client.on("messageDelete", messageDeleted => {

    if(messageDeleted.author.bot) return;

    var content = messageDeleted.content;
    if(!content) content = "Geen bericht gevonden.";

    var respone = `Bericht ${messageDeleted.id} is verwijderd uit ${messageDeleted.channel}\n **Bericht:** ${content}`;

    var embed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.id} ${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({size: 4096})}`)
        .setDescription(respone)
        .setTimestamp()
        .setColor("ORANGE");
//Naam van het kanaal
    client.channels.cache.find(c => c.name == "logs").send(embed);


});

client.login(process.env.token);
