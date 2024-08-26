# scss

## 介绍

：：：tip
SCSS 是一个扩展了 [Sass](http://sass-lang.com/) 的 CSS 预处理器。 Sass 是一个强大的、动态的样式表语言，Sass 语法非常成熟、稳定、兼容 CSS。 Sass 提供了许多强大的功能，比如变量（variables）、嵌套规则（nested rules）、混合（mixins）、继承（inheritance）等。 Sass 语法非常成熟、稳定、兼容 CSS，是前端开发中常用的工具之一。
：：：

## 安装

```bash
npm install -g sass
```

## 使用

```scss
$primary-color: #333;

body {
    color: $primary-color;
}
```

## 编译

```bash
sass input.scss output.css
```

## 配置

配置文件：`sass.config.js`

```js
module.exports = {
    outputStyle: "expanded", // nested, expanded, compact, compressed
    indentWidth: 2,
    sourceComments: true,
    sourceMap: true,
    sourceMapEmbed: true,
    sourceMapRoot: "http://localhost:8080",
    sourceMapFilename: "dist/[name].css.map",
    sourceMapURL: "[name].css.map",
    sourceMapContents: true,
    sourceMapFileSourceRoot: "http://localhost:8080",
    precision: 5,
    includePaths: [], // 引入路径
    // ...
};
```

## 变量

```scss
$primary-color: #333;

body {
    color: $primary-color;
}
```

## 嵌套

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

## 混合

```scss
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
}
@mixin border-radius-top($radius) {
}
```

## 继承

```scss
.box {
    width: 100px;
    height: 100px;
    background-color: #333;
}

.box:hover {
    background-color: #666;
}

.box2 {
    @extend .box;
}
```

## 条件语句

```scss
$theme: dark;

body {
    @if $theme == dark {
        background-color: #333;
    } @else if $theme == light {
        background-color: #fff;
    } @else {
        background-color: #ccc;
    }
}
```

## 循环

```scss
@for $i from 1 through 3 {
}
```

## 函数

```scss
@function square($number) {
    @return $number * $number;
}

body {
    width: square(10px);
}
```

## 导入

```scss
@import "styles.scss";
```

## 数学函数

-   percentage($number) - 将数值转换为百分比。
-   round($number, $precision) - 四舍五入数值。
-   ceil($number) - 向上取整。
-   floor($number) - 向下取整。
-   abs($number) - 绝对值。
-   min($numbers...) - 最小值。
-   max($numbers...) - 最大值。
-   random($max) - 生成随机数。
-   pi() - π 的值。

## 字符串函数

-   str-length($string) - 字符串长度。
-   str-insert($string, $insert, $position) - 在指定位置插入子串。
-   str-index($haystack, $needle) - 查找子串位置。
-   str-include($haystack, $needle) - 判断是否包含子串。
-   str-slice($string, $start, $length) - 截取子串。
-   str-trim($string) - 删除首尾空白字符。
-   str-quote($string) - 添加引号。
-   escape($string) - 转义特殊字符。

## 列表函数

-   length($list) - 列表长度。
-   nth($list, $n) - 获取列表中的第 n 个元素。
-   append($lists..., $separator) - 连接列表。
-   unquote($string) - 移除字符串两端的引号。
-   join($lists..., $separator) - 使用分隔符连接列表。
-   index($list, $value) - 查找列表中值的位置。
-   comma-separate($list) - 用逗号分隔列表。
-   space-separated($list) - 用空格分隔列表。
-   dash-separated($list) - 用短横线分隔列表。
-   hyphenate($list) - 用短横线分隔列表。
-   parenthesize($list) - 将列表括起来。

## 类型检查函数

-   type-of($value) - 检查值的类型。
-   unit($number)
