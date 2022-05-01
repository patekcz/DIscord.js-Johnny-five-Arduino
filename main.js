//
// Create by patek_cz 
// https://dsc.gg/qverlix
// 



// Modules
const Discord = require('discord.js');
const five = require('johnny-five');
// Bot permissions
const Client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
// Usb port
const board = new five.Board({ port: 'COM3' })

// Bot Token
Client.login('OTQ5Nzg1MTcxMzIwNzk1MTM4.YiPaXg.8WHJyzQr9CeK1Tfhw9U8rImxaAs')



//
board.on('ready', () => {
  const led = new five.Led(2);
  Client.on('message', message => {
    if (message.content === 'led on') led.off()
    else if (message.content === 'led off') led.on()
  });
});


// Bot Status
Client.on('ready', () => {
    console.log('Client is Online!')
    Client.user.setActivity('by: patek_cz', { type: "WATCHING" })
});




//
// Create by patek_cz 
// https://dsc.gg/qverlix
// 