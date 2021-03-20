const discord = require('discord.js');
module.exports = {
    name: "restart",
    description:"untuk merestart bot",
    run: async (client, message, args) => {
        if (message.author.id !== '537238881083326505') {
            return message.reply(`Kamu Tidak Bisa Menggunakan Command Ini!`)
        }
        await message.reply(`Restarting bot...`)
        process.exit(1);
    }
}