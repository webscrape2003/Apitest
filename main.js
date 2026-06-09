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
	title: "*🎬 MOVIE-SEARCH-SITE 🎬*",
	rows: [
	    {title: "1", rowId: prefix + 'themoviedb ' + q , description: 'Download in themoviedb.org'},	
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

