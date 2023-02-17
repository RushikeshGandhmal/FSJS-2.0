//14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

function checkEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is not an even number`)
    }
}
// Pass the number which you want to check as an argument to function
checkEven(15);