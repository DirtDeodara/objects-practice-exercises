class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
  drive(milesDriven) {
    let miles = this.miles + milesDriven;
    return miles;
  }
}

module.exports = Car;
