let a = 5;
let b: string = "1";

let c: number = a + Number(b);

let d = true;

let names: string[] = ["sd", "dsdsds"];
let ages: number[] = [4, 10];

let tup: [number, string] = [1, "dsada"];
tup.push("");

let e: any = 5;
e = "dsa";
e = true;

let anyArr: any[] = ["dsa", 3, true];

function greet(name: string): string {
  return name + "Hi";
}

names.map((x: string) => x);

function coord(coord: { lat: number; lon?: number }) {
  if (coord.lon !== null) {
  }
}
