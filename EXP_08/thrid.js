let N = 50; // Change this value to any number
console.log("Prime numbers between 1 and " + N + ":");

let i = 2; // Start checking from 2
do {
  let isPrime = true;

  let j = 2;
  while (j <= Math.sqrt(i)) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }

  if (isPrime) {
    console.log(i);
  }

  i++;
} while (i <= N);

