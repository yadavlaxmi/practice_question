let add = function(num1,num2){
    return num1+num2;
 }
  
 let multiply= function(num1,num2){
    return num1*num2;
 }
  
 let calc= function (num1,num2,callback){
    console.log(callback(num1,num2));
 }
  
 calc(2,3,add);
 calc(2,3,multiply);
  
  
// 3rd

// Create a function that accepts another function as an argument
 
const callbackWaalaFunction = (fn) => {
    // Calls the function with any required arguments
    return fn("somi", 22, "chocolates")
  }
  // Callback gets arguments from the above call
 const callback = (arg1, arg2, arg3) => {
    return "My name is "+arg1+" and I am "+arg2+"years old"+". I like "+arg3
  }
  // Passing a callback into a callback accepting function
 const result = callbackWaalaFunction(callback)
 console.log(result) // My name is somi and I am 22]years old. I like chocolates
 