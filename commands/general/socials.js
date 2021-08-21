const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "socials",
    aliases: ['pages'],
    cooldown: 10000,
    description: "Links to all the social pages",
    execute(message, args, client, Discord, cmd){
     socialEmbed = new Discord.MessageEmbed()
     .setColor("#f55ffa")
     .setTitle('Social Pages')
     .setURL('https://flow.page/ssgclan')
     .addField("Instagram", "https://www.instagram.com/official.ssg.clan")
     .addFields(
         {name: "Twitter", value: "https://www.twitter.com/officialssgclan"},
         {name: "YouTube", value: "https://www.youtube.com/officialssgclan"}
     )
     .setImage('https://cdn.discordapp.com/avatars/522873359520759838/16d32847c4dce920fb50f9a8a6586e7c.png')
     .setThumbnail('https://cdn.discordapp.com/avatars/663544019325943840/84159f7aa537faae8c29015e6f97a802.png')
     .setAuthor('SSG Superstitch', 'https://cdn.discordapp.com/avatars/662002759289143326/5860b6c85f9ab7bf654479119bf19027.png')
     .setTimestamp()
     .setFooter('Tutorial bot', 'https://cdn.discordapp.com/embed/avatars/0.png')

     message.channel.send(socialEmbed)
    }
}