// enum 类型
// 允许我们用数值型的命名定义常量
var Job;
// enum 类型
// 允许我们用数值型的命名定义常量
(function (Job) {
    Job[Job["Teacher"] = 0] = "Teacher";
    Job[Job["Driver"] = 1] = "Driver";
    Job[Job["Doctor"] = 2] = "Doctor";
})(Job || (Job = {}));
;
var job = Job.Teacher;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
var Family;
(function (Family) {
    Family[Family["Dad"] = 1] = "Dad";
    Family[Family["Mon"] = 2] = "Mon";
    Family[Family["Daughter"] = 3] = "Daughter";
})(Family || (Family = {}));
;
var family = Family[2];
;
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
