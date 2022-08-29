// const x=function(a,b){
//     return(a*b)
// }
// console.log(x(5,10))
// console.log(x(7,8))
// Anonymous

// const myFunction = new Function("a", "b", "return a * b");

// let x = myFunction(4, 3);
// console.log(x)
//  constructor function


// (function () {
//     let x = "Hello!!";  // I will invoke myself
//     console.log(x)
//   }());

//   self invoking function
//  

// function myFunction(a, b) {
//     return a * b;
//   }
  
//   let x = myFunction(4, 3) * 2;
//   console.log(x)

// //   naming function

// function myFunction(a, b) {
//     return arguments.length;
//   }
// console.log(myFunction(6,8))
// // argument length

// function myFunction(a, b) {
//     return a * b;
//   }
  
//   let text = myFunction.toString();
//   console.log(text)

// ES5
var x = function(x, y) {
    return x * y;
  }
  
  // ES6
//   const x = (x, y) => x * y;
  console.log(x(8,9))