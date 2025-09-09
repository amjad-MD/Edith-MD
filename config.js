const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZNdjJSMjJLL1pvaTBsa1hkK0VQUmRkbXlzeWFvOGxnZUczTXFLNmZsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTZ3MnJYc0hLNlU5MTErRVZVOUNwU3dwK21qajhnMi9oZkEwSEtRamNSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRngyMXZZM3d6SDluNGhVYTFQSnhqUzk1OXNaODA2QzZpcjVUWXBLZWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwSDYwd0xmOC9zZDR5VmRhYVhRZXhqNmthSDRRbFZVREs4U2t2OERVTVJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLMmtaUlMzR3ZTS3l6OElJczRXQzNyWklYOVVrei9vamlrWnJQMzVHbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhuUWNIcEsrMXcvYUU3UmR5OEc0M1g0ZTBmSUpZU2x0R05DcnpuMTg5U1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEcxRnA4aUtXcjVuS1c0Nnd2WGtZczZlME16T1UxZU9GZzlsQmREUk1XUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVJFbmU5M1YrVzdlRG0zZVA3MWZjTUR3MlIzcjZOVXplWkh0K3ErejFpVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRpN3V1SE50UE40OTBlSlFtdlRVb1dsdUtQQk9NRXFENzlWeWM5RTlrdTN6Smx5Y05qaUJ5dFBsck91SDNJenlYWk10ZVFVTkViMi8xQXZlUzgzWWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6InNFZjhOamhsUVNJVEhhWDdHNG4vZmtJU05vR1p4UWNrZUV5S0ViOG9LcXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ4MjU5MDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDQkE3OEQ1Q0QyQjcxN0RFNzIzMUYzODMwMjEwQjVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTczOTIzMzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik4yTkpRUDJLIiwibWUiOnsiaWQiOiI5MjMyNDgyNTkwNjQ6NDRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTAxNTU5MzU3NDgzMTY6NDRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaVUyaDRRdzl2K3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmd0FVdG9ZQ0VaNFlUUG5pUzNaQUoyaTMxTGFXOFZ5Z2NJVnZQNmwvOGowPSIsImFjY291bnRTaWduYXR1cmUiOiJsOXFKcVdKTlk0UFpYeUlpSmRDTy94bWpVVFdoeWpCb3VQazhRc0dHUTBFZEU0aGxFUWdzdTBEWTBicENhbWFMY1hZZ283bHMzSVBycWVNNzhDbzRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibzZjYmlEQWNLQlVZT0VJeVd6MS9ML1hhWFdmYW4wQVRQdlVoUitjdzQ4L3FDMG9pZWdBdmtneGRKYUsrcjV1UEFHYkFCS05NNCs1RUdBQkxmazYxaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDgyNTkwNjQ6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDhBRkxhR0FoR2VHRXo1NGt0MlFDZG90OVMybHZGY29IQ0ZieitwZi9JOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MzkyMzI3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlLeiJ9",
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
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923248259064",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
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
