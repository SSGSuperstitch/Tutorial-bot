module.exports = {
    name: 'sim-join',
    description: 'sim-join',
    execute(message, args, client, Discord, cmd){
        client.emit('guildMemberAdd', message.member)
    }
}