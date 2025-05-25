const fs = require("fs");
module.exports = {
  config:{
	name: "npx2",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
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
const media = (
    await axios.get(
      'https://i.imgur.com/xvLvV8y.jpeg',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("kana")==0 || body.indexOf("bl")==0 || body.indexOf("BAL")==0 ||
body.indexOf("Bal")==0 ||        
body.indexOf("bara")==0 ||    
body.indexOf("abal")==0 ||        
body.indexOf("Abal")==0 ||       
body.indexOf("আবাল")==0 ||  
body.indexOf("বাচ্চা")==0 ||       
body.indexOf("sontan")==0 ||        
body.indexOf("Sontan")==0 ||        
body.indexOf("cala")==0 ||          
 body.indexOf("put")==0 ||       
body.indexOf("Bara")==0 ||        
body.indexOf("chudi")==0 || body.indexOf("magi")==0 || body.indexOf("abal")==0 || body.indexOf("khanki")==0 || body.indexOf("বলদা")==0 || body.indexOf("খানকি")==0 || body.indexOf("মাগি")==0) {
		var msg = {
				body: "✢━━━━━━━━━━━━━━━✢\n\n𝙒𝙊𝙍𝙉𝙉𝙄𝙉𝙂 ⚠️●══❥𝄞❓\n\n一এখানে কেউ গালাগালি করিস না ❕❕\nকেউ গালাগালি করলে কিন্তু খুব খারাপ হবে LAST!!𝙒𝙊𝙍𝙉𝙉𝙄𝙉𝙂 ⚠️\n\nবড় মাপের ভয়েজার থাকলে বসের ইনবক্সে নক দে ❕❕👇⚠️\n\n✢━━━━━━━━━━━━━━━✢\n\nhttps://www.facebook.com/NAYEEM.ER.BIRTH.FATHER.SEYAM.IS.HERE?mibextid=ZbWKwL\n✢━━━━━━━━━━━━━━━✢:",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
