var Discord = require("discord.js");

var bot = new Discord.Client();

var fs = require('fs');

var prefix = "["

var owner = "Put your id here"

var request = require("request")

var TinyURL = require('tinyurl');

bot.on("message", function(message)
{
    
	var input = message.content.toUpperCase();
	
if(input.startsWith(prefix + "PMSAY"))
    {
        var mes = message.content.split(" ").slice(2).join(" ");
        var user = message.mentions[0];
        var server = message.server.name;
        bot.sendMessage(user, "``" + mes + "``" + " sent by ``" + message.sender.username + "`` in the server ``" + server + "``. To message him back, go to a server with the Megaline's bot added to it and type ``[PmSay (user) (message)`` or just privately message him back.");  
    }
if(input.startsWith(prefix + "SAY"))
    {
        var mes = message.content.split(" ").slice(1).join(" ");
        bot.sendMessage(message, mes);  
    }
    if(input == prefix + "PMSAY")
    {
    bot.sendMessage(message, "``The format for this command is``\n" + "```xl\n" + prefix + "pmsay (user) (message)\n" + "```");
    }
    if(input.startsWith(prefix + "SHORTEN HTTP://"))
    {
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    TinyURL.shorten(mes, function(res) {
    bot.sendMessage(message, res)
        }
    )};
    if(input.startsWith(prefix + "SHORTEN HTTPS://"))
    {
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    TinyURL.shorten(mes, function(res) {
    bot.sendMessage(message, res)
        }
    )};
    if(input.startsWith(prefix + "USERLIST"))
    var lma = parseInt(message.content.split(" ").slice(1).join(" "));
    var mes = "";
    for(var i=0; i<=lma; i++){
     mes += (i + 1) + ". " + message.server.members[i].username + "\n";
    }
    if(input === prefix + "LOGOUT")
    {
        bot.sendMessage(message, ":clap:")
        setTimeout(() => { bot.logout() }, 250)
    }
    if(input === prefix + "CREDITS")
    {
        bot.sendMessage(message, "A huge thank you to Zelalk312. He helped with ALOT of the complex coding And IAmMambaRific.");
    }
    if(input === prefix + "INFO")
    {
        bot.sendMessage(message, message.sender.createdAt);
    }
if (input.startsWith(prefix + "MEME")) {
        var image = message.content.split(" ")[1];
        var line1 = message.content.split(" ")[2];

        var line2 = message.content.split(" ")[3];

        var url = "http://memegen.link/" + image + "/" + line1 + "/" + line2 + ".jpg";
        bot.sendMessage(message, "Here is your meme:");
        bot.sendMessage(message, url);

        if (image === "undefined") {
            bot.reply(message, "Here is a list of meme images");
        }

    }
    if (input.startsWith(prefix + "EVAL")) {

        if (message.sender.id != owner) return bot.sendMessage(message, "No perms!")

            var code = message.content.split(" ").splice(1).join(" ")

            try {


                bot.sendMessage(message, "​`\`\`xl\n" + 
                "The Result· " + eval(code) +  "​`\`\`");
     
                

            } catch (err) {

                bot.sendMessage(message, 
                "`\`\`xl\n" + 
                "Error· " + err + "`\`\`")

            }
    }
    if(input === prefix + "FORCERESTART") {

        if (message.sender.id === "115487467783716873") {

             bot.logout()
            bot.loginWithToken("MTg4ODA1MTUxMDE0NzgwOTI4.Coy96g.TXhzMxE7LxtER0lDvnVI3Hn22zA")
            setTimeout (() => { bot.sendMessage(message, "succesfully restarted!") }, 2500)
            console.log("the bot has been restarted succesfully");
        }
    }
    var input = message.content.toUpperCase();
    if(input === "[QUOTE") {
    var mes = ["```me its when someone say Im a shit I can't be good and Im saying to her how do you know? anyone can't know the future but you can build your own future so you will be good if you are motivated```- ZelAk312", "```java\nmy friend said to me \n\"you should quit rocket league\" \nI said why? and he said \n\"you should be a motivate speaker\"``` - ZelAk312", "```You can't go on without any help, you start somewhere and you never end. There's always more to be taught.``` - Mega The line", "```Someone asked me what i wanted to be when i growed up, my response, fuck off pedophile``` ``- Mamba``", "```Do whatever the fuck you want cuz youl never live life like you want if you dont``` ``- Coocla33``"];
    bot.sendMessage(message, mes[Math.floor(Math.random() * mes.length)]);
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "GOOGLE")) {
    bot.sendMessage(message, "http://lmgtfy.com/?q=" + mes)
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "IMAGES")) {
    bot.sendMessage(message, "https://www.google.com/search?site=&tbm=isch&source=hp&biw=2560&bih=1274&q=" + mes)
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "SHOP")) {
    bot.sendMessage(message, "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + mes)
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "WIKI")) {
    bot.sendMessage(message, "https://en.wikipedia.org/wiki/" + mes)
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "YOUTUBE")) {
    bot.sendMessage(message, "https://www.youtube.com/results?search_query=" + mes)
    }
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    if(input.startsWith(prefix + "NEWS")) {
    bot.sendMessage(message, "https://www.google.com/search?hl=en&gl=us&tbm=nws&authuser=0&q=" + mes)
    }
    if(input.startsWith(bot.user.mention())) {
    bot.sendMessage (message, "For commands go to http://megalinebot.weebly.com/commands.html and the prefix is \[")
    }
    if(input === prefix + "LONELY")
    {
 bot.reply(message,"http://previews.123rf.com/images/aabbc/aabbc1203/aabbc120300245/12963531-Sticky-note-on-a-laptop-keyboard-with-I-am-so-lonely--Stock-Photo.jpg");
    }
    if(input.startsWith(prefix + "USERINFO"))
    {// what I have something more easier oh
        var user = message.mentions[0];
        if(user == null){
            user = message.sender;
        }
        var username = "-" + user.username
        var id = "-" + user.id.toString();
        var createdat = "-" + user.createdAt.toDateString();
        var join = message.server.detailsOfUser(user).joinedAt;
        var join = "-" + new Date(join).toDateString();
        var nick = "-" + message.server.detailsOfUser(message.sender).nick;
        //first for the math I will get all the length of the infos ex: test == 4 because of t,e,s,t
        if(nick != "-null"){
        var lengthss = [username.length, id.length, createdat.length, join.length, nick.length]
        }else var lengthss = [username.length, id.length, createdat.length, join.length]//this is because semetimes nick is null so you will get an error if you try to get is length
        //now we want to get the bighest length 
        var bigest = lengthss.sort(function(a, b){return b-a}); //this is to return the biggest one at possition 0
        //third, you want to get all the message (hardest part of the math)
        var mes = message.content.split(" ").slice(1).join(" ");
        var mes1 = username + " ".repeat((parseInt(bigest[0]) - username.length));//this will get the bigger length of all the info then subtracted the username length 
        var mes2 = id + " ".repeat((parseInt(bigest[0]) - id.length));
        var mes3 = createdat + " ".repeat((parseInt(bigest[0]) - createdat.length));
        var mes4 = join + " ".repeat((parseInt(bigest[0]) - join.length));
        var mes6 = bot.users.get("username", mes)
        var trying = "";
        var string = "═".repeat(parseInt(bigest[0]));
        if(nick != "-null"){
            var mes5 = nick + " ".repeat((parseInt(bigest[0]) - nick.length));
            var trying = "╠═══════════╬"+string+"╣\n" + "║Nick       ║" + mes5 + "║\n";
        }
        //to get the right number of "═"
        bot.sendMessage(message,
        "```xl\n" +
        "╔═══════════╦"+string+"╗\n" +
        "║Name       ║" + mes1 + "║\n" +
        "╠═══════════╬"+string+"╣\n" +
        "║ID         ║" + mes2 + "║\n" +
        "╠═══════════╬"+string+"╣\n" +// you can continue I think :)
        "║CreatedAt  ║" + mes3 + "║\n" +
        "╠═══════════╬"+string+"╣\n" +
        "║JoinedAt   ║" + mes4 + "║\n" +
        trying +
        "╚═══════════╩"+string+"╝\n" +
        "```\n" +
        user.avatarURL
        )
    }

});

bot.loginWithToken("Insert token here");
