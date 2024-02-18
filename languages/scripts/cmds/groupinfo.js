const request = require("request");

module.exports = {
  config: {
    name: "groupinfo",
    version: "1.0",
    author: "Rahman Leon",
    shortDescription: "Get Group Information 📊",
    longDescription: "Retrieve information about this group, including its name, ID, member demographics, and administrators.",
    category: "Group Chat",
    guide: {
      en: "{p}groupinfo"
    }
  },

  onStart: async function ({ api, event }) {
    let threadInfo = await api.getThreadInfo(event.threadID);
    let threadMem = threadInfo.participantIDs.length;
    let maleMembers = 0;
    let femaleMembers = 0;
    let adminList = [];

    for (let z in threadInfo.userInfo) {
      const gender = threadInfo.userInfo[z].gender;
      if (gender === "MALE") {
        maleMembers++;
      } else if (gender === "FEMALE") {
        femaleMembers++;
      }
    }

    for (let adminID of threadInfo.adminIDs) {
      const userInfo = await api.getUserInfo(adminID.id);
      const adminName = userInfo[adminID.id].name;
      adminList.push(adminName);
    }

    const message = `
🌟 **Group Name:** ${threadInfo.threadName}

🆔 **Group ID:** ${event.threadID}

👥 **Total Members:** ${threadMem}

♂ **Male Members:** ${maleMembers}

♀ **Female Members:** ${femaleMembers}

👮 **Total Admins:** ${adminList.length}

👮 **Admins:** ${adminList.join(", ")}
`;

    return api.sendMessage(message, event.threadID);
  }
};