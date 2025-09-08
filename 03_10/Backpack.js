/**
 * Creating classes:
 *
 * -To create a class we start with  "class" keyword
 * followed by a capitalized name
 * -There are two ways to create a class:
 *  1.Class declaration: class Name {}
 *  -class folowed by a class declaration
 * 
 * 2. Class expression:  const Name = class {}
 * -create a constant with a name = class{}
 * -Inside the class we use contructor methods to construct the object
 * -the constructor methods first defines the parameters for each of the properties
 * -then inside the curly brackets defines all the properties
 * -and set their values to the parameters that have been passed in from the class;
 * -this constructor is a method inside the class and uses these parameters to
 * populate these properties;
 * -"this" keyword to point to current object, the we use dot notation to go to the property in question
 *  and set the propery value equal whatever value was passed in through the parameters;
 * We can add methods to classes so they are applied to all object created from that class;
 * To do so, we add the methods after the constructor methods.
 *  ex: toggleLid method and newStrapLength method
 * These methods will then be appended to the object we're creating once we use the class
 * to create the object.
 * Now that we have a class in place, we can use it to create those new objects:
 * First we create a new variable, in this case a constant named "everydayPack"
 * Then we fill it and we set it equal to a new Backpack.
 * We say the keyword "new" and we point out at whatever constructor we want to use,
 * in this case "Backpack" class then we pass in the values for each of those properties
 * as parameters(name is"Everyday Backpack", volume is 30, the color is "grey",
 * the number of pockets(15),the length of the straps(26 1nd 26)and finaly the lid open(false))
 * this piece of code here : const everydayPack = new Backpack(
 *"EverydayBackpack",
 30,
 "grey",
 15,
 26,
 26,
 false 
 *);
 -, creates a new object for us and that objects become available just like the object .
-we can console log out  the everyday pack entirely like so : 
console.log("The everydayPack object: ", everydayPack);
- or we can get the everyday pocketNum proerty specifically the everydayPack :
console.log("The pocketNum value: ", everydayPack.pocketNum);
in the console we can se the backpack was created from the Backpack class
-To create new object all we have to do is to create a new constant with the new name
ex const backpack = new Backpack
and pass in the values and we'll create a whole new backpack.
-now we can create many different object without having to verbosely deckare those objects
-You can only use a class after it has been declared!
-Place classes in a separate file and import them!
- Using a class to define create on object template allows us to
define the properties and methods structure for all the objects created with that class
without having to redeclare them over and over and if a property or method needs to 
be changed, you can change it in the class and the all ansestors(objects)m that have been
created from that class will also update automatically.
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;
