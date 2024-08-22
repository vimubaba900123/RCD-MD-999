//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJPU0h0aUhDT2dSY2JVNnAwUEsyaEFBVGJaVFBQL0tVUUg4eklQUEJFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEpuTXpxblRTQTI4OTBHNjNkSTJWNU4reVpHYXV6dVJNaTFOcTdvMzd3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSmhIaURMR3hxb3dHRWNPNUVPRUN2OWhjWVZJOFZSNkc2S0hhZW4vZ1dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQzg1QzhWVnlnbHdCK1ZVNlVtM0V0ZHJJcUZZSFVBVmlLVlJzSFFvdVhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNaUc1VWVoWnhWSVBYUkpaVmxlaUJ2UFNxdlhQOXdJR211MTBYYnRIMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd3ZnFvZ1k4RStBMi9yY0VVVFN2QlMxRm9ySENJVCt6QmJzQ1ZOUENlQU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdKUldzdkFSTjJISktwYjhSQ3pzSzhyYm93RDg0ZDN5T0o1cmNkQ1VuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RGQnJad3lWVHd0bG5HK29PdGM0bzZvNVpMQ0xkN01BRjlsV0xHWjhtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1kVUN2Um5SRllVeXkwK2ZMVE0rWkYrWFhGSUEwaExmcUN3U3oycDAxdjBYM0ZpNHpuSG5SVk8vK1YrTkI0bGNDNmtTdXFwOHJCMFhWRGt1U2pUUEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJqY0g1SFRHYlFxVGlJTUtHNVpualhwR0c4d3JBWmxrZ05GRzRiaEM3QkRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0MjNEOERCMTAzMDkzNzg1NzdEQjNGMkNGNEE5Q0E4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQzMTI4MDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9FdlJ3QkxBU2NDTlN6NUFiSzlJN0EiLCJwaG9uZUlkIjoiOTc0ZDY4ZGYtZTQ5Ni00NTJiLWJiZjUtMmRkNTM0OWYyZGFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdJVFVNbVYvS3plN1RSbWlDV3ZuWTRIQW9ZND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWURMQjFTUWVZMks5VkxGT1VwY1RJc05rS2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0Y5QlIyUkoiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0Ojg3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0oMmq4bSN4bScIMmq4bSFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMamg5MU1RMU5tYnRnWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxQ3hhTUloMnVpeG05VVdGK3BENzBRaG5BV2lROEo5T1UxRXNZbE92a1JvPSIsImFjY291bnRTaWduYXR1cmUiOiJmMDhjajhINlpaemU5SlpuWjFGOXZWQXBVRmd0WjEyUXNZcEJVRkhvdWhvelRCTkVEanVGSnJreUxzY3I2MjI0cFRnbXFwZFplRkpmVzJDSGNtRTBBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2thY1lFSXFRZHBrMWtBUFdYWUYrTHpramtzU1UvNXdZTGdSQTZTRmZNTSt0NjdNS2NqNWZGdzJ0ZWhYMWplemI1emFaT2lIS2dXYWFTbmUxa1VBQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTIyNjE0NDo4N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZ3NXakNJZHJvc1p2VkZoZnFRKzlFSVp3Rm9rUENmVGxOUkxHSlRyNUVhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MzEyODAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtSNCJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94781226144";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/RCD-MD-MAIN/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225,94757660788,94778668193,94785274495";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "ture";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
