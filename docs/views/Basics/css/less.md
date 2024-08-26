# less

## 介绍

less 是一种 css 预处理器，它扩展了 css 的语法，增加了变量、Mixin、函数等特性，使得 css 更易于维护和扩展。

## 安装

```bash
npm install less less-loader --save-dev
```

## 使用

在 webpack 中使用 less，需要安装 less 和 less-loader。

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
};
```

## LESS 内建函数

LESS 提供了一些内建函数，可以用于处理颜色、字符串、数学等操作。

```less
// 颜色函数
@color: #ff0000;
@lighten-color: lighten(@color, 20%); // #ff3333
@darken-color: darken(@color, 20%); // #cc0000

// 字符串函数
@str: "hello world";
@length: length(@str); // 11
@uppercase: uppercase(@str); // "HELLO WORLD"
@lowercase: lowercase(@str); // "hello world"

// 数学函数
@num: 10;
@add: add(@num, 5); // 15
@subtract: subtract(@num, 5); // 5
@multiply: multiply(@num, 2); // 20
@divide: divide(@num, 2); // 5
```

## LESS 变量

LESS 允许在样式表中定义变量，并在需要的地方使用它们。

```less
@color: #ff0000;
@width: 100px;
@height: 50px;

.box {
    color: @color; // #ff0000
    width: @width; // 100px
    height: @height; // 50px
}
```

## LESS 混合(Mixin)

LESS 允许将一组样式定义为一个混合(Mixin)，并在需要的地方使用它们。

```less
.border-radius(@radius) {
    -webkit-border-radius: @radius;
    -moz-border-radius: @radius;
    border-radius: @radius;
}

.box {
    .border-radius(5px);
}
```

## LESS 内建函数

-   1.percentage(n)：将数字 n 转换为百分比字符串。
-   2.round(n)：将数字 n 四舍五入为整数。
-   3.ceil(n)：将数字 n 向上舍入为整数。
-   4.floor(n)：将数字 n 向下舍入为整数。
-   5.abs(n)：返回数字 n 的绝对值。
-   6.sqrt(n)：返回数字 n 的平方根。
-   7.sin(n)：返回数字 n 的正弦值。
-   8.cos(n)：返回数字 n 的余弦值。
-   9.tan(n)：返回数字 n 的正切值。
-   10.asin(n)：返回数字 n 的反正弦值。
-   11.acos(n)：返回数字 n 的反余弦值。
-   12.atan(n)：返回数字 n 的反正切值。
-   13.atan2(y, x)：返回数字 y/x 的反正切值。
-   14.pow(n, power)：返回数字 n 的 power 次方。
-   15.mod(n, m)：返回数字 n 除以 m 的余数。
-   16.min(numbers)：返回一组数字中的最小值。
-   17.max(numbers)：返回一组数字中的最大值。
-   18.clamp(min, n, max)：返回数字 n 被限制在 min 和 max 之间的值。
