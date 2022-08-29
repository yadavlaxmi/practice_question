let readlinesync = require("readline-sync");
let num1 = readlinesync.questionInt("Enter any number")
let num2 = readlinesync.questionInt("Enter any number")
let oprator = readlinesync.question("Enter any number")
switch(num1,num2,oprator){
    case oprator="+":
        console.log(num1+num2);
        break
    case oprator="-":
        console.log(num1-num2);
        break
    case oprator="*":
        console.log(num1*num2);
        break
    case oprator="/":
        console.log(num1/num2);
        break
    case oprator="%":
        console.log(num1%num2);
        break
    default:
        break;
}