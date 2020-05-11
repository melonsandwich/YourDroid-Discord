const ROLE_REQUEST_CHANNEL = "708738776700026950";
const ROLE_VERIFICATION_MESSAGE = "708750752830586992";

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setStatus('idle');
    client.user.setActivity("YourDroid", { type: "PLAYING"});
});

client.on('message', async msg => {
    if (msg.content === "yd help")
    {
        msg.reply("i can't help you sorry :(");
    }
    else if (msg.content === "dm me")
    {
        msg.author.send("no.");
    }
    else if (msg.channel.id == ROLE_REQUEST_CHANNEL)
    {
        if (msg.content === "verify me")
        {
            //msg.member.roles.add(msg.guild.roles.cache.find(role => role.name === "⸺⸺⸺⸺⸺⸺⸺"));
            msg.member.roles.add(msg.guild.roles.cache.find(role => role.name === "Member"));
            msg.channel.send("Congrats, **" + msg.author.tag + "**! Now you're a member of the **server**!");
        }
        else if (!msg.author.bot)
        {
            msg.delete();
        }
    }
});

client.login(process.env.API_TOKEN);