# EcmaScript5.1新增语法

## 严格模式
```js
'use strict';
```
- 未声明的变量赋值抛出一个ReferenceError, 而不是创建一个全局变量。
- 不止一次对对象字面量分配相同的属性会抛出SyntaxError.
- 使用with语句抛出SyntaxError.

## JSON

### JSON.parse(text [, reviver])
JSON.parse接受文本(JSON格式)并转换成一个ECMAScript值。该可选的reviver参数是有带有key和value两个参数的函数，其作用于结果——让过滤和转换返回值成为可能。

### JSON.stringify(value [, replacer [, space]])
JSON.stringify允许作者接受一个ECMAScript值然后转换成JSON格式的字符串。 在其最简单的形式中，JSON.stringify接受一个值返回一个字符串，

如果我们需要改变值字符串化的方式，或是对我们选择的提供过滤，我们可以将其传给replacer函数。例如，我们想过滤出即将被字符串化的对象中值为13的属性：

如果replacer方法返回undefined, 则键值对就不会包含在最终的JSON中。我们同样可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明了作缩进的JSON字符串或字符串每个水平上缩进的空格数。如果参数是个超过10的数值，或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。

## 附加对象
- Object.getPrototypeOf
- Object.getOwnPropertyDescriptor
- Object.getOwnPropertyNames
- Object.create
- Object.defineProperty
- Object.defineProperties
- Object.seal
- Object.freeze
- Object.preventExtensions
- Object.isSealed
- Object.isFrozen
- Object.isExtensible
- Object.keys

## 额外的数组
- Array.prototype.indexOf
- Array.prototype.lastIndexOf
- Array.prototype.every
- Array.prototype.some
- Array.prototype.forEach
- Array.prototype.map
- Array.prototype.filter
- Array.prototype.reduce
- Array.prototype.reduceRight

## Function.prototype.bind(thisArg [, arg1 [, arg2, …]])
bind 后需要手动调用，apply call 直接运行

参考
> https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/#browser-support
