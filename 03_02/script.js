/**
 * Create a Backpack object.
 * 
 *const backpack={} 
 -Variables holds data
 -This is a JavaScript Object
 -Curly brackets define data as an object
 --Each Property is a Name-Value pair separated by a colom;
 --The values can be :
 --                 -Text-String inside quatation marks
 --                 -ex:name:"EverydayBackPack", 
 --                 -Number
 --                 -ex:volume: 30, 
 --                 -Boolean
 --                 -ex: lidOpen: false, 
 --                 -Array
 --                 -Object
 --                 -ex:  strapLength: {
                                  left: 26,
                                  right: 26,
                                        },
 -properties are separated using a comma
 - each separate property to be on a new line to be easy to read
 --                 -Methods- to change the properties of the object
 --                 -Methods- are properties containing functions
 --                 -Methods- are name-value pairs
 --                 -Methods- the value is a function or a call to a function
 --                 -ex:  newStrapLength: function (lengthLeft, lengthRight) {
                                      this.strapLength.left = lengthLeft;
                                      this.strapLength.right = lengthRight;
                                             },
 --"this" keyword refers to the current object
 --"This object right here"
 



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
