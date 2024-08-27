---
prev : 
   text: "IntersectionObserver"
   link: 'views/Basics/js/webapi/IntersectionObserver'
---

# ResizeObserver

::: tip
`resizeObeserver`: 监听元素尺寸变化
:::

1. 构造函数
```js
const observer = new ResizeObserver(callback);

```
2. 监听元素尺寸变化
```js
observer.observe(element);
```
3. 取消监听
```js
observer.unobserve(element);
```
4. 监听多个元素
```js
const observer = new ResizeObserver(callback);
const elements = document.querySelectorAll('.element');
```
5. 监听元素尺寸变化回调函数
```js
callback(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.contentRect);
  })

}
```