module.exports = {
  config: {
    name: "greetings",
    aliases: ["gt"],
    category: "Elocmd",
    description: {
      en: "Send greetings based on the current time",
      tl: "Ipadala ang bati batay sa kasalukuyang oras"
    },
    guide: {
      en: "{p}greetings",
      tl: "{p}greetings"
    },
    role: 2
  },
  onStart: async function ({ api }) {
    // Get the current time
    const now = new Date();

    // Get the hour of the current time
    const hour = now.getHours();

    // Set the greeting based on the current time
    let greeting = "";
    if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon!🌞\n\nThanks for using my bot😗\n\n[ https://www.facebook.com/profile.php?id=100079402482429 ]";
    } else if (hour >= 18 || hour < 6) {
      greeting = "Good evening!😗\n\nThanks for using my bot😗\n\n[ https://www.facebook.com/profile.php?id=100079402482429 ]";
    } else {
      greeting = "Hello everyone!☺\n\nThanks for using my bot😗\n\n[ https://www.facebook.com/profile.php?id=100079402482429 '";
    }

    // Send the greeting to all groups
    const groups = await api.getThreadList(100, null, ["INBOX"]);
    groups.forEach((group) => {
      api.sendMessage(greeting, group.threadID);
    });
  }
};