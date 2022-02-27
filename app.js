const Vkbot = require("node-vk-bot-api");
const bot = new Vkbot(process.env.token);
const Markup = require("../lib/markup");

bot.command("Начать", (message) => {
  message.reply("Привет, как дела?", null,
    Markup.keyboard([
      "Отлично",
      "Хорошо",
      "Так себе",
      "Плохо"
    ])
    .oneTime(),
  );
})
bot.command("/hi", (message) => {
  message.reply("Hello!")
})
bot.command("/coins", (message) => {
  let random = (Math.floor(Math.random() * Math.floor(2)))
  if (random === 0) {
    message.reply("Орёл")
  } else {
    message.reply("Решка")
  }
})
bot.command("/8ball", (message, args) => {
  let replyes = [
    "Да!",
    "Нет.",
    "Возможно",
    "Я не знаю!",
    "Можешь не сомневаться в этом!",
    "Ну конечно же нет!",
    "Я не уверен спроси позже"  
  ]
  let text = args.slice(0).join(" ")
  if (!text) {
    message.reply("Задайте вопрос")
  }
  let result = replyes[Math.floor(Math.random()*replyes.length)]
  message.reply(`${result}`)
})

bot.startPolling();
