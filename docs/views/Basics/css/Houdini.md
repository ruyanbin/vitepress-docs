# css Houdini

::: tip
Houdini 是一组底层 API，它们公开了 CSS 引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展 CSS。 Houdini 是一组 API，它们使开发人员可以直接访问 CSS 对象模型 （CSSOM），使开发人员可以编写浏览器可以解析为 CSS 的代码，从而创建新的 CSS 功能，而无需等待它们在浏览器中本地实现。 - MDN

:::

## api

## CSS Properties and Values API

::: tip
CSS 属性和值 API 提供了 CSS 属性和值对象的构造函数，这些对象可以与 CSSOM 一起使用，以创建新的 CSS 属性和值。这些对象还可以用于创建自定义 CSS 属性和值， 允许属性类型检查、默认值以及继承或不继承其值的属性。 - MDN
:::

1. js 方式：通过`CSS.registerProperty(propertyName, syntax, options)`定义浏览器应该如何解析 CSS 自定义属性，通过 javascript 中的`CSS.

- `propertyName`: 要注册的 CSS 属性的名称。该名称不能以`--`开头。
- `syntax`: 一个字符串 ，表示定义属性的预期语法，默认为\*。该字符串可以包含以下关键字：
  `<color>`：表示颜色值。
  `<length>`：表示长度值。
  `<percentage>`：表示百分比值。
  `<number>`：表示数字值。
  `<integer>`：表示整数值。
  `<angle>`：表示角度值。
  `<time>`：表示时间值。
  `<resolution>`：表示分辨率值。
  `<transform-function>`：表示变换函数值。
- initialValue: 初始值，默认为`initial`。
- inherits: 是否继承，默认为`false`。

```
 window.CSS.registerProperty({
     name: '--my-color',
     syntax: '<color>',
     inherits: false,
     initialValue: 'black'
 })
```

2. css 方式：`@property`: 定义浏览器应该如何解析 CSS 自定义属性，通过 css 中的`@property`访问此接口

- `syntax`: 一个字符串 ，表示定义属性的预期语法，默认为\*。该字符串可以包含以下关键字：
- `inherits`: 表示属性是否继承，默认为`false`。
- `initialValue`: 初始值，默认为`initial`。

```
@property --my-color {
    inherits: false,
    syntax: '<color>',
    initialValue: 'black'
}
```

```html
@property --card-angle { syntax: "<angle
	>"; inherits: false; initial-value: 0deg; } .box { width: 200px; height:
	300px; background: linear-gradient(var(--card-angle), #f9d423, #f83600);
	animation: spin 3s linear infinite; } @keyframes spin { to { /* background:
	linear-gradient(360deg, #f9d423, #f83600); */ --card-angle: 360deg; } }

	<div class="box"></div
></angle>
```
