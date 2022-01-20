import { ENV } from "./constants";
import { Telegraf } from "telegraf";
import commandList from "./command.json";

const bot = new Telegraf(ENV.TELEGRAM_BOT_TOKEN);

// const serviceOptions = [
//     {
//         type: 'article',
//         id: 'get_current_date',
//         title: 'Get Current Date',
//         input_message_content: 'Please choose an option:',
//         reply_markup: Markup.inlineKeyboard([
//             Markup.CallBackButton('option1', 'option1')
//           ])
//     }
// ];

bot.settings(async (ctx) => {
  await bot.telegram.setMyCommands(JSON.parse(commandList));
  return ctx.reply("Ok");
});

//method for invoking start command
bot.command("start", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    `Greetings, ${ctx.chat.first_name}.`,
    {}
  );
});

bot.command("date", (ctx) => {
  const d = new Date();
  const datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();
  ctx.reply(datestring);
});

bot.command("services", (ctx) => {
  return ctx.reply("services reply", "1", "2");
});

bot.launch();
