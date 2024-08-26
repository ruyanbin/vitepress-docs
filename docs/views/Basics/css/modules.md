# CSS 常用 api

## animations 动画

|           属性            |                                                                                    描述                                                                                    |                                                                                                           值                                                                                                           |
| :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      animation-name       |                                                                      指定要绑定到选择器的动画的名称。                                                                      |                                                                                                                                                                                                                        |
|    animation-duration     |                                                                   指定动画完成一个周期所花费的秒或毫秒。                                                                   |                                                                                                                                                                                                                        |
| animation-timing-function |                                                                            指定动画的速度曲线。                                                                            | step-end(在每一步结束时，以“跳”形式显示动画) linear (默认值)ease(慢速开始，然后变快，然后慢速结束) ease-in(慢速开始) ease-out(慢速结束) ease-in-out(慢速开始和慢速结束) step-start(在每一步开始时，以“跳”形式显示动画) |
|      animation-delay      |                                                                             指定动画何时开始。                                                                             |
| animation-iteration-count |                                                                          指定动画被播放的次数 。                                                                           |                                                                                                num 次数/ infinite 永远                                                                                                 |
|    animation-direction    |                                                                     指定动画是否在下一周期逆向地播放。                                                                     |                                                   normal(默认值正常播放)reverse(反向播放)alternate(奇数次正向，偶数次反向)alternate-reverse(奇数次反向，偶数次正向)                                                    |
|    animation-fill-mode    | 指定当动画不播放时（当动画完成时，当动画被暂停时，当动画被延迟时），动画元素的样式是应用在动画中的第一个，还是应用在动画中的最后一个，还是应用在动画中的第一个和最后一个。 |                                                                                  none (默认值)forwards(动画结束后） backwards() both                                                                                   |
|         animation         |                                                                          简写属性，用于设置动画。                                                                          |                                                                                                                                                                                                                        |
|   animation-play-state    |                                                                        指定动画是否正在运行或暂停。                                                                        |                                                                                                                                                                                                                        |

::: info
`@keyframes slidein { form{} to{} }` 使用@keyframes 规则，你可以创建动画。 创建动画是通过逐步改变从一个 CSS 样式设定到另一个
`@keyframes animationname {keyframes-selector {css-styles;}}`
`animationname	必需的。定义animation的名称。`
`keyframes-selector	必需的。动画持续时间的百分比。 合法值： 0-100%
from (和0%相同)
to (和100%相同)
注意： 您可以用一个动画keyframes-selectors。`

`css-styles	必需的。一个或多个合法的CSS样式属性`
:::

## 背景和边框

<h2>background</h2>

|         属性          |              描述              |                                                                                                        值                                                                                                         |
| :-------------------: | :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   background-color    |         设置背景颜色。         |                                                                                                                                                                                                                   |
|   background-image    |         设置背景图像。         |                                                                                                                                                                                                                   |
|   background-repeat   |    设置背景图像的重复方式。    |                                                                                                                                                                                                                   |
| background-attachment | 设置背景图像是否固定或者滚动。 |                            scroll(默认值)背景图片随着页面滚动而滚动 ;fixed(背景图片固定) 背景不会随着页面滚动而滚动;local(背景图片在元素内滚动);initial(默认值);inherit(从父元素继承)                             |
|  background-position  |    设置背景图像的起始位置。    |                                                                                                                                                                                                                   |
|    background-size    |      设置背景图像的尺寸。      | length s 设置背景图像的尺寸。;percentage s 设置背景图像的尺寸。;auto s 设置背景图像的尺寸。;initial s 设置背景图像的尺寸。;inherit s 设置背景图像的尺寸。;cover 设置背景图像的尺寸。;contain 设置背景图像的尺寸。 |
|   background-origin   |    设置背景图像的定位区域。    |                                    padding-box(默认值) 背景图像的定位区域是元素的内容区;border-box 背景图像的定位区域是元素的边框区;initial 背景图像的定位区域是元素的内容区;                                     |
|    background-clip    |    设置背景图像的显示区域。    |                                                         padding-box(默认值) 背景图像的显示区域是元素的内容区;border-box 背景图像的显示区域是元素的边框区;                                                         |
| background-blend-mode |    设置背景图像的混合模式。    |                                                            normal(默认值) 背景图像的混合模式是正常;multiply 背景图像的混合模式是相乘;screen 背景图像的                                                            |

<h2>border</h2>

|        属性         |         描述         |                             值                              |
| :-----------------: | :------------------: | :---------------------------------------------------------: |
|    border-color     |    设置边框颜色。    |                                                             |
|    border-style     |    设置边框样式。    |                                                             |
|    border-width     |    设置边框宽度。    |                                                             |
|    border-radius    |    设置边框半径。    |                                                             |
|    border-image     |    设置边框图像。    |                                                             |
| border-image-source |  设置边框图像的源。  |                                                             |
| border-image-slice  | 设置边框图像的裁剪。 | number 图像的像素 %百分比图像的大小 fill 保留图像的中间部分 |

## filter(滤镜)属性

::: tip
filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
:::

|     filter      |       描述       |
| :-------------: | :--------------: |
|      none       | 默认值，无滤镜。 |
|    blur(px)     |    模糊效果。    |
|  brightness(%)  |    亮度效果。    |
|   contrast(%)   |   对比度效果。   |
|  drop-shadow()  |    阴影效果。    |
|  grayscale(%)   |    灰度效果。    |
| hue-rotate(deg) |  色相旋转效果。  |
|    invert(%)    |    反转效果。    |
|   opacity(%)    |   透明度效果。   |
|   saturate(%)   |   饱和度效果。   |
|    sepia(%)     |    褐色效果。    |
|      url()      |  使用外部滤镜。  |

### `@media` 查询

::: tip
`@media not|only mediatype and (mediafeature and|or|not mediafeature) {
CSS-Code;
}`
:::

|     属性     |                                                                                                                                                        描述                                                                                                                                                        |
| :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     not      |                                                                                                                                         匹配所有不匹配指定媒体类型的查询。                                                                                                                                         |
|     only     |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|  mediatype   |                                                                                                            媒体类型，如：print、screen、speech、projection、handheld、braille、embossed、tty、tv、all。                                                                                                            |
| mediafeature | 媒体特性，如：width、height、device-width、device-height、aspect-ratio、device-aspect-ratio、color、color-index、min-color、max-color、min-color-index、max-color-index、monochrome、min-monochrome、max-monochrome、resolution、min-resolution、max-resolution、scan、grid、orientation、min-device-pixel-ratio、 |
|     and      |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|      or      |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|     all      |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|    aural     |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|   braille    |                                                                                                                                          匹配所有匹配指定媒体类型的查询。                                                                                                                                          |
|    print     |                                                                                                                                               用于打印机和打印预览。                                                                                                                                               |
|    screen    |                                                                                                                                              用于显示在屏幕上的内容。                                                                                                                                              |
|    speech    |                                                                                                                                                   用于语音合成。                                                                                                                                                   |

## position 定位

|   属性   |                                                 描述                                                 |
| :------: | :--------------------------------------------------------------------------------------------------: |
| position |                                              定位类型。                                              |
|  static  |         默认值，元素没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 等属性）。         |
| relative | 相对定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。 |
| absolute | 绝对定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。 |
|  fixed   | 固定定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。 |
|  sticky  | 粘性定位。元素在正常位置显示，但根据 top, right, bottom, left 的值进行偏移。偏移的属性值可以是负值。 |
| inherit  |                                            从父元素继承。                                            |

:::
z-index: 值 指定元素堆叠顺序。值可以是整数。
:::

## overflow

::: tip
overflow 是 CSS 中的一个属性，用于控制当内容超出其容器边界时的行为。这个属性对于管理页面布局和设计非常重要，特别是在处理固定尺寸的容器时。
:::

|  属性   |               描述               |
| :-----: | :------------------------------: |
|  auto   |  当内容溢出元素时，显示滚动条。  |
| hidden  | 当内容溢出元素时，隐藏溢出部分。 |
| scroll  |  当内容溢出元素时，显示滚动条。  |
| visible |   当内容溢出元素时，显示内容。   |

## css3 新属性

|            属性             |                                                           语法                                                           |           描述           |
| :-------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------: |
|         box-shadow          | box-shadow: h-shadow(水平轴偏移量) v-shadow(垂直轴偏移量) blur(模糊距离) spread(阴影大小) color(颜色) inset(从外侧开始); |     设置元素的阴影。     |
|          clip-path          |                                                     clip-path: path                                                      |   设置元素的裁剪路径。   |
|          clip-rule          |                                                    clip-rule: nonzero                                                    | 设置裁剪路径的填充规则。 |
|     color-interpolation     |                                                color-interpolation: auto                                                 |    设置颜色插值模式。    |
| color-interpolation-filters |                                            color-interpolation-filters: auto                                             |   设置颜色插值过滤器。   |
|       color-rendering       |                                                  color-rendering: auto                                                   |    设置颜色渲染模式。    |
|            fill             |                                                       fill: color                                                        |      设置填充颜色。      |
|        fill-opacity         |                                                   fill-opacity: value                                                    |     设置填充透明度。     |
|          fill-rule          |                                                    fill-rule: nonzero                                                    |      设置填充规则。      |
|         flood-color         |                                                    flood-color: color                                                    |    设置 flood 颜色。     |
|        flood-opacity        |                                                   flood-opacity: value                                                   |   设置 flood 透明度。    |
|       image-rendering       |                                                  image-rendering: auto                                                   |    设置图像渲染模式。    |
|       lighting-color        |                                                  lighting-color: color                                                   |      设置光照颜色。      |
|           marker            |                                                       marker: url                                                        |        设置标记。        |
|         marker-end          |                                                     marker-end: url                                                      |     设置标记的结束。     |
|         marker-mid          |                                                     marker-mid: url                                                      |     设置标记的中间。     |
|        marker-start         |                                                    marker-start: url                                                     |     设置标记的开始。     |
|       shape-rendering       |                                                  shape-rendering: auto                                                   |    设置形状渲染模式。    |
|         stop-color          |                                                    stop-color: color                                                     |      设置停止颜色。      |
|        stop-opacity         |                                                   stop-opacity: value                                                    |     设置停止透明度。     |
|           stroke            |                                                      stroke: color                                                       |      设置边框颜色。      |
|      stroke-dasharray       |                                                 stroke-dasharray: value                                                  |      设置边框虚线。      |
|      stroke-dashoffset      |                                                 stroke-dashoffset: value                                                 |    设置边框虚线偏移。    |
|       stroke-linecap        |                                                   stroke-linecap: butt                                                   |   设置边框线端点样式。   |
|       stroke-linejoin       |                                                  stroke-linejoin: miter                                                  |   设置边框线连接样式。   |
|      stroke-miterlimit      |                                                 stroke-miterlimit: value                                                 |   设置边框线斜接长度。   |
|       stroke-opacity        |                                                  stroke-opacity: value                                                   |     设置边框透明度。     |
|        stroke-width         |                                                   stroke-width: value                                                    |      设置边框宽度。      |
|       text-rendering        |                                                   text-rendering: auto                                                   |    设置文本渲染模式。    |
|        viewport-fill        |                                                   viewport-fill: color                                                   |    设置视口填充颜色。    |
|    viewport-fill-opacity    |                                               viewport-fill-opacity: value                                               |   设置视口填充透明度。   |
|        writing-mode         |                                               writing-mode: horizontal-tb                                                |      设置文本方向。      |
|            clip             |                                           clip: rect(top, right, bottom, left)                                           |   设置元素的裁剪区域。   |
|            mask             |                                                        mask: url                                                         |     设置元素的遮罩。     |

## resize

```
resize 属性规定是否可由用户调整元素的尺寸。

注释：如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。

```

|属性|描述|
|:--|:--:|
|none|不允许调整元素尺寸。|
|both|允许调整元素的宽度和高度。|
|horizontal|允许调整元素的宽度。|
|vertical|允许调整元素的高度。|