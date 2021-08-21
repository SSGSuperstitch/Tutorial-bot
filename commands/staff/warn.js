const Discord = require('discord.js')

module.exports = {
    name: 'warn',
    description: 'warn a member',
    async execute(message, args, client, Discord, cmd){
        edited = message.content.slice(5);

        const guildID = message.guild.Discord
        const UserId = message.member.Discord
        const Reason = args.splice(1).join('')
        let User = message.mentions.users.first()

        if(message.member.hasPermission('MUTE_MEMBERS')){
            try{
                member = await message.guild.members.find(message.mentions.users.first())

            }catch(err){
                    var warnEmbed = new Discord.MessageEmbed()
                    .setTitle("**Warn**")
                    .setColor("#e6001f")
                    .addField("User:", User, true)
                    .addField("Reason:", Reason, true)
                    .addField("To do:", "Re-Read the Rules!")
                    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGagFW_bh2AfgI1BqAis81CXVg37j8_MKtwg&usqp=CAU")
                    .setTimestamp()
            }
            try{
                User.send(warnEmbed)
                message.channel.send(warnEmbed)
            }
            catch(err){
                return(message.reply('You must format the command <@mention> <reason>'))
            }
        }
        else{
            message.channel.send('only staff can do this')
        }
        }
    }