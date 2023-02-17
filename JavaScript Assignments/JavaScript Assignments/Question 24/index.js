// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
let arrEven = [];
let arrOdd = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arrEven.push(i)
    } else {
        arrOdd.push(i)
    }
}
console.log(arrEven);
console.log(arrOdd)