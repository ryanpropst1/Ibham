function count(str) {
  let arr = str.split(" ");
  for (let index = 0; index < arr.length; index++) {
    count = index;
  }
  return count;
}

let count = 0;
let test = "Alabama";
count(test);

console.log = count;
