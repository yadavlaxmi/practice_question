// setTimeout(function(){
//     console.log("hello")
// },3000)

setTimeout(function(){
   console.log("hello") 
},2000);
console.log("end")

var number=0;
var id=setInterval(function(){
    number++
    console.log(number);
    clearInterval(id);
},2000);