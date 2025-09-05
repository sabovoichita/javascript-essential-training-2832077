/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * 1 - Give each object an identifiable name.
 * 2 - Create properties to describe the objects and set their values.
 * 3 - Find an object that has another object inside of it to create a nested object.
 * 4 - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cupboard = {
  name: "grey Cupboard",
  color: "grey",
  doors: 6,
  doorHandles: 8,
  drawers: 1,
  doorStatus: true,
  toggleDoor: function (doorOpen) {
    this.doorStatus = doorOpen;
  },
  doorSize: {
    smallDoor: 15,
    largeDoor: 50,
  },
  shelves: {
    left: 4,
    right: 4,
  },
  newShelvesStorage: function (leftShelves, rightShelves) {
    this.shelves.left = leftShelves;
    this.shelves.right = rightShelves;
  },
  lightOn: false,
  lightStatus: function (status) {
    this.lightOn = status;
  },
  glassDoor: {
    shape: "rectangular",
    height: 150,
    width: 25,
    visability: "seethrough",
    clean: false,
    toggleClean: function (status) {
      this.clean = status;
    },
  },
};

const shelf = {
  color: "grey",
  width: 15,
  height: 100,
  ocupability: true,
  checkOcupability: function (status) {
    this.ocupability = status;
  },
  flower: {
    quantity: 4,
    variety: "home",
    color: "green",
    water: true,
    checkWaterStatus: function (status) {
      this.water = status;
    },
  },
  pictures: {
    quantity: 3,
    colorGold: 1,
    colorSilver: 1,
    width: 20,
    height: 25,
  },
};
console.log("shelf", shelf);
// shelf {color: 'grey', width: 15, height: 100, ocupability: true, checkOcupability: ƒ,…}
console.log("cupboard", cupboard);
// cupboard {name: 'grey Cupboard', color: 'grey', doors: 6, doorHandles: 8, drawers: 1, …}
shelf.flower.checkWaterStatus(false);
// undefined;
shelf.flower.water;
// false;
shelf.flower.checkWaterStatus(true);
// undefined;
shelf.flower.water;
// true;
shelf.pictures.height;
// 25;
shelf.flower.color;
// ("green");
cupboard.newShelvesStorage("leftSheves");
undefined;
cupboard.shelves;
// {left: 'leftSheves', right: undefined}
cupboard.newShelvesStorage("leftSheves", "rightShelves");
undefined;
cupboard.shelves;
// {left: 'leftSheves', right: 'rightShelves'}
cupboard.newShelvesStorage("books", "glasses");
// undefined;
cupboard.shelves;
// {left: 'books', right: 'glasses'}
