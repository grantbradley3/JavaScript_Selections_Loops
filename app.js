// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let d = 1; d < 100; d++) {
    if (d % 3 === 0 && d % 5 === 0) {
      console.log(d,"FIZZBUZZ");
    } else if (d % 3 === 0) {
      console.log(d, "FIZZ");
    } else if (d % 5 === 0) {
      console.log(d, "BUZZ");
    } 
  }
//   // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");
let x = 1;

do {
  let output = "";

  if (x % 3 ==0) {
    output += "FIZZ";
  }

  if (x % 5 == 0) {
    output += "BUZZ";
  }
  
  console.log(x, output);
  x++;

} while (x <= 100);

let num = 1;
do {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
} while (num <= 100);


//   // Exercise 4 Selection
  console.log("EXERCISE 4:\n==========\n");
  let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let foundValue = false;

for (let n = 1; n <= n; n++) {
  if (n === value) {
    console.log("Found value!");
    foundValue = true;
    break;
  }
}

if (!foundValue) {
  console.log("Did not find value");
}