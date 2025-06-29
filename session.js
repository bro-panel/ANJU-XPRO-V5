//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09LbnVOZUUwU1RIdHlNU1ZLT3pvNHMwU29vVVFTS1lCa1RMWHZjTTMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2dqK0xPWkpCRFM1ekI0bVJoWlNiM3NKY3p0R3dzcHhhTU1rREVPQzNXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT2Q3NjFxVnNDQnRLSnR1cXhBTGUyZkd6R2xXYWY2ZFlzY05RYUtZcGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZnNYVUt2YnA1TEZIRi92dGlNL1ZSbm40TXdrZnFkTU9KbHBjakZuSjNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIc3VwK0oxYVZFNW9KbGxreG0ydlZvN05TWVhWd1hKcWx4Sll4RFJjWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks5NTdwSGJ0Y3FlNEg4WThudXQzMHI2OWJJVmNGYnJvYk5sbW5xU1Q2SEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1QUXVyN3pzbjBxVVJ5Mzh2blA5dE5LcnFrY2VjdlJpUEF1R3Z5ZWRYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWdWanVYQVNGMDlhNHpjNmV3VUJSSjc0T3czL0tFTXNPRzJ5WTJaY3pUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitWVE14ZC9wZ1lLVHVpRURBcWpSVlkwUHcwUFo2cWlxRjRKczYrY0kxdlhnOWJGTEVwZDN5M2NrMzZhek40Q0wyOVluQ2tsSVZCNW1qTWFlZ0FwakJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6ImFZTGpGMjBpaStlaWJNSVZFN2d4L3hVeWtHOWlnaXQ3QTIzVGI3RmdGY009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVZRGFWSFE2U01xQmQyQWp6U0tSYnciLCJwaG9uZUlkIjoiYjQ3ZWU1MjItN2ExOC00Y2Q5LWJiMDUtNjE3NzBlMzYzZTMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpkOFJZVVlySm1JMHZMemxJcFQyQS9IZG5kTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWYmFGNDRnWUI4a0tvcGM0ZnozbG9HYW9lMFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTRLWlBHVlciLCJtZSI6eyJpZCI6Ijk0NzY2NTE4MjQyOjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4MTYzMDE4MTk5MDU4NDo2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2ZjNzhFRUVOcjRoTU1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkhxM2tPQmprMnpBRUpSZE4zbGtpT044cUh3UmhvVHphaVdJbkg4UXFVVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib0REb1BiUlVObjRFMDNXZGZNRmpuTFFlMW5CYklmMk9VeWpGQUVncHFYZGVwT3RLTXQ2a0lINjVKM291d0dGS1p0TGNETHlyaTVwenNITWlQTnBzQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InNGSXBQR3cybFg2R2pUWE5GNHh1Q3k2Mzd6L2FDSHZscVcvbE1kcUQzbGZZMWJlckR0enBQdWxSV0tiMWJja0JsV1ZQQld0L211ZjQ2YitwN3dXT0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjY1MTgyNDI6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUjZ0NURnWTVOc3dCQ1VYVGQ1WklqamZLaDhFWWFFODJvbGlKeC9FS2xGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEyMDI5MTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzRxIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94766518242",
  PASSWORD: 
    process.env.PASSWORD || "120363421350428668@newsletter",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94766518242"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
