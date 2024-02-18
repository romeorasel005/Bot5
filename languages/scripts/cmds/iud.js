const axios = require('axios');

const Prefixes = [
  'ask',
  '.chi',
  '¶sammy',
  '_nano',
  'bot',
  'ai',
  '.ask',
  '/ask',
  'dead',
  'deadlin',
  'deadline',
  '$ask',
  '%ask',
  '^ask',
  '*ask',
  '.ai',
  '/ai',
  '!ai',
  '@ai',
  '#ai',
  '$ai',
  '%ai',
  '^ai',
  '*ai',
  'gpt',
  '/gpt',
];

module.exports = {
  config: {
    name: 'ask',
    aliases: ["ai", "gpt"],
    version: '2.5',
    author: 'JV Barcenas',
    role: 0,
    category: 'utility',
    shortDescription: {
      en: 'Asks an AI for an answer.',
    },
    longDescription: {
      en: 'Asks an AI for an answer based on the user prompt.',
    },
    guide: {
      en: '{pn} [prompt]',
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      // Check if the prefix is valid
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      // Remove the prefix from the message body
      const prompt = event.body.substring(prefix.length).trim();

      // Check if prompt is empty
      if (prompt === '') {
        await message.reply(
          "❰🅓🅔🅐🅓🅛🅘🅝🅔❱\n\n𝐯𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞 𝐩𝐨𝐬𝐞𝐫 𝐯𝐨𝐭𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧, 𝐯𝐨𝐭𝐫𝐞 𝐬𝐚𝐭𝐢𝐬𝐟𝐚𝐜𝐭𝐢𝐨𝐧 𝐞𝐬𝐭 𝐦𝐚 𝐦𝐢𝐬𝐬𝐢𝐨𝐧.\n\n➮ 𝗕𝗢𝗧 𝗕𝗬: www.facebook.com/100095041099806"
        );
        return;
      }

      // Send a message indicating that the question is being answered
      await message.reply("━━❰🅓🅔🅐🅓🅛🅘🅝🅔❱━━\n\n𝐯𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐩𝐚𝐭𝐢𝐞𝐧𝐭𝐞𝐫 𝐮𝐧 𝐢𝐧𝐬𝐭𝐚𝐧𝐭...");

      const response = await axios.get(`https://chatgayfeyti.archashura.repl.co?gpt=${encodeURIComponent(prompt)}`);

      if (response.status !== 200 || !response.data) {
        throw new Error('Invalid or missing response from API');
      }

      const messageText = response.data.content.trim();

      await message.reply(messageText);

      console.log('Sent answer as a reply to user');
    } catch (error) {
      console.error(`Failed to get answer: ${error.message}`);
      api.sendMessage(
        `${error.message}.\You can try typing your question again or resending it, as there might be a bug from the server that's causing the problem. It might resolve the issue.`,
        event.threadID
      );
    }
  },
};