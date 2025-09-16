## reactive 使用

::: tip
reactive 函数的作用是将一个对象转换为响应式对象
:::

```js
import { reactive } from "vue";

const state = reactive({ name: 123457 });
```

## reactive 源码

```js
import { isReactive } from "vue";
import { isObject } from "vue";
const proxyMap = new WeakMap();
export function reactive(target) {
	// 如果 target 不是对象，则直接返回
	if (!isObject(target)) {
		return target;
	}
	// 如果 target 已经是响应式对象，则直接返回
	if (isReactive(target)) {
		return target;
	}
	// 如果 target 已经被代理过，则直接返回代理对象
	const existingProxy = proxyMap.get(target);
	if (existingProxy) {
		return existingProxy;
	}
	// 创建响应式对象
	const observed = new Proxy(target, baseHandlers);
	// 缓存代理对象
	proxyMap.set(target, observed);
	// 返回响应式对象
	return observed;
}
```

### isReactive

::: tip
isReactive 函数的作用是判断一个值是否为响应式对象
:::

```js
export function isReactive(value) {
	return !!value.__v_isReactive;
}
```

### isObject

::: tip
isObject 函数的作用是判断一个值是否为对象
:::

```js
export function isObject(obj) {
	return typeof obj === "object" && obj !== null;
}
```

### baseHandlers

```js
export const baseHandlers = {
	get(target, key) {
		console.log("get", target, key);
		// 进行依赖📱
		track(target, key);
		return Reflect.get(target, key);
	},
	set(target, key, value) {
		console.log("set", target, key, value);
		const result = Reflect.get(target, key, value, receiver);
		// 触发依赖更新
		trigger(target, key);
		return result;
	},
};
```

### track

::: tip
track 函数的作用是将当前的 effect 函数添加到依赖集合中
:::

```js
/**
 * WeakMap用于存储目标对象和其依赖关系映射
 * WeakMap的键是对象，值可以是任意值，且 WeakMap 中的键是弱引用，不会阻止垃圾回收
 */
const targetMap = new WeakMap();
/**
 * 用于追踪目标对象的属性访问
 * @param {Object} target - 目标对象
 * @param {string|symbol} key - 目标对象的属性键
 */
export function track(target, key) {
	console.log("track", target, key);
	// 从WeakMap中获取目标对象的依赖映射
	const depsMap = targetMap.get(target);
	// 第一次进行初始化
	if (!depsMap) {
		targetMap.set(target, (depsMap = new Map()));
	}
	// 初始化依赖
	let deps = depsMap.get(key);
	if (!deps) {
		depsMap.set(key, (deps = new map()));
	}

	trackEffects(deps);
}
```

### trackEffects

::: tip
trackEffects 函数的作用是将当前的 effect 函数添加到依赖集合中
:::

```js
// 全局变量 正在执行的 effect 函数
/**
 * 当前活动的响应式效果
 * 用于在响应式系统中追踪当前正在执行的效果
 * @type {Effect | null}
 */
const activeEffect = null;
export function trackEffect(deps) {
	if (!activeEffect) return;
	if (!deps.has(activeEffect)) {
		deps.add(activeEffect);
		activeEffect.deps.add(deps);
	}
}
```

### trigger

::: tip
trigger 函数的作用是触发依赖更新
:::

```js
/**
 * 触发目标对象的指定属性，执行相关的副作用函数
 * @param {Object} target - 目标对象
 * @param {String|Symbol} key - 目标对象的属性键
 */
export function trigger(target, key) {
	// 打印触发信息，便于调试
	console.log("trigger", target, key);
	// 从targetMap中获取目标对象的依赖映射表
	const depsMap = targetMap.get(target);
	// 如果不存在依赖映射表，直接返回
	if (!depsMap) return;
	// 从依赖映射表中获取指定属性的依赖集合
	const deps = depsMap.get(key);
	// 如果不存在依赖集合，直接返回
	if (!deps) return;
	// 触发依赖集合中的所有副作用函数
	triggerEffects(deps);
}
```

### triggerEffects

::: tip
triggerEffects 函数的作用是触发依赖更新
:::

```js
/**
 * 触发依赖项的执行函数
 * @param {Set} deps - 包含所有需要执行的effect的集合
 * @returns {void}
 */
export function triggerEffects(deps) {
	// 遍历所有依赖项
	for (const effect of deps) {
		// 检查effect是否有自定义调度器
		if (effect.scheduler) {
			// 如果有调度器，则执行调度器
			effect.scheduler();
		} else {
			// 否则直接执行effect
			effect();
		}
	}
}
```
