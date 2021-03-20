const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require("moment");
module.exports = {
    name: 'serverinfo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const guild = message.guild;
        const embed = new MessageEmbed()
             .setTitle(message.guild.name)
             .setThumbnail(message.guild.iconURL())
             .setColor("RANDOM")
             .addField('General info', [
                 `ID: ${message.guild.id}`,
                 `Name: ${message.guild.name}`,
                 `Owner: ${message.guild.owner}`
             ])
             .addField('Counts', [
                 `Role: ${guild.roles.cahce.size} roles`,
                 `Channels: ${
                     guild.channels.cahce.size
                    }total (Text: ${guild.channels.cahce.filter(
                        (ch) => ch.type === "text"
                    ).size}, Voice: ${guild.channels.cahce.filter(
                        (ch) => ch.type === "voice"
                    ).size})`,
                        `Emojis: ${guild.emojis.cahce.size} (Reguler: ${guild.emojis.cahce.filter((e) => !e.animated).size}, Animated: ${guild.emojis.cahce.filter((e) => e.animated).size})`,
             ])
             .addField("Additional information", [
                    `Created: ${moment(guild.createdTimestamp).format("LT")} ${moment(guild.createdTimestamp).format("LL")} ${moment(guild.createdTimestamp).fromNow()}`,
                     `Region: ${guild.region}`,
                     `Boost Tier: ${guild.premiumTier ? `Tier ${guild.premiumTier}` : "None"}`,
                     `Boost Count: ${guild,premiumSubscriptionCount || "0"}`
             ]);

             message.channel.send({ embed });
    },
};