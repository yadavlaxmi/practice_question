async function fun(){
    let a=await("i am winner of this year");
    return a
}
console.log(fun())
//it will wait becuase we use await

async function fun(){
    let a=("i am winner of this year");
    return a

}
console.log(fun())
//it gave output 'i am winner of this year'