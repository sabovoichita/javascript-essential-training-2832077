/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
The map() method creates a new typed array with the results calling
a provided function on every element in this typed array. 
The map() method takes an existing array, does something to each of the items
in the array and returns each of those itmes into a new array.
In contast, the forEach() array method, loops through the existing array,
but doesnt create anything except we explicitly tell her to.
!!!if you need to iterate through an array use forEach()
!!!if you need to create a new array, out of an old array, 
and do something to each of the items before you do so, then use map()


*/

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
/*stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
});
*/

// map() array method
// first we need to create a new constant and place the map loop inside

const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

stuffItems.forEach((item) => {
  stuffList.append(item);
});

console.log("stuff: ", stuff);
console.log("stuff items: ", stuffItems);
article.append(stuffList);
