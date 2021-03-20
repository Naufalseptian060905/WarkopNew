const { MessageFlags } = require("discord.js");

module.exports = {
    name: 'say',
    category: 'owner',
    description: 'OWNER ONLY!',

run: async (client, message, args) => {

        if(message.author.id !== `537238881083326505`) return message.reply('only Developer!')
  .then(msg => {
    msg.delete({ timeout: 10000 })
  })

        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }


}