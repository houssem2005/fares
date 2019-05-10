const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("https://discord.gg/mwYuzf")
setInterval(function() {
channel.send(`Fares manba3ou credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
