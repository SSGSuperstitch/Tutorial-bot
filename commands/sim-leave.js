module.exports = {
    name: 'sim-leave',
    description: 'sim-join',
    execute(message, args, client){
        client.emit('guildMemberRemove', message.member)
    }
}