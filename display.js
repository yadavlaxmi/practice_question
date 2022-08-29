const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let txt = "";
  for (let x in person) {
  txt += person[x] + " ";
  };
  
  console.log(txt)