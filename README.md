# DenoIndiaBot
Official Bot for Deno India Community on Telegram

## Telegram Bot Setup Guide

### Install Deno

* The Telegram Bot🤖 is written in Deno. Thus, in order to install Deno, follow the doc here 👉 https://deno.land/manual/getting_started/installation

### Fork and clone this repository

* Fork this repository using the button in the top-right corner of the page. Refer https://docs.github.com/en/github/getting-started-with-github/fork-a-repo for more details.

* Having forked the repository, clone the repository to your local machine using the below command in the terminal :
```
$ git clone https://github.com/YOUR-GITHUB-USERNAME/DenoIndiaBot
```

* Having cloned the copy to your local machine, enter into the directory using the `cd` command.
```
$ cd DenoIndiaBot
```

* Great, you are now present in the source code of the project. You can take a look at the contents of the project using the `ls` command.
```
$ ls
```

### Get the TELEGRAM API Token

* Ping [Botfather](telegram.me/botfather) on Telegram and make your instance of OSDC-Bot 🤖 bot by selecting `/newbot` from the options provided.
* Copy the `TELEGRAM_TOKEN` provided by Botfather.
* Run `export BOT_TOKEN=<TELEGRAM_TOKEN>`

### Running the bot


Make sure you have followed all the above steps and are in the `DenoIndiaBot` directory.
Execute the following command 
```
$ deno run --allow-net --allow-env index.ts --port=${PORT}
```
The bot would be running at the username provided by you on telegram. 🚀
