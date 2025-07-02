// 🔄 While Loop
/*
start;
while (condition/end) {
  // কাজ
  change;
}
*/

// let a = 1;
// while (a <= 22) {
//   console.log(a);
//   a++;
// }

// যখন আমরা কেবল একটা কন্ডিশনের উপর নির্ভর করে লুপ চালাতে চাই,
// তখন আমরা while loop ব্যবহার করি।
// যেমন ধরো — আমি জানি না লুপ কখন থামবে,
// শুধু জানি একটা শর্ত (condition) ঠিক থাকলে লুপ চলবে —
// তখন while loop সবচেয়ে উপযুক্ত।

// আর যদি আমরা আগেই জানি কয়বার লুপ চলবে (fixed iteration),
// যেমন: ১ থেকে ১০ পর্যন্ত — তাহলে for loop ব্যবহার করাই ভালো।

// exaple ::

/* let ans = prompt("Write something (type 'exit' for close)");

while (ans !== "exit") {
  ans = prompt("Write something (type 'exit' for close)");
}
*/

// ✅ কেন এটা while loop এর Best Example?

// কারণ এখানে আমরা জানি না ইউজার কতবার ইনপুট দিবে,
// আমরা শুধু জানি — সে যতক্ষণ না "exit" লিখছে,
// ততক্ষণ লুপ চলবে।

// আর এই ধরনের কাজ যেখানে লুপ চলবে একটি শর্ত (condition) সত্য থাকা পর্যন্ত,
// এবং কয়বার চলবে আগে থেকে জানি না — সেখানে while loop-ই Best choice।

// ⛔️ for loop এখানে ব্যবহার করা ঠিক না,
// কারণ for loop সাধারণত নির্দিষ্ট সংখ্যক বার চলার জন্য ব্যবহৃত হয়,
// যেমন: 1 থেকে 10, বা index < array.length

// কিন্তু এখানে ইনপুট নেওয়া হবে যতক্ষণ না ইউজার "exit" টাইপ করে —
// এই সংখ্যাটা ইউজারই নির্ধারণ করবে, প্রোগ্রাম জানে না!

// ✅ তাই এই ধরনের ইউজার-কন্ট্রোলড ইনপুট লুপে while loop ই সবচেয়ে উপযুক্ত!

// Sum of digits

// let propt = prompt("Enter the number to get sum of the digits: ");

// if (propt === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(propt);

//   if (isNaN(n) || n < 0) {
//     console.log("Invaild input");
//   } else {
//     let sum = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       sum = sum + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(sum);
//   }
// }

// Why i used while loop to solve this -->
/*
✅ 1. কারণ আমরা জানি না কয়টি digit আছে
আমরা শুধু জানি — যতক্ষণ পর্যন্ত সংখ্যা 0 এর চেয়ে বড়, ততক্ষণ আমাদের প্রতি digit বের করতে হবে।

🔁 এই "জানিনা কতবার চলবে, কিন্তু জানি কবে থামতে হবে"
👉 এটাই while loop এর মূল ব্যবহার।

✅ 2. এটা একটা condition-based loop
আমরা কেবল একটা শর্ত (condition) জানি — n > 0।
এ condition সত্য থাকলে কাজ করবো, মিথ্যা হলে থেমে যাবো।

👉 এই ধরনের problem — যেখানে প্রতি স্টেপে কন্ডিশন চেক করে কাজ করবো,
সেখানে while loop সেরা।

✅ 3. For loop এখানে বোঝাতে কষ্টকর হতো
for loop সাধারণত ব্যবহার করা হয় যখন আমরা জানি কয়বার লুপ চালাতে হবে (fixed iteration)।
কিন্তু এখানে সংখ্যা যেকোনো দৈর্ঘ্যের হতে পারে — 123 বা 985783294 — তাই for অপ্রয়োজনীয় জটিলতা তৈরি করত।

*/

// how to i solve this qs using for loop (কিভাবে এই কাজটা আমরা for loop দিয়ে করতে পারি )

// let propt = prompt("Enter the number to get sum of the digits: ");

// if (propt === null) {
//   console.log("Cancelled");
// } else {
//   let length = propt.length;
//   let n = Number(propt);

//   if (isNaN(n) || n < 0) {
//     console.log("Invaild input");
//   } else {
//     let sum = 0;
//     for (let index = 0; index < length; index++) {
//       let rem = n % 10;
//       sum = sum + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(sum);
//   }
// }

// How to reverse a number
let propt = prompt("Enter the number to get factors: ");

if (propt === null) {
  console.log("Cancelled");
} else {
  let n = Number(propt);

  if (isNaN(n) || n < 0) {
    console.log("Invaild input");
  } else {
    let rev = 0;
    while (n > 0) {
      let rem = n % 10;
      rev = rev * 10 + rem;
      n = Math.floor(n / 10);
    }
    console.log(rev);
  }
}
