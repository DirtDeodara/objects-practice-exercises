class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  price() {
    let housePrice =  (this.floors * 50000) + (this.bedrooms * 20000) + (this.bathrooms * 30000);
    return housePrice;
  }
}

module.exports = House;
