# 项目创建

### 
```
pnpm create vite my-app --template react
````
::: tip
 一路回车 即可
::: 

### 目录
```

config // 配置文件
public // 静态资源
src // 源码
  assets // 静态资源
  Layout // 布局
  local // 国际化
  hooks // 钩子函数
  components // 组件
  views // 页面
  router // 路由
  store // 状态管理
  utils // 工具函数
  App.jsx // 入口文件
  main.jsx // 主文件
  index.css // 样式文件
  vite-env.d.ts // 类型文件

index.html // 首页
package.json // 包文件
pnpm-lock.yaml // 锁文件
README.md // 说明文件
tsconfig.json // 类型文件
vite.config.js // 配置文件

```

### `package.json`

```

{
    "name": "react-admin-vite",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "tsc -b && vite build",
        "lint": "eslint .",
        "preview": "vite preview",
        "prettier": "prettier --write ."
    },
    "dependencies": {
        "@iconify/json": "^2.2.262",
        "@iconify/react": "^5.0.2",
        "@reduxjs/toolkit": "^2.3.0",
        "ahooks": "^3.8.1",
        "alova": "^3.1.1",
        "antd": "^5.21.4",
        "dayjs": "^1.11.13",
        "i18next": "^23.16.3",
        "i18next-browser-languagedetector": "^8.0.0",
        "react": "^18.3.1",
        "react-activation": "^0.12.4",
        "react-dom": "^18.3.1",
        "react-i18next": "^15.1.0",
        "react-redux": "^9.1.2",
        "react-router-dom": "^6.27.0",
        "redux-logger": "^3.0.6",
        "redux-persist": "^6.0.0"
    },
    "devDependencies": {
        "@antv/g2plot": "^2.4.32",
        "@eslint/js": "^9.11.1",
        "@types/node": "^22.7.7",
        "@types/react": "^18.3.11",
        "@types/react-dom": "^18.3.1",
        "@types/redux-logger": "^3.0.13",
        "@vitejs/plugin-legacy": "^5.4.2",
        "@vitejs/plugin-react": "^4.3.2",
        "autoprefixer": "^10.4.20",
        "cssnano": "^7.0.6",
        "eslint": "^9.11.1",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-prettier": "^5.2.1",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.12",
        "globals": "^15.9.0",
        "postcss": "^8.4.47",
        "prettier": "^3.3.3",
        "sass": "^1.80.3",
        "typescript": "^5.5.3",
        "typescript-eslint": "^8.7.0",
        "unocss": "^0.63.4",
        "vite": "^5.4.8",
        "vite-plugin-inspect": "^0.8.7",
        "vite-plugin-mock": "^3.0.2",
        "vite-plugin-restart": "^0.4.1",
        "vite-plugin-svgr": "^4.2.0"
    }
}

```