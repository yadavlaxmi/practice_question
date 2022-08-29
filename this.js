
// console.log(module.exports)
// console.log(this===module.exports)
// console.log(this==module.exports)
// module.exports.num3=3;
// module.exports.num4=2;
// module.exports.sum= function(){
// return this.num3+this.num4
// }
// console.log(module.exports.sum()) 


// "use strict";
// let sum =()=>
// {
//     document.write(this)
// }
// sum()



// function task(message){
//     for (i=10000000;i>0;i--);
//     console.log(message);
// }
// console.log('start task')
// task("taskcompleted")
// console.log("task end")

// function task(message){
//     setTimeout(()=>{
//        console.log("laxmi") 
//     },5000)
//     console.log(message);
// }
// console.log('start task')
// task("taskcompleted")
// console.log("task end")


function task(message){
    setTimeout(()=>{
       console.log("laxmi") 
    },5000)
    console.log(message);
}
console.log('start task')
task("taskcompleted")
console.log("task end")