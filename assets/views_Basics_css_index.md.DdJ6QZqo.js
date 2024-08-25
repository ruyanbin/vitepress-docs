import{_ as t,c as e,o as l,a5 as n}from"./chunks/framework.Dnp7cN4M.js";const h=JSON.parse('{"title":"css 基础知识","description":"","frontmatter":{"next":{"text":"css布局","link":"views/Basics/css/layout"}},"headers":[],"relativePath":"views/Basics/css/index.md","filePath":"views/Basics/css/index.md","lastUpdated":1724146089000}'),d={name:"views/Basics/css/index.md"},a=n(`<h1 id="css-基础知识" tabindex="-1">css 基础知识 <a class="header-anchor" href="#css-基础知识" aria-label="Permalink to &quot;css 基础知识&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CSS 是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式</p></div><h2 id="如何使用-css" tabindex="-1">如何使用 css <a class="header-anchor" href="#如何使用-css" aria-label="Permalink to &quot;如何使用 css&quot;">​</a></h2><ol><li>内联样式 直接在标签中添加 style 属性 例子</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;p style=&quot;color:red;&quot;&gt;我是一个段落&lt;/p&gt;</span></span></code></pre></div><ol start="2"><li>内部样式表 在 head 标签中添加 style 标签</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        p{</span></span>
<span class="line"><span>        color:red</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><ol start="3"><li>外部样式表</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;./css/style.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;/link&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><h2 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">选择器</th><th style="text-align:center;">描述</th><th style="text-align:center;">权重</th><th style="text-align:center;">例子</th></tr></thead><tbody><tr><td style="text-align:center;">元素选择器</td><td style="text-align:center;">选择器匹配所有指定元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>p { color: red; } </code></td></tr><tr><td style="text-align:center;">id 选择器</td><td style="text-align:center;">选择器匹配所有具有指定 id 的元素</td><td style="text-align:center;">100</td><td style="text-align:center;"><code>#para1 { color: red; }</code></td></tr><tr><td style="text-align:center;">类选择器</td><td style="text-align:center;">选择器匹配所有具有指定 class 的元素</td><td style="text-align:center;">10</td><td style="text-align:center;"><code>.center { color: red; }</code></td></tr><tr><td style="text-align:center;">属性选择器</td><td style="text-align:center;">选择器匹配所有具有指定属性的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>[title] { color: red; }</code></td></tr><tr><td style="text-align:center;">伪类选择器</td><td style="text-align:center;">选择器匹配所有具有指定伪类的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>a:hover { color: red; }</code></td></tr><tr><td style="text-align:center;">伪元素选择器</td><td style="text-align:center;">选择器匹配所有具有指定伪元素的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>p::first-letter { color: red; }</code></td></tr><tr><td style="text-align:center;">群组选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>p, div { color: red; }</code></td></tr><tr><td style="text-align:center;">嵌套选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>div p { color: red; }</code></td></tr><tr><td style="text-align:center;">子选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>div &gt; p { color: red; }</code></td></tr><tr><td style="text-align:center;">兄弟选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>div + p { color: red; }</code></td></tr><tr><td style="text-align:center;">父选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>div ~ p { color: red; }</code></td></tr><tr><td style="text-align:center;">通配选择器</td><td style="text-align:center;">选择器匹配所有元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>* { color: red; }</code></td></tr><tr><td style="text-align:center;">组合选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>div p { color: red; }</code></td></tr><tr><td style="text-align:center;">伪类选择器</td><td style="text-align:center;">选择器匹配所有具有指定伪类的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>a:hover { color: red; }</code></td></tr><tr><td style="text-align:center;">伪元素选择器</td><td style="text-align:center;">选择器匹配所有具有指定伪元素的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>p::first-letter { color: red; }</code></td></tr><tr><td style="text-align:center;">群组选择器</td><td style="text-align:center;">选择器匹配所有指定选择器的元素</td><td style="text-align:center;">1</td><td style="text-align:center;"><code>p, div { color: red; }</code></td></tr></tbody></table><h3 id="选择器的优先级" tabindex="-1">选择器的优先级 <a class="header-anchor" href="#选择器的优先级" aria-label="Permalink to &quot;选择器的优先级&quot;">​</a></h3><p>:::</p><ul><li>选择器中的的权重是按照从高到低的顺序排列的，如果两个选择器同时匹配到一个元素，那么权重高的选择器会覆盖权重低的选择器。权重相同的选择器，则最后出现的选择器会覆盖之前的选择器。</li><li>内联样式（style 属性）具有最高优先级。 id 选择器的优先级高于 class 选择器。 class 选择器的优先级高于元素选择器。 通配符选择器（*）和伪元素选择器（如 ::before, ::after）的优先级较低。</li><li>!important 优先级最高，无论选择器是什么，只要有 !important，都会覆盖其他选择器的样式。</li><li>浏览器默认样式的权重最低。 :::</li></ul><h3 id="单位" tabindex="-1">单位 <a class="header-anchor" href="#单位" aria-label="Permalink to &quot;单位&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">单位</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">px</td><td style="text-align:center;">像素，1px = 1/96 英寸</td></tr><tr><td style="text-align:center;">em</td><td style="text-align:center;">相对长度单位，相对于当前元素的字体大小，1em = 当前元素的字体大小</td></tr><tr><td style="text-align:center;">rem</td><td style="text-align:center;">相对长度单位，相对于根元素的字体大小，1rem = 根元素的字体大小</td></tr><tr><td style="text-align:center;">vw</td><td style="text-align:center;">视口宽度，1vw = 视口宽度的 1%</td></tr><tr><td style="text-align:center;">vh</td><td style="text-align:center;">视口高度，1vh = 视口高度的 1%</td></tr><tr><td style="text-align:center;">vmin</td><td style="text-align:center;">视口最小边，1vmin = 视口宽度或高度的 1%，取值较小的那个</td></tr><tr><td style="text-align:center;">vmax</td><td style="text-align:center;">视口最大边，1vmax = 视口宽度或高度的 1%，取值较大的那个</td></tr><tr><td style="text-align:center;">%</td><td style="text-align:center;">百分比，相对于父元素的宽度或高度</td></tr><tr><td style="text-align:center;">pt</td><td style="text-align:center;">点，1pt = 1/72 英寸</td></tr><tr><td style="text-align:center;">pc</td><td style="text-align:center;">磅，1pc = 12pt</td></tr></tbody></table><h3 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">颜色</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">#RRGGBB</td><td style="text-align:center;">十六进制颜色，RR（红色）、GG（绿色）、BB（蓝色）</td></tr><tr><td style="text-align:center;">rgb(r,g,b)</td><td style="text-align:center;">RGB 颜色，r（红色）、g（绿色）、b（蓝色）</td></tr><tr><td style="text-align:center;">rgba(r,g,b,a)</td><td style="text-align:center;">RGBA 颜色，r（红色）、g（绿色）、b（蓝色）、a（透明度）</td></tr><tr><td style="text-align:center;">hsl(h,s,l)</td><td style="text-align:center;">HSL 颜色，h（色相）、s（饱和度）、l（亮度）</td></tr><tr><td style="text-align:center;">hsla(h,s,l,a)</td><td style="text-align:center;">HSLA 颜色，h（色相）、s（饱和度）、l（亮度）、a（透明度）</td></tr><tr><td style="text-align:center;">hsv(h,s,v)</td><td style="text-align:center;">HSV 颜色，h（色相）、s（饱和度）、v（明度）</td></tr><tr><td style="text-align:center;">hsva(h,s,v,a)</td><td style="text-align:center;">HSVA 颜色，h（色相）、s（饱和度）、v（明度）、a（透明度）</td></tr></tbody></table><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">函数</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">url()</td><td style="text-align:center;">引用外部资源，如图片、音频、视频等</td></tr><tr><td style="text-align:center;">rgb()</td><td style="text-align:center;">创建一个 RGB 颜色</td></tr><tr><td style="text-align:center;">rgba()</td><td style="text-align:center;">创建一个 RGBA 颜色</td></tr><tr><td style="text-align:center;">hsl()</td><td style="text-align:center;">创建一个 HSL 颜色</td></tr><tr><td style="text-align:center;">hsla()</td><td style="text-align:center;">创建一个 HSLA 颜色</td></tr><tr><td style="text-align:center;">hsv()</td><td style="text-align:center;">创建一个 HSV 颜色</td></tr><tr><td style="text-align:center;">hsva()</td><td style="text-align:center;">创建一个 HSVA 颜色</td></tr><tr><td style="text-align:center;">linear-gradient()</td><td style="text-align:center;">创建一个线性渐变</td></tr><tr><td style="text-align:center;">radial-gradient()</td><td style="text-align:center;">创建一个径向渐变</td></tr><tr><td style="text-align:center;">repeating-linear-gradient()</td><td style="text-align:center;">创建一个重复的线性渐变</td></tr><tr><td style="text-align:center;">repeating-radial-gradient()</td><td style="text-align:center;">创建一个重复的径向渐变</td></tr><tr><td style="text-align:center;">calc()</td><td style="text-align:center;">计算一个表达式</td></tr><tr><td style="text-align:center;">var()</td><td style="text-align:center;">引用一个变量</td></tr><tr><td style="text-align:center;">attr()</td><td style="text-align:center;">引用一个属性</td></tr></tbody></table>`,21),r=[a];function s(c,i,g,o,x,y){return l(),e("div",null,r)}const b=t(d,[["render",s]]);export{h as __pageData,b as default};
