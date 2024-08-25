import{_ as t,c as e,o as l,a5 as r}from"./chunks/framework.Dnp7cN4M.js";const p=JSON.parse('{"title":"css 布局","description":"","frontmatter":{"prev":{"text":"基础","link":"views/Basics/css/index"},"next":{"text":"css-api","link":"views/Basics/css/modules"}},"headers":[],"relativePath":"views/Basics/css/layout.md","filePath":"views/Basics/css/layout.md","lastUpdated":1724146089000}'),n={name:"views/Basics/css/layout.md"},d=r('<h1 id="css-布局" tabindex="-1">css 布局 <a class="header-anchor" href="#css-布局" aria-label="Permalink to &quot;css 布局&quot;">​</a></h1><h2 id="正常布局留" tabindex="-1">正常布局留 <a class="header-anchor" href="#正常布局留" aria-label="Permalink to &quot;正常布局留&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在不对页面不进行任何布局控制时，浏览器默认的 html 布局方式</p></div><h3 id="以下布局技术会覆盖-默认的布局行文" tabindex="-1">以下布局技术会覆盖 默认的布局行文 <a class="header-anchor" href="#以下布局技术会覆盖-默认的布局行文" aria-label="Permalink to &quot;以下布局技术会覆盖 默认的布局行文&quot;">​</a></h3><ul><li>display 属性-标准的 value,比如 block，inline 或者 inline-block 元素在正常布局刘正</li><li>float 诸如 left 能够让块级元素互相并排成一行</li><li>position 允许精确设置盒子中的何止位置 正常布局流中 默认为 static</li><li>表格布局 可以用在非表格内容上 可以使用 display:table 和相关属性</li></ul><h2 id="弹性布局" tabindex="-1">弹性布局 <a class="header-anchor" href="#弹性布局" aria-label="Permalink to &quot;弹性布局&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>弹性布局是一种灵活的布局方式，它允许元素在容器中以弹性的方式伸缩，并自动分配剩余空间。</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">display:flex</td><td style="text-align:center;">设置弹性布局的容器。</td></tr><tr><td style="text-align:center;">flex-direction</td><td style="text-align:center;">设置弹性布局的子元素的排列方向,column, row 反向 row-reverse,column-reverse 反向排列</td></tr><tr><td style="text-align:center;">flex-wrap</td><td style="text-align:center;">设置弹性布局的子元素是否换行。 Wrap,换行 nowrap,禁止换行 wrap-reverse</td></tr><tr><td style="text-align:center;">justify-content</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的对齐方式。 flex-start,flex-end,center,space-between,space-around,space-evenly</td></tr><tr><td style="text-align:center;">align-items</td><td style="text-align:center;">设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,baseline</td></tr><tr><td style="text-align:center;">align-content</td><td style="text-align:center;">设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,space-between,space-around,space-evenly</td></tr><tr><td style="text-align:center;">align-self</td><td style="text-align:center;">设置弹性布局的子元素在交叉轴上的对齐方式。 flex-start,flex-end,center,stretch,baseline</td></tr><tr><td style="text-align:center;">flex-grow</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的扩展比例。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">flex-shrink</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的收缩比例。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">flex-basis</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的基础大小。 auto,0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">order</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的排序顺序。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">flex</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的扩展比例，收缩比例，基础大小，排序顺序。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">gap</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">row-gap</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">column-gap</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的间距。 0,1,2,3,4,5,6,7,8,9,10</td></tr><tr><td style="text-align:center;">flex-flow</td><td style="text-align:center;">设置弹性布局的子元素在主轴上的方向和方向。 row,row-reverse,column,column-reverse</td></tr></tbody></table><h2 id="网格布局" tabindex="-1">网格布局 <a class="header-anchor" href="#网格布局" aria-label="Permalink to &quot;网格布局&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>网格布局是一种二维布局方式，它允许元素在容器中以网格的形式排列，并自动分配剩余空间。</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">display:grid</td><td style="text-align:center;">设置网格布局的容器。</td></tr><tr><td style="text-align:center;">grid-template-columns</td><td style="text-align:center;">设置网格布局的列的数量和宽度。</td></tr><tr><td style="text-align:center;">grid-template-rows</td><td style="text-align:center;">设置网格布局的行的数量和宽度。</td></tr><tr><td style="text-align:center;">grid-template-areas</td><td style="text-align:center;">设置网格布局的布局区域。</td></tr><tr><td style="text-align:center;">grid-template</td><td style="text-align:center;">设置网格布局的列的数量和宽度，行的数量和宽度，以及布局区域。</td></tr><tr><td style="text-align:center;">grid-column</td><td style="text-align:center;">设置元素的列位置。</td></tr><tr><td style="text-align:center;">grid-row</td><td style="text-align:center;">设置元素的行位置。</td></tr><tr><td style="text-align:center;">grid-area</td><td style="text-align:center;">设置元素的列位置，行位置，列数量，行数量。</td></tr><tr><td style="text-align:center;">grid-column-start</td><td style="text-align:center;">设置元素的列位置。</td></tr><tr><td style="text-align:center;">grid-column-end</td><td style="text-align:center;">设置元素的列位置。</td></tr><tr><td style="text-align:center;">grid-row-start</td><td style="text-align:center;">设置元素的行位置。</td></tr><tr><td style="text-align:center;">grid-row-end</td><td style="text-align:center;">设置元素的行位置。</td></tr><tr><td style="text-align:center;">grid-auto-flow</td><td style="text-align:center;">设置网格布局的子元素如何自动放置。</td></tr><tr><td style="text-align:center;">grid-auto-columns</td><td style="text-align:center;">设置网格布局的子元素在列上的默认大小。</td></tr><tr><td style="text-align:center;">grid-auto-rows</td><td style="text-align:center;">设置网格布局的子元素在行上的默认大小。</td></tr><tr><td style="text-align:center;">grid-gap</td><td style="text-align:center;">设置网格布局的子元素在主轴上的间距。</td></tr><tr><td style="text-align:center;">grid-row-gap</td><td style="text-align:center;">设置网格布局的子元素在主轴上的间距。</td></tr><tr><td style="text-align:center;">grid-column-gap</td><td style="text-align:center;">设置网格布局的子元素在主轴上的间距。</td></tr><tr><td style="text-align:center;">grid</td><td style="text-align:center;">设置网格布局的列的数量和宽度，行的数量和宽度，以及布局区域。</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>fr 单位是一个相对单位，它表示一个占据剩余空间的比例。</li><li>repat(n, size) 函数可以重复一个值 n 次，并指定每个值的大小。</li><li>minmax() 函数可以限制一个范围的最小值和最大值。</li><li>auto-fill 和 auto-fit 函数可以自动填充或填充，以适应容器的尺寸。 :::</li></ul><h2 id="多列布局" tabindex="-1">多列布局 <a class="header-anchor" href="#多列布局" aria-label="Permalink to &quot;多列布局&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>多列布局是一种多列布局方式，它允许元素在容器中以多列的形式排列，并自动分配剩余空间。</p></div></div><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">column-count</td><td style="text-align:center;">设置多列布局的列的数量。</td></tr><tr><td style="text-align:center;">column-width</td><td style="text-align:center;">设置多列布局的列的宽度。</td></tr><tr><td style="text-align:center;">column-gap</td><td style="text-align:center;">设置多列布局的列之间的间距。</td></tr><tr><td style="text-align:center;">column-rule</td><td style="text-align:center;">设置多列布局的列的边框。</td></tr><tr><td style="text-align:center;">column-span</td><td style="text-align:center;">设置多列布局的列的跨度。</td></tr><tr><td style="text-align:center;">column-fill</td><td style="text-align:center;">设置多列布局的列的填充方式。</td></tr><tr><td style="text-align:center;">column-rule-width</td><td style="text-align:center;">设置多列布局的列的边框宽度。</td></tr><tr><td style="text-align:center;">column-rule-style</td><td style="text-align:center;">设置多列布局的列的边框样式。</td></tr><tr><td style="text-align:center;">column-rule-color</td><td style="text-align:center;">设置多列布局的列的边框颜色。</td></tr><tr><td style="text-align:center;">break-before</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">break-inside</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">page-break-inside</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">page-break-after</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">page-break-before</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">column-break-before</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">column-break-inside</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr><tr><td style="text-align:center;">column-break-after</td><td style="text-align:center;">设置多列布局的列的断开方式。</td></tr></tbody></table>',13),a=[d];function s(i,c,g,x,o,y){return l(),e("div",null,a)}const h=t(n,[["render",s]]);export{p as __pageData,h as default};
