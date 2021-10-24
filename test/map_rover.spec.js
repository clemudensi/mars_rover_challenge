import { Plateau } from '../lib/plateau';
import { MarsRover } from '../lib/mars_rover';
import { result } from '../lib/result';

describe('Mars Rover', () => {
  describe('Plateau', () => {
    it('should create plateau with coordinates', () => {
      const plateau = new Plateau('5 4');

      expect(plateau.width).toBe(5);
      expect(plateau.height).toBe(4);
      expect(plateau.landscape).toEqual([
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ]
      ]);
    });
  });

  describe('Rover Movement', () => {
    it('should move left', () => {
      const rover = new MarsRover('2 3 N');

      rover.moveLeft();
      expect(rover.direction).toBe('W');

      rover.moveLeft();
      expect(rover.direction).toBe('S');

      rover.moveLeft();
      expect(rover.direction).toBe('E');

      rover.moveLeft();
      expect(rover.direction).toBe('N');
    });

    it('should move right', () => {
      const rover = new MarsRover('2 3 N');

      rover.moveRight();
      expect(rover.direction).toBe('E');

      rover.moveRight();
      expect(rover.direction).toBe('S');

      rover.moveRight();
      expect(rover.direction).toBe('W');

      rover.moveRight();
      expect(rover.direction).toBe('N');
    });

    describe('Move forward', () => {
      it('should move forward, North', () => {
        let rover = new MarsRover('2 3 N');

        rover.moveForward();
        expect(rover.x).toBe(2);
        expect(rover.y).toBe(4);
      });

      it('should move forward, East', () => {
        let rover = new MarsRover('2 3 E');

        rover.moveForward();
        expect(rover.x).toBe(3);
        expect(rover.y).toBe(3);
      });

      it('should move forward, South', () => {
        let rover = new MarsRover('2 3 S');

        rover.moveForward();
        expect(rover.x).toBe(2);
        expect(rover.y).toBe(2);
      });

      it('should move forward, West', () => {
        let rover = new MarsRover('2 3 W');

        rover.moveForward();
        expect(rover.x).toBe(1);
        expect(rover.y).toBe(3);
      });
    });
  });

  describe('Landing Rover', () => {
    it('lands rover within plateau', () => {
      expect(
        result([
          'Plateau:5 5', 'Rover1 Landing:1 2 N', 'Rover1 Instructions:LMLMLMLMM'
        ]))
      .toEqual('1 3 N');
      expect(
        result([
          'Plateau:5 5', 'Rover1 Landing:3 3 E', 'Rover1 Instructions:MMRMMRMRRM'
        ]))
      .toEqual('5 1 E');
    });

    it('should throw error if rover landing coordinate or instruction is wrong', () => {
      expect(() => {
        result([
          'Plateau:5 5', 'Rover Landing:1 2 T', 'Rover Instructions:LMLMLMLMM'
        ])})
      .toThrow('invalid landing cardinal');
      expect(() => {
        result([
          'Plateau:5 5', 'Rover Landing:6 2 N', 'Rover Instructions:LMLMLMLMM'
        ])})
      .toThrow('invalid landing coordinate on x-axis');
      expect(() => {
        result([
          'Plateau:5 5', 'Rover Landing:1 6 N', 'Rover Instructions:LMLMLMLMM'
        ])})
      .toThrow('invalid landing coordinate on y-axis');
      expect(() => {
        result([
          'Plateau:5 5', 'Rover Landing:4 3 E', 'Rover Instructions:MMRMMRMRRM'
        ])})
      .toThrow('invalid landing instructions');
    });
  });
});