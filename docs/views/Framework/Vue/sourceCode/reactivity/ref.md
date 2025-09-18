# ref

::: tip
`ref` 函数的作用是创建一个响应式的引用对象，当引用对象的值发生变化时会自动触发依赖更新。
:::

## 源码

```js
function ref(value) {
  return createRef(value);
}
 // 创建响应式引用对象
function createRef(rawValue, shallow = false) {
    // 判断是否是对象 如果是对象则使用 reactive 函数创建响应式对象
    if(isObject(rawValue)) {
        return reactive(rawValue);
    }
    // 判断是不是已经是ref
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}

/**
 * RefImpl类，用于实现Vue中的ref功能
 * ref是Vue中用于创建响应式数据的基本方法之一
 */
class RefImpl {
  public _v_isRef = true; // 标识当前对象是一个ref对象，用于类型判断
  public dep = new Map(); // 用于存储依赖的Map集合，实际上在Vue的实现中这里应该是Set
  private _rawValue; // 存储原始值，不经过响应式处理
  private _value; // 存储响应式处理后的值
public readonly [ReactiveFlags.IS_REF] = true; // 标识是否是响应式，用于判断是否需要递归响应式处理
  public readonly [ReactiveFlags.IS_SHALLOW] = false; // 标识是否是浅响应式，用于判断是否需要递归响应式处理
  constructor(value, isShallow：boolean) {
    this.__v_isShallow = isShallowi
    this._rawValue = isShallow ? value : toRaw(value);
    this._value = isShallow ? value : toReactive(value);
    this[ReactiveFlags.IS_SHALLOW] = isShallow;
  }
/**
 * value 的getter 方法
 * 当访问 value 属性时，会调用 trackRefValue 方法进行依赖追踪
 * 返回的是 当前值
 */
  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newValue) {
    // 判断是否需要更新
    if (hasChanged(newValue, this._rawValue)) {
      this._rawValue = newValue;
      this._value = this.__v_isShallow ? newValue : toReactive(newValue);
      triggerRefValue(this);
    }
  }
}

```

## trackRefValue

::: tip

trackRefValue 函数的作用是将当前的 effect 函数添加到 ref 对象的依赖集合中，用于在 ref 对象的值发生变化时触发依赖更新。:::

```js
function trackRefValue(ref) {
	trackEffect(ref.dep);
}
```

## triggerRefValue

::: tip
triggerRefValue 函数的作用是触发 ref 对象的依赖更新，即执行所有依赖 ref 对象的副作用函数。
:::

```js
function triggerRefValue(ref) {
	triggerEffect(ref.dep);
}
```

## hasChanged

::: tip
hasChanged 函数的作用是判断两个值是否相等，如果相等则返回 false，否则返回 true。
:::

```js
function hasChanged(value, oldValue) {
	return !Object.is(value, oldValue);
}
```

## unref

::: tip
unref 函数的作用是如果参数是 ref 对象，则返回 ref 对象的 value 属性值，否则直接返回参数本身。
:::

```js
function unref(ref) {
	return isRef(ref) ? ref.value : ref;
}
```

## isRef

::: tip
isRef 函数的作用是判断一个值是否为 ref 对象，即是否由 ref 函数创建的响应式引用对象。
:::

```js
function isRef(ref) {
	return ref && ref._v_isRef === true;
}
```

## toRef

::: tip
toRef 函数的作用是将一个响应式对象的属性转换为 ref 对象，使该属性成为响应式的。
:::

```js
function toRef(object, key) {
	return new RefImpl(object[key]);
}
```

## toRefs

::: tip
toRefs 函数的作用是将一个响应式对象的属性转换为 ref 对象，使该对象的所有属性成为响应式的。
:::

```js
function toRefs(object) {
	const ret = {};
	for (const key in object) {
		ret[key] = toRef(object, key);
	}
	return ret;
}
```

## isRef

::: tip
isRef 函数的作用是判断一个值是否为 ref 对象，即是否由 ref 函数创建的响应式引用对象。
:::

```js
function isRef(value) {
	return !!value._v_isRef;
}
```
