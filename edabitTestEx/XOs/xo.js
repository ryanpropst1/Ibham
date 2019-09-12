let x = 0;
let o = 0;

function XO(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      x++;
      console.log("This is X: " + x);
    } else if (arr[i] == "o") {
      o++;
      console.log("This is 0: " + o);
    }
  }
  if (x == o) {
    console.log("They Match!");
  } else {
    console.log("No Match....");
  }
}

XO("xxoo");
