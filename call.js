var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
  
  