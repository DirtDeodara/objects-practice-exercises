const uuidv4 = require('uuid/v4');
const { animalConstructor, animalFactory, animalClass } = require('../exercise-one');
const House = require('../exercise-two');
const Car = require('../exercise-three');
const Colors = require('../exercise-four');
const User = require('../execise-five');

describe('exercise one', () => {
  it('tests that the constructor returns the right object', ()  => {
    const animalObj = new animalConstructor('Harvey', 'Dog');
    expect(animalObj).toEqual({
      name: 'Harvey',
      species: 'Dog'
    });
  });

  it('tests that the factory returns the right object', ()  => {
    const animalObj = new animalFactory('Harvey', 'Dog');
    expect(animalObj.name).toEqual('Harvey');
    expect(animalObj.species).toEqual('Dog');
    expect(animalObj.speak()).toEqual('My name is Harvey and Im a Dog.');
  });


 
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

describe('exercise four', () => {
  it('test that the right object it returned', () => {
    const myColors = new Colors();
    expect(myColors).toEqual({
      favorites: []
    });
  });

  it('test that the addColor method works', () => {
    const myColors = new Colors();
    expect(myColors.addColor('red')).toEqual(['red']);
  
  });

  it('test that the hasColor method works', () => {
    const myColors = new Colors();
    myColors.addColor('red');
    expect(myColors.hasColor('red')).toEqual(true);
  
  });
});

describe('exercise five', () => {
  it('test that the correct user object is created and id generated', () => {
    const myUser = new User('Dirt', 'dirt@email.com', 'sneaky');
    myUser.id = uuidv4();
    expect(myUser).toEqual({
      name: 'Dirt',
      email: 'dirt@email.com',
      password: 'sneaky',
      id: myUser.id
    });
  });

  it('test that the correct string is returned from the toString method', () => {
    const myUser = new User('Dirt', 'dirt@email.com', 'sneaky');
    myUser.id = uuidv4();
    expect(myUser.toString()).toEqual('Dirt dirt@email.com');
  });

  it('test that the a password can be reset', () => {
    const myUser = new User('Dirt', 'dirt@email.com', 'sneaky');
    myUser.id = uuidv4();
    myUser.resetPassword('sneaky', 'moreSneaky');
    expect(myUser.password).toEqual('moreSneaky');
  });
});
