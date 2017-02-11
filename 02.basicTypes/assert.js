// 类型断言
// 对某一变量指定类型，在静态编译阶段只针对该类型检查
var anyValue = "a string";
// without any checks by the compiler
var strLen = anyValue.length;
// “angle-bracket” syntax
var strLen1 = anyValue.length;
// “as” syntax
var strLen2 = anyValue.length;
