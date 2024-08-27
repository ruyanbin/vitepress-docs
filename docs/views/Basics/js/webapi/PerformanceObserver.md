---
prev:
  text: "MutationObserver "
  link: "views/Basics/js/webApi/MutationObserver"
next:
  text: "IntersectionObserver"
  link: "views/Basics/js/webApi/IntersectionObserver"
---

# PerformanceObserver

## 介绍

`Performance Observer`是一种 JavaScript API，用于监测页面性能指标，如资源加载时间、页面渲染时间等。它可以触发回调函数，以便你收集和分析页面性能数据。

优点

1. 性能检测：可以检测页面性能，以便发现性能问题并进行优化
2. 丰富的性能 指标：提供了多种性能指标 如 资源架子啊时间
3. 跨浏览器支持

应用场景

1. 监控页面性能指标：例如资源加载时间、页面渲染时间等，以便了解用户体验和优化页面性能。
2. 分析性能瓶颈：通过监测和分析性能指标，可以发现性能瓶颈并进行优化。
3. 自定义性能指标：可以根据需要自定义性能指标，以便更准确地监测页面性能。

## 使用

1. 创建一个`PerformanceObserver`实例，并指定一个回调函数，该回调函数会在页面性能指标发生变化时触发。、

```javascript
const observer = new PerformanceObserver(callback);
```

2. 指定要观察的性能条目类型 性能条目类型是一个配置对象，包括以下属性：

- 1. entryTypes：要观察的性能条目类型数组
     可以填的值包括:

1. frame： 指的是整个页面，包括页面的导航性能和整体加载时间。它可以监测与整个页面的性能相关的数据。
2. navigation： 与页面导航和加载时间相关，提供有关导航事件（如页面加载、重定向等）的性能数据。
3. resource： 与页面中加载的各种资源相关，如图像、脚本、样式表等。它可以监测单个资源的加载性能，包括资源的开始和结束时间，以及其他相关信息。
4. mark： 与性能标记（mark）相关，性能标记是在代码中设置的时间戳，通常用于记录特定事件的时间，以便后续性能分析。这提供了在页面加载期间创建性能标记的方式。
5. measure： 与性能测量（measure）相关，性能测量用于测量两个性能标记之间的时间间隔，以获取更详细的性能数据。这提供了测量和分析特定事件之间的时间差的方式。
6. paint： 与页面绘制性能相关，可以是 "first-paint"（首次绘制）或 "first-contentful-paint"（首次内容绘制）之一。这些指标表示页面呈现的关键时间点，可以帮助我们评估用户视觉上的加载体验。

```
observer.observe({ entryTypes: ['resource'] })
```

3. 编写回调函数
   回调函数接收一个参数，该参数是一个包含性能条目的数组。你可以遍历这个数组，获取每个性能条目的性能指标，并进行相应的处理。

```javascript
function callback(list) {
	for (const entry of list.getEntries()) {
		console.log(entry.name, entry.startTime, entry.duration);
	}
}
```

4. 方法
- observe()：
   ::: tip
   observe 方法用于启动性能观察器以开始监测指定类型的性能条目。options 方法接受一个参数，参数要求是对象形式，其中包含要监测的性能条目类型（entryTypes）和一个回调函数，用于处理观察到的性能条目。当指定的性能条目可用时，会触发回调函数。
   :::
   参数值:
   1. entryTypes（必需）： 一个字符串数组，用于指定要监测的性能条目类型
   2. buffered（可选）：一个布尔值，指示是否应该检查已缓冲的性能条目（默认为 false）。如果设置为 true，则性能观察器将检查在调用 observe 之前已经发生的性能条目。
   3. transferMode（可选） 一个字符串，用于指定如何传输性能条目。可以包括以下值：
   4. “report”：默认值，性能条目将通过回调函数进行报告。
   5. “accumulate”：性能条目将积累并传递给回调函数。

   ```javascript
   observer.observe({
   	entryTypes: ["navigation", "resource"],
   	buffered: true, // 检查已缓冲的性能条目
   	transferMode: "report", // 默认值，性能条目通过回调函数进行报告
   });
   ```

- disconnect()：
   停止观察器，不再接收新的性能条目。

   ```javascript
   observer.disconnect();
   ```
- takeRecords()方法
   当前性能观察器队列中尚未传递给回调函数的性能条目。这些性能条目会从队列中移除，并以数组的形式返回。这可以在停止观察之前用于检索观察到的性能数据。
