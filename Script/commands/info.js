const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: " firoz",
  description: "Show full info about the bot owner",
  commandCategory: "info",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const time = moment().tz("Asia/Dhaka").format("dddd, DD MMMM YYYY | hh:mm:ss A");

  const adminInfo = `
🔰 ADMIN INFO 🔰

👤 Name: Firozツ
📛 Nickname: ⎯͢ᗛᗤᖛ ᖜᗧᗘ
🎂 Age: 18 years
🚻 Gender: Male
❤️ Relationship: It's Complicated
📍 Location: Brungamari, Bangladesh
🕹 Occupation: Student & Developer
🧠 Languages: Bangla, English
⚙️ Skills: JavaScript, Node.js, Messenger Bot Dev

📱 Phone: 01324100287 🤫
🌐 Facebook: https://www.facebook.com/firoz02739262973648273727hsv
💬 WhatsApp: https://wa.me/qr/WVKLDXA34LOXG1

🎵 Favorite Music: Lo-fi & Sad Vibes
🎮 Games: Free Fire, COD
🍔 Favorite Food: Biryani

🛡 Bot Developer: Cyber Bot Community
⏰ Current Time: ${time}

🤖 Thank you for using the bot 💖
`;

  return api.sendMessage(adminInfo, event.threadID, event.messageID);
};
