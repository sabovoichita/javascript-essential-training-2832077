/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
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

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="backpack__color">Color:<span> ${everydayPack.color}</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;

document.querySelector("main");
// {
//   /* <main class=​"maincontent">​…​</main>​ */
// }
document.querySelector(".maincontent");
// {
//   /* <main class=​"maincontent">​…​</main>​ */
// }
document.querySelector("main li:last-child");
// {
//   /* <li class=​"backpack__lid">​…​</li>​ */
// }
document.querySelectorAll("main li");
// NodeList(7) [li.backpack__volume, li.backpack__color, li.backpack__age, li.backpack__pockets, li.backpack__strap, li.backpack__strap, li.backpack__lid]
document
  .querySelectorAll("main li")
  .forEach((item) => (item.style.backgroundColor = "red"));
// undefined
document
  .querySelectorAll("main li:last-child")
  .forEach((item) => (item.style.backgroundColor = "blue"));
// undefined
document
  .querySelectorAll("span")
  .forEach((item) => (item.style.backgroundColor = "blue"));
// undefined
document
  .querySelectorAll("span")
  .forEach((item) => (item.style.backgroundColor = "green"));
// undefined
document.querySelector(".backpack__color").style.color = "purple";
// 'purple'
document.querySelector(".backpack__age").style.color = "purple";
// 'purple'
document.querySelector(".backpack__age").style.background = "violet";
// 'violet'
document.querySelector(".backpack__pockets").style.color = "orange";
// 'orange'
document.querySelector(".backpack__strap").style.color = "darkblue";
// 'darkblue'
document.querySelector(".backpack__lid").style.color = "darkgreen";
// 'darkgreen'
document.querySelector(".backpack__lid").style.background = "white";
// 'white'
document.querySelector(".backpack__image").style.color = "white";
// 'white'
document.querySelector(".backpack__image").style.background = "black";
// 'black'
document.querySelector(".backpack__name").style.background = "Violet";
// 'Violet'
document.querySelector(".backpack__features").style.background = "lightgrey";
// 'lightgrey'
document.querySelector(".backpack__volume").style.color = "lightblue";
// 'lightblue'
