var array=[1,2,3,4,5];
var result=array.forEach((val,index)=>{
    console.log(result)
});
// it gave undefined because forEach cannot be do anything with array.

var myarray=[2,4,6,8];
myarray.map((e)=>console.log(e*2));
// by using map methods here we are multiply 2 so it gave us 4,8,12,16.in forEach and map have mazzer difference between ,mapwill gave us new arrey with the new elemnts coming from the callback function.

const friends=['somi','samriddhi','ruchi','muskan'];
var result=friends.forEach((e)=>e)
console.log(result);
// it gave undefinded .

let numbers=[1,2,3,4];
var result=numbers.map((val,index)=>val*val);
console.log(result);//[1,4,9,16]
console.log(numbers);//[1,2,3,4]
// map will return a new list with the manipulated values ,but forEach returns nothing .both won't change the original array.

var num=[1,2,3,4];
var result=num.map((val,index)=>num[index]=val*val);
console.log(result);//[1,4,9,16]
console.log(num);//[1,4,9,16]
// it change both array ,it create new array and it can be change old array also.

var value=[1,2,6,8];
var result=value.filter(function(element){
    if (element>5){
        return element
    };
});
console.log(result);
// [6,8] it gave 6 and 8 because we put condition which is greater than 5 that number only print.this is a normal way to use filter.

var a=value.filter(elemnt=>elemnt>5);
console.log(a);
// In es6 we have to use like this and we get the output [6,8]/.

var nums=[2,4,6,8,10];
var sum=nums.reduce(function(total,element){
    return total+element;
});
console.log(sum);
// 30 this is a normal way we use reduce  function.

var new_sum=nums.reduce((total,value)=>total+value);
console.log(new_sum);
// in es6 if  we did then also we get same output 30 only but reduce gave us only one output

var num=[-0.20,-10,0.2,-4.0,1,-25];
var found=num.find(function(element){
    return  element>0;
});
console.log(found);
// find methord give only one output 


var number = [2, 4, 6, 8, 12, 14];
var sum = number.reduce((total, value) => total + value)
console.log(sum);


// example
 
const number = [1,2,3,4,5,6];
let sum = number.reduce((acc,val)=>{
   
    return acc+val
},7);
console.log(sum);

let pro = number.reduce((acc,val)=>{
    return acc*val
});
console.log(pro);