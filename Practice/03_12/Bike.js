//Create the object with constructor class
class Bike {
  constructor(
    //Define properties
    model,
    color,
    type,
    tyres,
    gears,
    foldableNotfoldable,
    extras
  ) {
    //Define properties
    this.model = model;
    this.color = color;
    this.type = type;
    this.tyres = tyres;
    this.gears = gears;
    this.foldableNotfoldable = foldableNotfoldable;
    this.extras = extras;
  }
  changeGear(currentGear) {
    this.changeGear = currentGear;
  }
}

console.log(Bike);
export default Bike;
