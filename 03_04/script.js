/**
 * Create a Backpack object.
 * *Object Containers* *
 -the container is a constant variable
 -Variable declaration:
  -var
  -let
  -const
-Variable name: refer to the name; ge the data contained within
Objects are Typically Constants
-We can change the properties of the object inside the container;
-We can't remove or replace the object from the container.
-
ex:
backpack.volume = 50
backpack

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
