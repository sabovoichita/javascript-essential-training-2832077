/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 -"this" keyword can be used inside any object and refers back to the obj itself
-"this" keyword works fine inside a regular function inside an object
BUT if we call a function inside that function, wired happens


*/

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    //this.volume is the volume property of the current object
    //this.volume in the method: 8
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    //this.volume after update: 5
    // because we wrote this.volume=volume to reassign a new value
    // to the attribute,
    // now the value is passed in the newVolume(5)  method
    // at the end of the file.
    // So we are passing 5 into the method, 5 is then reassigned to the value
    //and we can reffer back to this, this has now been changed

    //IEFE
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    //WE are runing a function inside our method
    //this.volume in nested function: 20
    //WHY???
    //Because at the top we declared the  window.volume = 20;
    //this function declaration is hoisted to the global scope
    //out of the object
    //this is pointing at the window object
    //This is where the arrow function comes in:
    (() => {
      console.log("this.volume in nested function:", this.volume);
    })();
    //this.volume in nested function: 5
    // this outputs 5!!!
    // The arrow function stays within the current scope
    //This is happening because the arrow function does not have
    // it's own "this"!!!
    // Does not know wat "this" means and it will refer to closest
    //available scope which in this case is the object
    //This also explains why cant we use an arrow function as a declaration
    //for a method!!!it would refer to the global scope instead of the method
    //scope so nothing will work propperly
  },
};

console.log(greenPack.newVolume(5));

//If you're using "this" in a method, within an object, and then
//get an odd result, try turning the function in an arrow function
//
