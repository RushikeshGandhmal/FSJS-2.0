// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);

console.log(4 >= 3);

console.log(4 < 3);

console.log(4 <= 3);

console.log(4 == 4);

console.log(4 === 4);

console.log(4 != 4);

console.log(4 !== 4);

console.log(4 != "4");

console.log(4 == "4");

console.log(4 === "4");

// Q. Find the length of python and jargon and make a falsy comparison statement
const pyhton = "python";
console.log(pyhton.length); //6

const jargon = "jargon";
console.log(jargon.length);

if (pyhton.length === jargon.length) {
  console.log(
    `Both ${pyhton} & ${jargon} has same lenght i.e ${pyhton.length}`
  );
}
