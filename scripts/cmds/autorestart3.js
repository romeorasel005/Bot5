const fs = require("fs-extra");
const { spawn } = require("child_process");

module.exports = {
	config: {
		name: "autorestart3",
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Khởi động lại bot",
			en: "Restart bot",
		},
		longDescription: {
			vi: "Khởi động lại bot",
			en: "Restart bot",
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: Restart bot",
		},
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot...",
		},
		en: {
			restartting: "🔄 | Restarting bot...",
		},
	},

	onLoad: function ({ api }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		if (fs.existsSync(pathFile)) {
			const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
			api.sendMessage(`✅ | Bot restarted Done Na Master Loid\n⏰ | Time: ${
				(Date.now() - time) / 1000
			}s`, tid);
			fs.unlinkSync(pathFile);
		}
	},

	onStart: async function ({ message, event, getLang }) {
		autorestartFunction();
		message.reply(getLang("restartting"));
	},
};

const autorestartFunction = () => {
	setTimeout(() => {
		const subprocess = spawn(process.argv[0], process.argv.slice(1), {
			// Change this to your bot's working directory
			cwd: __dirname,
			detached: true,
			stdio: "inherit",
		});
		subprocess.unref();
		process.exit();
	}, 11 * 60 * 1000);
};