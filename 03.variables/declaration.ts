// 函数中定义变量

function f() {
  var msg = "Hello World";
  return function g() {
    var name = "Aaron Wong";
    return msg + ', ' + name;
  }
}

var g = f();
// Hello world, Aaron Wong
g();

// 变量作用域

function func(shouldInit: boolean) {
  if (shouldInit) {
    var a = 10;
  }

  return a;
}

func(true); // 10
func(false); // undefined
