---
prev:
    text: "基础"
    link: "views/Basics/css/index"

next:
    text: "css-api"
    link: "views/Basics/css/modules"
---

# css 布局

## 正常布局留

::: tip
在不对页面不进行任何布局控制时，浏览器默认的 html 布局方式
:::

### 以下布局技术会覆盖 默认的布局行文

-   display 属性-标准的 value,比如 block，inline 或者 inline-block 元素在正常布局刘正
-   float 诸如 left 能够让块级元素互相并排成一行
-   position 允许精确设置盒子中的何止位置 正常布局流中 默认为 static
-   表格布局 可以用在非表格内容上 可以使用 display:table 和相关属性

## 弹性布局

::: tip
弹性布局是一种灵活的布局方式，它允许元素在容器中以弹性的方式伸缩，并自动分配剩余空间。
:::

|      属性       |                                                         描述                                                          |
| :-------------: | :-------------------------------------------------------------------------------------------------------------------: |
|  display:flex   |                                                 设置弹性布局的容器。                                                  |
| flex-direction  |                  设置弹性布局的子元素的排列方向,column, row 反向 row-reverse,column-reverse 反向排列                  |
|    flex-wrap    |                         设置弹性布局的子元素是否换行。 Wrap,换行 nowrap,禁止换行 wrap-reverse                         |
| justify-content |      设置弹性布局的子元素在主轴上的对齐方式。 flex-start,flex-end,center,space-between,space-around,space-evenly      |
|   align-items   |                设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,baseline                 |
|  align-content  | 设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,space-between,space-around,space-evenly |
|   align-self    |                设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,baseline                 |
|    flex-grow    |                            设置弹性布局的子元素在主轴上的扩展比例。 0,1,2,3,4,5,6,7,8,9,10                            |
|   flex-shrink   |                            设置弹性布局的子元素在主轴上的收缩比例。 0,1,2,3,4,5,6,7,8,9,10                            |
|   flex-basis    |                         设置弹性布局的子元素在主轴上的基础大小。 auto,0,1,2,3,4,5,6,7,8,9,10                          |
|      order      |                            设置弹性布局的子元素在主轴上的排序顺序。 0,1,2,3,4,5,6,7,8,9,10                            |
|      flex       |             设置弹性布局的子元素在主轴上的扩展比例，收缩比例，基础大小，排序顺序。 0,1,2,3,4,5,6,7,8,9,10             |
|       gap       |                              设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10                              |
|     row-gap     |                              设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10                              |
|   column-gap    |                              设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10                              |
|    flex-flow    |                   设置弹性布局的子元素在主轴上的方向和方向。 row,row-reverse,column,column-reverse                    |

## 网格布局

::: tip
网格布局是一种二维布局方式，它允许元素在容器中以网格的形式排列，并自动分配剩余空间。
:::

|         属性          |                             描述                             |
| :-------------------: | :----------------------------------------------------------: |
|     display:grid      |                     设置网格布局的容器。                     |
| grid-template-columns |                设置网格布局的列的数量和宽度。                |
|  grid-template-rows   |                设置网格布局的行的数量和宽度。                |
|  grid-template-areas  |                   设置网格布局的布局区域。                   |
|     grid-template     | 设置网格布局的列的数量和宽度，行的数量和宽度，以及布局区域。 |
|      grid-column      |                      设置元素的列位置。                      |
|       grid-row        |                      设置元素的行位置。                      |
|       grid-area       |          设置元素的列位置，行位置，列数量，行数量。          |
|   grid-column-start   |                      设置元素的列位置。                      |
|    grid-column-end    |                      设置元素的列位置。                      |
|    grid-row-start     |                      设置元素的行位置。                      |
|     grid-row-end      |                      设置元素的行位置。                      |
|    grid-auto-flow     |              设置网格布局的子元素如何自动放置。              |
|   grid-auto-columns   |            设置网格布局的子元素在列上的默认大小。            |
|    grid-auto-rows     |            设置网格布局的子元素在行上的默认大小。            |
|       grid-gap        |             设置网格布局的子元素在主轴上的间距。             |
|     grid-row-gap      |             设置网格布局的子元素在主轴上的间距。             |
|    grid-column-gap    |             设置网格布局的子元素在主轴上的间距。             |
|         grid          | 设置网格布局的列的数量和宽度，行的数量和宽度，以及布局区域。 |

::: tip

-   fr 单位是一个相对单位，它表示一个占据剩余空间的比例。
-   repat(n, size) 函数可以重复一个值 n 次，并指定每个值的大小。
-   minmax() 函数可以限制一个范围的最小值和最大值。
-   auto-fill 和 auto-fit 函数可以自动填充或填充，以适应容器的尺寸。
    :::

## 多列布局

::: tip
多列布局是一种多列布局方式，它允许元素在容器中以多列的形式排列，并自动分配剩余空间。
:::

|        属性         |             描述             |
| :-----------------: | :--------------------------: |
|    column-count     |   设置多列布局的列的数量。   |
|    column-width     |   设置多列布局的列的宽度。   |
|     column-gap      | 设置多列布局的列之间的间距。 |
|     column-rule     |   设置多列布局的列的边框。   |
|     column-span     |   设置多列布局的列的跨度。   |
|     column-fill     | 设置多列布局的列的填充方式。 |
|  column-rule-width  | 设置多列布局的列的边框宽度。 |
|  column-rule-style  | 设置多列布局的列的边框样式。 |
|  column-rule-color  | 设置多列布局的列的边框颜色。 |
|    break-before     | 设置多列布局的列的断开方式。 |
|    break-inside     | 设置多列布局的列的断开方式。 |
|  page-break-inside  | 设置多列布局的列的断开方式。 |
|  page-break-after   | 设置多列布局的列的断开方式。 |
|  page-break-before  | 设置多列布局的列的断开方式。 |
| column-break-before | 设置多列布局的列的断开方式。 |
| column-break-inside | 设置多列布局的列的断开方式。 |
| column-break-after  | 设置多列布局的列的断开方式。 |
