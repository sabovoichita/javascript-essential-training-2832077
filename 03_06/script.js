/**
 * Create a Backpack object.
 * Accesing Object *
 - to access an object you call it by its name
 - call the object in the console by writing backpack
 - open the methods...
 Console Methods:
 console.log("the backpack object: ",backpack);

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
