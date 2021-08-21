module.exports = {
    name: 'purge', 
    aliases: ['clear'],
    cooldown: 20000,
    description: 'Delete messages in channel',
    async execute(message, args, client, Discord, cmd){
        const amount = parseInt(args[0]) + 1;

        if(message.member.roles.cache.has('789309025593720832')){
            try{
                message.channel.bulkDelete(amount , true).catch(err => {
                    console.log('there was an error')
                    message.channel.send('could not purge messages')
                });
            }catch (err){
                if (isNaN(amount)){
                    return message.reply('that is not a number')
                } else if (amount <= 2 || amount > 100){
                    return message.reply('The number must be between 2 and 100')
                }
                
            }
        }
        else{
            message.channel.send('only staff can purge messages')
        }
    }
}