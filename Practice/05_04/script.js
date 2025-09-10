/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 *  * Practice
 * 1. Identify specific elements you want to target
 * 2. Use the console(script.js file) to find those target elements
 * Additional Practice
 * 1.Target specific elements nested inside other elements
 * 2.Try advanced CSS queries to get specific targets
 * 3. Experiment with querySelector and querySelectorAll
 * Advanced Practice
 * 1. Try populating a variable with an element higher up in the Dom hierarchy
 * 2. Then use a query selector on that variable to find one of its children
 
 */
const content = `
 <header class="siteheader">
      <div class="site-title">BackpackPacker</div>
      <div class="site-description">All backpack packing, all the time.</div>
    </header>
    <main class="maincontent">
      <div class="page-header">
        <h2 class="page-header__heading">A pack for every purpose</h2>
        <p>
          If you're carrying a heavy load, you can't find a better tool than a
          backpack. Distributing the weight evenly across your shoulders, back,
          and hips, the backpack lets you use the natural frame of your body to
          literally <em>shoulder</em> the weight while your legs do the
          carrying.
        </p>
      </div>
      <article class="backpack" id="pack01">
        <figure class="backpack__image">
          <img src="../../assets/images/everyday.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Everyday Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 30l</span></li>
          <li class="feature backpack__color">Color:<span> grey</span></li>
          <li class="feature backpack__age">Age:<span> 684 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 15</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>26 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>26 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
      <article class="backpack" id="pack02">
        <figure class="backpack__image">
          <img src="../../assets/images/frog.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Frog Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 8l</span></li>
          <li class="feature backpack__color">Color:<span> green</span></li>
          <li class="feature backpack__age">Age:<span> 369 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 3</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>10 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>10 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
    </main>
    <footer class="sitefooter">
      <p>
        Demo project for JavaScript Essential Training, a LinkedIn Learning
        course.
      </p>
    </footer>
`;
document.body.innerHTML = content;
document.querySelector("header .site-title").style.color = "gold";
("gold");
document.querySelector("header .site-title").style.background = "black";
("black");
document.querySelector("h2.page-header__heading").style.background = "black";
("black");
document.querySelector("h2.page-header__heading").style.color = "gold";
("gold");
document.querySelectorAll("h1").forEach((item) => (item.style.color = "gold"));
document
  .querySelectorAll("h1")
  .forEach((item) => (item.style.background = "black"));
document
  .querySelectorAll("h1")
  .forEach((item) => (item.style.textAlign = "center"));
document
  .querySelectorAll("ul")
  .forEach((item) => (item.style.background = "lightgrey"));
document
  .querySelectorAll("span")
  .forEach((item) => (item.style.color = "darkgreen"));
document
  .querySelectorAll("p")
  .forEach((item) => (item.style.background = "black"));
document.querySelectorAll("p").forEach((item) => (item.style.color = "white"));
document
  .querySelectorAll("li:last-child")
  .forEach((item) => (item.style.background = "green"));
document
  .querySelectorAll("li:last-child")
  .forEach((item) => (item.style.color = "white"));
document
  .querySelectorAll("span:last-child")
  .forEach((item) => (item.style.color = "white"));
let addContent = `Just some random text added here`;
document.querySelector(
  "article li:last-child span:last-child"
).innerHTML = addContent;
