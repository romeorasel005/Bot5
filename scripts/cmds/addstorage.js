module.exports = {
  config: {
    name: "addStorage",
    aliases: ["addstorage", "add"],
    // Other config properties...
  },

  onStart: async function ({ event, message, threadsData, usersData, api }) {
    // Get the user's current storage from the database
    const userData = await usersData.get(event.senderID);
    let storage = userData.storage || 0;

    // Add 10GB to the storage
    storage += 10;

    // Update the user's storage in the database
    await usersData.set(event.senderID, { storage });

    // Send a reply with the updated storage
    message.reply(`10GB has been added to your storage. Your new storage is now ${storage}GB.`);
  },
};