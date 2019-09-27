// is the number divisible by 100 if so return true, else false

function divisible(num) {
  return num / 100 === 0 ? true : false;
}

const res = divisible(num);

console.log(res);

let num = 1;
// num = -1
// num = 0
// num = 1000

// function divisible(num) {
//   return !(num % 100);
// }

// function divisible(num) {
//   return num % 100 === 0;
// }

// const divisible = num => num % 100 === 0;
//; ! not !(x===Y) is true !(y===y) is false
