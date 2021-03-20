module.exports = {
    name : 'clear',
    aliases : ['purge'],
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNEL')) return message.channel.send('kamu tidak memiliki permisiion')
        if(!args[0]) return message.channel.send('Tolong lebih lengkap berapa pesan yg akan dihapus(1-99)')
        if(isNaN(args[0])) return message.channel.send('hanya nomber yg sudah ditentukan')
        if(parseInt(args[0]) > 99) return message.channel.send('maximal pesan yg dapat dihapus adalah 99')

            await message.channel.bulkDelete(parseInt(args[0]) + 1)
                 .catch(err => console.log(err))
            message.channel.send(`Deleted ${args[0]} message!`).then(m => m.delete({ timeout : 5000}))
    }
}