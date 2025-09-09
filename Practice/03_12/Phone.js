//  Class declaration: class Name {}
class Phone {
  constructor(
    // Defines parameters:
    model,
    width,
    height,
    color,
    frontCameraNb,
    rearCameraNb,
    caseColor,
    batteryPercentage
  ) {
    // Define properties:
    this.model = model;
    this.width = width;
    this.height = height;
    this.color = color;
    this.frontCameraNb = frontCameraNb;
    this.rearCameraNb = rearCameraNb;
    this.caseColor = caseColor;
    this.batteryPercentage = batteryPercentage;
  }
  // Add methods like normal functions:
  openCamera(status) {
    this.frontCameraNb = status;
  }
  chargePhone(percentage) {
    this.batteryPercentage += percentage;
  }
}

export default Phone;
