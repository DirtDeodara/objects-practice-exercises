
const animalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

animalConstructor.prototype.speak = function() {
  console.log(`Why, yes! I am indeed a beautiful ${this.species}. My name is ${this.name}`);
};


const animalFactory = function(name, species) {
  return {
    name,
    species,
    speak() {
      return `My name is ${this.name} and I'm a ${species}.`;
    }
  };
};

class animalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return (`My name is ${this.name} and I'm an amazing ${this.species}.`);
  }
}



module.exports = { animalConstructor, animalFactory, animalClass };
