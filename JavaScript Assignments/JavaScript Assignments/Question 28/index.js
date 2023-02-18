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
square(3);

/*	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
 *
 ***
 *****            */

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    const total_no_of_starts = 2 * i + 1;
    const no_of_spaces = n + i - total_no_of_starts;

    // For inital spaces
    for (let j = 0; j < no_of_spaces; j++) System.out.print(" ");

    for (let j = 0; j < total_no_of_starts; j++) System.out.print("*");

    System.out.println();
  }
}

pyramid(3);
