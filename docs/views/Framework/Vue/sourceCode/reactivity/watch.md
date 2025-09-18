## watch

:::tip
watch 函数的作用是监听一个响应式数据，当数据发生变化时执行回调函数。
:::

## watch 使用方法

::: tip
watch 函数接受三个参数：监听的数据源、回调函数和选项对象。回调函数会在数据源发生变化时执行，选项对象可以设置 immediate 和 deep 属性，immediate 表示是否立即执行回调函数，deep 表示是否深度监听。
:::

```js
 watch(source, (newValue, oldValue) => {}, {
    immediate: true,
    deep: true，
     flush: 'pre' | 'post' | 'sync',
     onTrack,
     onTrigger,
     once: true,
  })
```

## watch 函数的实现

```js
function watch(source, cb, options = {}) {
	const {
		immediate = false,
		deep = false,
		flush,
		onTrack,
		onTrigger,
		once = false,
	} = options;

	/**
	 * 创建一个响应式getter函数，用于获取对象的响应式版本
	 * @param source 需要转换为响应式的对象
	 * @returns 返回处理后的响应式对象或原始对象
	 */
	const reactiveGetter = (source) => {
		if (deep) return source;
		if (deep === false || deep === 0) return traverse(source, 1);
		// 默认情况 深度便利源对象
		return traverse(source, deep);
	};

	let getter = isRef(source) ? () => source.value : reactiveGetter(source);
	let cleanup = null;
	let oldValue = undefined;
	/**
	 * 监听函数，当数据源发生变化时执行
	 */
	const watcher = () => {
		const newValue = getter();
		if (cleanup) cleanup();
		cb(newValue, oldValue);
		oldValue = newValue;
	};

	this.effect = new ReactiveEffect(getter, watcher);
	oldValue = this.effect.run();
	if (immediate) {
		watcher();
	}
	if (once) {
		cleanup = () => {
			triggerEffect(this.effect.dep);
		};
	}
}
```

## cleanup

::: tip
cleanup 函数的作用是在 watcher 函数执行前调用，用于清除上一次的依赖收集。
:::

```js
cleanup && cleanup();
cleanup = () => {
	triggerEffect(this.effect.dep);
};
```
