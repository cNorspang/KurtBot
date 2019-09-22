const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjI0MjMyODk2ODU2NzE5Mzcw.XYOAZQ.4q0FA_jfwn-uCxCdg3oDsMSns-o';

var brillestatus = "oppe";

bot.on('ready', () => {
    console.log('The bot online');
})

//Svare tilbage med 'Fader Kurt'
bot.on('message', msg=>{
    if(msg.content === "!FaderKurt"){
        msg.reply("\nFader Kurt\nDu som er på uni\nHellige pointer din addresse\nKomme din reference\nSke din vilje som i koden,\nsåledes også i compileren\nGiv os i dag vores daglige malloc\nog forlad os vores segmentation - faults,\nsom også vi forlader vores medprogrammører\nThi dit er C, og Emacs, og IMPR\nI alt evighed\nAmen.");
    }
})

//Forklare kort sproget C
bot.on('message', msg=>{
    if(msg.content === "!c"){
        msg.reply("C is terse, low-level and permessive");
    }
})

//Rykker KurtBots briller op eller ned
bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "!rykbrillerop" || msg.content.toLowerCase() === "!rykbrillerned"){
        msg.reply("*click*")
        if(msg.content.toLowerCase() === "!rykbrillerop"){
            brillestatus = "oppe"
        }
        else{
            brillestatus = "nede"
        }
    }
})

//Svare på hvor på hovdet KurtBots briller sidder
bot.on('message', msg=>{
    if(msg.content === "!brillestatus"){
        msg.reply(brillestatus)
    }
})

//Bruger du en IDE? Kurt græder
/*bot.on('message', msg=>{
    if(msg.content.includes('IDE') || msg.content.tolowercase.includes('vscode') || msg.content.toLowerCase.includes('visual studio')|| msg.content.toLowerCase.includes('sublime')){
        msg.react("624580114390319134")
    }
})*/

bot.on('message', msg =>{
    if(msg.content.toLowerCase().includes('!hjælp')){
        if (msg.content.content.toLowerCase().includes('scanf')){
            msg.reply('')
        }
    }
})
bot.login(token);