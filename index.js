const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjI0MjMyODk2ODU2NzE5Mzcw.XYOAZQ.4q0FA_jfwn-uCxCdg3oDsMSns-o';

bot.on('ready', () => {
    console.log('The bot online');
})

bot.on('message', msg=>{
    if(msg.content === "!FaderKurt"){
        msg.reply("\nFader Kurt\n Du som er på uni\nHellige pointer din addresse\nKomme din reference\nSke din vilje som i koden,\nsåledes også i compileren\nGiv os i dag vores daglige malloc\nog forlad os vores segmentation - faults,\nsom også vi forlader vores medprogrammører\nThi dit er C, og Emacs, og IMPR\nI alt evighed\nAmen.");
    }
})

bot.login(token);