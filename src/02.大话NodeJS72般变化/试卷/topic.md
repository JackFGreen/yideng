# 京程 灯精英班第二周笔试题

- 1.大家在开发 Node.js 的时候都知道异步的嵌套非常麻烦，有人叫回调地域有人叫回调 黑洞，请问如何解决这个问题?(5 分)
```
promise defferred
es6 generator + promise
async await
```
- 2.如何解释 NodeJS 适用于 IO 密集型不适用 CPU 密集型?(5 分)
```
node 还没有 简单易用 的多核计算接口，Cluster 并不是很好用
node 单核效率虽然比传统语言高，但和 c c++ java 比没有优势
```

- 3.请画出 Node.js 的异步事件回调机制的实现,并解释原理。(5 分)
```
libuv
```

- 4.开完一个完整的 Node 程序，有 UI 层、Service 层、DAO 层、MODEL 层等，我们要在交给 QA 前需要编写测试用例。测试用例一般遵循测试金字塔(测试金字塔指的是在编写 测试用例时，底层的单元测试应该远比上层的端到端测试要多，如下图)请问在如下 三个阶段，都用什么样的技术进行测试用例的编写。(10 分)
```
ui
  nightwatch selenium

service
  mocha supertest

unit 
  karma phantom chai
```

- 5.有人说 Node 是玩具，写错一处整个网站就挂。为了解决它你有什么办法么?(10 分)
```
中间件处理 400 500
关键函数封装，容错
全剧错误监听，uncaughtExpection
```

- 6.请你写出你知道的 HTTP 请求报头，并写出常见的 HTTP Status Code 标明他的含义(5 分)
```
405 not allow post => get
502 bad getway
301 redirect
```
- 7.请用 KOA2 实现基本的服务端，并输出 HelloWorld，且实现功能测试。(20 分)

- 8.NodeJS 使用了 Scavenge、Mark-Sweep 、 Mark-compact 算法进行垃圾回收，请绘制三种 算法的原理，并描述何种情况下会造成 NodeJS 的内存泄露，如何检测?(20 分)

- 9.请你写出你能力范围的一个 Node 项目文件夹的划分，并标明他的作用。(10 分)
```
model
views
public/assets
controller
lib
config
app.js
```

- 10.请绘制浏览器实现缓存机制。(10 分)
```
是否过期
etag
modified
```
