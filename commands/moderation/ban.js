module.exports = {
    name : 'ban',
    run : async(client,message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channels.send('I dont have permission');

        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to ban');

        await Member.kick({ reason : args.slice(1).join(" ")})

        message.channel.send(`${Member.user.tag} was ban from the server!`)

        
    }
}