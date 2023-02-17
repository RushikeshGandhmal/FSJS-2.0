// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function printPrimeNumber(num) {
    if (num <= 1) {
        console.log('Please enter a number greater than 1');
        return
    } else {

        for (let i = 2; i <= num; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(i);
            }

        }
    }
}
// user input
let num = 100;
printPrimeNumber(num);