const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      const dirEmojis = {
        moderation: "⚙ | ",
        info: ':page_with_curl: | ',
        owner: "<a:king:822693382202851338> | ", 
        utility: "🔥 | ",
      }
      readdirSync("./commands/").forEach((dir) => {
        const editedName = `${dirEmojis[dir]} ${dir.toUpperCase()}`;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Tidak ada nama command.";

          let name = file.name.replace(".js", "");

          return `**${name}** | `;
        });

        let data = new Object();

        data = {
          name: editedName,
          value: cmds.length === 0 ? "Sedang proses." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Butuh bantuan?Lihat command dibawah:")
        .addFields(categories)
        .setDescription(
          `Gunakan \`${prefix}help\` Untuk melihat informasi lebih detail dengan cara: \`${prefix}help [command]\`.`
        )
        .addField(`Invite Bot  ||Join Server`,`[Click disini](https://discord.com/api/oauth2/authorize?client_id=810741403847229460&permissions=64518&scope=bot)||[Click Disini](https://discord.gg/DETNV3jZSV)`)
        .setFooter(
          `Request dari ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Gunakan \`${prefix}help\` untuk melihat semua command`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("<a:kanan:822694078856298596>PREFIX:", `\`${prefix}\``)
        .addField(
          "<a:kanan:822694078856298596>COMMAND:",
           command.name ? `\`${command.name}\`` : "Tidak ada nama untuk command ini."
        )
        .addField(
          "<a:kanan:822694078856298596>ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Tidak ada aliases ditemukan."
        )
        .addField(
          "<a:kanan:822694078856298596>USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "<a:kanan:822694078856298596>DESCRIPTION:",
          command.description
            ? command.description
            : "Command ini tidak memiliki deskripsi."
        )
        .setFooter(
          `Requested dari ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};
