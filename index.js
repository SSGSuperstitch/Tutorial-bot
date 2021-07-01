const Discord = require('discord.js');
const {
    token,
    prefix,
} = require('./config.json')
const fs = require('fs')
const got = require('got')

const client = new Discord.Client()

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log(`Logged om as ${client.user.tag}`)
});


client.on("message", message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  if (command === 'ping'){
      client.commands.get('ping').execute(message, args)
  }

  if (command === 'socials'){
      client.commands.get('socials').execute(message, args, Discord)
  }

  if (command === 'meme'){
    client.commands.get('meme').execute(message, args, got, Discord)
}

    if (command === 'purge'){
        client.commands.get('purge').execute(message, args)
    }

    if (command === 'warn'){
        client.commands.get('warn').execute(message, args, Discord)
    }
   
    if (command === 'kick'){
        client.commands.get('kick').execute(message, args)
    }
    
    if (command === 'ban'){
        client.commands.get('ban').execute(message, args, client)
    }

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }

})






client.login(token)