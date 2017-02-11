// inface 接口定义
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// readonly vs. const
// object use readonly
// other type use const
// 无接口类型定义
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var obj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(obj);
printLabel2(obj);
function createSquare(config) {
    var newSquare = {
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
function addPerson(person) {
    return "My name is " + person.name + ", " + person.age + " years old.";
}
addPerson({
    name: "Wong",
    age: 22,
    job: "OLD Driver"
});
var p1 = {
    x: 10,
    y: 20
};
// cause error
// p1.x = 5;
// 只读数组
var a = [1, 2, 3, 4];
var ro = a;
// 以下做法皆会提示报错
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;
// assert 类型断言可使只读类型数组转回普通数组类型
a = ro;
a.push(5);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    ;
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    ;
    AnalogClock.prototype.tick = function () {
        console.log("tick tick");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
