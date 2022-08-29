let readlineSync = require("readline-sync");
var computers_choice=["stone","paper","scissors"]
var computer_choice=computers_choice[Math.floor(Math.random()*computers_choice.length)]

var player_name=readlineSync.question("Enter the player name:-")
console.log("Welcome",player_name,"in this game!")
console.log("Choose any move following these step:" )
console.log("stone")
console.log("paper")
console.log("scissor")

var player_choice=readlineSync.question("What is your choice? ")


if (player_choice==computer_choice){
  console.log("draw")
}
else if (player_choice=="stone" && computer_choice=="scissor"){
  console.log(player_name,"is winner!!")
}
else if (player_choice=="stone" && computer_choice=="paper"){
  console.log("computer_choice is winner!!")
}
else if (player_choice=="scissor" && computer_choice=="paper"){
  console.log(player_name,"is winner!!")
}
else if (player_choice=="scissor" && computer_choice=="stone"){
  console.log("computer_choice is winner!!")
}
else if (player_choice=="paper" && computer_choice=="stone"){
  console.log(player_name,"is winner!!")
}
else if (player_choice="paper" && computer_choice=="scissor"){
  console.log("computer_choice is winner!!")
}
