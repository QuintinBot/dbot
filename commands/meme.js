const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

    fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(respOmgevorm => {

        var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
        var memeUrl = `https://www.reddit.com${permaLink}`;
        var memeFoto = respOmgevorm[0].data.children[0].data.url;
        var memeTitle = respOmgevorm[0].data.children[0].data.title;

        var embed = new discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setImage(`${memeFoto}`)
        .setColor('RANDOM');

    message.channel.send(embed);

    }).catch("errpr", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "meme"
}