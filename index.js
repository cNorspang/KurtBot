const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjI0MjMyODk2ODU2NzE5Mzcw.XYOAZQ.4q0FA_jfwn-uCxCdg3oDsMSns-o';

var mysql = require('mysql');

var brillestatus = "oppe";
var today = new Date();
var month = today.getMonth() + 1
var date = (today.getDate() + '-' + month); 

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "YlQwluews0",
    password: 'UmmLJBekxU',
    database: "YlQwluews0"
});

con.connect(function (err) {
    if (err) throw err;
});

console.log(date);

bot.on('ready', () => {
    console.log('The bot online');
})

//Svare tilbage med 'Fader Kurt'
bot.on('message', msg=>{
    if (msg.author.bot) return;
    if(msg.content === "!FaderKurt"){
        console.log('Udføre: FaderKurt')
        msg.reply("\nFader Kurt\nDu som er på uni\nHellige pointer din addresse\nKomme din reference\nSke din vilje som i koden,\nsåledes også i compileren\nGiv os i dag vores daglige malloc\nog forlad os vores segmentation - faults,\nsom også vi forlader vores medprogrammører\nThi dit er C, og Emacs, og IMPR\nI alt evighed\nAmen.");
    }
})

//Forklare kort sproget C
bot.on('message', msg=>{
    if (msg.author.bot) return;
    if(msg.content === "!c"){
        console.log('Udføre: C\'s hellige sætning')
        msg.reply("C is terse, low-level and permessive");
    }
})

//Rykker KurtBots briller op eller ned
bot.on('message', msg=>{
    if (msg.author.bot) return;
    if(msg.content.toLowerCase() === "!rykbrillerop" || msg.content.toLowerCase() === "!rykbrillerned"){
        msg.reply("*click*")
        if(msg.content.toLowerCase() === "!rykbrillerop"){
            console.log('Udføre: Ryk briller op')
            brillestatus = "oppe"
        }
        else{
            console.log('Udføre: Ryk briller ned')
            brillestatus = "nede"
        }
    }
})

//Svare på hvor på hovdet KurtBots briller sidder
bot.on('message', msg=>{
    if (msg.author.bot) return;
    if(msg.content === "!brillestatus"){
        console.log('Udføre: Brillestatus')
        msg.reply(brillestatus)
    }
})

//Bruger du en IDE? Kurt græder
bot.on('message', msg=>{
    if (msg.author.bot) return;
    if(msg.content.toLowerCase().includes('IDE') || msg.content.toLowerCase().includes('vscode') || msg.content.toLowerCase().includes('visual studio')|| msg.content.toLowerCase().includes('sublime')){
        console.log('Udføre: Bible_kurt')
        msg.react("624580114390319134")
    }
})

//Skriver en hjælpe menu, der lister alt hvad KurtBot kan hjælpe med
bot.on('message', msg =>{
    if (msg.author.bot) return;
    if(msg.content.toLowerCase() === "!hjælp"){
        console.log('Udføre: Hjælpemenu')
        msg.reply('Her er en liste over ting jeg kan hjælpe med, du skal bare skrive !hjælp "emne"\n\
        Scanf\n\
        Prinf\n\
        Konstant\n\
        Modulo(%)\n\
        Inkrement(++)\n\
        Dekrement(--)\n\
        ')
    }
})

//Svare tilbage med et link til en specifik funktion i C
bot.on('message', msg =>{
    if (msg.author.bot) return;
    if(msg.content.toLowerCase().includes('!hjælp')){
        if (msg.content.toLowerCase().includes('scanf')){
            console.log('Udføre: Scaf link')
            msg.reply('Her er en guide til hvordan man kan bruge scanf: https://youtu.be/IDLNZ82ar9w')
        }
        if (msg.content.toLowerCase().includes('printf')){
            console.log('Udføre: Printf link')
            msg.reply('Her er en guide til hvordan man kan bruge printf: https://youtu.be/c3phCPF-Hx8')
        }
        if (msg.content.toLowerCase().includes('konstant')){
            console.log('Udføre: Konstant link')
            msg.reply('Her er en guide til hvordan man kan bruge konstanter i C: https://youtu.be/1LsPv13-i80')
        }
        if (msg.content.toLowerCase().includes('modulo') || msg.content.toLowerCase().includes('%')){
            console.log('Udføre: Modulo link')
            msg.reply('Her er en guide til hvordan man kan bruge modulo(%) operatoren i C: https://youtu.be/EHHybuqQgbA')
        }
        if (msg.content.toLowerCase().includes('inkrement') || msg.content.toLowerCase().includes('dekrement') || msg.content.toLowerCase().includes('--') || msg.content.toLowerCase().includes('++')){
            console.log('Udføre: Inkrement og dekrement link')
            msg.reply('Her er en guide til hvordan du kan bruge inkrement(++) og dekrement(--) operatorene i C: https://youtu.be/rVqDNi5FUug')
        }
        if (msg.content.toLowerCase().includes('and') || msg.content.toLowerCase().includes('&&') || msg.content.toLowerCase().includes('or') || msg.content.toLowerCase().includes('||')){
            console.log('Udføre: Logiske operatore link')
            msg.reply("Her er en guide til hvordan du kan bruge logiske operatore i C: https://youtu.be/e5kPsWhpY4A")
        }
    }
})

bot.on('message', msg =>
{
    if(msg.author.bot) return;
    if(msg.content.toLowerCase() === "!føzdag")
    {
        let role = msg.guild.roles.find(r => r.name === "Fødselar");
        let member = msg.member;

        con.query("SELECT name, birthday FROM users WHERE name ='" + member.displayName + "'", function(err, result){
            if (err) throw err;

            if (result.length === 0){
                if(result){
                    console.log("test");
                    con.query("INSERT INTO users (name, birthday) VALUES ('" + member.displayName + "', '" + date + "')", function(err1, result1){
                        if (err1) throw err1;

                        con.query("SELECT name, birthday FROM users WHERE name ='" + member.displayName + "'", function (err2, result2){
                            if (err2) throw err2;

                            if (result2.length > 0){
                                console.log("Saved the user with the name " + result2[0].name + " with the birthday " + result2[0].birthday);
                            }
                        }
                )})
                }
            }

            else if (result.length > 0){
                msg.reply("Your name is already saved in the database, with the birthday " + result[0].birthday)
            }
        })
    }
})

bot.on('message', msg =>
{
    if(msg.author.bot) return;
    const server = msg.guild;
    let role = msg.guild.roles.find(r => r.name === "Fødselar");
    con.query("SELECT name FROM users WHERE birthday = '" + date + "'", function(err, result){
        //console.log(result[0].name);
        if (err) throw err;
        if (result.length > 0){

            server.members.forEach(member => {
                if (member.user.username === result[0].name)
                {
                    if(!(member.roles.find(r => r.name === 'Fødselar'))){
                        console.log("Giver fødselsdagsrollen til " + result[0].name)
                        member.addRole(role);
                    }
                }
                
                else{
                    if (member.roles.find(r => r.name === 'Fødselar')){
                    console.log("Fjerner fødselsdagsrollen fra " + member.user.username);
                    member.removeRole(role);
                }}
            });
        }

        else if (result.length === 0){
            server.members.forEach(member => {
                if (member.roles.find(r => r.name === 'Fødselar')) {
                    console.log("Fjerner fødselsdagsrollen fra " + member.user.username);
                    member.removeRole(role);
                }
            })
        }
        

    })

    
}
) 

bot.login(token);