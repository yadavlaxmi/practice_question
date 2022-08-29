var promise1=new Promise((resolve,reject)=>{
    console.log("yes promise called");
    let obj={
        userid:12,
        name:"somi"
    }
    resolve(obj);
    reject("somehing went wrong")
})
promise1
.then((value)=>{
    console.log(value)
})
.catch(err=>{
    console.log("err is:"+err)
})