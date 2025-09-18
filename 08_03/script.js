/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 *
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

//function expression
const addPack = function (currentPack) {
  //setting up a new constant  using createElement to create an new article
  const newArticle = document.createElement("article");
  //we poppulate that article with innerHTML
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
//We can set up a new const 'theArticle' and
//  we are setting to addPack(greenPack)
const theArticle = addPack(greenPack);
//then we can console.log(theArticle)
console.log(theArticle);
//we get the same thing returned to us the article in the console,
// handling it as variable

const main = document.querySelector("main");
main.append(addPack(greenPack));
//main.append and we're appending the returned value of the function
//we're calling the function addPack, the function returns this new obj
//that is an article, the article has HTML and thats what we see in the browser

//Functions will always have a name, either the variable that holds the function
// or the function itself
//It will always have parameters, or just empty parentheses
//It will always be curly brackets wrapped around the function body
//Some function may return data back to where the function was called
