/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * just like with the class
 * The object constructor function captures the properties of the new object using
 its parameters and then defines and assign values for each property and method
 using the "this" keyword and dot notation.
 The difference is that the methods live inside the object constructor function
 just like the proeprties do.
 *To create a new object we do the same as in the class
 const everydayBackpack = new Backpack(...)
 -The class allows us to do more things:
 we extend the classes,
 we can add new features to them that are not available inside the object constructor function
 */

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);
