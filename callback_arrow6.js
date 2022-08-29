const a=(()=>{
    console.log("hii")
})
const b=((callback)=>{
    console.log("somi")
    callback
})
b(a())

// hii
// somi
// as a synchronous