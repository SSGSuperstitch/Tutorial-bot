module.exports = {
    name: 'sim-leave',
    description: 'sim-join',
    execute(message, args, client, Discord, cmd){
        client.emit('guildMemberRemove', message.member)
    }
}