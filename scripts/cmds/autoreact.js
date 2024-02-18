module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "TK joel",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "dont know ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("I love you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("Randi") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("mahal") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("mwah") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😢") !== -1) return api.setMessageReaction("😢", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😹") !== -1) return api.setMessageReaction("😹", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("😭") !== -1) return api.setMessageReaction("😭", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("🗿") !== -1) return api.setMessageReaction("🗿", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("🗿") !== -1) return api.setMessageReaction("🗿", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("Wassup") !== -1) return api.setMessageReaction("💐", event.messageID,event.threadID)
    
		if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😂", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("🤣", event.messageID,event.threadID)
    
   	if (event.body.toLowerCase().indexOf("Lado") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("good afternoon") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("good evening") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("lado kha") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)
}
};