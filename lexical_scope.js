function fun1(){
    var num1=23;
    function fun2() {
        var num2=34;
        // console.log(num2);
        // console.log(num1);
    }
    fun2()
    console.log(num1);
    console.log(num2);
}
fun1()

// 23
// num2 is not define