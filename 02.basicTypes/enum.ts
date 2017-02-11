// enum 类型
// 允许我们用数值型的命名定义常量

enum Job { Teacher, Driver, Doctor };
let job: Job = Job.Teacher;

enum Color { Red = 1, Green = 2, Blue = 4 };
let color: Color = Color.Green;

enum Family { Dad = 1, Mon, Daughter };
let family: string = Family[2];

const enum Enum1 {
  A = 1,
  B = A * 2
}

declare enum Enum2 { A = 1, B, C = 2 };

// {
//   '0': 'Teacher',
//   '1': 'Driver',
//   '2': 'Doctor',
//   Teacher: 0,
//   Driver: 1,
//   Doctor: 2
// }
console.log(Job);

// {
//   '1': 'Red',
//   '2': 'Green',
//   '4': 'Blue',
//   Red: 1,
//   Green: 2,
//   Blue: 4
// }
console.log(Color);

// {
//   '1': 'Dad',
//   '2': 'Mon',
//   '3': 'Daughter',
//   Dad: 1,
//   Mon: 2,
//   Daughter: 3
// }
console.log(Family);

// 0
console.log(job);

// 2
console.log(color);

// Mon
console.log(family);

