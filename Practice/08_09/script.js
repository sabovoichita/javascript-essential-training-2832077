/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 * Use querySelector and the append method
 * Pass the object to the main function
 * Pass it to the figure function
 * Return everything from the main function
 * function imageMarkup(imageURL, imageDescription)
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description: "A green kids backpack ",

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// helperImage Function
const helperImage = (obj) => {
  // console.log("Making a image here");
  let newFigure = document.createElement("figure");
  let image = document.createElement("img");
  image.src = obj.image;
  // console.log("Making a image here", image);
  image.alt = obj.description;
  image.width = 250;
  image.height = 250;
  let figCaption = document.createElement("figcaption");
  figCaption.innerText = obj.description;
  newFigure.append(image, figCaption);
  return newFigure;
};

//CreateArticle function
const createArticle = (frogpack) => {
  // console.log("Creating an article here");
  const newArticle = document.createElement("article");
  newArticle.innerHTML = content;
  newArticle.prepend(helperImage(frogpack));
  // console.log(article);
  return newArticle;
};
document.querySelector("main").appendChild(createArticle(frogpack));
