// 28. Write a program to print the given patterns using the loops-
/*	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
       *
       **
       ***      */

function triangle(n) {
    for (let i = 0; i < 3; i++) {
        console.log("*".repeat(n + i - 2));
    }
}
triangle(3);

/*b. Print a square pattern, if the input is 3 then the output should be similar to the given output
       ***
       ***
       ***       */
function square(n) {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(n));
    }
}
square(3)

/*	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
         *
        ***
       *****            */

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "*".repeat(1 + 2 * i));
    }
}

pyramid(3);


