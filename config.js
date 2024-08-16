//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1B1MEN1U0lTQTJNdEZMczlSem9MbzJ5Rk5hOTB2K2pyQVpZcE4vR2lrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkZBWkp2TjBTOUZ5VFY5RzdwWXNBcEZ3bTNyQ3dYYzhmR3kyd2pLc2hnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRHE1eXlrVEdDR3pyR0RCRUkwOXVsbEFENEVRVXBtM1hZUWhmRlhCSFdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WXlEYkZzbjl5ci9MenJnSTVjVkFjdVo1NlVqbmhEU01hYnY4YURWem5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCK2o4WjJwemhIY2J1Y01tV0c1QUVkZHRja3BaaEROTmFpNkIwMDNUMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtmRVJrbDNzMEFhRnJwaW9aejJ1UU8vTytLLys4cWVBMWJYRUJVNHpDU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU8rV0QxcW9FaEJ1dFNDaDlodVpnUzI0cEZpQlMvdklLeWZjWm5UbkhXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTk1Qm4xUy9CUW1BV3pSclV5aEtGS3lRNXkyT0FkdG1rUU1VMElVb1FuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PTWlGYjZNWFlKZXh5cnh3T2pjQzVwNVlSS0hEWFozWHFHSXgyTFZSVytML1JYcGpDSnJTTG5kcmc2WkZUQm1VL0ZsUjFBcVVGSGZkcWYwSEZBV2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJ0VzdMc1FMQ2pHZ0ZuRzBpc3ZlNHJnUDhLSVMxc25hRTFvQy94N25BSjI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlEQkU3RTNCNDZFOTRENkJCODE1ODY0Q0I3NDhENEFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM3OTQ3MDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZBWmhrUFc5UXFlbFdmR2pNdlNWZUEiLCJwaG9uZUlkIjoiZDMyYmNlOGYtZmY3Yy00NDBiLWJjNGItYjkyMTA2ZDE3MmZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WbXc0bHh4RVdMVnN2dTBCR2trOGZuQ0QyQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWWXBtbTZ1UDNZYlVTVDRlb0t6K0YvSHVRY3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjlBTjE0WEEiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0Ojc4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0oMmq4bSN4bScIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcm83c2tCRUlTSy9MVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDZUlKNTBpK1dBYjhybWZ6RmhsYjljV1hPbGtDQ1ZiNDQzTGNpWUpodGhZPSIsImFjY291bnRTaWduYXR1cmUiOiJUSlB3TGc5WnR3VVArRzhoOHk1MFZ6eVNmQmhoM3VHUUhFd2J6V1hSNEJxL094ZzBFT29BYWRTbVlOR0xpazdSVjZsQ0NrME93bzUwcFNONnZ2c1hBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXZia0JjTVJNeHVDSnhwSGl4dGdTRitjQkUvRWprdE5FMWJyZjlrLzFMV1ZHa01VZERVMTkyQVpuVm1yVEdxZUhhNXFOeDlRcVlsSjBZNUExV2FhaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTIyNjE0NDo3OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRbmlDZWRJdmxnRy9LNW44eFlaVy9YRmx6cFpBZ2xXK09OeTNJbUNZYllXIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNzk0NzA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlReSJ9";
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
