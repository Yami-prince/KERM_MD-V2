//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237659535227";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxwYTVEOTFVejF6WGx5aUdjMnhpUUJ0NkJlWjE3aFd1bWszeTlEN3pGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkR1bXdsY1k4MkZQL0RJWnF6UE0rbzVLdStoV0Q2amltaVdTTkp6Y1pSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSmhBQjVWeVRhMENrL0VqS3BMb1JXVFptV1FCbnFVSTFJUzNmWm9XMFZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNFpoN3Z5ZnA3RUZqeis3K1ZleFJaM0J0MEpNRTFJbkQzYVlkMGNWcjA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOVldraUZTYkJZVWxvaGtCeTJiK0NzNTA3UlNqSjB3ZmZYdlVLZjg3MDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkxWGIzS0NWL2p3TDRPaHRiTWVQUDdsZ2RBdnpLZ0JuNmhyOG5yNDk1RTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxMSlYxT051RWR4OWVLV0hCU2VzM0x2K0d2dnVTV3BOazJZS3R6eWkyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidi9XbWVsZ1dwdm5KWi9QWVhyVnVzcnArM1kyWndDQXRYRWlMOHpwMkJ4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksxTS9qY2tuNytWcXQ4cTJ2WWN1MTF5a2JDQUx6OUF4ZTNneHI0NzdkUVRDUytiVWZlRjU1OEJSd2xod1BlTC9zQWR0aFJvOFZyS1paSzFQM2VueGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiI1Q1lEYkNLdjBpVnlYZVl3ZUlBTnJrUHVOUkhpSldGQ0ZUTkE0OTdRZnY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLT3dwUkFnTVNldWNfNzJfdjV6cWNRIiwicGhvbmVJZCI6IjFjODU4M2UxLTEzMmMtNGIzZi04MTExLWZlMzA5ODBiOWY3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMnhVQTBobisvRnFDSmZXQ2xJN1E2ZGpZWFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnE5VnV4Vkx5Z0huUWdUQktqOUpCVGR1NUNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFENUFXRTdSIiwibWUiOnsiaWQiOiI1MjE4MTI0MDE2OTkzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOCgPCdl5TwnZe78J2XvPCdl7vwnZiG8J2XuvCdl7Ig8J2Xl/Cdl7LwnZiD8J2XtvCdl7kgIPCdl6bwnZe18J2XrvCdl7HwnZe88J2YhCDwlqSNOTk58JOBuSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEdaaTR3R0VNWDJoYmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieEU2dlZ6K1F0ZTZvT1RYVndza1RvMkNqQzNoTDJza1dIazh0VXptbkx4UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXdqT25CdEtsR1plYkl2NGduOVB3THpxR1lZOE53RmZNeXIyTlN2ck5QdXR4YU85bmRpVkp4S00yZFZBd0R4b3EreTFZNERpc0Z2RUtkUkJMM0ZSQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFsc0NxdWRpYXpyamk3ZW5hb0JidFBnMDh3aUd4eTFmR1dBcFFISTJ1Qlphall3MG5Xa0FGMkVXQmJMS1k3VzVoK0w4Y0JuL1N4V2orb0dQNkdmS2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTIxODEyNDAxNjk5MzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNST3IxYy9rTFh1cURrMTFjTEpFNk5nb3d0NFM5ckpGaDVQTFZNNXB5OFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgxNTAzNTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUFvIn0=
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
