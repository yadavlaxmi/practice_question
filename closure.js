const outerfun=(a)=>{
    let b=10;
    const innerfun=()=>{
        let sum=a+b;
        console.log(`the sum of two number is ${sum}`);
    }
    innerfun();
}
outerfun(5)