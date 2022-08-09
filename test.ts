class Coord {
  lat: number;
  lng: number;

  computeDistance(newLat: number, newLng: number): number {
    return 0;
  }

  protected test(lat: number): number {
    if (this.lat > 0) {
      return 0;
    }
    return 1;
  }

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

/////////////////////////////////////////////

const first = new Coord(1, 1);

class MapLocation extends Coord {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(s: string) {
    this._name = s + "_cool";
  }

  override computeDistance(newLat: number, newLong: number): number {
    console.log(this._name);
    this.test(1);
    return 1;
  }

  constructor(lat: number, lng: number, name: string) {
    super(lat, lng);
    this._name = name;
  }
}

const loc = new MapLocation(0, 1, "dsa");
if (loc.name) {
  loc.name = "dsadasdsa";
}

console.log(loc.name);

//////////////////////////////////////////////

interface LoggerService {
  log: (s: string) => void;
}

class Logger implements LoggerService {
  public log(s: string) {
    console.log(s);
  }
  private log1(s: string) {
    console.log(s);
  }
  #a = 1;
}

const l = new Logger();

l.log("1");

//////////////////////////////////////////////

class MyClass {
  static a = 1;
  static {}
}

MyClass.a;

//////////////////////////////////////////////

class MyClass2<T> {
  a: T;
}

const b = new MyClass2<string>;
b.a;

///////////////////////////////////////////////

abstract class Base {
  print(s: string): void {
    console.log(s);
  }

  abstract error(s: string): void;
}

class BaseExtended extends Base {
  error(s: string) {

  }
}

new BaseExtended().print('s');

////////////////////////////////////////////////

class Animal {
  name: string;
}

class Dog {
  name: string;
  tail: boolean;
}

const puppy: Animal = new Dog();

////////////////////////////////////////////////