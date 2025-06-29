// Question: sum of n number of variable

let propt = prompt("Enter the number to sum: ");

if (propt === null) {
  console.log("Cancelled");
} else {
  let n = Number(propt);

  if (isNaN(n) || n < 0 || n === 0) {
    console.log("Invaild input");
  } else {
    let sum = 0;
    for (let index = 0; index <= n; index++) {
      sum += index;
    }
    console.log(sum);
  }
}
