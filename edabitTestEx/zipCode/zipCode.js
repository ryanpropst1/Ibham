// ----------------------------
//Add your code here
//Check is valid zipCode
//Requirements:
//1. needs 5 digits
//2. can have no spaces
//3. must be a valid number between 0 and 9
//-----------------------------

//Final Solution after research and testing

let zipValRgx = /^\d{5}$/; // validation regex for testing against a zipcode
let testZip = "35210";

function validZip(testZip) {
  if (testZip.search(zipValRgx) !== -1) {
    console.log("Zip code is valid");
  } else {
    console.log("Not a valid Zip Code!");
  }
}

validZip(testZip);

// my initial try very verbose and inelegant but works
//

const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let testZipCode = "35 21";
let validZipCode = true;

//_________________________________
function zipCode(zipcode) {
  let str = zipcode;
  // regX to variable to check that the str contains numbers btn 0 and 9, then places those that match into an array.

  let regX = /[0-9]/g;
  let length = str.length;
  console.log(length);
  let result = str.match(regX);
  console.log(result);

  //compares the output of the above result array against the const numArr and returns True if they match
  let found = result.some(r => numArr.indexOf(r) >= 0);
  console.log(found);
  //returns true if no spaces are found in the string
  let noSpace = str.indexOf(" ") === -1;
  console.log(noSpace);

  if (length == 5 && found == true && noSpace == true) {
    return validZipCode;
  } else {
    return (validZipCode = false);
  }
}

zipCode(testZipCode);

console.log("ValidZipCode = " + validZipCode);

function checkZip(zip) {
  let temp = parseInt(zip);
  console.log(temp);
  if (temp.toString.length === 5) {
    let result = true;
  } else {
    let result = false;
  }
  console.log(result);
}

checkZip(testZipCode);

// let zipTest = /^\d\d\d\d\d$/; // create regex validation, where \d will match any digit between [0-9, and the /  / test a regex string and ^ $ means much match exactly]
let zipTest = /^\d{5}$/;

// The search() method is used to search for a match between a regular expression and a specified string. If a match is found, search() method returns the index of the regular expression inside the string, otherwise it returns -1. so below in first test if it does not find an issue it will return a not negative one meaning it found no issues and passed the regex test
//

if (testZipCode.search(zipTest) !== -1) {
  console.log("Zip code is valid");
} else {
  console.log("Not a valid Zip Code!");
}

if (testZipCode.search(zipTest) == -1) {
  console.log("Zip code is not valid!");
} else {
  console.log("Valid Zip Code");
}

//
//
