// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When no x and no o are in the string, return true.
// Examples
// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true
// // Case insensitive.

// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.

// XO("zzoo") ➞ false

// let x = 0;
// let o = 0;

// function XO(str) {
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "x") {
//       x++;
//       console.log("This is X: " + x);
//     } else if (arr[i] == "o") {
//       o++;
//       console.log("This is 0: " + o);
//     }
//   }
//   if (x == o) {
//     console.log("They Match!");
//   } else {
//     console.log("No Match....");
//   }
// }

function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == "x") {
      x++;
    } else if (str[i] == "o") {
      o++;
    } else {
      let x = o;
    }
    return (x = o ? true : false);
  }
}

XO("xxoo");
// Test.assertEquals(XO("ooxx"), true);
// Test.assertEquals(XO("xooxx"), false);
// Test.assertEquals(XO("ooxXm"), true);
// Test.assertEquals(XO("zpzpzpp"), true);
// Test.assertEquals(XO("zzoo"), false);
// Test.assertEquals(XO("Xo"), true);
// Test.assertEquals(XO("x"), false);
// Test.assertEquals(XO("o"), false);
// Test.assertEquals(XO("xxxoo"), false);
// Test.assertEquals(XO(""), true);
