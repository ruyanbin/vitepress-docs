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
````
