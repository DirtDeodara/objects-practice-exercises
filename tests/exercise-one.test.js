const { animalConstructor } = require('../exercise-one');

describe('exercise one', () => {
  it('tests that the constructor returns the right object', ()  => {
    const animalObj = new animalConstructor('Harvey', 'Dog');
    expect(animalObj).toEqual({
      name: 'Harvey',
      species: 'Dog'
    });
  });
});
