function fun1(callback){
    console.log("hii")
    callback
}
function fun2(){
    console.log("somi")
}
fun1(fun2())

// somi
// hii
// as a asyncronous