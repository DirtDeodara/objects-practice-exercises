const { animalConstructor, animalFactory, animalClass } = require('../exercise-one');
const House = require('../exercise-two');

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
