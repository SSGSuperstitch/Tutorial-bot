module.exports = {
    name: "ping",
    description: "A ping command",
    execute(message, args){
        message.channel.send('Pong!')
    }
}