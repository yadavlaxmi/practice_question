let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};

let employee = Object.assign(person, job);
console.log(employee);


// join two obj in one