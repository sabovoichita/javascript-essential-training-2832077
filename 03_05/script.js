/**
 * Create a Backpack object.
 * Object Properties
 - are defined using a colom separated name-value pairs
 ex: name: "Everyday Backpack",
 - name can be any string and is placed on the left 
 and the value can be: 
 -a string inside quotation marks
 ex: "Everyday Backpack"
 - an integer or a floating point number
 ex: 30
 - a Boolean
 ex: false/true
 - an array
 - on object placed on the right

-camelCase propery names to avoid issues

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
