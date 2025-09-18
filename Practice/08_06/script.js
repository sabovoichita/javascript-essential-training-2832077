/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 * 1) Create a basic function declaration
 * 2) Make a change to an element in the DOM
 * (querySelector, adding a class,...)
 * 3) Call the function declaration
 * 4) Create a basic function expression
 * 5) Find an element
 * 6) Make a change to it
 * 7) Call the function
 * 8) Confirm that it works
 * 9) Repeat with an arrow function all the steps
 */
const content = () => `Hello there `;

function createArticle() {
  const art = document.createElement("article");
  art.classList.add("articleClass");
  let info = document.createElement("p");
  info.id = "pID";
  info.innerText = content();
  art.style.color = "red";
  art.appendChild(info);
  //   console.log("article:", art);
  return art;
}

const draw = () => {
  let mainElement = document.querySelector("main");
  mainElement.classList.add("mainClass");

  mainElement.appendChild(createArticle());

  //   console.log("main Element: ", mainElement);
};

draw();
