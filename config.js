const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pXbmtWR3F5amE4ZnJzd3lWemlZdnp6aFZyRVRkck1qNTFqcTJjbkIxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnpXc2pESFZMRmZ2dy9FcGN1bjRYMTdCYitxcEZsUXVFSnJoNkxJWXNUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS2lqUWF4WHhNUlVtQjlZYTV2Y3NTQmN2YWNUTkZvREU0YkhjUUViaUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSkhJeE5STFdkU0pMd2hCam5YQ1c2NS85ZWlMcUdxZzFXZ0R1dnQ1RENRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHT0JKUWk3TTE2aHJFU2FYSDRLV0lDclIzYWgzNGcxTS9DTk9UTHJTV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50Umh1VUU0N0djNXhiTmMxWEUvYzNhcmtReU55MWpFRVNERUF6eE9raE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9LRjZ2bVA4bTZrUE00ZDA2Q2txOUhleHRDTXBBbm9URWx6NGRyTnBsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWN0eWtmVDlqQXZ1aFY0dWorVzJFNkFQMFlmblQ4Mk0vcXFIdWdxMjRYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4NzA0QUFycEsrd041ZzVSNXppbHdUL0ViUm0wU2YrcFNNeDJsT2hDVEVNM0ErWksvOFppZ0RhVlhrQ2pDd2lJWVVRLzBCS211OW55UGpLOE80VkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJkTDd3NU1oc1QrSm9mZitvdG44K01rNTU1T1VUTlBSanVFd0FkclZrUE5RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzMjQ4MjU5MDY0OjQwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkwMTU1OTM1NzQ4MzE2OjQwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVNVMmg0UWtZUDd4UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZndBVXRvWUNFWjRZVFBuaVMzWkFKMmkzMUxhVzhWeWdjSVZ2UDZsLzhqMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWjAzWi9GM2U4VHErWHNGTTRyYnVlQUJva1RRWWZOSHVsZitKZFhlNjJzMFdObHpTUUdwQTlWTGxBMkpaN0FIckFTMXhzNDlBZUM1ZW1UYnJ3eFF1REE9PSIsImRldmljZVNpZ25hdHVyZSI6IkJlOHFadmxmcloybmhwVzRZblhXVEl2K2huMStTbXY4dUpKdUNyQ3hZTW1FaDdxRWlMTTJ2bGQvakEyU2hlV3d5d3NMeFFMdlhMZW1WR1Z6Q0N5akRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjQ4MjU5MDY0OjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg4QUZMYUdBaEdlR0V6NTRrdDJRQ2RvdDlTMmx2RmNvSENGYnorcGYvSTkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzMzMTg2MSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPL2cifQ==",
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
