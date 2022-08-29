const prices =[400,305,578,970,40,2525,5666,800,9000]
var get_Elem = prices.find((elem)=>{
    return elem>800
});
console.log(get_Elem)

var get_Elem = prices.find((elem)=> elem>800);
console.log(get_Elem)

console.log(prices.find((elem)=> elem<800))


console.log(prices.find((elem)=> elem==800))