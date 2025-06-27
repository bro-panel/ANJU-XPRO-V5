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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJVeHJBcHVjbDFiZDJnNk9qY0lmR0NFWnRLVFpGYUcxMVB4RE9XS1hFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWhtZ2JzSVZLeGF2L3E4SmdZcmtnR1dpSnpCT3FiSUhjb0lkU09sTzVrdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQU9WVTBRdUlBT2llYXo5U0RYcmRIYmJBS2E4eXlPR0h5M2kvQmJKZ0dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0VjNPdGNDRHFuSU83SGJlaXZGRElxUlF4RDdWUGRuNEkzRHNtazJSZzBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlON2h3a2VQNXo5MmZZWE1PUTlzMk9BVTBBOEYwZ3ZHMGQreGRrcWlCR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTdzlSaFVLMk85dGlEVWdTMG5YZDJCRjF2MWJjWGM4TE8zYzFYNHQ5VW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FUaHFjaDZUNjN6THlYQUZGTTFNTmNuVW1YcTd5clgzU2ZCTTZlNzVXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3Y5cTA0ajVsbGE0d1JKUXc2aUQ2aVo0RHpMSlRjTGhxaDhlZlRYRnIzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhYbm9RY2pNVVVSVmlJY3lIWTdzQmtYQlk5aDdleVRiSVNZMVRLTVJtK0IxT2svVm1yLzlPeWhIMDdjS0Q1dWloZmpNS3ZNbENxSVprUG9VWkx2N2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJ1WHg3Mk1pNExLZ2w5a0FOQnAyZEh2ejNHeHJPdDRTY1RpMHB2UVFPMTU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKR0gteWk5VlNjLUI2dGpnMENTOFp3IiwicGhvbmVJZCI6IjVmMDlmNzY2LThkNDAtNDUyNy05YmQ2LTJjOTA4YWM1MmY1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVnZQTXR5UjZRT3lxM09aNVp1bXRsbmVEbDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk10VXJQeEVzclRiNit0NWlBam1nZitIalc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVTTEgxRlIyIiwibWUiOnsiaWQiOiI5NDc2NjUxODI0Mjo5NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjgxNjMwMTgxOTkwNTg0Ojk2QGxpZCIsIm5hbWUiOiLwnZCSypzhtIDJouG0h+G0hyB8IOKdl/Cfh7Hwn4ewIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYmM3OEVFRUpueStjSUdHQ2tnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWSHEza09CamsyekFFSlJkTjNsa2lPTjhxSHdSaG9UemFpV0luSDhRcVVVPSIsImFjY291bnRTaWduYXR1cmUiOiJhVU1mK1JOOU41dnZrQW5yY1FwNkVrb1Bya0pLdEZIZDNzMlZJMThaMjNjOEY0NFo3bTE3Z1VWYm9VV045UklyRnlTY0hPQVFIUURCMHFsUDR1RTRCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWZJVDV3WVlkU3NkV0lJTTJ5V05YaTUvalBqMklZMGpDU2hwUDhrdnZjRGZFa1FFRll5ajlUTXZ2RnhsYys2cVpTeE1aQjgydlRTbERsQ3QwYU5raXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjUxODI0Mjo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUjZ0NURnWTVOc3dCQ1VYVGQ1WklqamZLaDhFWWFFODJvbGlKeC9FS2xGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEwMjE4NjMsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
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
