const TelegramBot = require('node-telegram-bot-api')
const token = '6749318599:AAHAAHDHH_k1Uniq16VmoxMnyTo6R5SC_vQ'
const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  const messageText = msg.text
  const masterbot = -4007024924
  console.log(msg)
  let forwardMsg = ``
  if(msg.chat.type === 'private'){
    forwardMsg = 
`<b>${msg.chat.first_name}</b> asked for VIP

🔑 CHAT ID : <code>${msg.chat.id}</code>
💎 USERNAME : <code>${msg.chat.username}</code>
🔗 t.me/${msg.chat.username}
`
  }
  if (messageText === '/start') {
    bot.sendPhoto(chatId, './media/welcome.jpeg', { 
      caption:
`<b>💎 Welcome to the Crypto Master</b>

<u>⭐️ VIP Plans</u>
       🚀 <i>Daily 4-10 future signals </i>
       🚀 <i>90% / 95% accuracy </i>
       🚀 <i>Money management plans </i>
       🚀 <i>Free zoom sessions </i>
       🚀 <i>Ledder / Dca tricks </i>
       🚀 <i>Monthly PNL target : 25000% </i>

<u>💰 Payment Plans</u>
       👑 <i>1 Month  :   20$ </i>
       👑 <i>6 Month  : 100$ </i>

🔥Join me on this journey, and see by yourself
`,
      parse_mode: "HTML",
      reply_markup: {
          inline_keyboard: [
            [{
              text: '💡 Social',
              url: 'http://t.me/cryptomastervipsignal_bot?start=social'
            },{
              text: '📊 PNL Report',
              url: 'https://docs.google.com/spreadsheets/d/1ziNkWXW5GpamL9Ps-zQgNfHQ-GXVNZfdv3iFfaMPfTc/edit?usp=drivesdk'
            }],
            [{
              text: '💎 Free Signal Channel',
              url: 'https://t.me/Cryptomastervipsignalservice'
            }],
            [{
              text: '👑 Get Vip Signals',
              url: 'http://t.me/cryptomastervipsignal_bot?start=joinvip'
            }]
          ]
      }
    })
  }
  if (messageText.match(/social/gi)) {
    bot.sendMessage(chatId, `Facebook page - https://www.facebook.com/profile.php?id=61552578093364&mibextid=ZbWKwL

Facebook profile -https://www.facebook.com/profile.php?id=61552574223490&mibextid=ZbWKwL

Watsapp chanel - https://whatsapp.com/channel/0029VaDDnZU0bIdnSVSG3k0d

Tiktok`,{
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{
            text: '💡 Share',
            switch_inline_query: 'share'
          }]
      ]
      }
    })
  }
  if (messageText.match(/joinvip/gi)) {
    bot.sendMessage(chatId, '💸 You have to make payment using binance. Please contact Crypto Master Admin to join vip.\n\n💰 Copy binance pay id : <code>732188735</code>',{
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{
            text: '💡 Share To Others',
            switch_inline_query: 'Crypto Master'
          }],
          [{
            text: '✅ Contact Admin',
            url: 'https://t.me/Cryptomastervipsignalservic',
          }]
      ]
      }
    })
    bot.sendMessage(masterbot, forwardMsg, {parse_mode: "HTML",})
  }
  if (messageText.match(/vip /gi)) {
    if(chatId == masterbot){
      userchatid = Number(messageText.replace(/ /,'').replace(/vip/gi,''))
      bot.sendPhoto(userchatid, './media/vip.jpeg', { 
        caption:'👑 You have been successfully authorized to VIP of Crypto Master\n⭐️Click below button and join vip group.',
        reply_markup: {
            inline_keyboard: [
              [{
                text: '👑 Join VIP Signal Group',
                url: 'https://t.me/+xtSGWzSwq0o3MWE1',
              }]
            ]
        }
      })
    }
  }
})