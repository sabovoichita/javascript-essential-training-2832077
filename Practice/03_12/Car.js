class Car {
  constructor(
    //Define parameters
    year,
    color,
    doorsNumber,
    doorStatus,
    gearNb,
    model,
    tyresNumber
  ) {
    // Define Properties
    (this.year = year),
      (this.color = color),
      (this.doorsNumber = doorsNumber),
      (this.doorStatus = doorStatus),
      (this.gearNb = gearNb),
      (this.model = model),
      (this.tyresNumber = tyresNumber);
  }
  // Add methods like normal functions:
  toggleDoors(status) {
    this.doorStatus = status;
  }
  changeGear(currentGear) {
    this.gearNb = currentGear;
  }
}

export default Car;
