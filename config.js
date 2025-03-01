const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_11_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTVIxdUZscHVIc1ZHWW9NK1RLaGpuNmhUMndvSFRMMndybGhzU3luTmlDMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUEt4QUhlTGNRR2VsTEFvSW5pYkZ2QVwiLFxuICBcInBob25lSWRcIjogXCIwYjBhYjM0Zi1jNjZhLTQ2MjUtYTE5My0zYjA1MzI0YmYyZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMjMwLFxuICAgICAgOTQsXG4gICAgICAyMjIsXG4gICAgICAxOTEsXG4gICAgICAxMjYsXG4gICAgICA1NSxcbiAgICAgIDE1OSxcbiAgICAgIDEwNSxcbiAgICAgIDUzLFxuICAgICAgOTAsXG4gICAgICAxMjUsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDE0NyxcbiAgICAgIDExMSxcbiAgICAgIDUzLFxuICAgICAgMTEyLFxuICAgICAgNzIsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTYzLFxuICAgICAgMTIsXG4gICAgICAyNTMsXG4gICAgICA0OSxcbiAgICAgIDI1MixcbiAgICAgIDE4MSxcbiAgICAgIDE0NCxcbiAgICAgIDU3LFxuICAgICAgOTMsXG4gICAgICAxNTQsXG4gICAgICA3MixcbiAgICAgIDE5OSxcbiAgICAgIDEzOSxcbiAgICAgIDE2NyxcbiAgICAgIDE4OSxcbiAgICAgIDc0LFxuICAgICAgMTU4LFxuICAgICAgMTczLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3ZPOS9BSEVLR2hpYjRHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyTi9Yb01tb1NiMHZpTGhsb2wyWk5oTlg2RVZDMENDenB6SjV6WDV0dGhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm8rMHFYaEN5amxaZ3JDNU5NUnZDaWJhcVJBeGI4bjJMNmpuVWptZ2t5UFFuK1liV2dheklQcW1xdk5kSVlFRHVrYnpmbHhiMHdhb2k4NnllZ0ZodkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitOdit0TU1GL2xNbFhoclFFRGprbjAxRnR1OUNSMzFJaDcrVUFuSSsrV1FacTNjMmdxSi9OdDMvZUJyUTVEQXdoZW5vWUV3MG9tZHRwS3ZPc01LVmdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNjEwNzgyNDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4NDk0MDk2NDA0NjUwOjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNjEwNzgyNDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA3ODc4NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCbmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJuai5qc29uIjogIntcImtleURhdGFcIjpcInZDRTJvUkh1N0NrelJwSDhyVWlGcDZxYzFLRHVjOTBCYU4reHdtcWdvRW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNTg4ODkzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQwNzg3ODAzNjcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "John Bot",
  ownername:process.env.OWNER_NAME|| "John",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
