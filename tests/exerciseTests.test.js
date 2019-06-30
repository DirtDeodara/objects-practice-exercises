const { animalConstructor, animalFactory, animalClass } = require('../exercise-one');
const House = require('../exercise-two');
const Car = require('../exercise-three');

describe('exercise one', () => {
  it('tests that the constructor returns the right object', ()  => {
    const animalObj = new animalConstructor('Harvey', 'Dog');
    expect(animalObj).toEqual({
      name: 'Harvey',
      species: 'Dog'
    });
  });

  // it('tests that the factory returns the right object', ()  => {
  //   const animalObj = new animalFactory('Harvey', 'Dog');
  //   expect(animalObj).toEqual({
  //     name: 'Harvey',
  //     species: 'Dog'
  //   });
  // });

  it('tests that the class returns the right object', ()  => {
    const animalObj = new animalClass('Harvey', 'Dog');
    expect(animalObj).toEqual({
      name: 'Harvey',
      species: 'Dog'
    });
  });

});

describe('exercise two', () => {
  it('tests that the right house is created', () => {
    const myHouse = new House('Hollywood District', 1, 2, 1);
    expect(myHouse).toEqual({
      location: 'Hollywood District',
      floors: 1,
      bedrooms: 2,
      bathrooms: 1
    });
  });

  it('tests that the right price is returned', () => {
    const myHouse = new House('Hollywood District', 1, 2, 1);
    expect(myHouse.price(1, 2, 1)).toEqual(120000);
  });
});

describe('execise three', () => {
  it('tests that the right car is created', () => {
    const myCar = new Car('Toyota', 'Tacoma', 2002, 'Burgundy');
    expect(myCar).toEqual({
      make: 'Toyota',
      model: 'Tacoma',
      year: 2002,
      color: 'Burgundy',
      miles: 0
    });
  });

  it('tests that the drive method adds to this.miles', () => {
    const myCar = new Car('Toyota', 'Tacoma', 2002, 'Burgundy');
    expect(myCar.drive(100)).toEqual(100);
  });
});
