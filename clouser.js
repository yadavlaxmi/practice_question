function outer(){
    var a=5;
    function inner(){
        var b=6;
        console.log(b)
    };
    inner()
    console.log(a)
}
outer()