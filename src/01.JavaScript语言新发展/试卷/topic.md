# 《京程一灯》精英班第一讲 D 卷 姓名:

请按要求作答，并 整书写试卷。

- 1.请写出输出值，并解释为什么。(5 分)

```js
yideng();
alert(a);
var flag = true;
if (!flag) {
  var a = 1;
}
if (flag) {
  function yideng() {
    console.log("yideng1");
  }
} else {
  function yideng() {
    console.log("yideng2");
  }
}
```

```js
// 答:
// 词法作用域，函数提升
"yideng2";
undefined;
```

- 2.请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么(8 分)

```js
this.a = 20;
var test = {
  a: 40,
  init: () => {
    console.log(this.a);
    function go() {
      // this.a = 60;
      console.log(this.a);
    }
    go.prototype.a = 50;

    return go;
  }
};
//var p = test.init();
//p();
new (test.init())();
```

```js
20;
// new (go)()
50;

// 答: (去掉代码注释后的答案):
20;
60;

60;
// new (go)()
60;
```

- 3.请问变量 a 会被 GC 回收么，为什么呢?(12 分)

```js
function test() {
  var a = "yideng";
  return function() {
    eval("");
    // try catch
    // with
  };
}
test()();
```

```js
// 答:
不会;
eval;
```

- 4.写出输出值，并解释为什么。(5 分)

```js
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};
var yideng = new Person();
console.log('p.a: '+ yideng.a);
console.log(1..a);
console.log(1.a);
```

```js
// 答:
'p.a: ' 'a'
'a' 浮点是对象 Number()
报错 1. a | 1 .a
```

- 5.请在下面写出 JavaScript 面向对象编程的混合式继承。并写出 ES6 版本的继承。 要求:汽车是父类，Cruze 是子类。父类有颜色、价格属性，有售卖的方法。Cruze 子 类实现父类颜色是红色，价格是 140000,售卖方法实现输出如下语句:将 红色的 Cruze 买给了小王价格是 14 万。(20 分)

```js
// 答:
// es5
function Car(color, price) {
  this.color = color;
  this.price = price;
}
Car.prototype.sell = function() {
  console.log("sell ", this.color, this.price);
};

function Cruze(color, price) {
  Car.call(this, color, price);
}
Cruze.prototype = Object.create(Car.prototype);
Cruze.prototype.constructor = Cruze;

// es6
class Car {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
  sell() {
    console.log("sell ", this.color, this.price);
  }
}

class Cruze extends Car {
  constructor(color, price) {
    super(color, price);
  }
}
```

- 6.请写出 Let 用 ES5 的实现方式。(10 分)

```js
// 答:
try {
  throw 1
} catch (e) {
  console.log(1)
}
```

- 7.请按照下方要求作答?(15 分)

```js
const timeout = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });
const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });
const mergePromise = ajaxArray => {
  //1,2,3 done [1,2,3]
  //代码书写处
};
mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});
// 执行结果为: 1 2 3 done [1,2,3]
```

```js
// 答:
const result = [];
async function asyncEach() {
  for (const ajax of ajaxArray) {
    result.push(await ajax());
  }
  return result;
}
return asyncEach();
```

- 8.请问点击`<buttion id=“test”></button>`会有反应么?为什么?能解决么?(5 分)

```js
$("#test").click(function(argument) {
  console.log(1);
});
setTimeout(function() {
  console.log(2);
}, 0);
while (true) {
  console.log(3);
}
```

答:

- 9.请用 ES5 实现 ES6 Promise 的原理(10 分)
  答:

- 10.请写出如下输出值，并解释为什么。(12 分)

```js
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
  var pusher = {
      value: "item" + i
    },
    tmp;
  if (i !== 2) {
    tmp = [];
    pusher.children = tmp;
  }

  arr.push(pusher);
  arr = tmp;
}
console.log(s[0]);
```

```js
// 答:
{
  value: 'item0',
  children: [
    {
      value: 'item1',
      children: [
        value: 'item2'
      ]
    }
  ]
}
```

- 【附加题】.请描述你理解的函数式编程，并书写如下代码结果。如何将函数式编程 应用到你的项目中呢?(10 分)

```js
var Container = function(x) {
  this.__value = x;
};
Container.of = x => new Container(x);
Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
};
Container.of(3)
  .map(x => x + 1)
  .map(x => "Result is " + x);
```

```js
// 答:
Container {
  __value: "Result is 4"
}
```
