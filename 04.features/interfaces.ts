// inface 接口定义

// readonly vs. const
// object use readonly
// other type use const

// 无接口类型定义
function printLabel(labelledObj: {
  label: string
}) {
  console.log(labelledObj.label);
}

interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let obj = {
  size: 10,
  label: "Size 10 Object"
};
printLabel(obj);
printLabel2(obj);

// 接口类型定义
// 入参定义
interface SquareConfig {
  color ? : string;
  width ? : number;
}
// 返回值定义
interface SquareReturn {
  color: string;
  area: number;
}

function createSquare(config: SquareConfig): SquareReturn {
  let newSquare = {
    color: "white",
    area: 100
  };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 通过 assert 类型断言避免 `opacity` 入参检查报错
// createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// error: 此处 `opacity` 不符合入参接口类型
// createSquare({ width: 100, opacity: 0.5 })

// success: 符合接口入参类型
createSquare({
  color: "black"
});


// 接口类型中允许存在其他类型的 props
interface Person {
  name: string;
  age: number;
  [propName: string]: any;
}

function addPerson(person: Person) {
  return `My name is ${person.name}, ${person.age} years old.`
}

addPerson({
  name: "Wong",
  age: 22,
  job: "OLD Driver"
});

// 只读类型的接口类型定义
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {
  x: 10,
  y: 20
};

// cause error
// p1.x = 5;

// 只读数组
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// 只读数组接口类型
interface ReadOnlyStringArray {
  readonly[index: number]: string;
}

// 以下做法皆会提示报错
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// assert 类型断言可使只读类型数组转回普通数组类型
a = ro as number[];
a.push(5);

// 函数类型
// 回调函数可定义成如下接口类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}

// 索引接口类型
// a[10], a["data"]
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog
// 因为在 JS 当中， 将 number 类型的值赋给 object 作为索引值时，
// 会被首先转换成 string 类型，a[100] 和 a["100"] 会取到相同的值，
// 故下面的例子中 string，number类型的索引会冲突
interface NotOkay {
  // [x: number]: Animal;
  [x: string]: Dog;
}

// 字典接口类型
// 如果 'name' 作为 property 定义成 string 类型的话，
// 由于 obj.property 和 obj["property"] 的索引都是 string 类型
// 所以就会和 index 索引的 string 类型造成冲突
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  name: number; // ok, name is a number
  // name: string;   error, the type of 'name' is not a subtype of the indexer
}

// Class 使用 implements 补全 public 属性
// Class 自身可以同时定义 private 和 pulic 属性
// 以此禁止你通过使用 Interface 来检查 Class 实例的私有方法
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {};
}

// constructor 作为静态方法不在 Interface 的检查中
// Clock2 不符合 ClockConstructor 的检查
interface ClockConstructor {
  new (hour: number, minute: number);
}
// error
// class Clock2 implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {};
// }

// 检查静态方法
interface ClockConstructor3 {
  new (hour: number, minute: number): ClockInterface3;
}

interface ClockInterface3 {
  tick();
}

function createClock(ctor: ClockConstructor3, hour: number, minute: number): ClockInterface3 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface3 {
  constructor(h: number, m: number) {};
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface3 {
  constructor(h: number, m: number) {};
  tick() {
    console.log("tick tick");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
