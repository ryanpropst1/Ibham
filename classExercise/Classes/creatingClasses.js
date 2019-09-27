/*
Exercise:

Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
So let's define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has.
Trucks are vehicles, they have wheels. So let's create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. So let's add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.
Now sedans are vehicles also, but they don't have a truck bed (We're ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels. So to practice inheritance, lets just say sedans are vehicles, they aren't trucks because they don't have a truck bed but they get good gas mileage. Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
Motorcycles are also vehicles, but they don't have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it. Update the method in each child class to console log a string that represents these features, but still have it tell is the type, manufacturer and how many wheels it has!
*/

class Vehicle {
  constructor(manufacturer, type, wheels, steering, doors, gasMileage) {
    this.manufacturer = manufacturer;
    this.type = type;
    this.wheels = wheels;
    this.steering = steering;
    this.doors = doors;
    this.gasMileage = gasMileage;
  }
  aboutVehicle() {
    console.log(
      `I am a ${this.type}, I am manufactured by ${this.manufacturer} and I have ${this.wheels} wheels!`
    );
  }
}

// new class of Vehicle Truck that extends the parent to the child and adds additional properties and extends method
class Truck extends Vehicle {
  constructor(
    manufacturer,
    type,
    wheels,
    steering,
    doors,
    gasMileage,
    truckBed
  ) {
    super(manufacturer, type, wheels, steering, doors, gasMileage);
    this.truckBed = truckBed;
  }
  aboutVehicle() {
    console.log(
      `I am a ${this.type}, I am manufactured by ${this.manufacturer} and I have ${this.wheels} wheels!`
    );
    console.log(`Additionally, I have a ${this.truckBed}`);
  }
}

// new class of Vehicle Sedan that extends the parent to the child and adds additional properties and extends method
class Sedan extends Vehicle {
  constructor(manufacturer, type, wheels, steering, doors, gasMileage, size) {
    super(manufacturer, type, wheels, steering, doors, gasMileage);
    this.size = size;
  }
  aboutVehicle() {
    console.log(
      `I am a ${this.type}, I am manufactured by ${this.manufacturer} and I have ${this.wheels} wheels!`
    );
    console.log(`Additionally, I have am a ${this.size} sized car!`);
  }
}

// new class of Vehicle Sedan that extends the parent to the child and adds additional properties and extends method
class Motorcycle extends Vehicle {
  constructor(manufacturer, type, wheels, steering, doors, gasMileage, size) {
    super(manufacturer, type, wheels, steering, doors, gasMileage);
  }
  aboutVehicle() {
    console.log(
      `I am a ${this.type}, I am manufactured by ${this.manufacturer} and I have ${this.wheels} wheels!`
    );
    console.log(`Additionally, I have ${this.steering} for steering!`);
  }
}

// instantiate a new truck instance as Ridgeline
const Accord = new Sedan(
  "Honda",
  "sedan",
  4,
  "Steering Wheel",
  4,
  40,
  "medium"
);

// instantiate a new Motorcycle instance as Shadow
const Shadow = new Motorcycle("Honda", "motorcycle", 2, "Handle Bars", 0, 45);
// instantiate a new sedan instance as Accord
const Ridgeline = new Truck(
  "Honda",
  "truck",
  4,
  "Steering Wheel",
  4,
  30,
  "truckbed"
);

// get the data (properties) from the new instance of Truck using object
// dot notation
console.log(Ridgeline.type);

// display the properties of this Truck instance
Ridgeline.aboutVehicle();

// get the data (properties) from the new instance of Sedan using object
// dot notation
console.log(Accord.type);

// display the properties of this Sedan instance
Accord.aboutVehicle();

// get the data (properties) from the new instance of Motorcycle using object
// dot notation
console.log(Shadow.type);

// display the properties of this Motorcycle instance
Shadow.aboutVehicle();

// instantiate a new vehicle
// const truck = new Vehicle("Honda", "truck", 4, "steering Wheel", 4, 32);

// get the data (properties) from the new instance of vehicle using object dot notation

// console.log(truck.type);

// display the properties of this instance
// truck.aboutVehicle();
