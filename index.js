const Discord = require('discord.js');
const {
    token,
    prefix,
} = require('./config.json')

const client = new Discord.Client()


client.once('ready', () => {
    console.log(`Logged om as ${client.user.tag}`)
});










client.login(token)