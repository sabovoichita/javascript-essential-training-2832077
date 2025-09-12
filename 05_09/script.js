/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 * 
 * Add DOM Elements
 * 
 * We want to add the Backpack inside the main,
 * to appear after the div class "pageHeader";
 * 
 * We need a new DOM element to place it exactly where we want it to appear
 * To do:
 * 1. Create a new element(an article)
 * 2. Polulate with classes, ids and content
 * 3. Append that element to the existig document
 * 
 * Document.createElement()
 * 
1. const newArticle = document.createElement("article") - this will create a
new article on the DOM
2. Take the article out of the const content
3. Append a class
newArticle.classList.add("backpack");
4. Add an id
newArticle.setAttribute("id", "everyday");
5. Place the template literal content inside this element
newArticle.innerHTML = content;
6. Append this element to the existing element

ParentNode.append()- method inserts a set of node objects or DOMString
objects after the last child of the ParentNode(main in ourn case).
main.append(newArticle);

.append() method can be used to add one of more comma separated elements
- it can also be used to append a string of text

ParentNode.prepend() method inserts a set of Node objects or DOMString 
objects before the first child of the ParentNode(at the top).

Node.AppendChild()- to move an element from one location to another
 inside the DOM , or to return the appended object, it returns the element

Node.replaceChild() method replaces a child node with the given(parent) node
syntax: let oldChild = parentNode.replaceChild(newChild, oldChild);

Node.insertBefore() method inserts a node before a reference code as a 
child of a specific parent node.
 
Element.insertAdjacentElement() method of the Element inserts a given
element node at a given position to the element it is involved upon.
syntax: targetElement.insertAdjacentElement(position, element);
position: 
-"beforeBegin": Before the targetElement itself.
-"afterBegin": Just inside the targetElement, before its first child
-"beforeend": Just inside the targetElement, after its last child
-"afterend": After the targetElement itself.

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
 
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");

newArticle.innerHTML = content;
main.append(newArticle);
