const fs = require("fs");

module.exports = {

  config:{

	name: "npx7",

        version: "1.0.1",

        prefix: false,

	permssion: 0,

	credits: "cvc", 

	description: "okej",

	category: "no prefix",

	usages: "🤗",

        cooldowns: 5, 

},

handleEvent: function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

  const content = event.body ? event.body : '';

  const body = content.toLowerCase();

	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("😽")==0) {

		var msg = {

				body: "❤️‍🔥😺",

				attachment: fs.createReadStream(__dirname + `/Nayan/vdtoau.m4a`)

			}

			api.sendMessage( msg, threadID, messageID);

    api.setMessageReaction("💝", event.messageID, (err) => {}, true)

		}

	},

	start: function({ nayan }) {

  }

}