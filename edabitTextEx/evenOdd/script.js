/* Requirements:/ create a function that will check to see if a number is
Even or Odd and either return is valid or not or console
log Is Even or Is Odd.Even
 ________________________________________________________________________
 */

// if (x % 2 == 0)
// If (x%2 == 0 { return true}  else...0)*
// {display = true} else {display = false} return display
// return x % 2 == 0 ? true : false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// could add a let result = to the return and console.log thee result

// checks for an even number
// if (x % 2 == 0) {
// return true;
// } else {
//   return false;
// }

function isEven(x) {
  return x % 2 == 0; // original function will return true or false
}

isEven(2);

//
//checks for an odd number

function isOdd(x) {
  return !isEven(x);
}

isOdd(3);

//
//Combining the functions

function evenOdd(x) {
  if (x % 2 === 0) {
    console.log("Is Even");
  } else {
    console.log("Is Odd");
  }
}

evenOdd(9);

//
//Alternate way

function newOdd(x) {
  if (x % 2 !== 0) {
    console.log("is Odd");
  } else {
    console.log("is Even you dimwit.... ;) Just kidding..... ");
  }
}

newOdd(2);
