/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Cupboard from "./Cupboard.js";
import Car from "./Car.js";
import Backpack from "./Backpack.js";
import Phone from "./Phone.js";
import Bike from "./Bike.js";

const greyCupboard = new Cupboard("Grey Cupboard", "grey", 250, 200, true);
const newCar = new Car(2005, "black", 2, true, 6, "BMW", 5);
const redBackpack = new Backpack("Red Backpack", 10, "red", 5, 25, 25, true);
const samsungPhone = new Phone("Samsung", 12, 25, "grey", 2, 5, "blue", 60);
const whiteBike = new Bike("Amazon", "white", "normal", "15inch", 15, true, [
  "lights",
  "horn",
  "water bottle",
]);

console.log("The grey Cupboard is: ", greyCupboard);
//The grey Cupboard is:  Cupboard {name: 'Grey Cupboard', color: 'grey', width: 250, height: 200, doorOpen: true}
console.log("The new car is: ", newCar);
//The new car is:  Car {year: 2005, color: 'black', doorsNumber: 2, doorStatus: true, gearNb: 6, …}
console.log("The backpack is: ", redBackpack);
//The backpack is:  Backpack {name: 'Red Backpack', volume: 10, color: 'red', pocketNum: 5, strapLength: {…}, …}
console.log("The phone is: ", samsungPhone);
//The phone is:  Phone {model: 'Samsung', width: 12, height: 25, color: 'grey', frontCameraNb: 2, …}
console.log("The new bike is: ", whiteBike);
// The new bike is:  Bike {model: 'Amazon', color: 'white', type: 'normal', tyres: '15inch', gears: 15, …}

//Car
// Check year of fabrication
console.log("The new car is from year: ", newCar.year);
// The new car is from year:  2005 (from constructor)

//Check the model of the car
console.log("The car model is: ", newCar.model);
//The car model is:  BMW (from constructor)

// Check current door status
console.log("Doors open?", newCar.doorStatus);
// Doors open? true(from constructor)

// Close the doors
newCar.toggleDoors(false);
console.log("Doors open after closing?", newCar.doorStatus);
// Doors open after closing? false

// Open the doors again
newCar.toggleDoors(true);
console.log("Doors open after opening?", newCar.doorStatus);
// Doors open after opening? true

console.log("Current gear:", newCar.gearNb);
// Current gear: 6 (from constructor)

newCar.changeGear(3);
console.log("Gear after shifting:", newCar.gearNb);
// Gear after shifting: 3

newCar.changeGear(1);
console.log("Gear after shifting again:", newCar.gearNb);
// Gear after shifting again: 1

//Phone
// console.log("Phone caracteristics:", Phone);
console.log("Phone charging status ... ", samsungPhone.batteryPercentage, "%");
//Phone charging status ...  60 %
console.log("Phone charging...");
//Phone charging...
samsungPhone.chargePhone(18);
console.log(
  "Phone charging percentage after charging is ... ",
  samsungPhone.batteryPercentage,
  "%"
);
//Phone charging percentage after charging is ...  78 %

//Cupboard
//Cupboard name
console.log("Cupboard's name: ", greyCupboard.name);
//Cupboard's name:  Grey Cupboard

//Cupboard color
console.log("Cupboard's color: ", greyCupboard.color);
//Cupboard color:  grey

//Cupboard height
console.log("Cupboard's height: ", greyCupboard.height);
//Cupboard height:  200

//Bike
//Bike model
console.log("Bike's model is: ", whiteBike.model);
//Bike's model is:  Amazon

//Bike's color
console.log("Bike's color is: ", whiteBike.color);
//Bike's color is:  white

//Bike's extras
console.log("Bike's extras: ", whiteBike.extras);
//Bike's extras:  (3)['lights', 'horn', 'water bottle']
