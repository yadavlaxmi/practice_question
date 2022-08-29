let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve("Success!")  
      reject("noooo")
    }, )
})
  
myFirstPromise.then(() => {
    console.log("Yay!")
}).catch((error)=>{
    console.log(error)
})