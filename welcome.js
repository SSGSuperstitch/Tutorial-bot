module.exports = (client) => {
    const Discord = require('discord.js')
    client.on('guildMemberAdd', (member) => {
        const user = member.user
        const channelID = member.guild.channels.cache.find(ch => ch.name === 'welcome')
        const ruleID = member.guild.channels.cache.find(ch => ch.name === 'rules')
        const guild = member.guild.id 

        const memberEmbed = new Discord.MessageEmbed()
        .setTitle(`Welcome to the ${member.guild.name} server`)
        .addField(`Username`, `${user.tag}`)
        .addField(`Please Read the rules`, `${ruleID}`)
        .setColor('#1367ed')
        const role = member.guild.roles.cache.find(role => role.name === 'Members')
        member.roles.add(role)
        channelID.send(memberEmbed)
    })
    client.on('guildMemberRemove', (member) => {
        const monitorID = member.guild.channels.cache.find(ch => ch.name === 'server-status')
        const guild = member.guild.id 

        const memberEmbed = new Discord.MessageEmbed()
        .setTitle(`bye to the ${member.guild.name} server`)
        .addField(`Username`, `<@${member.id}>`, true)
         .setColor('#1367ed')
    
        monitorID.send(memberEmbed)
    })
}