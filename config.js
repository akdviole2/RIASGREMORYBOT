//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.pinimg.com/564x/13/38/c1/1338c164f8c315b31ad715f655fb2f9b.jpg";
global.devs = "237671059500";
global.sudo = process.env.SUDO || "237671059500";
global.owner = process.env.OWNER_NUMBER || "237671059500";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.pinimg.com/564x/13/38/c1/1338c164f8c315b31ad715f655fb2f9b.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0YvMlV1d2ZPdWxMbnBpU3ZrR3IyTmdMQitXOUhLMmNFajRSVVpJWnMzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVI1S09VcEFNNERaQld5WnJrNDZwclR0M0ZtdGt2YlRmL0QrMGVxTGlRUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR05WeVcvYUNVYlZhOStQNXo2WXZubnAzRjB4VzhXaG0rRnlDb2h4Um1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRk56WEdTZ2hlTDJDUGxDOW1PWDdKcXk2dXU4UDFzL0QxS1Fsa0t3RndJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GNXhLeVBBMVFCd0hmdlhpR2RjaVllNFZGc05rN3NqTHArZ2RzREZNazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvZHpybFY1SVBzZkxQcEFwWkdOc1hxVm4rcTZTMFdHTTBydFdVL2wreWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJ6dFBaUExGOUFJYyt1S3p3aVNqKy9LTi91emJ6Z2FNSnM4aVp3ZERsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHN2d21nOWFvUjdLVmdoNnFEbXpMN3Q3TzB4a0oxRVlyYUtrUmRHTXN5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV0b08wWVFsbCswM3NqcjNxQnVBMG0yaXJIZlJYQWdPd0FxbVZxWEdoWTNBa3VUNDNrWmhhTnRPQ0MxMlFYbVprbUh2Tkk0T0xvbm9IZG5tSS9SMGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6ImtSRVAvR3ZibEVPSURIamV2OVQyYXhRc0FNeXpTVkt0WS9zV1hiQjNhWGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFwd3hrWHVTUjFTV0NMSUc2Y0MtcmciLCJwaG9uZUlkIjoiMmVkM2MwM2EtM2QxNi00YjZkLThlN2QtODZlODg0ZjgyYmFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU3K2ptQmZtZmVYQVhKalZ3MXBxTXhVT3dMWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RHF0cDE3L09uUUJzbWx1VGUvakJWanNUVXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0g1VEJLTFEiLCJtZSI6eyJpZCI6IjIzNzY3MTA1OTUwMDo2OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXVTdGZvRkVJM1RnYllHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOG9aS2sydmg1Z2FBOFJZbS9QL1NaOUxNdEUzSVNja0pReEhNMUFreDhTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ0JJcUpXNE9BUnNXUEVydm9YS3NYaVcwVmUxakkwSEFMVDBzWnMyeURLKzFrc3JVV1pHUGw2RzBXb0N5bW9vSkxobjZtTHI4VVVtQTN6T1VBVE5XQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IklHbGFFYi9rTnBpcnZjUHFFeVB4RHVDWjFqdlJGOHVuNUQzK2o0azFNVElkTllzV0kxVkh6R25QaTVWYXJNeHlOZy9EZTdNZStoYnBMbytZeUVQWGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjcxMDU5NTAwOjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZLR1NwTnI0ZVlHZ1BFV0p2ei8wbWZTekxSTnlFbkpDVU1Sek5RSk1mRWoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4ODU5NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkxnIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "AK D VIOLE",
  author: process.env.PACK_AUTHER || "AK D VIOLE",
  packname: process.env.PACK_NAME || "VIOLE",
  botname: process.env.BOT_NAME || "VIOLE",
  ownername: process.env.OWNER_NAME || "AK D VIOLE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
