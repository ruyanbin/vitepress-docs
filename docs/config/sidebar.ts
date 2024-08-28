/*
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2024-08-16 19:16:02
 * @LastEditors: voanit
 * @LastEditTime: 2024-08-16 20:15:10
 */
export default {
    'views/Basics/Html/': [
        {
            text: '基础',
            link: 'views/Basics/Html/index'
        },
        {
            text: 'api',
            link: "views/Basics/Html/Api"
        },
    ],
    'views/Basics/css/': [
        {
            text: 'css基础',
            link: "views/Basics/css/index"
        },
        {
            text: '布局',
            link: "views/Basics/css/layout"
        },
        {
            text: "常用api",
            link: "views/Basics/css/modules"
        },
        {
            text: "scss",
            link: "views/Basics/css/scss"
        },
        {
            text: "less",
            link: "views/Basics/css/less"
        },
        {
            text: "面试题",
            link: "views/Basics/css/interview"
        },
    ],
    'views/Basics/js/': [
        {
            text: '基础',
            link: "views/Basics/js/index"
        },
        {
            text: "设计模式",
            link: "views/Basics/js/designPattern"
        },
        {
            text: "webApi",
            collapsed: true,
            items: [
                {
                    text: "介绍",
                    link: "views/Basics/js/webApi/index"
                },
                {
                    text: "MutationObserve",
                    link: "views/Basics/js/webApi/MutationObserver"
                },
                {
                    text: "PerformanceObserver",
                    link: "views/Basics/js/webApi/PerformanceObserver"
                },
                {
                    text: "IntersectionObserver",
                    link: "views/Basics/js/webApi/IntersectionObserver"
                },
                {
                    text: "ResizeObserver",
                    link: "views/Basics/js/webApi/ResizeObserver"
                }
            ]
        },

        {
            text: "面试题",
            collapsed: true,
            items:[
                {
                    text: "基础",
                    link: "views/Basics/js/interviewFiles/index"
                },
                {
                    text: "手写",
                    link: "views/Basics/js/interviewFiles/handwriting"
                }
            ]
        },
    ],

}