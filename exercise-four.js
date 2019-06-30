class Colors {
  constructor() {
    this.favorites = [];
  }
  addColor(color) {
    this.favorites.push(color);
    return this.favorites;
  } 
}

module.exports = Colors;
