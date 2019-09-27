const capitalize = word => {
  const firstLetter = word[0].toUpperCase();
  console.log(firstLetter);
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

capitalize("wagon");

// JavaScript (**old way**)

function square(x) {
  return x * x;
}
// Note the **explicit `return`**

// square(10);
// => 100

// Arrow Function
const square = x => {
  return x * x;
};

// Or even shorter, with **implicit** return.
const square = x => x * x;
// Calling the function: same as before
square(10);
