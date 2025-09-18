import { Collapse } from "antd";
import { link } from "fs";

/*
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2024-08-16 19:16:02
 * @LastEditors: voanit
 * @LastEditTime: 2024-08-16 20:15:10
 */
export default {
    'Basics/Html/': [
        {
            text: '基础',
            link: 'Basics/Html/index'
        },
        {
            text: 'api.md',
            link: "Basics/Html/Api"
        },
    ],
    'Basics/css/': [
        {
            text: 'css基础',
            link: "Basics/css/index"
        },
        {
            text: '布局',
            link: "Basics/css/layout"
        },
        {
            text: "常用api",
            link: "Basics/css/modules"
        }, {
            text: "Houdini",
            link: "Basics/css/houdini"
        },
        {
            text: "scss",
            link: "Basics/css/scss"
        },
        {
            text: "less",
            link: "Basics/css/less"
        },
        {
            text: "面试题",
            link: "Basics/css/interview"
        },
    ],
    'Basics/js/': [
        {
            text: '基础',
            link: "Basics/js/index"
        },
        {
            text: "设计模式",
            link: "Basics/js/designPattern"
        },
        {
            text: "webApi",
            collapsed: true,
            items: [
                {
                    text: "介绍",
                    link: "Basics/js/webApi/index"
                },
                {
                    text: "MutationObserve",
                    link: "Basics/js/webApi/MutationObserver"
                },
                {
                    text: "PerformanceObserver",
                    link: "Basics/js/webApi/PerformanceObserver"
                },
                {
                    text: "IntersectionObserver",
                    link: "Basics/js/webApi/IntersectionObserver"
                },
                {
                    text: "ResizeObserver",
                    link: "Basics/js/webApi/ResizeObserver"
                }
            ]
        },

        {
            text: "面试题",
            collapsed: true,
            items: [
                {
                    text: "基础",
                    link: "Basics/js/interviewFiles/index"
                },
                {
                    text: "手写",
                    link: "Basics/js/interviewFiles/handwriting"
                }
            ]
        },
    ],
    'Basics/Typescript/': [
        {
            text: '基础',
            link: "Basics/Typescript/index"
        },
        {
            text: "基础类型",
            link: "Basics/Typescript/basicType"
        },
        {
            text: "api",
            link: "Basics/Typescript/api"
        },
    ],
    'advanced/Canvas/': [
        {
            text: 'canvas',
            link: "advanced/Canvas/index"
        },
        {
            text: "canvas动画",
            link: "advanced/Canvas/canvasAnimation"
        },
        {
            text: "canvas绘图",
            link: "advanced/Canvas/canvasDraw"
        },
    ],
    'Framework/React/': [
        {
            text: "介绍",
            link: "Framework/React/index"
        },
        {
            text: "基础",
            link: "Framework/React/basic"

        },
        {
            text: "路由",
            link: "Framework/React/router"
        },
        {
            text: "状态管理",
            link: "Framework/React/store"
        },
        {
            text: "api",
            link: "Framework/React/api"
        }
    ],
    'Framework/Vue/': [
        {
            text: "介绍",
            link: "Framework/Vue/index"
        },
        {
            text: "源码解读",
            section: true,
            Collapse: true,
            items: [
                {
                    text: 'reactive',
                    link: "Framework/Vue/sourceCode/reactivity/reactive"
                },
                {
                    text: 'effect',
                    link: "Framework/Vue/sourceCode/reactivity/effect"
                },
                {
                    text: 'ref',
                    link: "Framework/Vue/sourceCode/reactivity/ref"
                },
                {
                    text: 'computed',
                    link: "Framework/Vue/sourceCode/reactivity/computed"
                },
                {
                    text: 'watch',
                    link: "Framework/Vue/sourceCode/reactivity/watch"
                },
                {
                    text: 'watchEffect',
                    link: "Framework/Vue/sourceCode/reactivity/watchEffect"
                },



            ]

        },
        {
            text: "路由",
            link: "Framework/Vue/router"
        },
        {
            text: "状态管理",
            link: "Framework/Vue/store"
        }
    ],
    'python/': [
        {
            text: "介绍",
            link: 'python/introduce'
        },
        {
            text: "基础",
            link: 'python/basic'
        },
        {
            text: "方法",
            link: 'python/fun'
        },
        {
            text: "高级",
            link: 'python/advanced'
        },
        {
            text: "面向对象",
            link: 'python/OPP'
        }
    ]

}