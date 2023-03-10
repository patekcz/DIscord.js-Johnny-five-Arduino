// 
// Create by patek_cz 
// https://dsc.gg/qverlix
// 

// discord.js v13


// Modules
const Discord = require('discord.js');
const five = require('johnny-five');
// Bot permissions
const Client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
// Usb port
const board = new five.Board({ port: 'COM3' })

// Bot Token
Client.login('HERE TOKEN')



board.on('ready', () => {
  const led = new five.Led(13); // Arduino port 13 Led.(13);
  Client.on('message', message => {
    if (message.content === 'led on') led.on()
    else if (message.content === 'led off') led.off()
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
