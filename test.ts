type direction = "left" | "right";

enum Direction {
  Left,
  Right,
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Left:
      return -1;
    case Direction.Right:
      return 1;
  }
}

function objM(obj: { Left: number }) {}

objM(Direction);

const enum Direction2 {
  Up,
  Down,
}

let myDirection = Direction2.Up;
