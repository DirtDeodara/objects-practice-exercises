const { animalConstructor, animalFactory, animalClass } = require('../exercise-one');

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
