## computed

::: tip
computed 函数的作用是创建一个计算属性，根据依赖的响应式数据自动计算并返回一个新的值
:::

### computed 函数的参数

::: tip
computed 函数接受一个函数或对象作为参数，如果参数是一个函数，则该函数就是计算属性的 getter 函数，如果参数是一个对象，则该对象的 get 属性就是计算属性的 getter 函数，set 属性就是计算属性的 setter 函数
:::

### computed 函数的返回值

::: tip
computed 函数的返回值是一个对象，该对象有一个 value 属性，用于获取计算属性的当前值，也有一个 set 方法，用于设置计算属性的值
:::

### computed 函数的实现

````js
function computed(getterOrOptions) {
  let getter

### computed 函数

```js
function computed(getterOrOptions) {
  let getter
  let setter
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions
    setter = () => {
      console.warn('write operation failed: computed value is readonly')
    }
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set || (() => {
      console.warn('write operation failed: computed value is readonly')
    })

  }
  return new ComputedRefImpl(getter, setter)
````

### ComputedRefImpl 类

::: tip
ComputedRefImpl 类是计算属性的实现类，它继承自 RefImpl 类，并重写了 get 和 set 方法
:::

### ComputedRefImpl 类的构造函数

::: tip
ComputedRefImpl 类的构造函数接受两个参数，分别是计算属性的 getter 函数和 setter 函数
:::

```js
class ComputedRefImpl {
    // 初始化设置为 true，表示计算属性的值需要重新计算
    _dirty = true
    public _value ; /// 计算属性的值
    public effect: ReactiveEffect; // 计算属性的依赖
    public dep = new Map()  ; // 存储依赖的集合

    constructor(getter, setter) {
        this.getter = getter
        this.setter = setter
        this.effect = new ReactiveEffect(()=>getter(this._value)), () => {
            triggerEffects(this.dep)
        })
    }

    get value() {
        trackRefValue(this)
        if (this._dirty) {
            this._value = this.effect.run()
            this._dirty = false
        }
        return this._value
    }

    set value(newValue) {
        this.setter(newValue)
    }
}
```
