function fun1(){
    console.log("hii")
}
function fun2(callback){
    console.log("somi")
    callback
}
fun2(fun1())

// hii
// somi
// as a syncronous
