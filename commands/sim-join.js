module.exports = {
    name: 'sim-join',
    description: 'sim-join',
    execute(message, args, client){
        client.emit('guildMemberAdd', message.member)
    }
}