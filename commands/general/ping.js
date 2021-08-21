module.exports = {
    name: "ping",
    description: "This is a ping command",
    execute(message, args, client, Discord, cmd){
        message.channel.send('Pong!')
    }
}