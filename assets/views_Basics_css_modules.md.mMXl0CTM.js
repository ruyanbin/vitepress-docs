import{_ as t,c as e,o as l,a5 as n}from"./chunks/framework.Dnp7cN4M.js";const p=JSON.parse('{"title":"CSS 常用 api","description":"","frontmatter":{},"headers":[],"relativePath":"views/Basics/css/modules.md","filePath":"views/Basics/css/modules.md","lastUpdated":1724510526000}'),r={name:"views/Basics/css/modules.md"},d=n('<h1 id="css-常用-api" tabindex="-1">CSS 常用 api <a class="header-anchor" href="#css-常用-api" aria-label="Permalink to &quot;CSS 常用 api&quot;">​</a></h1><h2 id="animations-动画" tabindex="-1">animations 动画 <a class="header-anchor" href="#animations-动画" aria-label="Permalink to &quot;animations 动画&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;">animation-name</td><td style="text-align:center;">指定要绑定到选择器的动画的名称。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">animation-duration</td><td style="text-align:center;">指定动画完成一个周期所花费的秒或毫秒。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">animation-timing-function</td><td style="text-align:center;">指定动画的速度曲线。</td><td style="text-align:center;">step-end(在每一步结束时，以“跳”形式显示动画) linear (默认值)ease(慢速开始，然后变快，然后慢速结束) ease-in(慢速开始) ease-out(慢速结束) ease-in-out(慢速开始和慢速结束) step-start(在每一步开始时，以“跳”形式显示动画)</td></tr><tr><td style="text-align:center;">animation-delay</td><td style="text-align:center;">指定动画何时开始。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">animation-iteration-count</td><td style="text-align:center;">指定动画被播放的次数 。</td><td style="text-align:center;">num 次数/ infinite 永远</td></tr><tr><td style="text-align:center;">animation-direction</td><td style="text-align:center;">指定动画是否在下一周期逆向地播放。</td><td style="text-align:center;">normal(默认值正常播放)reverse(反向播放)alternate(奇数次正向，偶数次反向)alternate-reverse(奇数次反向，偶数次正向)</td></tr><tr><td style="text-align:center;">animation-fill-mode</td><td style="text-align:center;">指定当动画不播放时（当动画完成时，当动画被暂停时，当动画被延迟时），动画元素的样式是应用在动画中的第一个，还是应用在动画中的最后一个，还是应用在动画中的第一个和最后一个。</td><td style="text-align:center;">none (默认值)forwards(动画结束后） backwards() both</td></tr><tr><td style="text-align:center;">animation</td><td style="text-align:center;">简写属性，用于设置动画。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">animation-play-state</td><td style="text-align:center;">指定动画是否正在运行或暂停。</td><td style="text-align:center;"></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>@keyframes slidein { form{} to{} }</code> 使用@keyframes 规则，你可以创建动画。 创建动画是通过逐步改变从一个 CSS 样式设定到另一个 <code>@keyframes animationname {keyframes-selector {css-styles;}}</code><code>animationname 必需的。定义animation的名称。</code><code>keyframes-selector 必需的。动画持续时间的百分比。 合法值： 0-100% from (和0%相同) to (和100%相同) 注意： 您可以用一个动画keyframes-selectors。</code></p><p><code>css-styles 必需的。一个或多个合法的CSS样式属性</code></p></div><h2 id="背景和边框" tabindex="-1">背景和边框 <a class="header-anchor" href="#背景和边框" aria-label="Permalink to &quot;背景和边框&quot;">​</a></h2><h2>background</h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;">background-color</td><td style="text-align:center;">设置背景颜色。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">background-image</td><td style="text-align:center;">设置背景图像。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">background-repeat</td><td style="text-align:center;">设置背景图像的重复方式。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">background-attachment</td><td style="text-align:center;">设置背景图像是否固定或者滚动。</td><td style="text-align:center;">scroll(默认值)背景图片随着页面滚动而滚动 ;fixed(背景图片固定) 背景不会随着页面滚动而滚动;local(背景图片在元素内滚动);initial(默认值);inherit(从父元素继承)</td></tr><tr><td style="text-align:center;">background-position</td><td style="text-align:center;">设置背景图像的起始位置。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">background-size</td><td style="text-align:center;">设置背景图像的尺寸。</td><td style="text-align:center;">length s 设置背景图像的尺寸。;percentage s 设置背景图像的尺寸。;auto s 设置背景图像的尺寸。;initial s 设置背景图像的尺寸。;inherit s 设置背景图像的尺寸。;cover 设置背景图像的尺寸。;contain 设置背景图像的尺寸。</td></tr><tr><td style="text-align:center;">background-origin</td><td style="text-align:center;">设置背景图像的定位区域。</td><td style="text-align:center;">padding-box(默认值) 背景图像的定位区域是元素的内容区;border-box 背景图像的定位区域是元素的边框区;initial 背景图像的定位区域是元素的内容区;</td></tr><tr><td style="text-align:center;">background-clip</td><td style="text-align:center;">设置背景图像的显示区域。</td><td style="text-align:center;">padding-box(默认值) 背景图像的显示区域是元素的内容区;border-box 背景图像的显示区域是元素的边框区;</td></tr><tr><td style="text-align:center;">background-blend-mode</td><td style="text-align:center;">设置背景图像的混合模式。</td><td style="text-align:center;">normal(默认值) 背景图像的混合模式是正常;multiply 背景图像的混合模式是相乘;screen 背景图像的</td></tr></tbody></table><h2>border</h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;">border-color</td><td style="text-align:center;">设置边框颜色。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-style</td><td style="text-align:center;">设置边框样式。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-width</td><td style="text-align:center;">设置边框宽度。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-radius</td><td style="text-align:center;">设置边框半径。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-image</td><td style="text-align:center;">设置边框图像。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-image-source</td><td style="text-align:center;">设置边框图像的源。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">border-image-slice</td><td style="text-align:center;">设置边框图像的裁剪。</td><td style="text-align:center;">number 图像的像素 %百分比图像的大小 fill 保留图像的中间部分</td></tr></tbody></table><h2 id="filter-滤镜-属性" tabindex="-1">filter(滤镜)属性 <a class="header-anchor" href="#filter-滤镜-属性" aria-label="Permalink to &quot;filter(滤镜)属性&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">filter</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">none</td><td style="text-align:center;">默认值，无滤镜。</td></tr><tr><td style="text-align:center;">blur(px)</td><td style="text-align:center;">模糊效果。</td></tr><tr><td style="text-align:center;">brightness(%)</td><td style="text-align:center;">亮度效果。</td></tr><tr><td style="text-align:center;">contrast(%)</td><td style="text-align:center;">对比度效果。</td></tr><tr><td style="text-align:center;">drop-shadow()</td><td style="text-align:center;">阴影效果。</td></tr><tr><td style="text-align:center;">grayscale(%)</td><td style="text-align:center;">灰度效果。</td></tr><tr><td style="text-align:center;">hue-rotate(deg)</td><td style="text-align:center;">色相旋转效果。</td></tr><tr><td style="text-align:center;">invert(%)</td><td style="text-align:center;">反转效果。</td></tr><tr><td style="text-align:center;">opacity(%)</td><td style="text-align:center;">透明度效果。</td></tr><tr><td style="text-align:center;">saturate(%)</td><td style="text-align:center;">饱和度效果。</td></tr><tr><td style="text-align:center;">sepia(%)</td><td style="text-align:center;">褐色效果。</td></tr><tr><td style="text-align:center;">url()</td><td style="text-align:center;">使用外部滤镜。</td></tr></tbody></table><h3 id="media-查询" tabindex="-1"><code>@media</code> 查询 <a class="header-anchor" href="#media-查询" aria-label="Permalink to &quot;`@media` 查询&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>@media not|only mediatype and (mediafeature and|or|not mediafeature) { CSS-Code; }</code></p></div><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">not</td><td style="text-align:center;">匹配所有不匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">only</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">mediatype</td><td style="text-align:center;">媒体类型，如：print、screen、speech、projection、handheld、braille、embossed、tty、tv、all。</td></tr><tr><td style="text-align:center;">mediafeature</td><td style="text-align:center;">媒体特性，如：width、height、device-width、device-height、aspect-ratio、device-aspect-ratio、color、color-index、min-color、max-color、min-color-index、max-color-index、monochrome、min-monochrome、max-monochrome、resolution、min-resolution、max-resolution、scan、grid、orientation、min-device-pixel-ratio、</td></tr><tr><td style="text-align:center;">and</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">or</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">all</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">aural</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">braille</td><td style="text-align:center;">匹配所有匹配指定媒体类型的查询。</td></tr><tr><td style="text-align:center;">print</td><td style="text-align:center;">用于打印机和打印预览。</td></tr><tr><td style="text-align:center;">screen</td><td style="text-align:center;">用于显示在屏幕上的内容。</td></tr><tr><td style="text-align:center;">speech</td><td style="text-align:center;">用于语音合成。</td></tr></tbody></table><h2 id="position-定位" tabindex="-1">position 定位 <a class="header-anchor" href="#position-定位" aria-label="Permalink to &quot;position 定位&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">position</td><td style="text-align:center;">定位类型。</td></tr><tr><td style="text-align:center;">static</td><td style="text-align:center;">默认值，元素没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 等属性）。</td></tr><tr><td style="text-align:center;">relative</td><td style="text-align:center;">相对定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。</td></tr><tr><td style="text-align:center;">absolute</td><td style="text-align:center;">绝对定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。</td></tr><tr><td style="text-align:center;">fixed</td><td style="text-align:center;">固定定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。</td></tr><tr><td style="text-align:center;">sticky</td><td style="text-align:center;">粘性定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。</td></tr><tr><td style="text-align:center;">inherit</td><td style="text-align:center;">从父元素继承。</td></tr></tbody></table><p>::: z-index: 值 指定元素堆叠顺序。值可以是整数。 :::</p><h2 id="overflow" tabindex="-1">overflow <a class="header-anchor" href="#overflow" aria-label="Permalink to &quot;overflow&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>overflow 是 CSS 中的一个属性，用于控制当内容超出其容器边界时的行为。这个属性对于管理页面布局和设计非常重要，特别是在处理固定尺寸的容器时。</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">auto</td><td style="text-align:center;">当内容溢出元素时，显示滚动条。</td></tr><tr><td style="text-align:center;">hidden</td><td style="text-align:center;">当内容溢出元素时，隐藏溢出部分。</td></tr><tr><td style="text-align:center;">scroll</td><td style="text-align:center;">当内容溢出元素时，显示滚动条。</td></tr><tr><td style="text-align:center;">visible</td><td style="text-align:center;">当内容溢出元素时，显示内容。</td></tr></tbody></table><h2 id="css3-新属性" tabindex="-1">css3 新属性 <a class="header-anchor" href="#css3-新属性" aria-label="Permalink to &quot;css3 新属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">语法</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">box-shadow</td><td style="text-align:center;">box-shadow: h-shadow(水平轴偏移量) v-shadow(垂直轴偏移量) blur(模糊距离) spread(阴影大小) color(颜色) inset(从外侧开始);</td><td style="text-align:center;">设置元素的阴影。</td></tr><tr><td style="text-align:center;">clip-path</td><td style="text-align:center;">clip-path: path</td><td style="text-align:center;">设置元素的裁剪路径。</td></tr><tr><td style="text-align:center;">clip-rule</td><td style="text-align:center;">clip-rule: nonzero</td><td style="text-align:center;">设置裁剪路径的填充规则。</td></tr><tr><td style="text-align:center;">color-interpolation</td><td style="text-align:center;">color-interpolation: auto</td><td style="text-align:center;">设置颜色插值模式。</td></tr><tr><td style="text-align:center;">color-interpolation-filters</td><td style="text-align:center;">color-interpolation-filters: auto</td><td style="text-align:center;">设置颜色插值过滤器。</td></tr><tr><td style="text-align:center;">color-rendering</td><td style="text-align:center;">color-rendering: auto</td><td style="text-align:center;">设置颜色渲染模式。</td></tr><tr><td style="text-align:center;">fill</td><td style="text-align:center;">fill: color</td><td style="text-align:center;">设置填充颜色。</td></tr><tr><td style="text-align:center;">fill-opacity</td><td style="text-align:center;">fill-opacity: value</td><td style="text-align:center;">设置填充透明度。</td></tr><tr><td style="text-align:center;">fill-rule</td><td style="text-align:center;">fill-rule: nonzero</td><td style="text-align:center;">设置填充规则。</td></tr><tr><td style="text-align:center;">flood-color</td><td style="text-align:center;">flood-color: color</td><td style="text-align:center;">设置 flood 颜色。</td></tr><tr><td style="text-align:center;">flood-opacity</td><td style="text-align:center;">flood-opacity: value</td><td style="text-align:center;">设置 flood 透明度。</td></tr><tr><td style="text-align:center;">image-rendering</td><td style="text-align:center;">image-rendering: auto</td><td style="text-align:center;">设置图像渲染模式。</td></tr><tr><td style="text-align:center;">lighting-color</td><td style="text-align:center;">lighting-color: color</td><td style="text-align:center;">设置光照颜色。</td></tr><tr><td style="text-align:center;">marker</td><td style="text-align:center;">marker: url</td><td style="text-align:center;">设置标记。</td></tr><tr><td style="text-align:center;">marker-end</td><td style="text-align:center;">marker-end: url</td><td style="text-align:center;">设置标记的结束。</td></tr><tr><td style="text-align:center;">marker-mid</td><td style="text-align:center;">marker-mid: url</td><td style="text-align:center;">设置标记的中间。</td></tr><tr><td style="text-align:center;">marker-start</td><td style="text-align:center;">marker-start: url</td><td style="text-align:center;">设置标记的开始。</td></tr><tr><td style="text-align:center;">shape-rendering</td><td style="text-align:center;">shape-rendering: auto</td><td style="text-align:center;">设置形状渲染模式。</td></tr><tr><td style="text-align:center;">stop-color</td><td style="text-align:center;">stop-color: color</td><td style="text-align:center;">设置停止颜色。</td></tr><tr><td style="text-align:center;">stop-opacity</td><td style="text-align:center;">stop-opacity: value</td><td style="text-align:center;">设置停止透明度。</td></tr><tr><td style="text-align:center;">stroke</td><td style="text-align:center;">stroke: color</td><td style="text-align:center;">设置边框颜色。</td></tr><tr><td style="text-align:center;">stroke-dasharray</td><td style="text-align:center;">stroke-dasharray: value</td><td style="text-align:center;">设置边框虚线。</td></tr><tr><td style="text-align:center;">stroke-dashoffset</td><td style="text-align:center;">stroke-dashoffset: value</td><td style="text-align:center;">设置边框虚线偏移。</td></tr><tr><td style="text-align:center;">stroke-linecap</td><td style="text-align:center;">stroke-linecap: butt</td><td style="text-align:center;">设置边框线端点样式。</td></tr><tr><td style="text-align:center;">stroke-linejoin</td><td style="text-align:center;">stroke-linejoin: miter</td><td style="text-align:center;">设置边框线连接样式。</td></tr><tr><td style="text-align:center;">stroke-miterlimit</td><td style="text-align:center;">stroke-miterlimit: value</td><td style="text-align:center;">设置边框线斜接长度。</td></tr><tr><td style="text-align:center;">stroke-opacity</td><td style="text-align:center;">stroke-opacity: value</td><td style="text-align:center;">设置边框透明度。</td></tr><tr><td style="text-align:center;">stroke-width</td><td style="text-align:center;">stroke-width: value</td><td style="text-align:center;">设置边框宽度。</td></tr><tr><td style="text-align:center;">text-rendering</td><td style="text-align:center;">text-rendering: auto</td><td style="text-align:center;">设置文本渲染模式。</td></tr><tr><td style="text-align:center;">viewport-fill</td><td style="text-align:center;">viewport-fill: color</td><td style="text-align:center;">设置视口填充颜色。</td></tr><tr><td style="text-align:center;">viewport-fill-opacity</td><td style="text-align:center;">viewport-fill-opacity: value</td><td style="text-align:center;">设置视口填充透明度。</td></tr><tr><td style="text-align:center;">writing-mode</td><td style="text-align:center;">writing-mode: horizontal-tb</td><td style="text-align:center;">设置文本方向。</td></tr><tr><td style="text-align:center;">clip</td><td style="text-align:center;">clip: rect(top, right, bottom, left)</td><td style="text-align:center;">设置元素的裁剪区域。</td></tr><tr><td style="text-align:center;">mask</td><td style="text-align:center;">mask: url</td><td style="text-align:center;">设置元素的遮罩。</td></tr></tbody></table><h2 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>resize 属性规定是否可由用户调整元素的尺寸。</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>注释：如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">none</td><td style="text-align:center;">不允许调整元素尺寸。</td></tr><tr><td style="text-align:left;">both</td><td style="text-align:center;">允许调整元素的宽度和高度。</td></tr><tr><td style="text-align:left;">horizontal</td><td style="text-align:center;">允许调整元素的宽度。</td></tr><tr><td style="text-align:left;">vertical</td><td style="text-align:center;">允许调整元素的高度。</td></tr></tbody></table>',26),a=[d];function i(s,c,o,g,y,x){return l(),e("div",null,a)}const b=t(r,[["render",i]]);export{p as __pageData,b as default};
