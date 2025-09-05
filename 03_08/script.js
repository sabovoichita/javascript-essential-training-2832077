/**
 * Create a Backpack object.
 * Practice
 * Take objects from life
 * 1.Give each object a identifiable name
 * 2. Create propeties to describe the objects and
 * set their values
 * 3. Find an object that has another object inside of it to
 * create a nested object
 * 4. Test your objects in the browser console by accessing the
 * entire object and its specific properties

-Objects can contain their own functions.
-These funcitions typically perform actions on the properties of the object
- When a function is inside an object is called a "method"
- each method is added to the object as a property
-How methods work?
- A parameter is a piece of data that is passed inside the function
-That parameter is passed inside the function to set the new value for the property
-A function is a program that does something
- We use parentheses to capture any paramters passed to the function
(these are the values the function can use)
- We wrap curly brackets around the statements of the function
-To make a function run, we call it by stating its name and adding parenteses
(function call)
-if we want to pass values to the function, we put these values inside the parentheses 
and they become the parameters of the function
-backpack.lidopen
//false
backpack.toggleLid(true);
//undefined
backpacklidOpen
//true
console.log("Left before",backpack.strapLength.left);
//Left before:26
backpack.newStrapLength(10, 15);
console.log("Left after",backpack.strapLength.left);
//Left after:10

 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
