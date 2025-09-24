/**
 * Switch statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

/*const usedStatus = () => {
  let age = everydayPack.backpackAge();
  let description;
  if (age >= 30) {
    //if the age is over 30 days
    if (age >= 365) {
      // and if the age is over 365 days
      if (age >= 1095) {
        //and if the age is over 1095 days
        description = "old"; // then description = "old"
      } else {
        description = "used"; // otherwise is "used"
      }
    } else {
      description = "lightly used"; // otherwise is "lightly used"
    }
  } else {
    description = "new"; // otherwise is "new"
  }

  console.log(`
  Age: ${age} days
  Status: ${description}
  `);
};
*/

//When we want to get different results, depending on various conditions,
// we can use a SWITCH statement
//The switch statements evaluates an expression, matching the expression's
// value to a case clause, and executes statements associated with that case,
// as well as statements in case's that follow the matching case
/*
const expr = "Papayas";
switch (expr){
case "Oranges":
  console.log("Oranges are $0.59 a pound.")
break;
case "Mangoes";
case "Papayas":
  console.log("Mangoes and Papayas are $2.79 a pound.");
  //expected output: "Mangoes and Papayas are $2.79 a pound."
break;
default: 
  console.log(`Sorry, we are out of ${expr}.`);
//default are if none of the conditions are met
*/

const usedStatus = () => {
  let age = everydayPack.backpackAge();
  age = 20; //age = 35// age = 365 // age = 1096
  let description;
  switch (true) {
    case age < 30:
      description = "new";
      break;
    case age >= 30 && age < 365:
      description = "lightly used";
      break;
    case age >= 365 && age < 1095:
      description = "used";
      break;
    case age >= 1095:
      description = "old";
      break;
    default:
      console.log(`There is no description for ${age}`);
  }
  console.log(`
  Age: ${age} days
  Status: ${description}
  `);
};

usedStatus();
