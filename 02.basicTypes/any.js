// any 类型
// 静态编译不会对该类型做提示或检查
// 一般用于动态数据的赋值
// 或第三方库的调用
var notSure = 4;
notSure = "Maybe a string varible";
notSure = false;
notSure = undefined;
notSure = null;
notSure.runtimeFunc();
var dynamicList = [1, true, "string"];
dynamicList[1] = 0;
