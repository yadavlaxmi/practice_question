async function fun(){
    return "somi";
}
let a=fun()
console.log(a);
//Promise{"somi"}
// here it gave promise


async function test(){
    return "Hello"
}
test().then((result)=>{
    console.log(result);
});

// Hello



