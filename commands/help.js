module.exports = {
    name: 'help',
    description: 'recive a list of commands',
    execute(message, args, Discord){
        const fs = require('fs')

        let general = '';
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

        for(const file of commandFiles){
            const command = require(`./${file}`);
            general += `${command.name} : ${command.description} \n`
        }

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#48f7f7')
        .setTitle('Tutorial Bot Commands')
        .setAuthor('SSG', 'https://cdn.discordapp.com/avatars/765321761041547295/44c111bd6a8fd98bd9b7b5882c421d5a.webp')
        .addFields(
            {name: "Ganeral Commands", value: general},
            {name: 'For more dm SSG Superstitch' , value: 'https://flow.page/superstitch \n https://flow.page/ssgclan'}
        )
        .setTimestamp()
        .setFooter('SSG Superstitch', 'https://images-ext-2.discordapp.net/external/r5bVamPhjqF3z8AUW7rCkjVwATzGOWyrfp8kFDROHKk/https/cdn.discordapp.com/avatars/522873359520759838/4b2488fbb0a50e8f285db37e5d2463ce.webp')
        message.author.send(helpEmbed)
    }
    };