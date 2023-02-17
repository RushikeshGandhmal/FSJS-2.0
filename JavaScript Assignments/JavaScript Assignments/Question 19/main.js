// in Node.js, JavaScript engine uses the commonJS environment which uses the require() function to import module

const countries = require('./countries.js');
const webTechs = require('./web_techs.js');

//Accessing variables from countries.js & webTech.js
console.log(countries);
console.log(webTechs);
console.log(`Hey! I am from ${countries[0]} and learning ${webTechs[0]}`)
