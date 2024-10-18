const person ={
    firstName:"Niraj",
    lastName:"kumar",
    age:21
};

function ageInDay(personObject, callback){
    const fullName = `${personObject.firstName}  ${personObject.lastName}`;
    const ageInDay = personObject.age*365;
    callback(fullName, ageInDay);
}

function logresult(fullName, ageInDay){
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDay}.`);
}