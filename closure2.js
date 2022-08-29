// const outer_fun =  (value) =>{
//     let x = 10;
//     const inner_fun = ()=>{
//         let sum = value+x
//         console.log(sum)
//     }
//     inner_fun()

// }
// outer_fun(8);



const outer_fun =  (value) =>{
    let a = 10;
    const inner_fun = ()=>{
        let multi = value*a
        console.log(multi)
    }
    return inner_fun()

}
console.log(outer_fun(8));