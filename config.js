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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_07_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3ZnRIMzBIdWtwTGZUV2p4bVR4VEVOSXhYQklScWlDNGdTb0MzQ0dDM0I4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1ZXFfQkR0TFRidWFGb1A3VjktYUZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMzN2M4NGU2LTU2ZjQtNDVmNC04MWUyLTRlZjdlY2QwYzVhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICA1NixcbiAgICAgIDgsXG4gICAgICAyNTMsXG4gICAgICA1MCxcbiAgICAgIDIyMixcbiAgICAgIDIwMSxcbiAgICAgIDk2LFxuICAgICAgNTAsXG4gICAgICAxMDQsXG4gICAgICA1MyxcbiAgICAgIDEyMCxcbiAgICAgIDEyNSxcbiAgICAgIDIzLFxuICAgICAgMTUyLFxuICAgICAgNzUsXG4gICAgICAyNixcbiAgICAgIDk2LFxuICAgICAgNzUsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMTksXG4gICAgICAyMDcsXG4gICAgICAyNTQsXG4gICAgICAxNTQsXG4gICAgICAxMDEsXG4gICAgICAyMDQsXG4gICAgICAxODIsXG4gICAgICA0OSxcbiAgICAgIDE4MSxcbiAgICAgIDE2LFxuICAgICAgNDMsXG4gICAgICA0OSxcbiAgICAgIDE4MyxcbiAgICAgIDI3LFxuICAgICAgMTI5LFxuICAgICAgMjQ4LFxuICAgICAgMTg3LFxuICAgICAgMTQwLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJBS1lZUzFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MDQ4NTQ0Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9oblwiLFxuICAgIFwibGlkXCI6IFwiMjA4NjU0MDQxMTcxMzI6NzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhMdDhZR0VJNnBqTDRHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCNFVjY3VJaFFvalBhZHhZQkdXMkp4dmpUdU5hSEY0bFhQdTloMUFUZUc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRCMnZhaFpuKytOZ21rWnZETkdUOTdJaGptWmFkOWlOdXNnSXdpb3h4dEttQ242aW1oUlFhL1ZOS3JUTkp2Rmxjd1huNlhGSXFkSDdkU2w1SDV4aUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE0bytRdUFFeDd6bUdZc1Npa3R6Rm9WRGUwUmswVVBrSnUyMVZGZldScmZ4Z1MvL0hDR250YUtkZGZwN28xVGVPVlJFbGJTMElPWEdoazhQMjZOd2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDgwNDg1NDQ6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA4MzgwMzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
