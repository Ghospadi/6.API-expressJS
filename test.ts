let a = "Hi!";

if (typeof a === "string") {
}

let b: typeof a;

type Coord = {
  lat: number;
  long: number;
};

type P = keyof Coord;

let c: P = "lat";

function log(a: string | null) {
  a!.toLowerCase();
}

const d: bigint = BigInt(100);
const f: symbol = Symbol("dsadsa");
