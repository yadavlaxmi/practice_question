// var num=require("readline-sync")
// var user=num.questionInt("enter any num")
// const  fun1=new Promise((req,res)=>{
//     if (user%2==0){
//         res("even")
//     }
//     else{
//         req("odd")
//     }
// })
// fun1.then((ans)=>{
//     console.log(ans)
// })
// .catch((err)=>{
//     console.log(err)
// })



// const mypromise = new Promise((resolve,reject) =>{ 
//     let value = 500;
//     if (value >=500){
//         resolve("Yes its correct")
//     }
//     else{
//         reject("No its not")
//     }

// });


// mypromise.
// then((ans)=> { console.log(ans);
// }).
// catch((err) => {console.log(err);
// });

// if (false){
//     console.log("hii mussu")
// }else{
//     console.log("hii somi ")
// }


// function fun1(){
//     var num1=23;
//     function fun2() {
//         var num2=34;
//         // console.log(num2);
//         // console.log(num1);
//     }
//     fun2()
//     console.log(num1);
//     console.log(num2);
// }
// fun1()



var fs = require("fs"); 
// Asynchronous read
fs.readFile('output.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});



// var fs = require("fs");
  
// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());