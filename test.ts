type Coord = { lat: number; lon: number };

interface ICoord {
  lat: number;
  lon: number;
}

type ID = number | string;

function compute(coord: ICoord, id: ID) {}

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   tail?: boolean;
// }

// const dog: Dog = {
//   name: "Vasya",
// };

// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   tail?: boolean;
// };

// const dog: Dog = {
//   name: "Vasya",
// };

// interface Dog {
//   name: string;
// }

// interface Dog {
//   tail: boolean;
// }

// const dog: Dog = {
//   name: "Vasya",
//   tail: true,
// };
