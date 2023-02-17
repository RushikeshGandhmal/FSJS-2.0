// Q.1 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// Declaring Variables

const myName = "Rushikesh";    // string data type
const isStudent = false;      // boolean data type
const haveJob = null;         // null data type
const willGetJob = undefined; // undefined data type

// if we only declare a variable and do not intialized it then it will automatically have the undefined data type. But this can't be done with const keyword, for that declaration must start from let or var keyword.


console.log("The data type of " + myName + " is " + typeof myName);
console.log("The data type of " + isStudent + " is " + typeof isStudent);
// null has a data type object which is kind of a bug. But this bug is still not removed in JavaScript due to legacy reasons.
console.log("The data type of " + haveJob + " is " + typeof haveJob);
console.log("The data type of " + willGetJob + " is " + typeof willGetJob);


