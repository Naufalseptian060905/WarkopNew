const Discord = require("discord.js")

module.exports = {
  name : 'sayembed',
    run: async (client, message, args) => {
      
        if(message.author.id !== `537238881083326505`) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Only owner bot!"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
      return;
    }
        let embedtext = args.slice(0).join(" ")
        message.delete()
        if(!embedtext) return message.channel.send("Put the Words First!")

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(embedtext)
        message.channel.send(embed);
    }
}