const welcome = require('../../welcome')
const censor = require('../../censor')

module.exports = (Discord, client) => {
            welcome(client)
            censor(client)
            console.log(`Logged in as ${client.user.tag}`)

            client.user.setActivity('Music', {
                type: 'PLAYING'
            })


}
