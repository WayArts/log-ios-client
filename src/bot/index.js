const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

const viewDataButtonText = 'View data';
const helpButtonText = 'Help';
const watchDataTypesButtonText = 'Watch data types';


bot.start((ctx) => {
    ctx.reply('Watch menu', Markup
      .keyboard([
        [viewDataButtonText, helpButtonText], // Row1 with 2 buttons
        [watchDataTypesButtonText], // Row2 with 2 buttons
      ])
      .oneTime()
      .resize()
    );
});

bot.hears(viewDataButtonText, ctx => {
    ctx.reply('on ' + viewDataButtonText);
});

bot.hears(helpButtonText, ctx => {
    ctx.reply('on ' + helpButtonText);
});

bot.hears(watchDataTypesButtonText, ctx => {
    ctx.reply('on ' + watchDataTypesButtonText);
});

bot.launch();