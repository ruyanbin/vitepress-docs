# react 状态管理

## 安装

```
pnpm add @reduxjs/toolkit react-redux
```

## 创建 store

```js

import { configureStore, combineReducers } from "@reduxjs/toolkit"; // 引入rtk的配置

import globalSlice from "./modules/globalSlice.ts";
// 中间件 获取日志
import { createLogger } from "redux-logger";
// 持久化配置
import { persistStore, persistReducer } from "redux-persist";
// 存储方式 session
import storageSession from "redux-persist/lib/storage/session";
const loggerMiddleware = createLogger();
// 配置持久化选项，
const persistConfig = {
    key: "root",
    storage: storageSession,
    // whitelist: ["globalSlice"],
};
// 定义root
const rootReducer = {
    globalSlice: globalSlice,
};
// 让所有的reducer都被持久化
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(rootReducer),
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production",
});

// 导出持久化配值
export const persistor = persistStore(store);
// 导出两个类型方便业务模块使用时候TS类型确定
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

```

## 创建 slice

```js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"",
    initialState:{},
    reducers:{},
})

export const {} = counterSlice.actions;
export default counterSlice.reducer;


```

## `main 配置`

```
import { store, persistor } from "./store";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/*全局提供核心 store*/}
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>,
);
```


## `hooks` 添加store

```
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "../store";

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## 使用
```
const dispatch = useAppDispatch();

const { count } = useAppSelector((state) => state.counter);

```