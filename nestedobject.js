myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
b=myObj.cars.car1
console.log(b)
d=myObj.cars["car2"];
console.log(d)
c=myObj["cars"]["car3"];
console.log(c)
