const outerFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        let sum=a+b;
        console.log(sum)
    }
    innerFun();
}
outerFun(2)
//closure function -a closure is a features in javascript where an inner function has access to the outer functions variables.
