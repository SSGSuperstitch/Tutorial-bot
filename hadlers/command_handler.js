const fs = require('fs')

module.exports = (client, Discord) => {

    const load_dir = (dirs) => {
        const commandFiles = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('js'))

 for(const file of commandFiles){
    const command = require(`../commands/${dirs}/${file}`);

    client.commands.set(command.name, command)
}
    }
    ['general', 'staff'].forEach(e => load_dir(e))
}