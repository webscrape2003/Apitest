const config = require('../config')
const {
    cmd,
    commands
} = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const  bot = config.BOTNUMBER;





cmd({
    pattern: "menu",
    react: "🗒️",
    desc: "TC TEAM Bot Script",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const ccp = await si.cpu()
const cinfo = await si.version()
let timee = await si.time()
const plat = os.hostname()	
let data = await fetchJson('https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw')	
	
const maru =`┏━━❬🎬ᴛᴄ ᴛᴇᴀᴍ ᴍᴏᴠɪᴇ ᴅʟ ᴍᴇɴᴜ🎬❭━━┓
> ⿻ *Version* :: 1.0.0
> ⿻ *Runtime* :: ${runtime(process.uptime())}_
> ⿻ *Platform* :: ${plat}_
> ⿻ *CPU Manufacture* :: ${ccp.manufacturer}_
> ⿻ *CPU Brand* :: ${ccp.brand}_
> ⿻ *CPU Speed* :: ${ccp.speed}_
> ⿻ *Engine Version* :: ${cinfo}_
┗━━━━━━━━━━━━━━┉⦁⦁

*𝐇𝐄𝐋𝐋𝐎𝐖 ✨ ${pushname}*

┏━━━━❬ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ❭━━━━❯❯
┃◈ .ᴍᴏᴠɪᴇ
┃◈ .ᴀᴄᴛɪᴠᴀᴛᴇ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅ ❭━━━━❯❯
┃◈ .ꜱɪɴʜᴀʟᴀꜱᴜʙ
┃◈ .ꜱɪɴʜᴀʟᴀᴛᴠꜱʜᴏᴡ
┃◈ .ꜱᴜʙꜱᴄᴇɴᴇ
┃◈ .ᴘɪʀᴀᴛᴇ
┃◈ .ᴄɪɴᴇ
┃◈ .ꜰɪʀᴇᴍᴏᴠɪᴇ
┃◈ .ᴍᴏᴠɪᴇ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴛᴏʀʀᴇɴᴛ ᴅᴏᴡɴʟᴏᴀᴅ ❭━━━━❯❯
┃◈ .ʏᴛꜱᴍx
┃◈ .ᴍxx
┃◈ .ᴍᴏᴠɪᴇʀᴜʟᴢ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴄᴀʀᴛᴏᴏɴ ᴅᴏᴡɴʟᴏᴀᴅ ❭━━━━❯❯
┃◈ .ɢɪɴɪꜱɪꜱʟᴀ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ꜱᴜʙᴛɪᴛʟᴇ ᴅᴏᴡɴʟᴏᴀᴅ ❭━━━━❯❯
┃◈ .ᴢᴏᴏᴍ
┃◈ .ʙᴀɪꜱᴄᴏᴘᴇ
┃◈ .ꜱᴜʙᴢ
┃◈ .ꜱ-ꜱᴜʙᴛɪᴛʟᴇ
┗━━━━━━━━━━━━━━━┉
┏━━━━❬ 18+ ᴅᴏᴡɴʟᴏᴀᴅ ❭━━━━❯❯
┃◈ .18+
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴍᴏᴠɪᴇ ꜱᴇᴀʀᴄʜ ❭━━━━❯❯
┃◈ .themoviedb
┗━━━━━━━━━━━━━━━┉⦁⦁`
//await conn.sendMessage(from , { text: maru  }, { quoted: mek } )
await conn.sendMessage(from, { image: { url: config.IMAGE } , caption: maru } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })



cmd({
    pattern: "system",
    react: "🖥️",
    alias: ["s_info"],
    desc: "To Check bot\'s System information",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const ccp = await si.cpu()
const cinfo = await si.version()
let timee = await si.time()
const plat = os.hostname()
let data = await fetchJson('https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw')

const infomsg = `🖥️ *TC TEAM MOVIEDL SYSTEM INFO* 🖥️

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┣🔖  _Runtime -: ${runtime(process.uptime())}_
┣⏳  _Ram Usage -: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
┣🚀  _Bot Version -: ${data.version} Stable_
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌  *_Server System informations_*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┣⛊  _Platform : ${plat}_
┣⛊  _Running OS : ${os.platform()}_
┣⛊  _CPU Manufacture  -: ${ccp.manufacturer}_
┣⛊  _CPU Brand -: ${ccp.brand}_
┣⛊  _CPU Speed -: ${ccp.speed}_
┣⛊ _Engine Version -: ${cinfo}_
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
 await conn.sendMessage(from , { text: infomsg  }, { quoted: mek } )

}catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to MovieDL Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '《 █▒▒▒▒▒▒▒▒▒▒▒》10%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████▒▒▒▒▒▒▒▒》30%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ███████▒▒▒▒▒》50%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ██████████▒▒》80%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████████████》100%' , edit : ping.key })

/*var moviedl = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < moviedl.length; i++) {
await conn.sendMessage(from, {text: moviedl[i], edit: key })
}  */

	
return await conn.sendMessage(from, { text : '📍️ *Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})




cmd({
    pattern: "test",	
    react: '🔎',
    category: "search",
    desc: "cinesubz moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, l, reply }) => {
try{
      //  if(!q) return await reply('*please give me text !..*')
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')	

const fg = require('api-dylux');

function drivelink(link) { 
    const id = link.match(/id=([^&]+)/)[1]; 
    const driveLink = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
    
    return driveLink;
}
 
const link = `${q}`;
const driveLink = drivelink(link);
 
let res = await fg.GDriveDl(driveLink)
reply(JSON.stringify(res,null,2))

const msg = `📃 𝗧.𝗖 𝗠𝗢𝗜𝗩𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥`
        
      let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on Pirate',
                        url: q,
                        merchant_url: q
                    }),
                },
                     {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: `480P`,
                        id: ".fetch " + q
                    }),
                }
                ]
                let message = {
                    image: '',
                    header: '',
                    footer: 'MOVIE DOWNLOADER BY TC',
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)

	    } catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })





cmd({
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.PREFIX == q) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("PREFIX", q)
await reply("*prefix updated: " + q + "*")
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "activate",
    react: "👨‍💻",
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isDev, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')	
	var msg = mek
const cap = `*👾 Jid CONTROLLER...*`
		    
  const sections = [
{
	title: "*🎬 JID ACTIVE CENTER 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + 'mactivate ' + q , description: 'To Activate Movies Sender Location'},
	    {title: "    1.2", rowId: prefix + 'nactivate ' + q , description: 'To Activate News Sender Location'},	
	]
}
]
const listMessage = {	
caption: `*👾 Jid Controller...*`,
 image : { url: config.IMAGE },
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🎬 TC TEAM MOVIE-DL 🎬',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: `https://pomf2.lain.la/f/l28p649.jpg`,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  l(e)
}
})






cmd({
    pattern: "mactivate",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.JID == q) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("JID", q)
await reply(`*╭══════════════*\n*┃「 ᴍᴏᴠɪᴇ ᴄᴏɴᴛʀᴏʟᴇʀ*\n*╰══════════════*\n\n*╭───────────┈◦•◦❥•*\n*╎© 🚀Running Jid: ${config.JID}*\n\n*╎✅Succesfully Activate For This Jid: ${q}*\n\n*╚──────────────┈┈*`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "nactivate",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.N_JID == from) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("N_JID", from)
await reply(`*╭══════════════*\n*┃「 ɴᴇᴡꜱ ᴄᴏɴᴛʀᴏʟᴇʀ*\n*╰══════════════*\n\n*╭───────────┈◦•◦❥•*\n*╎© 🚀Running Jid: ${config.N_JID}*\n\n*╎✅Succesfully Activate For This Jid: ${q}*\n\n*╚──────────────┈┈*`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "movie",
    react: "👨‍💻",
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isDev, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')	
	var msg = mek
const cap = `*👾 Available All Movies...*

ඔබට අවශ්‍ය movie site එක තෝරන්න`
		    
  const sections = [
    {
	title: "*🎬 MOVIE-DL-SITE 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + 'sinhalasub ' + q , description: 'Download in sinhalasub.lk'},
	    {title: "    1.2", rowId: prefix + 'sinhalatvshow ' + q , description: 'Download in sinhalasub.lk'},
	    {title: "    1.3", rowId: prefix + 'pirate ' + q , description: 'Download in pirate.lk'}, 
	    {title: "    1.4", rowId: prefix + 'cine ' + q , description: 'Download in cinesubz.co'},	
	    {title: "    1.5", rowId: prefix + 'subscene ' + q , description: 'Download in subscenelk.com'},
	    {title: "    1.6", rowId: prefix + 'firemovie ' + q , description: 'Download in firemovieshub.com'},
	    {title: "    1.7", rowId: prefix + 'pupil ' + q , description: 'Download in mvtech.co'},
	]
},
{
	title: "*🎬 TORRENT-MOVIE-DL-SITE 🎬*",
	rows: [
	    {title: "    2.1", rowId: prefix + 'ytsmx ' + q , description: 'Download in yts.mx'},
	    {title: "    2.2", rowId: prefix + 'mxx ' + q , description: 'Download in 1337xx.to'},
	    {title: "    2.3", rowId: prefix + 'movierulz ' + q , description: 'Download in movierulz.nl'},	
	]
},	 
{
	title: "*🎬 SUB-TITLE-DL-SITE 🎬*",
	rows: [
	    {title: "    3.1", rowId: prefix + 'baiscopesub ' + q , description: 'Download in baiscope.lk'},
	    {title: "    3.2", rowId: prefix + 'zoom ' + q , description: 'Download in zoom.lk'},
	    {title: "    3.3", rowId: prefix + 'subz ' + q , description: 'Download in subz.lk'},
	    {title: "    3.4", rowId: prefix + 's-subtitle ' + q , description: 'Download in sinhala-subtitle.com'},	
	]
},
{
	title: "*🎬 CARTOON-DL-SITE 🎬*",
	rows: [
	    {title: "    4.1", rowId: prefix + 'ginisisila ' + q , description: 'Download in ginisisilacartoon.net'},	
	]
    },
{
	title: "*🎬 18+-DL-SITE 🎬*",
	rows: [
	    {title: "    5.1", rowId: prefix + '18+ ' + q , description: 'Download in 1337xx.to'},	
	]
    },
{
	title: "*🎬 MOVIE-SEARCH-SITE 🎬*",
	rows: [
	    {title: "    6.1", rowId: prefix + 'themoviedb ' + q , description: 'Download in themoviedb.org'},	
	]
    }	  
]

const listMessage = {
caption: `*👾 Available All Movies...*

ඔබට අවශ්‍ය movie site එක තෝරන්න\n`,
image : { url: config.IMAGE },	
footer: 'MOVIE DOWNLOADER BY TC',
title: '🎬 T.C MOVIE-DL 🎬',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


              
cmd({
    pattern: "send",
    alias: ["forward"],
    desc: "send msgs",
    category: "owner",
    use: '.send < Jid address >',
    filename: __filename
},

async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{ 
if (!isOwner) {
  return await reply("Contact owner to Active your number To Premium user")
}  else {
  if(config.DOWNLOADSAPI !== ''){
    if(isGroup){
      const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${from}`); 
      if(fsh &&  (fsh?.error || fsh?.data?.type == 'false')) return;
       
}else if(!isGroup){
      const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
      if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
    }
}else{
  return await reply("This setting turned off by devoloper")}
}  
if (!q || !m.quoted) {
return await reply(`❌ *Please give me a jid and quote a message you want*\n\n*Use the ${config.PREFIX}jid command to get the Jid*`)
}  



	

if(m.quoted && m.quoted.type === "stickerMessage"){
let image = await m.quoted.download()
            let sticker = new Sticker(image, {
                pack: "🎬 TC TEAM MOVIE-DL 🎬",
                author: "🎬 TC TEAM MOVIE-DL 🎬",
                type: StickerTypes.FULL, //q.includes("--default" || '-d') ? StickerTypes.DEFAULT : q.includes("--crop" || '-cr') ? StickerTypes.CROPPED : q.includes("--circle" || '-ci') ? StickerTypes.CIRCLE : q.includes("--round" || '-r') ? StickerTypes.ROUNDED : StickerTypes.FULL,
                categories: ["🤩", "🎉"],
                id: "12345",
                quality: 75,
                background: "transparent",
            });
            const buffer = await sticker.toBuffer();

const jid = q || from
  
  conn.sendMessage(jid, { sticker: buffer });
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")  

}else if(m.quoted && m.quoted.type === "imageMessage"){
if(m.quoted.imageMessage && m.quoted.imageMessage.caption){
const cap = m.quoted.imageMessage.caption
let image = await m.quoted.download()
const jid = q || from

   conn.sendMessage(jid, { image: image, caption: cap });
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
	
}else{
let image = await m.quoted.download()
const jid = q || from
  conn.sendMessage(jid, { image: image });
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")  
}	
	
}else if(m.quoted && m.quoted.type === "videoMessage"){
let fileLengthInBytes = m.quoted.videoMessage.fileLength
const fileLengthInMB = fileLengthInBytes / (1024 * 1024);
if(fileLengthInMB >= 1000 ){
reply("*❌ Video files larger than 15 MB cannot be send.*")
}else{
let video = await m.quoted.download()
const jid = q || from

if(m.quoted.videoMessage.caption){
 
 conn.sendMessage(jid, { video: video, mimetype: 'video/mp4',caption: m.quoted.videoMessage.caption});
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
 
 }else{

  const jid = q || from
 conn.sendMessage(jid, { video: video, mimetype: 'video/mp4'});
  let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
}

}	

}else if(m.quoted && m.quoted.type === "documentMessage" || m.quoted.type === "documentWithCaptionMessage"){	

const jid = q || from
if(m && m.quoted && m.quoted.documentMessage){
let fileLengthInBytes = m.quoted.documentMessage.fileLength	
const fileLengthInMB = fileLengthInBytes / (1024 * 1024);

if(fileLengthInMB >= 1000){
reply("*❌ Document files larger than 15 MB cannot be send.*")
}else{
	
let mmt = m.quoted.documentMessage.mimetype 	
let fname = m.quoted.documentMessage.fileName
let audio = await m.quoted.download() 
 conn.sendMessage(jid, { document: audio, mimetype: mmt, fileName: fname });
 let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️") 
}
 }else if(m.quoted.type === "documentWithCaptionMessage"){
let fileLengthInBytes = m.quoted.documentWithCaptionMessage.message.documentMessage.fileLength
const fileLengthInMB = fileLengthInBytes / (1024 * 1024);
if(fileLengthInMB >= 1000){
reply("*❌ Document files larger than 15 MB cannot be send.*")
}else{
let audio = await m.quoted.download()
let Dmmt =m.quoted.documentWithCaptionMessage.message.documentMessage.mimetype

let Dfname = m.quoted.documentWithCaptionMessage.message.documentMessage.fileName

  const jid = q || from
let cp = m.quoted.documentWithCaptionMessage.message.documentMessage.caption

 conn.sendMessage(jid, { document: audio, mimetype: Dmmt,caption: cp, fileName: Dfname });
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")

}

}
			
}else if(m.quoted && m.quoted.type === "audioMessage"){	
let fileLengthInBytes = m.quoted.audioMessage.fileLength
const fileLengthInMB = fileLengthInBytes / (1024 * 1024);
if(fileLengthInMB >= 1000 ){
reply("*❌ Audio files larger than 15 MB cannot be send.*")
}else{
let audio = await m.quoted.download()
const jid = q || from
if(m.quoted.audioMessage.ptt === true){
 
 conn.sendMessage(jid, { audio: audio, mimetype: 'audio/mpeg', ptt: true, fileName: `${m.id}.mp3` });
 let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️") 
 
 }else{
  const jid = q || from
 conn.sendMessage(jid, { audio: audio, mimetype: 'audio/mpeg', fileName: `${m.id}.mp3` });
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
}

}	
}else if(m.quoted && m.quoted.type === "viewOnceMessageV2Extension"){		
let met = m
const jet = {
    key: {
        remoteJid: mek.key.remoteJid,
        fromMe: false,
        id: met.key.id,
    },
    messageTimestamp: met.messageTimestamp,
    pushName: met.pushName,
    broadcast: met.broadcast,
    status: 2,
    message: {
        audioMessage: {
            url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.url,
            mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mimetype,
            fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileSha256,
            fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fleLength,
            seconds: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.seconds,
	    ptt: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.ptt,
            mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKey,
            fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileEncSha256,
            directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.directPath, 
            mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKeyTimestamp, 
	    waveform: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.waveform,
        },
    },
    id: met.id,
    chat: met.chat,
    fromMe: met.fromMe,
    isGroup: met.isGroup,
    sender: met.sender,
    type: 'audioMessage',
    msg: {
        url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.url,
            mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mimetype,
            fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileSha256,
            fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fleLength,
            seconds: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.seconds,
	    ptt: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.ptt,
            mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKey,
            fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileEncSha256,
            directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.directPath, 
            mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKeyTimestamp, 
	    waveform: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.waveform,
    },
    
};

const mlvv = sms(conn, jet);
var nameJpg = getRandom('');
let buff = await mlvv.download(nameJpg);
let fileType = require('file-type');
let type = fileType.fromBuffer(buff);
await fs.promises.writeFile("./" + type.ext, buff);
await sleep(1000)
let caps = jet.message.audioMessage.caption || "🎬 TC TEAM MOVIE-DL 🎬"


const jid = q || from
  conn.sendMessage(jid, { audio:  { url: "./" + type.ext }, mimetype: 'audio/mpeg', ptt: true, viewOnce:true, fileName: `${m.id}.mp3` });
  
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")

}else if(m.quoted && m.quoted.viewOnceMessageV2 && m.quoted.viewOnceMessageV2.message.videoMessage){
let met = m

const jet = {
            key: {
              remoteJid: mek.key.remoteJid,
              fromMe: false,
              id: met.key.id,
            },
            messageTimestamp: met.messageTimestamp,
            pushName: met.pushName,
            broadcast: met.broadcast,
            status: 2,
            message: {
              videoMessage: {
                url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.url,
                mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mimetype,
                caption: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption,
                fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileSha256,
                fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fleLength,
                seconds: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.seconds,
                mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKey,
                height: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.height,
                width: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.width,
                fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileEncSha256,
                directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.directPath,
                mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKeyTimestamp,
                jpegThumbnail: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.jpegThumbnail,
              },
            },
            id: met.id,
            chat: met.chat,
            fromMe: met.fromMe,
            isGroup: met.isGroup,
            sender: met.sender,
            type: 'videoMessage',
            msg: {
              url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.url,
                mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mimetype,
                caption: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption,
                fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileSha256,
                fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fleLength,
                seconds: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.seconds,
                mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKey,
                height: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.height,
                width: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.width,
                fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileEncSha256,
                directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.directPath,
                mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKeyTimestamp,
                jpegThumbnail: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.jpegThumbnail,
            },
            body: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption,
          };

        const mlvv = sms(conn, jet);
        var nameJpg = getRandom('');
        let buff = await mlvv.download(nameJpg);
        let fileType = require('file-type');
        let type = fileType.fromBuffer(buff);
        await fs.promises.writeFile("./" + type.ext, buff);
	await sleep(1000)
	let caps = jet.message.videoMessage.caption || "🎬 TC TEAM MOVIE-DL 🎬"
         
	const jid = q || from
  conn.sendMessage(jid, { video: { url: "./" + type.ext }, caption: caps, viewOnce:true });	
  let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
}else if(m.quoted && m.quoted.viewOnceMessageV2 && m.quoted.viewOnceMessageV2.message.imageMessage){
let met = m
const jet = {
    key: {
        remoteJid: mek.key.remoteJid,
        fromMe: false,
        id: met.key.id,
    },
    messageTimestamp: met.messageTimestamp,
    pushName: met.pushName,
    broadcast: met.broadcast,
    status: 2,
    message: {
        imageMessage: {
            url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.url,
            mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mimetype,
            caption: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption,
            fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileSha256,
            fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fleLength,
            height: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.height,
            width: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.width,
            mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKey,
            fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileEncSha256,
            directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.directPath,
            mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKeyTimestamp,
            jpegThumbnail: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.jpegThumbnail,
        },
    },
    id: met.id,
    chat: met.chat,
    fromMe: met.fromMe,
    isGroup: met.isGroup,
    sender: met.sender,
    type: 'imageMessage',
    msg: {
        url: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.url,
        mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mimetype,
        caption: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption,
        fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileSha256,
        fileLength: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fleLength,
        height: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.height,
        width: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.width,
        mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKey,
        fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileEncSha256,
        directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.directPath,
        mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKeyTimestamp,
        jpegThumbnail: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.jpegThumbnail,
    },
    body: mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption,
};

const mlvv = sms(conn, jet);
var nameJpg = getRandom('');
let buff = await mlvv.download(nameJpg);
let fileType = require('file-type');
let type = fileType.fromBuffer(buff);
await fs.promises.writeFile("./" + type.ext, buff);
await sleep(1000)
let caps = jet.message.imageMessage.caption || "⦁ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁"
 const jid = q || from

  conn.sendMessage(jid, { image: { url: "./" + type.ext }, caption: caps,viewOnce:true });
 let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️") 
}else if(q || m.quoted && m.quoted.type === "conversation"){

const jid = q || from
conn.sendMessage(jid,{text: m.quoted.msg})
let ss = '`'
reply(`*This ${ss}${m.quoted.type}${ss} has been successfully sent to the jid address ${ss}${q}${ss}.*  ✅`)
m.react("✔️")
}else{
const mass= await conn.sendMessage(from, { text: `❌ *Please Give me message!*\n\n${envData.PREFIX}send <Jid>`}, { quoted: mek });
return await conn.sendMessage(from, { react: { text: '❓', key: mass.key } });
    
}

 } catch(e) {
console.log(e);
return reply('error!!')
 }
});
