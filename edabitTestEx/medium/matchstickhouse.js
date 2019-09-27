// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436
// Notes
// Step 0 returns 0 matchsticks.
// The input (step) will always be a positive integer.
//  1 house has 6 matchsticks 4 for the box (sides, floor and ceiling
//  and 2 for the roof, 2 house would add on 5 additional match sticks
// so logic is 5 * the step plus 1

function matchHouses(step) {
  if (step != 0) {
    return step * 5 + 1;
  } else {
    return 0;
  }
}

const res = (step = 3);
console.log(res);
