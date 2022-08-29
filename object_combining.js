var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};
var job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};
var employee = {
    ...person,
    ...job
};
console.log(employee);



