const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = (client, message, args) => {

var arg = args[0];
if(arg != null) {
    arg = arg.replace('<', ''); // Basic start tag remove
    arg = arg.replace('@', ''); // Classic user nickname remove
    arg = arg.replace('!', ''); // Used nametag remove
    arg = arg.replace('>', ''); // Basic end tag remove
}

if(args == undefined) {
    var embed2 = new Discord.RichEmbed()
        .setTitle("ERROR: NO USER FOUND!")
        .setColor("GOLD");
    message.channel.send(embed2);
    return;
} else if(args == undefined) {
    var embed2 = new Discord.RichEmbed()
        .setTitle("ERROR: NO USER FOUND!")
        .setColor("GOLD");
    message.channel.send(embed2);
    return;
}

var tag = client.users.get(arg);
var autor = message.author.username;

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
    return;
}

function tenorCallback_search(responsetext)
{
    var response_objects = JSON.parse(responsetext);
    top_10_gifs = response_objects["results"];
    var random = Math.floor((Math.random() * 50));
    var a = top_10_gifs[random]["media"][0]["tinygif"]["url"];
    var embed = new Discord.RichEmbed()
        .setTitle("<:heart:535858243491069972> **"+autor+"** tańczy z **"+tag.username+"** ^-^")
        .setColor(7442128)
        .setAuthor("Discord Devs Production | arwi74", "https://i.imgur.com/aqyhN1x.png")
        .setImage(a)
        .setTimestamp(message.createdTimestamp)
        .setFooter("Powered by Tenor | Request send by "+autor, "https://tenor.com/assets/img/tenor-app-icon.png");
    message.channel.send(embed);
    return;
}

function grab_data(anon_id)
{
    var apikey = "IECJUJJ2ANEK";
    var lmt = 50;
    var search_term = "anime dance";
    var search_url = "https://api.tenor.com/v1/search?tag=" + search_term + "&key=" +
            apikey + "&limit=" + lmt + "&anon_id=" + anon_id;

    httpGetAsync(search_url,tenorCallback_search);
    return;
}

function tenorCallback_anonid(responsetext)
{
    var response_objects = JSON.parse(responsetext);
    anon_id = response_objects["anon_id"];
    user_anon_id = anon_id;
    grab_data(anon_id);
}

var url = "https://api.tenor.com/v1/anonid?key=" + "IECJUJJ2ANEK";
httpGetAsync(url,tenorCallback_anonid);
}