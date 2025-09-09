//define class

class Cupboard {
  constructor(
    // Defines parameters:
    name,
    color,
    width,
    height,
    doorOpen
  ) {
    //Define properties
    (this.name = name),
      (this.color = color),
      (this.width = width),
      (this.height = height),
      (this.doorOpen = doorOpen);
  }
  // Add methods like normal functions:
  newPaint(newColor) {
    this.color = newColor;
  }
  toggleDoor(status) {
    this.doorOpen = status;
  }
}
console.log(Cupboard);

export default Cupboard;
