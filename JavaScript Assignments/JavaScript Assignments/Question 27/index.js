// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function printPrimeNumber(num) {
  if (num <= 1) {
    console.log("Please enter a number greater than 1");
    return;
  } else {
    for (let n = 2; n <= num; n++) {
      let isPrime = true;
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(n);
      }
    }
  }
}

printPrimeNumber(100);
