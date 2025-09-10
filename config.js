const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd5YWl5eGNhRjArTzhLS3pCTXpIT2VIMGZvbVVWaWVXakVRb3Evb0wwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianIwQjlWZ0h0SjJwS1poQjFwQkJxUm1YVlROZFhuNGNYR3ppRjJ3RGhVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTnRQODJua2E4ZUYrdkdlbHFDbm5EZ3VTWVFkYkhVSUlzRUpwTkQrT1Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeGRkbitYT0h0c2h3OHVSaHhmTitEc2lPWEYwbkM3TlNqN3VJaTlOWVFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHNmloRDdaakZtL1dlbEtZWFA3dk9qNVBRM1BKa0N5NVZ3V1lRR1p4Mjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklmSkFkakNsbXNFdXVUbVJpYXVUNTZkWGUwSzZYbEVkeVRweStRb2czR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhDUUZyeE9jUzRMYXpOU2lST28vNU9ZWC9kVk5mNkRoYVVneWl6YUhFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialFiZVpya1dHU0JKYU5waVM0bVdGWVlraWVEWlBMemUwNUFSL2tyRUd6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY1RHFsRkdpRld0dHBWcGtyRXZaNkJDYTJ6WjhUNlR0M1JQNFBXTEpYbUJkWE51UFZRM0lSQWxXK3NTQ3NRZUV5SWpuOTRRcmZPV3dWNDYzSXhRc2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IlJ1b1dhTmpPZjVVNnI4UHR3NUFaN3lyUHM4bCs3clZPT3JKYnRROTdaQjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDIzNzkzNTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDMjhDOENBMDExQURGNDZDODlBMDBCQ0QwQjFGNUZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0OTM3Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMzc5MzU1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQjYwQ0ZEMjYzMTQwNDFFMjQ1NjNGRjQ4MENGNERCOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NDkzNzM5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzNDIzNzkzNTUzOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBha2lzdGFuIGdyZWF0IiwibGlkIjoiMTU0ODk0MjIwNjg1NDA4OjE1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNua2pNUTRQT0V4Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWThkM2p5QVVkbElldVQyNm5hUElyMTF2MTlZb1BNUXBPQWhWWVBEeVFIMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMzVvT1FKTmQxeHowd0NIem5leGhqUkR4OHVQMS9PaVNWU1RPSEVXaXgxVnM1enUwK2JZQVRjVTdaUi9zdTlRa0J2QkFNN3lNTkZSbWJ6Y0VLaDZlQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImlCaEt3R3N4ZzdYTERCTXhuQVJqVnR1Wmszb1ZCNE9LajBjcTFBbkwrbU9neURSZjZjS25UY2xNZ0Y2S2tlai8yNlJJMk9yTjRXRGlBTmRSUEZZamhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIzNzkzNTUzOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldQSGQ0OGdGSFpTSHJrOXVwMmp5SzlkYjlmV0tEekVLVGdJVldEdzhrQjkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzQ5MzczMiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeU8ifQ==",
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
  ALIVE_IMG: process.env.ALIVE_IMG || "",
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
