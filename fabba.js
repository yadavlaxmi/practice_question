
var num= require("readline-sync").questionInt('enter the number')
let a=0
let b=1
let c=a+b
console.log(a)
console.log(b)
while(c<=num){
    console.log(c)
    a=b
    b=c
    c=a+b
}