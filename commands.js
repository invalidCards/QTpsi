var version = require("./package.json").version;
var uclookup = require("./unicode.json");

var randomThingArray = ["Poop", "Mol", "Thing"];

var aliases = {
    "YG": "yg",
    "AD": "ad"
};

var adminaliases = {
    "stats": "status"
};

var commands = {
    "thing": {
        desc: "Chooses a random thing from the list of random things.",
        usage: "",
        process: function(bot, msg) {
            var randomInt = Math.floor(Math.random() * randomThingArray.length);
            bot.reply(msg, "here is your random thing: " + randomThingArray[randomInt]);
        }
    },
    "thinglist": {
        desc: "Shows the entire list of things that can appear in the >thing command.",
        usage: "",
        process: function(bot, msg) {
            var thinglist = "";
            for(var x in randomThingArray) {
                thinglist += randomThingArray[x] + " | ";
            }
            bot.reply(msg, "the current list of things is: \n`" + thinglist + "`");
        }
    },
    "wiki": {
        desc: "What a weird place this is. Shows a random wiki quote.",
        usage: "",
        process: function(bot, msg) {
            var memeArray = [
                        "To dark and not very bright",
                        "@Gaz is the epitome of bad",
                        "Thanks, I really appreciate your feedback, it really help! I will look a little closer at all the things you pointed out! Thanks again!",
                        "All the wikiclues point to psychorobot who has gone too far",
                        "**Oppose** - I have my reasons"
                        ];
            var randomInt = Math.floor(Math.random() * memeArray.length);
            bot.sendMessage(msg.channel, memeArray[randomInt]);
        }
    },
    "allen": {
        desc: "Some gems from that weird guy. Shows a random Lt.Allen quote.",
        usage: "",
        process: function(bot, msg) {
            var memeArray = [
                        "If I can really do about Wikipedia, then I help.",
                        "Who have resolved this.",
                        "You're asking why they've removed or reverted your edit on every article you edited was correct or incorrect!",
                        "Thanks for the reply, altered generic discussion only!",
                        "I'm in the U.S. Military Service and served as an admiral and lieutenant to afford defense.",
                        "Sorry, my mistake. On Wikipedia, you can do anything you want to edit.",
                        "I'm still on Wikipedia and know English, because the way it is general discussion on articles is allowed.",
                        "If my worth English is good, then the users will understand on article talk including general discussion.",
                        "They invite me to Teahouse, suddenly I'm good such editing on Wikipedia for editing or reverting/rollbacking edits!",
                        "Just a reminder that English is a language I speak on Wikipedia, not Vietnamese nor other languages I speak before because using a translator maybe translate to a non-sensible or gibberish thing, thank you!",
                        "I'm very good at English and know stuff a lot so, I'm good on English Wikipedia.",
                        "The cities where I recently went, but some of them I didn't go.",
                        "Twilight Sparkle is my best pony of My Little Pony: Friendship is Magic and I love her also!",
                        "I'm straight at English and professional Russian for the anime show for My Little Pony: Friendship is Magic and Pokémon, I love it here.",
                        "What, this isn't a copyright infringement. It's my favorite image!",
                        "What I know is Romanian, but I don't know how to speak to it!",
                        "Actually, My Little Pony: Friendship is Magic is a TV show about ponies and it's a 2010 TV series of the My Little Pony franchise, not about poop.",
                        "My worth English is good. Imperfectness.",
                        "Man, what the fuck! I'm good at English and Russian",
                        "My professional age was 14.",
                        "It looks like Gary Oldman to me",
                        "As of Malaysia Airlines Flight 370 was missing, it was gone in the southern Vietnamese coast or the Gulf of Thailand. I think do they find it yet while the airplane is where have been gone to?",
                        "As of I have my computer has 32-bit operating system, it doesn't support Adobe Premiere Pro CS6 and CC in 32-bit OS that I want to encode videos like 1080p or 2160p.",
                        "I'd like to be current active on Wikipedia for making further replies on every article that was made.",
                        "Thanks for my welcome on Wikipedia, however who may have resolved it.",
                        "You may have resolved articles that what I've posted there, so why you've removed that section anyway!",
                        "You're asking why they've removed or reverted your edit on every article you edited was correct or incorrect!",
                        "Thanks for the reply, altered generic discussion only!",
                        "I'm in the U.S. Military Service and served as an admiral and lieutenant to afford defense.",
                        "Thanks for your reply, then I have something to do to edit on articles which completely in service!",
                        "Where's the missing aircraft of Malaysia Airlines Flight 370, it has been gone at the Indian Ocean where located at...",
                        "Thanks for leaving a message on my user talk, however I used signatures I signed is used a template or using four tildes!",
                        "I need the Blu-Ray release!",
                        "It's okay, I have announced that in my talk page but don't remove sections off my talk page or you will eventually be subject to a block. Thank you.",
                        "I'm contributing somewhere else, my talk page is where I announced for. If you remove sections off my talk page where misused, then you will be subject to a block on Wikipedia will be issued.",
                        "I think the 5th season will premiere next year because after Rainbow Rocks we go on.",
                        "I saw you left a message on my talk page for reverting my edits, but I suddenly removed your messages off my talk page because I'm on Wikipedia on other articles.",
                        "Thanks for reverting it also, because I looked up on every article you edit that was good especially. I'm not abusing Wikipedia, also I looked up that was future and still there.",
                        "There's no reason for this airport to be the worst in the world, therefore it's not bad at all but it's good for Air China though.",
                        "Sorry about this, a long time ago that it was I tended to be admin, so I'm removing this.",
                        "Sorry about this section was removed, but I keep this though I was sent by this user.",
                        "Thanks for my contributions too, and I restored and would keep this also.",
                        "I reverted the page because of the description was incorrect that contains inappropriate name, so I fixed it and it's supposed to be correct that way.",
                        "I should keep this section, but not vandalism. I'm on somewhere else and make edits more good.",
                        "I just simply want to revert their edits that was vandalism or if you want, then do it and I make it a correct way to fix it.",
                        "If my worth English is good, then the users will understand on article talk including general discussion. Thank you.",
                        "I don't have to stay away from Wikipedia, because improving general discussion on article talk is allowed that way and it's supposed to stay there when I made a new section of it. My worth English is good and coherent and please do not remove sections off talk pages, thank you.",
                        "I use English only on Wikipedia and it's good and understandable. It's allowed that way on article discussion that we don't know where from IAH to ZRH but not until there's a news update for a new destination, Newark and Washington-Dulles have that destination.",
                        "No questions, what I know this building is the tallest one.",
                        "How it work on Wikipedia, which means rollbackers can revert vandalism edits from users to make people understand of the article was. Can I have rollback rights as of my successful effort on Wikipedia.",
                        "What I learn is rollback or revert vandalism edits on Wikipedia, so I can have rights for it after I enrolled at the Counter Vandalism Unit!",
                        "My worth English is good, it maybe right or impossible for me to have rollback rights on Wikipedia and however I'm not using translate (that's because the translate from another language to English is maybe nonsense or gibberish). What I did on Wikipedia is try revert some edits that is vandalism and fix the articles on difference above with undo revision.",
                        "Four tildes is okay, but with signature transclusions I use that without signing with four tildes.",
                        "Thanks for leaving a new message on my talk page! Just a reminder that English is a language I speak on Wikipedia, not Vietnamese nor other languages I speak before because using a translator maybe translate to a non-sensible or gibberish thing, thank you! I did first edit on Wikipedia that I spoke other languages was Spanish, French, Portuguese, Italian, Swedish, Romanian, Russian, Japanese, Korean, Chinese, Thai and Vietnamese. However I don't use them because I don't know what I speak a lot from English to these languages, thank you.",
                        "It was a question, but it's advertising through on this section!",
                        "Hi, thanks for leaving a new message on my talk page. I'm very good at English and know stuff a lot so, I'm good on English Wikipedia.",
                        "Hi, according to BBC and CNN news: the airplane just shot down by a missile and lost contact located in Ukraine areas. However the Boeing 777 is a good airplane/aircraft and never crashes, that involved 3 of them were lost.",
                        "Apparently English is my first native language, not Vietnamese. What I did on my first edit on Wikipedia is I use English on this Wikipedia.",
                        "My birthday was at July 28. For celebrating my birthday on Wikipedia, MLP Forums or any websites, then getting ready to go to another place where is good in Tokyo, Japan.",
                        "The cities where I recently went, but some of them I didn't go.",
                        "The fonts and spans are easy to customize it even my/your signature.",
                        "I mentioned this article has characters in this one as every-pony in Equestria are protagonists and tritagonists are the same as good alignments. With royal alicorns are Princess Celestia, Luna and Cadence are presented in the anime, I would present them as \"Sweet\" with good alignments too.",
                        "Hi, I use English on this English Wikipedia as they know me I'm American and Russian. Russian is my language that I'm an expert at it as well saying \"??????\" means Hello in Russian, however I'm a native speaker of English so there's no need to speak Russian here",
                        "I did want to undo revision what they've vandalized the article, so it would be reverted by me, an administrator or rollbacker. You think this considers a good thing on Wikipedia to revert vandalism?",
                        "The preceding unsigned comment by a user who signed my talk page without a signature I put an unsigned template there. So I check the difference of it on my talk page. And also why did you edited my user page removed yourself from my friends list?",
                        "English is my first native language what I used and it's useful.",
                        "Actually I want that template, and how can I view the image from an URL site without uploading an image to Wikipedia? Twilight Sparkle is my best pony of My Little Pony: Friendship is Magic and I love her also!",
                        "There, I fixed it the right way who did messed up the table",
                        "Hmm... your username is different but I don't know how to say it. Is that your username is good on Wikipedia?",
                        "Who's this? I don't know this guy and I have to get rid of you of leaving a message on my talk page!",
                        "adding airports where I didn't go before",
                        "I feel comfortable here on Wikipedia to be safe rather from Wikia, also I don't get attacked by users.",
                        "That's my important notice, like I want to stay on Wikipedia and feel more comfortable of editing here. But not on Wikia because they have riots there.",
                        "What I know is Romanian, but I don't know how to speak to it!",
                        "I don't want to be blocked, and Wikipedia is my job to edit here and not trying to being attacked. Not feeling bad.",
                        "Hi, does some policies from Wikia can apply to Wikipedia because I want to include an image or signature templates on talk pages? So why this isn't Wikia?",
                        "Hi, and you've absolutely deleted the page that I created was copied from Wikia that goes by CC-BY-SA. So thanks for deleting it as I might have to add a copyrighted content to Wikipedia as it applies from Wikia.",
                        "Hi, I represent myself of signing it here and you'll keep up the good work here!",
                        "All users, this is Officer Allen for further announcement on Wikipedia. I'm going to bed for that time at 21:30 CST (9:00 PM CST), which is I don't want to stay late (except Fridays and Saturdays) and be healthy, or maybe drinking water is good.",
                        "Uh, who is Michael Jackson? He's a great singer of making albums!",
                        "It's Michael Jackson, how'd he died in 5 years ago?",
                        "Hello there TyA, this is Lieutenant Allen for having my talk page content removed. Why was it removed for housekeeping.",
                        "Hi there KATANAGOD, I think that you sent me a message that I'm blanking pages. We'll I guess I have to report a disruptive wiki that is completely vandalizing on other spam and vandalism wikis.",
                        "Hey sactage, after VegaDark clean up reports on this wiki it needed to be archived. Archiving them: like [[Report:Vandalism/Archive 1]] would be fine.",
                        "I have the cops to get you, @Ozuzanna!",
                        "Oh, I created my house on my own in RuneScape, which is the same in Equestria!",
                        "As I'm a police officer, I'm stopping the riots breaking all over.",
                        "A contributor to Wikipedia, no personal attacks. I'm also got attacked.",
                        "You said my English was poor. I'm perfect police than somebody!",
                        "Man, what the fuck! I'm good at English and Russian!",
                        "Get these fuckers out of moms' house!",
                        "All users, it's Officer Allen! At least you want to play Minecraft, then make your way to interior!",
                        "What? I'm still on Wikipedia to remember what I could, man!",
                        "The Mol Man, don't do that. It's private stuff on Wikipedia!",
                        "I see, but don't attempt to look at my contributions or my page history that what happened!",
                        "I said paranoid is good.",
                        "I'm still 14 and attend the University of Houston, saying that music is lovely for ponies.",
                        "Paranoid, good condition of Twilight Sparkle.",
                        "You nigga, The Mol Man.",
                        "But I know, contacted the president and secretary about it."
                        ];
            var randomInt = Math.floor(Math.random() * memeArray.length);
            bot.sendMessage(msg.channel, memeArray[randomInt]);
        }
    },
    "kenm": {
        desc: "We can't get enough of Ken M.'s comments.",
        usage: "",
        process: function(bot, msg) {
            var kenArray = [
                'There\'s actualy more cells in our brains than there are brains in our entire body.',
                'If there was gravity in space, all the planets would fall down.',
                'On Sundays we go to a church that doesn\'t necessarily exist.',
                'GOOD product! We use plant holders to hang cured meat in the bedroom.',
                'Today\'s cows are obsessed with brand loyalty.',
                'But your point is irrelevant because you made it minutes ago.',
                'It probably only looks tiny because it\'s far away. Then again, it could be super close and the size of a potato.',
                'I\'m only certified to diagnose item deficiency.',
                'If we don\'t study the mistakes of the future, we\'re doomed to repeat them for the first time.',
                'Interesting how only police officers are allowed to be cops in this "free" country.',
                'There\'s supposedly only 6 species in the ocean that we haven\'t discovered yet.',
                'The Rover would be wise to refrain from sight-seeing and stick to its job. It can do that on its own time; every minute there costs billions of MY tax dollars.',
                'Mars is located at a higher elevation than anything on Earth.',
                'There\'s no I in "collaboraton".',
                'The word "onomatopoeia" is also an onomatopoeia because it\'s derived from the sound produced when the word is spoken aloud.',
                'Making circumcision illegal will only create a dangerous and unregulated black market. If the kids want it badly enough, they\'ll find a way to do it.',
                'When I was a kid, a dollar was worth ten dollars. Now, a dollar couldn\'t even buy you 50 cents.',
                'My daughter can be as slutty as she wants as long as it\'s done under parental supervision.',
                'It seems like nowadays people know more about stuff they\'re familiar with than stuff they haven\'t learned about yet.',
                'Grandson volunteers at wheels on wheels; he drives around and dumps old tires in people\'s yards.',
                'There comes a time when young people need to learn the value of feeding from their own breasts.',
                'Why won\'t Obama show his birth certificate from Kenya that says he wasn\'t born there?',
                'Is the whole number toll-free? Or just the area code?',
                'When babies smile, it\'s a sign of simian aggression.',
                'I teach a course called "Entomology & Ideology", two unrelated topics that were combined due to austerity measures.',
                'Don\'t forget about the mole people who live in our precious sewers.',
                'Yahoo has crossed the line that separates porn from ography.',
                'Most women can be driven to orgasm by hearing a bawdy tale that flies in the face of propriety.',
                'Charlie, there is a free sandwich in the breakroom.\nSorry. Wrong gchat window.',
                'Communism only works as a book. Some books just don\'t translate well to film. Every film adaption of the manifesto has been a flopper.',
                'Am I the only person who thinks the map is much older than 600 years? You can tell it\'s from back when people thought the Earth was shaped like testicles.',
                'Folks have trouble knowing when to use "versus" verses "verses"; "opposed" as supposed to "suppose"; "and" an "an".',
                'How come Wal-Mart doesn\'t do a big sale during birthday season?',
                'Some priceless paintings are so realistic that you can literally touch them and face real-world consequences.',
                'A proper diaper should be no shorter than 2 inches above the knees.',
                'The universe is one of the biggest mysteries of outer space.',
                'The first microchips were bigger than a tractor, but now they\'re smaller than a tomato.',
                'We are ALL British on this blessed day. :)',
                'If our brains get too smart, they will become self-aware and take over our bodies.',
                'Good point from my wife: we only see one eye because God is winking at us.',
                'You shouldn\'t have anything to hide if you are not doing anything intelligent.',
                'I live in Orlando, FL, and we take our kids to the Chunky Cheese instead of Disney World.',
                'Trees have chloroform that makes them blast out cool air on hot days. The chloroform tells the leaves to flap so they can make a cool breeze for the planet.',
                'Stars can\'t "race" anywhere because they are immobile by definition. Stay classy, Yahoo.',
                'Have you considered staying classy?',
                'How come America doesn\'t build big buildings anymore? If it\'s tall enough, there is less gravity on the roof, and you could float to the ground like a feather.',
                'The worst humblebrag about humblebragging was at that cast party when Matt Damon told me how Brad Pitt complained to him about winning "only" 1 Golden Globe award.',
                'I\'m reminded of the parable about the old woman who refused to bathe. All the townsfolk were outraged until they discovered that she was just a parable.',
                'Do what you love and the money will follow. Our son is an artist in NYC and he makes 6k figures.',
                'I\'m a devout Christian, but it sounds like this pope is reading too much Bible and not enough Ayn Rand.',
                'I\'m 73 in space years, but that is only 73 in Earth years.',
                'Today\'s young people don\'t have time for video games. How come they won\'t play Atari with their grandpa?',
                'Einstein posited that the absence of the Sun would lead to the suspension of time itself.',
                'The ancients believed that the bellybutton was a window to the gnarled remains of the umbilical cord.',
                'How can people believe in evolution when they\'ve never seen Darwin appear in a piece of burnt toast?',
                'If they don\'t show any breast, it leaves too much to the imagination.',
                'Most dinosaurs had pubic hair and armpit feathers.',
                'Please limit your posts to reposts of Ken M.',
                'True art doesn\'t need to be shown or talked about or created.'
            ];
            var randomInt = Math.floor(Math.random() * kenArray.length);
            bot.sendMessage(msg.channel, kenArray[randomInt]);
        }
    },
    "yg": {
        desc: "Replies with a link to the Yew Grove.",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "http://rs.wikia.com/Forum:Yew_Grove?action=purge");
        }
    },
    "ad": {
        desc: "Replies with a link to RuneScape:Active discussions.",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "http://rs.wikia.com/RuneScape:Active_discussions?action=purge");
        }
    },
    "lenny": {
        desc: "The Lenny face",
        usage: "",
        process: function(bot, msg) {
            bot.sendMessage(msg.channel, "( \u0361\u00B0 \u035C\u0296 \u0361\u00B0)");
        }
    },
    "help": {
        desc: "Shows the help wikipage.",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "http://runescape.wikia.com/wiki/User:ThePsionic/QTpsi");
        }
    },
    "ping": {
        desc: "Pong!",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "pong!");
        }
    },
    "pong": {
        desc: "Ping!",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "ping, but only because the Navy Seal copypasta was so long.");
        }
    },
    "stats": {
        desc: "Get the stats of the bot",
        usage: "",
        process: function(bot, msg) {
            var days = Math.round(bot.uptime / (1000 * 60 * 60 * 24));
            var hours = Math.round(bot.uptime / (1000 * 60 * 60)) % 24;
            var minutes = Math.round(bot.uptime / (1000 * 60) % 60);
            var timestr = "";

            if (days > 0) {
                timestr += days + " day" + (days > 1 ? "s " : " ");
            }

            if (hours > 0) {
                timestr += hours + " hour" + (hours > 1 ? "s " : " ");
            }

            if (hours >= 1) {
                timestr += "and " + minutes + " minute" + (minutes > 1 ? "s" : "");
            } else {
                timestr += minutes + " minute" + (minutes > 0 && minutes < 2 ? "" : "s");
            }

            var toSend = [];

            toSend.push("\`\`\`xl");
            toSend.push("Uptime: " + timestr + ".");
            toSend.push("Connected to " + bot.servers.length + " servers with " + bot.channels.length + " channels and " + bot.users.length + " users.");
            toSend.push("Memory Usage: " + Math.round(process.memoryUsage().rss / 1024 / 1000) + "MB");
            toSend.push("Running QTpsi v" + version);
            toSend.push("\`\`\`");

            bot.sendMessage(msg, toSend);
        }
    },
    "unicode": {
        desc: "Transforms a unicode character to codepoint and back, with documentation link.",
        usage: "[codepoint|character]",
        process: function(bot, msg, suffix) {
            if (isNumeric(suffix)) {
                if (suffix.indexOf(".") !== -1 || suffix.indexOf(",") !== -1) {
                    bot.reply(msg, "please supply an integer without delimiters.");
                }
                else {
                    var suffNum = parseInt(suffix);
                    if (suffNum < 0 || suffNum > 1114111) {
                        bot.reply(msg, "please supply a valid number between 0 and 1114111 (0x10FFFF) inclusive.");
                    }
                    else {
                        var hexCodePoint = suffNum.toString(16);
                        var character = String.fromCodePoint(suffNum);
                        var doLink = true;

                        if (hexCodePoint.length < 4) {
                            hexCodePoint = ("0000" + hexCodePoint).slice(-4);
                        }

                        if (suffNum > 131071) {
                            doLink = false;
                        }

                        hexCodePoint = hexCodePoint.toUpperCase();

                        if (hexCodePoint.length === 5 && hexCodePoint.startsWith("F")) {
                            character = "Character from Private Use Plane 15";
                        } else if (hexCodePoint.length === 6) {
                            character = "Character from Private Use Plane 16";
                        } else if (uclookup[hexCodePoint.toString()] !== undefined) {
                            if (uclookup[hexCodePoint].name.indexOf("<") !== -1 ||
                                (hexCodePoint.length === 5 && hexCodePoint.startsWith("E"))) {
                                character = "Unprintable character";
                            }

                            character += " | `";
                            if (uclookup[hexCodePoint].unicode_name !== '') {
                                character += uclookup[hexCodePoint].unicode_name;
                            } else {
                                character += uclookup[hexCodePoint].name;
                            }
                            character += "`";
                        } else {
                            character = "Unfilled or reserved codepoint";
                        }

                        if (hexCodePoint.length === 1) {
                            hexCodePoint = "0" + hexCodePoint;
                        }

                        var replyString = character + " | DEC: " + suffNum + " | HEX: 0x" + hexCodePoint;
                        if (doLink) {
                            replyString += " | http://unicode-table.com/en/" + hexCodePoint + "/";
                        }
                        if (!suffix.startsWith("0x")) {
                            replyString += "\n*If you were looking for the hexadecimal codepoint and got the decimal one, prefix your number with '0x'.*";
                        }
                        bot.reply(msg, replyString);
                    }
                }
            }
            else {
                var codepoint = suffix.codePointAt(0);
                var hexpoint = codepoint.toString(16);
                var char = String.fromCodePoint(codepoint);
                var linky = true;

                if (hexpoint.length < 4) {
                    hexpoint = ("0000" + hexpoint).slice(-4);
                }

                if (codepoint > 131071) {
                    linky = false;
                }

                hexpoint = hexpoint.toUpperCase();

                if (hexpoint.length === 5 && hexpoint.startsWith("F")) {
                    char = "Character from Private Use Plane 15";
                } else if (hexpoint.length === 6) {
                    char = "Character from Private Use Plane 16";
                } else if (uclookup[hexpoint.toString()] !== undefined) {
                    if (uclookup[hexpoint].name.indexOf("<") !== -1 ||
                        (hexpoint.length === 5 && hexpoint.startsWith("E"))) {
                        char = "Unprintable character";
                    }

                    char += " | `";
                    if (uclookup[hexpoint].unicode_name !== '') {
                        char += uclookup[hexpoint].unicode_name;
                    } else {
                        char += uclookup[hexpoint].name;
                    }
                    char += "` | DEC: " + codepoint + " | HEX: 0x" + hexpoint;
                } else {
                    char = "Unfilled or reserved codepoint";
                }

                var replystr = char;

                if (linky) {
                    replystr += " | http://unicode-table.com/en/" + hexpoint + "/";
                }

                if (suffix.search(/[A-Fa-f\d]/g) !== -1) {
                    replystr += "\n*If you weren't looking for the first character of your input, but rather a hex number, prefix your number with '0x'.*";
                }

                bot.reply(msg, replystr);
            }
        }
    },
    "calc": {
        desc: "Calculate stuff",
        usage: "<expression>",
        process: function(bot, msg, suffix) {
            if (suffix.search(/\de\d|pi|[\d\+\-\*/%\^]+/g) !== -1) {
                var sum = "";
                if (suffix.indexOf(" ") !== -1) {
                    sum = suffix.replace(/\s/g, '');
                } else {
                    sum = suffix;
                }

                if (sum.search(/pi/ig) !== -1) {
                    if (sum.search(/\d+pi/ig) !== -1) {
                        var myreg = new RegExp(/(\d+)pi/ig);
                        var number = myreg.exec(sum);
                        sum = sum.replace(/(\d+)pi/ig, parseInt(number)*Math.PI);
                    }
                    else {
                        sum = sum.replace(/pi/ig, Math.PI);
                    }
                }

                sum = sum.replace(/(\d+\.\d*|\de\d|\d+)/g, ' $1 ');
                console.log(sum);
                bot.reply(msg, "`" + sum.trim() + " = " + eval(sum) + "`");
            } else {
                bot.reply(msg, "that is not a valid expression.");
            }
        }
    },
    "8ball": {
        desc: "Decides for you, so you don't have to.",
        usage: "[question]",
        process: function(bot, msg) {
            var _ = [
                "Yes",
                "It is certain",
                "No",
                "Never",
                "Most likely",
                "Outcome not likely",
                "Ask again later",
                "Possibly",
                "Probably not",
                "I can't answer that right now",
                "Chances are almost 0",
                "It's basically guaranteed",
                "Odds are 50:50"
            ];
            var r = Math.floor(Math.random() * _.length);
            bot.sendMessage(msg.channel, _[r]);
        }
    },
    "tybot": {
        desc: "Yay Tybot go go go!",
        usage: "",
        process: function(bot, msg) {
            bot.sendMessage(msg.channel, "Yay Tybot go go go!");
        }
    },
    "go": {
        desc: "Yay X go go go!",
        usage: "",
        process: function(bot, msg, suffix) {
            bot.sendMessage(msg.channel, "Yay " + suffix + " go go go!");
        }
    },
    "ponpon": {
        desc: "weiweiwei",
        usage: "",
        process: function(bot, msg) {
            bot.reply(msg, "https://www.youtube.com/watch?v=yzC4hFK5P3g");
        }
    }
};

var admincommands = {
    "echo": {
        desc: "Repeats whatever you say.",
        usage: "<message>",
        process: function(bot, msg, suffix) {
            bot.sendMessage(msg.channel, suffix);
        }
    },
    "salcal": {
        desc: "",
        usage: "<amount>",
        process: function(bot, msg, suffix) {
            var total = parseFloat(suffix);
            var stufi = floor(total * 0.45);
            var spaar = floor(total * 0.2);
            var abo = floor(total * 0.08);
            var premier = floor(total * 0.07);
            var overig = floor(total * 0.05);
            var betaal = floor(total - stufi - spaar - abo - premier - (overig * 4));
            bot.sendMessage(msg.author, "```\nTotaal salaris: " + total + "\nStudiefinanciering: " + stufi + "\nSpaarrekening: " + spaar + "\nAbonnementen: " + abo + "\nPremier Club: " + premier + "\nKleding / Laptop / Pebble / Pokémon Moon: " + overig + "\n\nOverblijfselen afronding (betaalrekening): " + betaal + "\n```");
        }
    }
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function floor(n) {
    return Math.floor(n*Math.pow(10,2)) / Math.pow(10,2);
}

exports.aliases = aliases;
exports.commands = commands;

exports.adminaliases = adminaliases;
exports.admincommands = admincommands;
