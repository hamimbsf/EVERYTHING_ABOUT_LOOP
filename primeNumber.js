// Question: factors of any number

let propt = prompt("Enter the number to get factors: ");

if (propt === null) {
  console.log("Cancelled");
} else {
  let n = Number(propt);

  if (isNaN(n) || n < 0 || n === 0) {
    console.log("Invaild input");
  } else {
    let isPrime = true;
    for (let index = 2; index <= Math.floor(n / 2); index++) {
      if (n % index === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime);
  }
}
