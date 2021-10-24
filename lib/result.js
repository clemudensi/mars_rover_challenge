import { Plateau } from './plateau';
import { MarsRover } from './mars_rover';
import { directions } from './CONSTANTS';

const getInput = (input) => {
  return input.split(':')[1];
};

const error = (errorType) => {
  throw new Error(`invalid landing ${errorType}`);
};

const result = (args) => {
  let roverCord;
  const plateauCord = new Plateau(getInput(args[0]));
  args.shift();

  // pass landing inputs and instructions
  args.forEach((element, index) => {
    if ((index + 1)%2 === 0 ){
      const landing = getInput(args[index - 1]).split(' ');

      if (landing[0] > plateauCord.width){
        error('coordinate on x-axis')
      }
      else if (landing[1] > plateauCord.height) {
        error('coordinate on y-axis')
      }
      else if (!directions.includes(landing[2])) {
        error('cardinal')
      } else {
        const rover = new MarsRover(getInput(args[index - 1]));
        rover.moveRover(getInput(element))

        if (rover.x > plateauCord.width || rover.y > plateauCord.height){
          error('instructions')
        }
        console.log(`${rover.x} ${rover.y} ${rover.direction}`);
        roverCord = `${rover.x} ${rover.y} ${rover.direction}`;
      };
    }
  });
  return roverCord;
};

export { result };

//todo: refactor result function to eliminate nested if-else block