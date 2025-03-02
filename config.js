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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_17_03_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1OFd5V0VWVmcvSzBob05xd0pjSWFScjJJOTRZMmNleW41M1ovK2hLRzdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNTkyNjE4NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhEQzFBOUU4NThDREUxRTA4NkJCRDE0Q0I5OTc3OUJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MDkxNDI2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwQ25XaklLaVRWeUtwdWY3NGZyNmFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEwNTYzOTc2LWMwNzMtNDhjMi1iNzBiLTk3OGRjZjFmNzBmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAxMyxcbiAgICAgIDI0NixcbiAgICAgIDE5NixcbiAgICAgIDc0LFxuICAgICAgNjgsXG4gICAgICA0MCxcbiAgICAgIDE4NSxcbiAgICAgIDkyLFxuICAgICAgMTY3LFxuICAgICAgMjI0LFxuICAgICAgNTAsXG4gICAgICAzNSxcbiAgICAgIDEwLFxuICAgICAgMjIxLFxuICAgICAgMTMyLFxuICAgICAgNjMsXG4gICAgICAxNzgsXG4gICAgICAxNDIsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICA0OSxcbiAgICAgIDE4NyxcbiAgICAgIDIxMyxcbiAgICAgIDk3LFxuICAgICAgMzUsXG4gICAgICAyMTUsXG4gICAgICAxNjAsXG4gICAgICA3NSxcbiAgICAgIDIzMyxcbiAgICAgIDIyLFxuICAgICAgMTc3LFxuICAgICAgMjUsXG4gICAgICA0NCxcbiAgICAgIDExNixcbiAgICAgIDE5MCxcbiAgICAgIDgsXG4gICAgICA4MyxcbiAgICAgIDExMCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdLTFFCWEtRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU5MjYxODY3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3ODE1MDI0NTM3NzUwOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+miyBLaWFyYSDwn5Sl8J+SlvCfkq9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT3A0YXNIRU5EOGtMNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdQN0xHNk5QZCtvdEt6RlB5Vk1uWkNxbklIUENtUVJTTEpra0tRdSt0U3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOGNmK2RZMzhiU0VZaDRWVFFJSEpCZDhqV1YxTXQ4T1JWTGpTMERhRk5qWEJQMlNZdHhpckZHYmFmSStUWGFNb0hXQVZ4dFJZMUZhVjJHV2V4ZDJRQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWklUYzJHN2VTOFE1TUh6TFVnTkxGZS9rVUtkNktveHJuVTBkeXo5d2Urbm9kcVZRL0VucGFNODU3ZWs2L1k4aEF6WUlOeUNBekZ5d0pXaXBxYS9yaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1OTI2MTg2Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwOTE0MjYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW1kXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBbWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1ZUpMdVVwaVJEa3dpbXB6Nk9IeEhVbEI5bG5mbUFlUFJ4bnFOZFhMWEJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzA4MjAzMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDkxNDI2Mzk2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail",
  ownername:process.env.OWNER_NAME|| "Kiara",


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
