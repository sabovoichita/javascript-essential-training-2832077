/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 * An array is an instance of the array object!
 * We declare a new array by declaring a variable, then using square brackets
 * to wrapp around the comma separated list of each of items within that array.
 * Each of these items take up a slot in the array.
 * If we console.log an array we can see an array with 4 items
 * and we can get a list with all 4 items.
 * We can mix different data types within that array:
 * - a string ("Piggy");
 * - a variable that holds a string(item);
 * - a number;
 * - a boolean;
 * At the bottom we have a property in the array:
 * - the length- gives us the total length of the array
 * console.log(collection.length)
 * //4
 * To acces a specific item within the array, we need to use the index
 * number for the slot in the array:
 * The index starts at 0!
0  "Piggy"      - the first item
1  "flashlight" - the second item
2  5            - the third item
3  true         - the fourthe item
 *If I want to get a hold of the second item, I need to call the array
 at index number 1, using square brackets[1]
console.log(
  "The second item in the array is at collection[1]: ",
  collection[1]
);
//flashlight
*WE can assign new values at any of these slots using the same technique:
 * Ex: I want to add a different value to the third slot, at index nb 2:
 * collection[2]="camera"
console.log(collection);
0 : "Piggy"
1 : "flashlight"
2 : "camera"
3 : true
length : 4
JS DOES NOT CARE about the data type in any of these slots!!!
WE can place any data type value in the arrays:
- a string
- a number 
- a boolean value
- an undefined value
- a null value
- a true or false value
- an object
- an array
We want to add a new item to the END of the array using the length property
:collection[collection.length]= "new item";
console.log(collection);
0 : "Piggy"
1 : "flashlight"
2 : "camera"
3 : true
4 : "new item"
length : 5
We can also assign a slot to an item that is further down the chain:
Ex: collection[9] = "at the end";
(10) ['Piggy', 'flashlight', 'camera', true, 'new item', empty × 4, 'at the end']
0 : "Piggy"
1 : "flashlight"
2 : "camera"
3 : true
4 : "new item"
9 : "at the end"
length : 10

console.log(collection[8]);
//undefined
Because there is nothing in there!
WE can assign new values to the empty slots at any time.
Arrays are extremly flexible data storage methods!
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log("Collection length:", collection.length);
console.log(
  "The second item in the array is at collection[1]: ",
  collection[1]
);

collection[2] = "camera";
console.log(collection);

collection[collection.length] = "new item";
console.log(collection);

collection[9] = "at the end";
console.log(collection);

console.log(collection[8]);
//undefined
