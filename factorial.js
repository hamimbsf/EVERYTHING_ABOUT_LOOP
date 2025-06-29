// Question: factorial of n number of variable

let propt = prompt("Enter the number to fact: ");

if (propt === null) {
  console.log("Cancelled");
} else {
  let n = Number(propt);

  if (isNaN(n) || n < 0 || n === 0) {
    console.log("Invaild input");
  } else {
    let fact = 1;
    for (let index = 1; index <= n; index++) {
      fact *= index;
    }
    console.log(fact);
  }
}
