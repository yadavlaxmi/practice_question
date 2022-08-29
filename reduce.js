var number = [2, 4, 6, 8, 12, 14];
var sum = number.reduce((total, value) => total + value)
console.log(sum);




const number = [1,2,3,45,6];
let sum = number.reduce((acc,val)=>{   
    return acc+val
},7);
console.log(sum);

let pro = number.reduce((acc,val)=>{
    return acc*val
});
console.log(pro);




