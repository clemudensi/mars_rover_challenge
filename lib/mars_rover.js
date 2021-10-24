import { directions } from './CONSTANTS';

class MarsRover {
  constructor(location){
    const position = location.split(' ');

    this.x = parseInt(position[0], 10);
    this.y = parseInt(position[1], 10);
    this.direction = position[2];

    if (isNaN(this.x) || isNaN(this.y) || !directions.includes(this.direction)) {
      throw new Error('use valid rover coordinates');
    }
  }

  moveLeft() {
    switch (this.direction) {
      case 'N':
          this.direction = 'W';
          break;
      case 'E':
          this.direction = 'N';
          break;
      case 'S':
        this.direction = 'E';
        break;
      case 'W':
          this.direction = 'S';
    };
  };

  moveRight() {
    switch (this.direction) {
      case 'N':
          this.direction = 'E';
          break;
      case 'E':
          this.direction = 'S';
          break;
      case 'S':
          this.direction = 'W';
          break;
      case 'W':
          this.direction = 'N';
    };
  }

  moveForward () {
    switch (this.direction) {
        case 'N':
          this.y += 1;
          break;
        case 'E':
          this.x += 1;
          break;
        case 'S':
          this.y -= 1;
            break;
        case 'W':
          this.x -= 1;
          break;
    };
  };

  moveRover (commands){
    const commandStrings = commands.split('');

    for(let i = 0; i < commandStrings.length; ++i){
      switch (commandStrings[i]){
        case 'L':
          this.moveLeft();
          break;
        case 'R':
          this.moveRight();
          break;
        case 'M':
          this.moveForward();
          break;
        default:
          throw new Error('You have not set a command')
      }
    };
  };
};

export { MarsRover };