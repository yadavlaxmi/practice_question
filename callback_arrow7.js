const a=(()=>{
    console.log("hii")
})
const b=((callback)=>{
    console.log("somi")
    callback
})
a(b())

// somi
// hii
// as a asyncronous