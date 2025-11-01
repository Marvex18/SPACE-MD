require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"8Nbl5gix9gTvKYiC74fpZubca7NMSt8WMlISfWXKjkI="},"public":{"type":"Buffer","data":"HEJjmDbcudtXYCAwvWBN27mR2\/wlJu6EGPe\/4v+D4nc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mMbWgC+Z0aBaT2BbdzmS0D6AnMhYcamLd6UsZ5GsPHE="},"public":{"type":"Buffer","data":"vvWWZkt3bGxnq27vAqvYoozU71bjruiYNgtdO0jlfwk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"AK\/fAhe4hwWweM62n72I\/dN3MT1C+S3v6nrzQzCey08="},"public":{"type":"Buffer","data":"AE6pV\/2udF2huF8BmbY2yN\/5HVkWpCamIsm+h9qPvSc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WL4VY+mlWcKoYQ49+rBFGkzfKlzRmF8Zmb7kUg+eR1w="},"public":{"type":"Buffer","data":"tTzYQ60pXsODyUSL6DBOoQ\/A3N2aOVi4+X+ghPvHUFM="}},"signature":{"type":"Buffer","data":"4PPcQYh2+tYH5b3AuBxLpk0I86dpo37htIBsEYq0JQqpO6vslbW3K4kQUMher\/lgNfadzsxbYpkw3+q7xN1rBw=="},"keyId":1},"registrationId":185,"advSecretKey":"GvepydVtbqVxQUlHNIYObZCnnbs2Qzqf2Y40RqgNGXA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"R4GAhRlKRUe7xCR13TcC7Q","phoneId":"015e8cce-4a29-4a0e-a196-4546bbd5a698","identityId":{"type":"Buffer","data":"3C\/b7zPcoLYTjn02VN9wH17kBp4="},"registered":true,"backupToken":{"type":"Buffer","data":"PbBaqfpOwbuNDqI5GlPd9UD7qpM="},"registration":{},"pairingCode":"DRAY1922","me":{"id":"2349053516893:3@s.whatsapp.net","name":"Ｍ͓̽Ａ͓̽Ｖ͓̽Ｒ͓̽Ｉ͓̽Ｘ͓̽","lid":"239646944567390:3@lid"},"account":{"details":"CO+u9zAQlLKWyAYYASAAKAA=","accountSignatureKey":"jaHyAtHJ+QMEwZHn7r5n6FaUY72SWWQ5VeDpfToQRgQ=","accountSignature":"\/Z4wpYIylwvrnkHqn8it1y8MHne6ml\/FXFpaTzf4DFPpO15HWekzIoqr1ey0Tz6B2swUbZLvdwmLBUv6Qj8aAg==","deviceSignature":"vCwszkMZzv7fB87mMZOpPkj9MoGni8J3OZutbqBqH6yA6mSjiQtDB4vCkGZCefxfzMCYlSYHTpAeFwQMz992Dw=="},"signalIdentities":[{"identifier":{"name":"2349053516893:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BY2h8gLRyfkDBMGR5+6+Z+hWlGO9kllkOVXg6X06EEYE"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CBIIBQ=="},"lastAccountSyncTimestamp":1761974553,"myAppStateKeyId":"AAAAADkV"}',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349053516893',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Marvex18',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 10801080,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 222999333,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
