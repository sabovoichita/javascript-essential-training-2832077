/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 * Element.attributes returns a live collecction of all the attribute nodes
 * registered to a specific node...
 * It is a NAMEDNODEMAP, not an Array, so it has no Array methods
 * An attributes is a more complex piece of data
 * It has a key and a value and we need to manipulate just the key
 * or just the value or both at any time
 * document.querySelector("img").attributes
 * //NamedNodeMap {0: src, 1: alt, src: src, alt: alt, length: 2}
 *Methods for attributes:

 -*hasAttribute - to check it it has or not that attribute
document.querySelector("img").hasAttribute("src")
//true
document.querySelector("img").hasAttribute("title")
//false

*getAttribute - to get the value of that attribute
document.querySelector("img").getAttribute("src")
//'../assets/images/everyday.svg'
document.querySelector("img").getAttribute("alt")
//''

*setAttribute - to set the value of an existing attribute or creating a 
new attribute- first name the attribute I want to set then , the whatever 
value I want to attribute to that attribute
document.querySelector("img").setAttribute("alt","A drawing of a Backpack")
undefined
document.querySelector("img").setAttribute("title","This shouldnt be here")
undefined

*removeAttribute- to remove an attribute
document.querySelector("img").removeAttribute("title","This shouldnt be here")
undefined
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
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;
