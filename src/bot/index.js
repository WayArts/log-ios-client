const TelegramBot = require("telegraf");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});

// Matches "/echo [whatever]"

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    console.log(msg.text);

    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});