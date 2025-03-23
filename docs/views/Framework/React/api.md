## api

### forwardRef
::: tip
描述 `forwardRef` 是一个高阶组件，用于将 ref 转发到组件的子组件上。
:::
语法
```
forwardRef(fn: ForwardRefFn): ForwardRefFn
type ForwardRefFn = (props: any, ref: any) => ReactElement
```


### useRef

:::tip
`useRef` 是一个 Hook，用于创建一个可变的 ref 对象。ref 对象可以持有一个任意值，并且在整个组件的生命周期内保持不变。
:::
```
useRef<T>(initialValue: T): MutableRefObject<T>
```

### useImperativeHandle

::: tip
描述 `useImperativeHandle` 是一个 Hook，用于在组件的 ref 上暴露一个自定义的接口。它可以让父组件通过 ref 访问子组件的方法和属性。
:::
语法
```
useImperativeHandle(ref: Ref, createHandle: () => any, [deps: DependencyList]): void
```

### useState

```
useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
```

### useEffect

```
useEffect(effect: EffectCallback, deps?: DependencyList): void
```

### useDebugValue

```
useDebugValue(value: any, formatter?: (value: any) => any): void
```

### useReducer

```
useReducer(reducer: Reducer<S, A>, initialArg: S, init?: Init<S, A>): [S, Dispatch<A>]
```

### useLayoutEffect

```
useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void
```
