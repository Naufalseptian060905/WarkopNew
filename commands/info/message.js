module.exports = {
    name : 'message',
    aliases : ['msg'],
    run : async(client, message) => {
        message.channel.send('Hi there!')
    }
}