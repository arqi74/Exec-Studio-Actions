const Discord = require('discord.js');
exports.run = (client, message, args) => {
	var embed = new Discord.RichEmbed()
		.setColor(7442128)
		.setTitle("Pamiętaj aby podczas używania komendy pingować usera. Przykład: -hug @arwi74")
		.setAuthor("Command list", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Help_icon-72a7cf.svg/2000px-Help_icon-72a7cf.svg.png", "")
		.setAuthor("Discord Devs Production | arwi74", "https://i.imgur.com/aqyhN1x.png")
		.setTimestamp(message.createdTimestamp)
		.setFooter("Request send by: "+message.author.username, "https://i.imgur.com/aqyhN1x.png");

	var commands = ["cat", "dab", "dance [user]", "hug [user]", "kiss [user]", "loli", "neko", "pat [user]", "pepe", "poke [user]", "wave [user]"];
	var description = ["Wszyscy lubimy kotki ^.^", "Rób niemodny taniec już dziś", "Potańczymy?", "Przytulaj kogo tylko chcesz", "Buziaki są spoko :3", "Każdy lubli loli", "A podobno ideały nie istnieją", "*Pat Pat* ^.^", "So Sad Peppo", "Zaznaj trochę ts3 na discordzie", "Pomachaj, bo czemu nie :V"];
	for(i=0; i<commands.length; i++) {
		embed.addField("-"+commands[i], description[i]);
	}

	message.reply(embed);
}