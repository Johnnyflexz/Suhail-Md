const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dokunjohn5@gmail.com"
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
global.save_status = proctenv.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_44_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5NVpNQ0dyQS82QnNqWmllbFRYd3pwcWFNL0VvSU5sNWdOcWpDNHpPY3hvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0R0p2czNVZVROdVlBX2RlQnJ1UXpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyM2ZmOGU3LWY1ZGUtNDY4OS04NGU1LWRiMWExNTMwZDNiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDIzMyxcbiAgICAgIDE3NyxcbiAgICAgIDc1LFxuICAgICAgMjI4LFxuICAgICAgMTMxLFxuICAgICAgMjI2LFxuICAgICAgNzcsXG4gICAgICA2OSxcbiAgICAgIDgsXG4gICAgICAxOTMsXG4gICAgICAxMTEsXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICAzOCxcbiAgICAgIDIyMCxcbiAgICAgIDQsXG4gICAgICA3NyxcbiAgICAgIDIyNixcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDEyNyxcbiAgICAgIDIzMCxcbiAgICAgIDExMixcbiAgICAgIDE5NCxcbiAgICAgIDE0MixcbiAgICAgIDE1MSxcbiAgICAgIDY1LFxuICAgICAgMTI5LFxuICAgICAgMjQ3LFxuICAgICAgMTk1LFxuICAgICAgNDgsXG4gICAgICA5OSxcbiAgICAgIDQ3LFxuICAgICAgMTAyLFxuICAgICAgNTEsXG4gICAgICAxNjIsXG4gICAgICAyMDgsXG4gICAgICAyMjksXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UjNXTUdWUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0ODA0ODU0NDo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvaG5cIixcbiAgICBcImxpZFwiOiBcIjIwODY1NDA0MTE3MTMyOjc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ITHQ4WUdFS0wvamI0R0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjRVY2N1SWhRb2pQYWR4WUJHVzJKeHZqVHVOYUhGNGxYUHU5aDFBVGVHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRUlgvTk1EcWhVVjJreUJ1QXhUZ3U2M3VkMVowVkI5SnNWRStpSWJsTmdvNGF2VGdEL0FDOHcyenhFWkQ4UWRoNzA4MTkzMVphSlB4TzhNYlJoSG5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZE5WVlR1d3VoUW80QmZidVJEd0lySlJCNGp0UHhENTZBeWVCeDlaNC9uSUlWVHJIZkJHRnVid2NXcUdGWFhmYkVLaTM0c3dPUkQ0TUhPV2dMOW5EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4MDQ4NTQ0Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwODY1NDQ1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
