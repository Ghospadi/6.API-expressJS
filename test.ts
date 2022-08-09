const a = "dsadadsa";

let b: "hi" = "hi";

type Direction = "left" | "right";

function moveDog(direction: Direction): -1 | 0 | 1 {
  switch (direction) {
    case "left":
      return -1;
    case "right":
      return 1;
    default:
      return 0;
  }
}

console.log(moveDog("left"));

// interface IConnection {
//   host: string;
//   port: number;
// }

// function connect(connection: IConnection | "default") {}

// connect("default");

const connection = {
  host: "localhost",
  protocol: "https" as "https",
};

let c: any = 5;
let d: number = c as number;

function connect(host: string, protocol: "http" | "https") {}

connect(connection.host, connection.protocol);
