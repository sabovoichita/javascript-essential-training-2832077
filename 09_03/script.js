/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 * 
 addEventListner() 
 An event listener is a method added to a target, usually an element,
 that listens for an specific event, then calls back a function,
 when that event is detected

 ex:
 const button = document.querySelector("button");
 button.addEventListener( //make the button a target, add an eventListner
  "click", //specify the event we want to listen to, a click on a mouse
   (e)=>{ //capturing the event in the e
    console.log(`Event fired: ${e}`) //console.log-ing out the event
  }
 );
Syntax: taget.addEventLister(target, callback [, options]);
-target=Event target(a window object/ a document object/ document within DOM)
-addEventListener with the addEventListner method
-target- this method takes two main arguments, the event we want to listen to
in quotation marks,
-callback function - this is the second argument, to run when that event
is triggered. This could be an inline anonymous function, or call to
an external function. There are no parentheses at the end as is a 
callback function. 
-[options]- the third argument, usually set to "false"


 */
import backpackObjectArray from "./components/data.js";

const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  const button = backpackArticle.querySelector(".lid-toggle");
  const status = backpackArticle.querySelector(".feature.backpack__lid span");

  button.addEventListener("click", (event) => {
    console.log("click event: ", event);
    status.innerText = status.innerText === "open" ? "closed" : "open";
  });

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});

/*
We want to create an event listener that is appended to the buttons
under the backpack and when I click the button I change the "lid status" 
from "close" to "open" and back to "close" again


*/
