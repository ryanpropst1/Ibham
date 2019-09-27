const ryan = {
  firstName: "Ryan",
  hobby: "making Cheese",
  speak: function() {
    console.log(`I am ${this.firstName}`);
    console.log(`I enjoy ${this.hobby}!`);
  }
};

// using 'this' keyword and this refers to the that particular object
// these Objects have data (properties) and methods (actions or behaviors)

const chris = {
  firstName: "Chris",
  hobby: "making Soap",
  speak: function() {
    console.log(`I am ${this.firstName}`);
    console.log(`I enjoy ${this.hobby}!`);
  }
};

// class is a blueprint

class Person {
  constructor(firstName, hobby, age) {
    this.firstName = firstName;
    this.hobby = hobby;
    this.age = age;
  }
  // methods of the class
  speak() {
    console.log(`I am ${this.firstName}`);
    console.log(`I enjoy ${this.hobby}!`);
  }
  //  this method now changes the underlying data of the instance of this class
  //  it's called on like the Kelley instance
  growOlder() {
    this.age = this.age + 5;
    console.log(`I am now ${this.age}`);
  }
}

// Instantiated a person = an instance of a new person object
//  called kelly

const kelley = new Person("Kelley", "reading philosopy", 28);

ryan.speak();
chris.speak();

// get the data from the instance using object.notation
console.log(kelley.hobby);
console.log(kelley.age);

// call methods on the instance
kelley.speak();

kelley.growOlder();

/*
creating a class User{

  constructor (parameters) {
    what data (properties) do we need for a user?
    (name, email, phone number, zip code, username/password)
    }
  what is the behavior of a user?
  implement this (behavior or actionO as a method)
  change their username
  change their password
  update their email, phone number of zip code
  log in
  leave a comment
  sign-up

  }
*/

// Instructor Code
/*
class is a blueprint
class Teacher {
    constructor(firstName, hobby, age){
        this.firstName = firstName
        this.hobby = hobby
        this.age = age
    }

    speak(){
        console.log(`I am ${this.firstName}`)
        console.log(`I am ${this.hobby}!`)
    }

    growOlder(){
        this.age = this.age + 1
        console.log(`I am now ${this.age}, so old!`)
    }
}

We've made an instance of teacher
const kelley = new Teacher('Kelley', 'reading philosophy', 25)
const david = new Teacher('David', 'playing a game', 29)
const rein = new Teacher('Rein', 'making a video', 31)

Get data from the instance
console.log(rein.age)
Call methods on the instance
kelley.speak()
rein.speak()
david.speak()

rein.growOlder()
rein.growOlder()
rein.growOlder()

console.log(rein.age)

class User {
    what data do we need for a user? (name, email)
    Add it in the constructor

    what is the behaviour of a user
    sign up
    log in
    like a post
}

*/
