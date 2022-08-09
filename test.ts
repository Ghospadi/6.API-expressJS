function log<T>(obj: T): T {
  console.log(obj);
  return obj;
}

log<string>("1321");
log<number>(1);

function log1<T, K>(obj: T, arr: K[]): K[] {
  console.log(obj);
  return arr;
}

log1<string, number>("dsada", [1]);

interface HasLength {
  length: number;
}

function log2<T extends HasLength, K>(obj: T, arr: K[]): K[] {
  obj.length;
  return arr;
}

interface IUser {
  name: string;
  age?: number;
  bid: (sum: number) => boolean;
}

function bid(sum: number): boolean {
  return true;
}

interface IUser2 {
  name: string;
  age?: number;
  bid2: <T>(sum: T) => boolean;
}

function bid2<T>(sum: T): boolean {
  return true;
}
