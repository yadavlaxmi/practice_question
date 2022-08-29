// async function test(){
//     console.log("2:message");
//     const response =await fetch("/home/navgurukul/Desktop/Advance_js/app.json")
//     console.log("3:message");
//     const students=await response.json();
//     return students;
// }
// console.log("1:message");
// let a=test()
// console.log("4:message");
// console.log(a);




// async function test(){
//     console.log("2:message");
//     return(await fetch("/home/navgurukul/Desktop/Advance_js/app.json")).json()
    // console.log("3:message");
    // const students=await response.json();
    // return students;
// }
// test().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// });




// try and catch

async function test(){
    try{
        const response = await fetch("/home/navgurukul/Desktop/Advance_js/app.json");
        const students=await response.json();
        return students;
}catch(error){
    console.log(error)
}
}test().then((res)=>{
    console.log(res)
});
