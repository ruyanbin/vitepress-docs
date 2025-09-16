# effect

::: tip
effect 函数是 Vue3 响应式系统的核心函数，用于创建响应式对象，并在依赖项发生变化时重新执行回调函数。
:::

## 代码

```js
/**
 * 创建一个响应式副作用函数
 * @param {Function} fn - 需要执行的副作用函数
 * @param {Object} options - 配置选项
 * @returns {Function} 返回一个可以手动执行副作用的函数runner
 */
export function effect(fn, options = {}) {
	// 创建响应式副作用实例，当依赖发生变化时会自动重新执行fn
	const _effect = new ReactiveEffect(fn, () => {
		_effect.run();
	});
	// 立即执行一次副作用函数
	_effect.run();

	// 创建runner函数用于手动执行副作用
	const runner = _effect.run.bind(_effect);
	runner.effect = _effect;
	return runner;
}
```

### reactiveEffect

::: tip
`reactiveEffect` 函数的作用是创建一个响应式副作用函数，当依赖项发生变化时会自动重新执行副作用函数。
:::

```js
/**
 * 当前活动的副作用函数
 * 用于在响应式系统中追踪当前正在执行的副作用函数
 */
export let activeEffect;
/**
 * ReactiveEffect 类，用于封装和管理副作用函数
 * 它负责跟踪依赖关系，并在依赖变化时重新执行副作用函数
 */
export class ReactiveEffect {
	// 标记副作用函数是否处于活动状态
	active = true;
	// 存储所有依赖于该副作用函数的响应式引用
	deps = [];

	/**
	 * 构造函数
	 * @param {Function} fn - 需要被包装的副作用函数
	 * @param {Function} scheduler - 可选的调度函数，用于控制副作用函数的执行时机
	 */
	constructor(fn, scheduler) {
		this.fn = fn;
		this.scheduler = scheduler;
	}

	/**
	 * 执行副作用函数
	 * @returns {any} - 副作用函数的执行结果
	 */
	run() {
		// 如果副作用函数已经停止，则直接执行并返回结果
		if (!this.active) {
			return this.fn();
		}
		// 将当前副作用函数与当前运行的副作用函数关联起来
		activeEffect = this;
		// 执行副作用函数
		const result = this.fn();
		// 重置当前运行的副作用函数
		activeEffect = undefined;
		return result;
	}

	/**
	 * 停止副作用函数的执行
	 * 清除所有依赖关系，并将副作用函数标记为非活动状态
	 */
	stop() {
		// 只有在副作用函数处于活动状态时才需要执行停止操作
		if (this.active) {
			cleanupEffect(this);
			this.active = false;
		}
	}
}
```

### cleanupEffect

::: tip
cleanupEffect 函数的作用是清除副作用函数的依赖集合
:::

```js
function cleanupEffect(effect) {
	effect.deps.forEach((dep) => {
		dep.delete(effect);
	});
	effect.deps.length = 0;
}
```
