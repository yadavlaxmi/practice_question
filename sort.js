// var a=[1,2,3,4,5,8,7,5,4,3]
// var b=[]
// var i=0
// while(i<=a.length){
//     if (! b includes i){
//         b.push(a)
//     }
//     i++
// }
// console.log(b);

let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});

console.log(dupChars);
console.log(chars)
// var a=[1,2,3,4,5,8,7,5,4,3]
// var c= [... new Set(a)]
// console.log(c)