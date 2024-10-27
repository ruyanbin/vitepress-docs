# react 学习笔记
::: tip
`react`是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发和维护。它允许开发者以组件化的方式构建应用程序，从而提高代码的可维护性和复用性。React 的核心思想是“组件化”，即把 UI 分解成多个独立、可复用的组件，每个组件都有自己的状态和属性。

React 的主要特点包括：

虚拟 DOM：React 使用虚拟 DOM 来提高性能。虚拟 DOM 是一个轻量级的 JavaScript 对象，它代表了真实的 DOM 结构。当组件的状态发生变化时，React 会先在虚拟 DOM 上进行计算，然后通过对比新旧虚拟 DOM 的差异，计算出需要更新的真实 DOM，最后只更新这些变化的部分，而不是整个 DOM 树。

单向数据流：React 的数据流是单向的，即从父组件流向子组件。这种数据流使得组件之间的通信更加清晰和可预测。

JSX：JSX 是一种 JavaScript 的语法扩展，允许开发者以类似 HTML 的方式来编写组件。React 会将 JSX 转换为 JavaScript 对象，然后渲染成真实的 DOM。

Hooks：Hooks 是 React 16.8 引入的新特性，它允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。Hooks 提供了一种更简洁的方式来复用状态逻辑。

React Router：React Router 是 React 的官方路由库，用于实现单页面应用程序（SPA）的路由功能。

React 的生态系统非常庞大，包括许多第三方库和工具，如 Redux（用于状态管理）、React Native（用于开发原生移动应用）、Next.js（用于服务器端渲染和静态网站生成）等。这些工具和库共同构成了一个强大的开发环境，使得 React 成为构建现代 Web 应用程序的首选框架之一。
:::