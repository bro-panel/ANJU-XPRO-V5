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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdNandZdTRIR1RNb0p4SWxYSDBJUUVScjU1U1FHL05TWEI4aTlVTmhWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDF5UDQwMGJhUXBBaWZ0R0Q3MGNpV2o1UEV0YTNyZTRLd05oUmt5YUYyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S0lNK2lFcWdhVllSeDhtSlU0c1g3NHN3NXVoWHNxMmlkRjVmRXRnclhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiK2dNNjA0RndDTlFjZ2dCOW04elUwZGhQdlB3ejMrU2JlaExackRFWGwwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROZ1k4OFA3cDg4ZmFaS0VONUtGaEQ2dVcwMHZXbk8rbW9YRVFpTzk2WEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNqS1BOV0Nza0FFWjc4L296V3BVZjU2cVdTdloyYVJweW94VEhLU0YyZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05HUWMwdDFZa3lGMFh4SURXVFBPRFZiSXJLajk1ZFp1UEZwSkQ4amJtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi84Y3hoMjAwb0psdUFGVzNJYXZtS0pnRzFKT08rdmRoMDB5d29KY1ZUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81Ukg3VmdvTldySmQxZVBveHhtWFVNbTZMMGJNUjRnMWFrMmczWnlvOU50Z2VRUEdHMytsTDhjVE52L0d3UXpjTDRDMDNKR21HYjRxZVU3aHdURkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6Iml4ZW51dVRGMHdJM0JnaGlyQUlTZ1hZdzV4Ti81SDBzY1lGdmdTSjEvT289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBUalR4M0dlUlBtZW9USnZvVGdQUmciLCJwaG9uZUlkIjoiYmRjOTRlOWYtMWNlYi00ZjlkLTg0MTgtYzgxYzkwNjYyZjFmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitxK04yL25TMkNwS1JoaUhCdkQ2S2p1RkhQbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Mi9idlN2SG1Tc0l0U2l4RWFLcG5mWXllZ1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVFBNzFIQTciLCJtZSI6eyJpZCI6Ijk0NzY2NTE4MjQyOjk3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODE2MzAxODE5OTA1ODQ6OTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYmM3OEVFRVBheCtzSUdHQ29nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWSHEza09CamsyekFFSlJkTjNsa2lPTjhxSHdSaG9UemFpV0luSDhRcVVVPSIsImFjY291bnRTaWduYXR1cmUiOiJjc2ZLR2JDNEFtQndnc1lwTHJ3VW1PdGZ1TytyRm5VU0lyL3dhUStiNkZadGF0ZUMvbGxqR3A5Nytaa1pEblUzTnZVcFozTnZ0UUpoajlFS0VGTkVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNGkydVdjZ3h3YldCWkJmOGx2ekdnQ0ZIUURvWGVXZ2pVN2ozdU1NNjVObUVHL3QwR3ZTdldURUhKWk1yUTF0MWEyMStFcURKMTV4bnkyb3ZlWnpSRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjUxODI0Mjo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUjZ0NURnWTVOc3dCQ1VYVGQ1WklqamZLaDhFWWFFODJvbGlKeC9FS2xGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEwMzAwMTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
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
