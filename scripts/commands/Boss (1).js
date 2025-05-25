const fs = require("fs");
module.exports = {
	config:{
	name: "tanvir",
	version: "1.0.1",
	premium: false,	
        prefix: true,
	permssion: 0,
	credits: "Tanvir", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
				cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	const content = event.body ? event.body : '';
	const body = content.toLowerCase();
	const axios = require('axios')
	const NAYAN = ["https://i.imgur.com/R6zOsaC.mp4",]
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("Seyam")==0 || body.indexOf("siyam")==0 || body.indexOf("Siyam")==0 || body.indexOf("SIYAM")==0 || body.indexOf("Seyam")==0 || body.indexOf("ok")==0|| body.indexOf("vai")==0 ||
 body.indexOf("SEYAM")==0 ||        
  body.indexOf("Seyam boss")==0 ||  
body.indexOf("boss")==0 ||         
body.indexOf("Gf")==0 ||
 body.indexOf("Bf")==0 ||        
  body.indexOf("GF")==0 ||    
  body.indexOf("BF")==0 ||       
 body.indexOf("fahim")==0 || 
 body.indexOf("FAHIM")==0 ||        
  body.indexOf("ok")==0 ||
      body.indexOf("ok")==0 ||   
        body.indexOf("ok")==0 || 
body.indexOf("🤬")==0 ||  
body.indexOf("🤭")==0 ||
body.indexOf("🌝")==0 ||         
body.indexOf("❤️‍🩹")==0 || 
 body.indexOf("💋")==0 ||        
 body.indexOf("😕")==0 ||        
body.indexOf("😾")==0 ||         
body.indexOf("Siyam")==0 ||         
 body.indexOf("VAI")==0 || body.indexOf("সিয়াম")==0 || body.indexOf("Boss")==0) {
		var msg = {
				body: "╭•┄┅════❁🌺❁════┅┄•╮\n✢━━━━━━━━━━━━━━━✢\n╭────────────♡彡\n\nযেকোনো প্রয়োজনে আমার বস সিয়ামকে ইনবক্স করুন (✷‿✷)°💢‼️\nবসের আইডি লিংক 👇\n\n ✢━━━━━━━━━━━━━━━✢\nhttps://www.facebook.com/NAYEEM.ER.BIRTH.FATHER.SEYAM.IS.HERE?mibextid=ZbWKwL\n\n✢━━━━━━━━━━━━━━━✢",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("‼️", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
}
