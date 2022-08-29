const myPromise=new Promise((resolve,reject)=>{
    if(true){
        resolve("it is resolve")
        return resolve
    }else{
        reject("it is reject")
        return reject
    }
})
myPromise.then(()=>{
    console.log(resolve)
}).catch(()=>{
    console.log(reject)
})

