module.exports = {
    name: 'userinfo',
    description: 'get user info',
    execute(message, args, client, Discord, cmd){
        const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)


const userembed = new Discord.MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .setThumbnail( user.displayAvatarURL())
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },

        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        },
        {
          name: 'Highest Role',
          value: member.roles.highest.name
        },

        


      )
      message.channel.send(userembed)

}
}