// created a variable and initialized it to my name
const myFullName = "Ryan Propst";

//create const variable for the total number of states in the US - will not change
const UNITED_STATES = 50;

//created a variable to hold the sum of the calculation 5 + 4
let lovePotionNumNine = 5 + 4;

// Calls the 'sayHello' function.
sayHello();

// created a function that when called displays an alert wtih text Hello World!
function sayHello() {
    alert("Hello World!");
}

//function to check age parameter of name and age and a conditional to check if the age is less than 21 and display an alert if under 21 with their name. /Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"
//
//
function checkAge(name, age) {
    if (age < 21)
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// creates an array of favorite vegetables and assigns it to the variable favVeg
let favVeg = [
              "Cavolo Nero",
              "Brussel Sprouts",
              "Peas",
              "Spinach",
              "Gai Lan",
              "Broad Beans"
              ];

//iterates thru the favVeg array and displays each veg to the console
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]); // Displays each item in 'favVeggies' array.
}

// variables created with my friends names and fake ages to use for testing with the check age function. These are objects with key value pairs. The Key is the first and the value is second.
//

let myFriends = [
                 { name: "Chris", age: 28 },
                 
                 { name: "Steve", age: 19 },
                 
                 { name: "Veronica", age: 40 },
                 
                 { name: "Miram", age: 35 },
                 
                 { name: "Jed", age: 17 }
                 ];

// variable initialized with an array of my friend objects created  above
// var myFriends = [Chris, Steve, Veronica, Miriam, Jed ];

//call checkAge function with the array myFriends

function callCheckAge(friends) {
    for (let i = 0; i < friends.length; i++) {
        checkAge(friends[i].name, friends[i].age);
    }
}

callCheckAge(myFriends);

// myFriends.forEach(function(friend)) {
//   checkAge(friend);
// }

//created a function to get the length of any word and then using a modulus with 2 determine if the length is even or odd and display a message based on that calculation.

function getLength(anyWord) {
    let wordLength = anyWord.length;
    
    if (wordLength % 2 == 0) {
        console.log("The world is even!"); // Even.
    } else {
        console.log("The world is an odd place!"); // Odd.
    }
}

getLength("Hello World");
