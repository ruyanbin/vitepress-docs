# css 常见面试题

## css 中隐藏元素的方法有哪些

-   1. disaplay:none;
       完全一处元素，使其不占任何空间，也不会在文档流中占据位置，元素及其所有字元素都不会显示

    ```
      .element{
          display:none;
    }
    ```

-   2. visibility:hidden;
       元素隐藏，但仍然占据空间，元素在文档流中仍然占据位置，元素及其所有字元素都不会显示

    ```
      .element{
          visibility:hidden;
        }

    ```

-   3. opacity:0;
       元素隐藏，但仍然占据空间，元素在文档流中仍然占据位置，元素及其所有字元素都会显示，但完全透明

    ```
      .element{
          opacity:0;
        }

    ```

-   4. position:absolute;
       将元素移出文档流，使其不占据空间，但仍然显示

    ```
      .element{
          position:absolute;
          left:-9999px;
        }

    ```

-   5. height:0;overflow:hidden;
       将元素的高度设为 0，并设置 overflow:hidden，使其内容不显示

    ```
      .element{
          height:0;
          overflow:hidden;
        }

    ```

-   6. clip-path: polygon(0 0, 0 0, 0 0, 0 0);
       将元素裁剪为 0，使其不显示

    ```
      .element{
          clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }

    ```

-   7. transform:scale(0);
       将元素缩放为 0，使其不显示

    ```
      .element{
          transform:scale(0);
        }

    ```

-   8. filter:blur(0);
       将元素模糊为 0，使其不显示

    ```
      .element{
          filter:blur(0);
        }

    ```

-   9. z-index:-1;
       将元素的 z-index 设为-1，使其在所有其他元素下方，使其不显示

    ```
      .element{
          z-index:-1;
        }

    ```

-   10. pointer-events:none;
        将元素的 pointer-events 设为 none，使其无法被点击

    ```
      .element{
          pointer-events:none;
        }

    ```

## css 中如何实现水平居中

-   1. text-align:center;
       将元素的 text-align 属性设为 center，使其内容水平居中

    ```
      .element{
          text-align:center;
        }

    ```

-   2. margin:0 auto;
       将元素的左右 margin 设为 auto，使其水平居中

    ```
      .element{
            margin:0 auto;
        }

    ```

-   3. transform:translateX(-50%);
       将元素的 transform 属性设为 translateX(-50%)，使其水平居中

    ```
    .element{
        transform:translateX(-50%);
      }

    ```

-   4. flexbox
       使用 flexbox 布局，将元素的 display 属性设为 flex，将 justify-content 属性设为 center，使其内容水平居中

    ```
      .element{
          display:flex;
          justify-content:center;
        }

    ```

-   5. grid
       使用 grid 布局，将元素的 display 属性设为 grid，将 justify-content 属性设为 center，使其内容水平居中

    ```
      .element{
          justify-content:center;
      }
    ```

## css 会阻塞 DOM 解析吗？

不会，css 是异步加载的，不会阻塞 DOM 解析。

## css 会阻塞 js 解析吗？

不会，css 是异步加载的，不会阻塞 js 解析。

## css 会阻塞 js 执行吗？

不会，css 是异步加载的，不会阻塞 js 执行。

## css 会阻塞页面渲染吗？

不会，css 是异步加载的，不会阻塞页面渲染。

## css 会阻塞页面加载吗？

不会，css 是异步加载的，不会阻塞页面加载。

## css 会阻塞页面显示吗？

不会，css 是异步加载的，不会阻塞页面显示。

## css 会阻塞页面加载吗？

不会，css 是异步加载的，不会阻塞页面加载。

## css 中的 display 属性有哪些值？

1. block：块级元素，独占一行，宽度为父元素的宽度，高度为内容高度。
2. inline：行内元素，在一行中显示，宽度为内容宽度，高度为内容高度。
3. inline-block：行内块元素，在一行中显示，宽度为内容宽度，高度为内容高度。
4. none：隐藏元素，不占空间，也不在文档流中。
5. flex: 元素变成弹性容器
6. grid: 元素变成网格容器
7. inline-flex: 元素变成行内弹性容器
8. inline-grid: 元素变成行内网格容器
9. table: 元素变成表格
10. inline-table: 元素变成行内表格
11. table-row: 元素变成表格行
12. table-cell: 元素变成表格单元格
13. table-caption: 元素变成表格标题
14. list-item: 元素变成列表项
15. table-row-group: 元素变成表格行组
16. table-header-group: 元素变成表格表头组

## css 属性计算 - calc

-   1. 基础运算 ：可以执行加（+）减（-）乘（\*）除（/）四则运算，并且可以执行括号运算。

```
.element{
   width: calc(100% - 200px);
}
```

-   2. 混合单位

    ```
    .element{
        width: calc(100px + 200px);
    }

    ```

## px 如何转换成 rem

：：：
px 是一个固定的单位，rem 是一个相对单位，rem 是相对于根元素的字体大小，所以 px 可以转换成 rem，rem 可以转换成 px。
：：：

-   1. 使用 css 预处理器
       scss
    ```
    @function px2rem($px) {
      @return $px / 16 * 1rem;
    }
    ```

less

```
@function px2rem($px) {
  @return $px / 16 * 1rem;
}
```

-   2. 使用 js

    ```
    function px2rem(px) {
      return px / 16 * 1rem;
    }
    ```

-   3. s 使用构建工具 （webpack）
       例如 postcss-pxtorem 插件,他可以在构建过程中自动将 px 转换成 rem

## 如何实现垂直居中

-   1. flexbox
       使用 flexbox 布局，将元素的 display 属性设为 flex，将 align-items 属性设为 center，使其内容垂直居中

    ```
      .element{
          display:flex;
          align-items:center;
        }

    ```

-   2. transform:translateY(-50%);
       将元素的 transform 属性设为 translateY(-50%)，使其内容垂直居中

    ```
      .element{
          transform:translateY(-50%);
        }

    ```

-   3. grid
       使用 grid 布局，将元素的 display 属性设为 grid，将 align-items 属性设为 center，使其内容垂直居中。
        ```
        .element{
        display:grid;
        align-items:center;
        }
        ```

## css 实现打字机效果

```
 <style>
    .typing {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      border-right: .15em solid orange;
      animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: orange }
    }
  </style>

```
