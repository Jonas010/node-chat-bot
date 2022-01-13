var readlineSync = require('readline-sync');
var botMind = require("./mind");

console.log("hello! i'am a chat bot prototipy...\n" +
"I have some tests then you can do with me.\n"+
"To see what can i do, type: !commands. \n Thank u ;3 \n");

const commands = ["!exit", "!learn" , "!time" , "!help"];

function main() {

  //var user = readlineSync.prompt();
  let user = readlineSync.question('You: ');

  if (user == "!commands") {
    command = readlineSync.keyInSelect(commands, 'Which command? ');

    let result = commands[command];
    //console.log(result);
    
    if (result == '!exit') {
      console.log("Good bye.");
      return false;
    }

    if (result == '!time') {
      //Date
      let dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday");
      now = new Date

      //Time
      let time = ( now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() );

      console.log( "\n"+
      "Hello, the time is: " + time + "; \n" +
      "and the day are: " + dayName[now.getDay() ] + "; \n" 
      );
    }

    if (result == '!learn') {
      //fazer o algoritimo para ensinar e escrever/reescrever o arquivo de fala;
      //isso vai ser escrito no modulo;
      botMind()
    }

  }

  return main();
}

main();