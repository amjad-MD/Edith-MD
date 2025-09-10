const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUcxVXhsK05sUGU2dEQ4OEdUSUJqMjRlcGZQOU1pazRhZXFaNEdxT0VXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGhKK0x2UGhsQ1liV2N2LzhnU08zVlpWd0RTOG05VDhONCtEYWptVWNETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSTc3R0piTm1kMlVnc2pSMW5kVjJuTG1DT3ZUaCtaNk9ydkdab1RxMkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRDJJR3VRLzJSWEdncTY5Z1pZKzN6K1cxN3FwTkM1RDl0bkZSQTR0VVJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFa3Z1ZWFrR1NsNTRJc1FNKzQ0dXlreVpva0RoN2Z4ZUF1Rmw5OUduSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZJbjdJT3hhNkx6blFtZ2RGZmJwTkZhSnBZRisyZkk0QXpFcWJKWkFoeFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZSeGZZUGJMNUM0cFduc2krSWJsV1ZMRXo0T0syeVBjRGVONGVVcWMzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGNjd3lkL0lXUEEyOVRyNDhHOFVMZ3BPampOWjBhMmJoWWlXYUJ2azZUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkrVXlZejVXd1RWYzB3R1ZmOHBSeHZMb21GaGplNnZCQk55SE5mcmpFK3ozbFZKTEJtRmFETE9YUzdoV2traW5kQTBxZUpzNWhSK2lTOUQ2Qk8rVkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6ImI0VWt2NEJYdUJndzRKQjVDRitwYzArVGs1TXR4OGN5ZXNoc0UrTHVmaDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRIMTIzIiwibWUiOnsiaWQiOiI5NDc1NTE2NDE0Nzo1NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+IEgiLCJsaWQiOiIxMjgzNDcwOTQ5NzA1MDA6NTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYmF2N0VDRUpPQXZNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYQ0hwcC9QaklGSGJHbXFPM1Qwb0ZlWkd4TW9Ha1o0WG1zSVJJZUYxaFI0PSIsImFjY291bnRTaWduYXR1cmUiOiJwWDdWcFo1d1BXaDd3WjI1cCtYQjlKMSs5SFlyVFpVNm1NOUpRRGNVKytJWVg3U3dJMlRHcW41NXVUM2pKOUEwd2dtdFlyQzVBR280Z0I2Z0xuQm5Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSzJZNGdZSk5sYXdoOG5BODYyTFF1QkpOaW9LaG12UlJyVG40dVpkcHBTeXhSR2dreXJwRExvOUR6ekN6dEU0UlVESGpmQ0lwaU9aVGljNFBxRW91RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NTE2NDE0Nzo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWd2g2YWZ6NHlCUjJ4cHFqdDA5S0JYbVJzVEtCcEdlRjVyQ0VTSGhkWVVlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYyOTkyODYsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923423793553",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
