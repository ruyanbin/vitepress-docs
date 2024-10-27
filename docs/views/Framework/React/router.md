# react-router-dom

## 安装

```
pnpm add react-router-dom
```

## 快速上手

```
import { BrowserRouter, Routes, Route } from'react-router-dom';
```

## 路由配置

```
// src/router/index.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutIndex from "../Layout/index";
import Error404 from "../components/Error/Error404";
import LazyImportComponent from "../components/utils/LazyImportComponent";
import Error403 from "../components/Error/Error403.tsx";
import Login from "../views/Login/index.tsx";
const routes = [
    { path: "/Login", element: <Login /> },
    { path: "/", element: <Navigate to={"/Home"} /> },
    { path: "*", element: <Navigate to={"/404"} /> },
    { path: "/404", element: <Error404 /> },
];
<!--异步 遍历 views 文件下的所有文件 -->
const modules = import.meta.glob("../views/**/*.tsx", {
    eager: true,
});
const layout = {
    element: <LayoutIndex />,
    children: [
        {
            path: "/403",
            element: <Error403></Error403>,
        },
        {
            path: "/404Page",
            element: <Error404></Error404>,
        },
    ],
};
<!-- 遍历文件 将文件添加 到路由 children 中 -->
Object.entries(modules).forEach(([key, value]) => {
    const path = key
        .replace("../views", "")
        .replace(".tsx", "")
        .replace("/index", "");
    console.log(path, "path");
    if (!path.includes("Login")) {
        layout.children.push({
            path: path,
            element: <LazyImportComponent lazyChildren={value.default} />,
        });
    }
});

routes.push(layout);
const router = createBrowserRouter(routes);

export default router;

```

`app.tsx中配置`

```
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App=()=>{
    return (
        <>
                  <RouterProvider router={router} />
        </>
    )
}

```

在使用位置 通过 `<Outlet>` 展示 和 `vue`中的`<router-view>` 类似

```
import { Outlet } from "react-router-dom";
<Outlet />
```