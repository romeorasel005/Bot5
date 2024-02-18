module.exports = {
  config: {
    name: "join",
    version: "1.0",
    author: "Elohime hatake",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Tambahkan pengguna ke grup dukungan",
    },
    longDescription: {
      en: "Perintah ini menambahkan pengguna ke grup tempat bot berada",
    },
    category: "owner",
    guide: {
      en: "Untuk menggunakan perintah ini, cukup ketik !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("Harap berikan ID grup dukungan.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "✅Vous avez été ajouté à ce groupe. Si vous ne trouvez pas la boîte de réception dans votre boîte de réception, veuillez vérifier vos demandes de messages ou votre boîte de courrier indésirable.",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("Gagal menambahkan pengguna ke grup dukungan:", err);
          api.sendMessage("❌Je ne peux pas vous ajouter car votre identifiant n'est pas autorisé à demander des messages ou votre compte est privé. s'il vous plaît, ajoutez-moi puis réessayez...", threadID);
        } else {
          api.sendMessage(
            "✅Vous avez été ajouté à ce groupe. Si vous ne trouvez pas la boîte de réception dans votre boîte de réception, veuillez vérifier vos demandes de messages ou votre boîte de courrier indésirable.",
            threadID
          );
        }
      });
    }
  },
};