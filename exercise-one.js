
const animalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

animalConstructor.prototype.speak = function() {
  console.log(`Why, yes! I am indeed a beautiful ${this.species}. My name is ${this.name}`);
};

module.exports = { animalConstructor };
