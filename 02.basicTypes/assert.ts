// 类型断言
// 对某一变量指定类型，在静态编译阶段只针对该类型检查

let anyValue: any = "a string";

// without any checks by the compiler
let strLen: number = anyValue.length;

// “angle-bracket” syntax
let strLen1: number = (<string>anyValue).length;

// “as” syntax
let strLen2: number = (anyValue as string).length;
