---
prev:
  text: 'PerformanceObserver'
  link: '/views/Basics/js/webapi/PerformanceObserver'
next: 
  text: 'ResizeObserver'
  link: 'views/Basics/js/webapi/ResizeObserver'
---

# IntersetionObserver

::: tip
 `IntersectionObserver`: 用于监听目标元素与视窗的交点，当目标元素与视窗有交点时，触发回调函数。
:::

1. 构造函数
 ```
  const observer = new IntersectionObserver(collback)
```
2. 实例属性
- `root`: 根元素，默认为 `null`，表示监听整个视窗。
- `rootMargin`: 根元素的边距，默认为 `'0px'`，表示根元素与视窗的边距。
- `threshold`: 交点阈值，默认为 `0`，表示当目标元素与视窗有交点时，触发回调函数。
3. 实例方法
- `observe(target)`: 监听目标元素。
- `unobserve(target)`: 取消监听目标元素。
- `disconnect()`: 停止监听所有目标元素。
- `takeRecords()`: 返回所有已触发的回调函数。
- `thresholds`: 返回当前阈值。
- `constructor`: 返回构造函数。

4. 回调函数
```js
const callback = (entries, observer) => {
  entries.forEach(entry => {
   // 
    if (entry.isIntersecting) {
      // 目标元素与视窗有交点
    } else {
      // 目标元素与视窗没有交点
    }
  })
}

const options = {
root: null, // 根元素
rootMargin: '0px', // 根元素的边距
threshold: 0.5 // 交点阈值
}
const observer = new IntersectionObserver(callback,options)
```
5. entries 属性
- `isIntersecting`: 表示目标元素与视窗有交点。
- `intersectionRatio`: 表示目标元素与视窗的交点比例。
- `boundingClientRect`: 表示目标元素的大小和位置。
- `rootBounds`: 表示根元素的大小和位置。
- `target`: 表示目标元素。
- `time`: 表示目标元素与视窗的交点时间。
- `root`: 表示根元素。
- `rootMargin`: 表示根元素的边距。
- `threshold`: 表示交点阈值。
- `intersectionRect`: 表示目标元素与视窗的交点大小和位置。
- `isVisible`: 表示目标元素是否可见。