module.exports = (client) => {
    client.on("message", async message => {
    let blacklisted = ['test', 'word2']

    let foundInText = false;
    for (var i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

    const { member } = message
    if(foundInText){
        const role = member.guild.roles.cache.find(role => role.name === 'muted')
        message.reply('CENSORED WORD')
        message.delete()
        
        
        member.roles.add(role)

        setTimeout(()=> {
            member.roles.remove(role)
        }, 300)

    }

})}