/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * Arrow functions are a shorter way of writing functions experessions
 * // Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument 
// and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;
 *
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));
//If we want to transform this const addPack into an arrow function:
//1)Take away the word "function" declaration=DELETE
//2)Add the arrow (=>) after the parentheses and before the curly brackets
//Another syntax if there are no parameters:
//const addPack = () => {...}
//If we pass in just one parameter we can leave it without parentheses:
//const addPack = currentPack => {...}

// 1)Functions declaration can be hoisted, meaning that you can call a function
// before it is declared in JS.
//Arrow function can only be called after they have been declared!
//2)You cant use arrow functions when declaring methods inside an object
