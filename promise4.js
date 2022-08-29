const pobj1= new Promise((resolve,reject)=>{
    setTimeout((c)=>{
        let roll_no=[1,2,3,4,5]
        resolve[roll_no]
    },2000);
})
pobj1
.then((roll_no)=>{
    console.log(roll_no);
})
.catch((error)=>{
    console.log("error")
})      

