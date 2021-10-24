class Plateau {
  constructor(cord){
    const position = cord.split(' ');

    this.width = parseInt(position[0], 10);
    this.height = parseInt(position[1], 10);
    this.landscape = Array.from({
      length: this.width
    }, () => new Array(this.height).fill(0));

    if (isNaN(this.width) || isNaN(this.height)) {
      throw new Error('Invalid Plateau');
    }
  }
}

export { Plateau };