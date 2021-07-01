module.exports = {
    name: 'kick',
   
    description: "This command kicks a member!",
    
    execute(message, args){
        if (member.hasPermission('KICK_MEMBERS')){
        const target = message.guild.member(message.mentions.users.first())
        if(target){
            target.kick();
            message.channel.send("✅User has been kicked");
        }else{
            message.channel.send(`⛔You coudn't kick that member!`)
          
        }}
        else{
            message.reply('You do not have permission to use this command')
        }
    }
    
}
