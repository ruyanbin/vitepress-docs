## Partial
:::
将type 的所有属性设置为可选
:::

``` ts
interface Person {
name:string
}
type PersonPartial = Partial<Person>
```
源码
```js
type Partial<T> = {
    [P in keyof T] ?: T[P]| undefined
}
```

## Required

::: tip
Required 把传入泛型Type的属性全部转换成必选项
:::

``` ts 
interface Props {
a?: string
}

const props: Required<Props> = {a:'1}

```
源码
```js
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```

## Pick

::: tip
从泛型type 中获取吧指定属性的类型，相当于得到心类型 只包含闭锁制定的泛型，第二个参数的属性的类型
:::

```ts
interface PerInfo {
    name: string;
    age: number;
    sex: string;
}
type Person = Pick<Perinfo, 'name'|'age'>
```
源码
```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```

## Record

::: tip
构造一个对象类型，其属性键为 Keys，其属性值为 Type。可用于将一种类型的属性映射到另一种类型。
:::

源码

```js
type Record<K extends keyof any, T> = {[p in K ]:T}

```

## Readonly 

::: tip
构造一个将type的所有属性设置为只读的类型，这意味着构造类型的属性不能重新分配
:::

##  Omit

::: tip
通过从 Type 中选择所有属性然后删除 Keys（字符串字面或字符串字面的并集）来构造一个类型。与 Pick 相反。
:::

源码
```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```