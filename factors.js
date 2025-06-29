// Question: factors of any number

let propt = prompt("Enter the number to get factors: ");

if (propt === null) {
  console.log("Cancelled");
} else {
  let n = Number(propt);

  if (isNaN(n) || n < 0 || n === 0) {
    console.log("Invaild input");
  } else {
    for (let index = 1; index <= Math.floor(n / 2); index++) {
      if (n % index === 0) {
        console.log(index);
      }
    }
    console.log(n);
  }
}
