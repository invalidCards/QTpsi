var Discord = require("discord.js");
var commands = require("./commands.js");
var config = require("./config.json");

var test = false;

var bot = new Discord.Client();
var admin_snowflake = config.admin_snowflake;
var logging_chan = config.logging_chan;

bot.on("ready", function() {
    bot.setPlayingGame("Pokémon Sun&Moon");
    log(":ok: Bot started up successfully.");
});

bot.on("disconnected", function() {
    bot.loginWithToken(config.login_token);
});

bot.on("warn", function(warn) {
    log(":warning: Warning found: " + warn);
});

bot.on("error", function(err) {
    console.log(err);
});

bot.on("message", function(message) {
    var cmd = message.content.split(" ")[0].replace(/\n/g, " ").substring(1).toLowerCase();
	var suffix = message.content.replace(/\n/g, " ").substring(cmd.length + 2).trim();

    var messageNick = message.channel.server.detailsOf(message.author).nick;
    if (messageNick === null) {
        messageNick = message.author.name;
    }

    if (message.content.startsWith(">")) {
        if (commands.commands.hasOwnProperty(cmd)) {
            log(":information_source: Normal command **>" + cmd + "** issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
            commands.commands[cmd].process(bot, message, suffix);
        }
        else if (commands.aliases.hasOwnProperty(cmd)) {
            log(":information_source: Normal command **>" + cmd + "** issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
            message.content = message.content.replace(/[^ ]+ /, ">" + commands.aliases[cmd] + " ");
			commands.commands[commands.aliases[cmd]].process(bot, message, suffix);
        }
    }
    else if (message.content.startsWith("<")) {
        if (commands.admincommands.hasOwnProperty(cmd)) {
            log(":information_source: Admin command **<" + cmd + "** issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
            if (message.author.id === admin_snowflake) {
                commands.admincommands[cmd].process(bot, message, suffix);
            } else {
                bot.reply(message, "you don't have the permissions to execute this command.");
                setTimeout(function() {
                    log(":information_source: Action was disallowed because user did not have permissions.");
                });
            }
        }
        else if (commands.adminaliases.hasOwnProperty(cmd)) {
            if (message.author.id === admin_snowflake) {
                log(":information_source: Normal command **<" + cmd + "** issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
                message.content = message.content.replace(/[^ ]+ /, "<" + commands.adminaliases[cmd] + " ");
                commands.admincommands[commands.adminaliases[cmd]].process(bot, message, suffix);
            } else {
                bot.reply(message, "you don't have the permissions to execute this command.");
                setTimeout(function() {
                    log(":information_source: Action was disallowed because user did not have permissions.");
                });
            }
        }
        else if (cmd === "reload" && message.author.id === admin_snowflake) {
            reload(message);
        }
        else if ((cmd === "restart" || cmd === "stop") && message.author.id === admin_snowflake) {
            log(":gear: Bot restarting! Command issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
            setTimeout(function() {
                process.exit(1);
            }, 100);
        }
    }
});

function reload(message) {
    var messageNick = message.channel.server.detailsOf(message.author).nick;
    if (messageNick === null) {
        messageNick = message.author.name;
    }
    log(":arrows_counterclockwise: Command reload issued by **" + messageNick + "** in **#" + message.channel.name + "** of server **" + message.channel.server.name + "**");
    bot.sendMessage(message.channel, "Cover me! I'm reloading. :gun:");
    delete require.cache[require.resolve(__dirname + "/commands.js")];
    try {
        commands = require(__dirname + "/commands.js");
        setTimeout(function() {
            log(":white_check_mark: Reloading commands succeeded!");
        }, 100);
    }
    catch(e) {
        setTimeout(function() {
            log(":sos: Command reloading failed: \n```\n" + e.stack + "\n```");
        }, 100);
    }
}

function log(line) {
    bot.sendMessage(logging_chan, line);
}

if (config.login_token === "") {
  console.err("Login token not set. Please edit the config.json to set it.");
  process.exit("1337");
} else if (config.admin_snowflake === "") {
  console.err("Admin snowflake not set. Please edit the config.json to set it.");
  process.exit("1337");
} else {
  if (config.logging_chan === "") {
    console.warn("Discord logging channel ID not set. Most logging goes there; edit config.json to set it.");
  }
  bot.loginWithToken(config.login_token);
}
