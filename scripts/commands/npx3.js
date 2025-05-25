const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
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
  const NAYAN = ['https://i.imgur.com/eszxVVr.mp4','https://i.imgur.com/OWk0plZ.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥰")==0 || body.indexOf("🤩")==0 || body.indexOf("😍")==0 || body.indexOf("👀")==0 || body.indexOf("🤔")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "╭•┄┅════❁🌺❁════┅┄•╮\n\n𝙈𝙮 𝘿𝙧𝙚𝙖𝙢𝙨 𝘿𝙤 𝙣𝙤𝙩 𝘾𝙤𝙢𝙚🌸\n\n𝙩𝙧𝙪𝙚\n\n\𝙡𝙣 𝙡𝙢𝙖𝙜𝙞𝙣𝙖𝙩𝙞𝙤𝙣__🌼❥༊আমার༊স্বপ্নগুলো༊তো༊কল্পনাতেই\n\nভালো༊মানায়༊বাস্তবে༊না༉\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n\n\n•—»🍭𝐂𝐄𝐎⸙𝐒𝐄𝐘𝐀𝐌𓆪彡🌈«—•\n\n💫(✷‿✷)°🐹",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫀", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
