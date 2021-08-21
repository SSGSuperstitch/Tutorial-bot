const { Collection } = require('discord.js');
const Timeout = new Collection()
const ms = require('ms')

module.exports = async (Discord, client, message) => {
    
    const prefix = "!"
    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return message.channel.send('This bots prefix is !')

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.find(a=> a.aliases && a.aliases.includes(cmd)) || client.commands.get(cmd)
    if(!command) return message.channel.send(`!${cmd} is not a command`)

    if(command.cooldown) {
        if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now() , {long: true})}\` cooldown.`)
        command.execute(message, args, client, Discord, cmd)
        Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
        setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`)

        }, command.cooldown)

        
    }else command.execute(message, args, client, Discord, cmd)
}