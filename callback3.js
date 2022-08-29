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
// 5
// 6 