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
