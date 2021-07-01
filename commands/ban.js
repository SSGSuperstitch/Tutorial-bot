const Discord = require('discord.js');


module.exports = {
    name: 'ban',
    description: 'warn a member',
   execute(message, args, client){
    
        if(message.member.roles.cache.has('789309025593720832')){
            let user = message.guild.member(message.mentions.users.first())
            let dm = message.mentions.users.first()
            
            if (!user) return message.channel.send('invalid user')
            let kickReason = args.join(" ").slice(22);
            if(!kickReason){
                kickReason = 'none'
            }

            const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`You Have benn kicked from the ${message.guild.name} server`)
            .addFields(
                {name: 'user' , value: `${user}`},
                {name: 'Reason' , value: kickReason}
            )
            .setColor('#e6001f')
            dm.send(kickEmbed)
            user.ban({reason: kickReason})
            message.channel.send('Copy:\n' , kickEmbed)
        }else
            message.channel.send('only staff can kick members')
        }
    }
