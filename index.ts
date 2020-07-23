import { Bot } from "https://deno.land/x/telegram@v0.0.2/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

serve({ port: argPort ? Number(argPort) : DEFAULT_PORT });

const bot = new Bot(Deno.env.get("BOT_TOKEN") as string);

bot.on("message", (ctx) => {
  if (ctx.message?.text === "/start") {
    ctx.reply("Hello World");
  }
  if (
    ctx.message?.new_chat_members &&
    ctx.message?.new_chat_members?.length > 0
  ) {
    let user = ctx.message?.new_chat_members;
    ctx.reply(`Hi @${user[0].username}, Welcome to Deno India Community`);
  }
});

bot.launch();
