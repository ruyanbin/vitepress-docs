| 数据类型  |   关键字   |                                               描述                                                |
|:-----:|:-------:|:-----------------------------------------------------------------------------------------------:|
| 任意类型  |   any   |                                       声明为any的变量可以赋予任意类型的值                                       |
| 数字类型  | number  |  双精度64位的浮点值，他可以用来表示整数和分数 ``` let binary:number=0b101 let oct:number=0o744 let dec:number=6```   |
| 字符串类型 | string  |                 字符串类型，用来表示文本，可以使用单引号或者双引号 ``` let name:string="hello world" ```                 |
| 布尔类型  | boolean |                          布尔类型，用来表示真和假 ``` let isDone:boolean=false ```                          |
| 数组类型  |    无    |             声明变量为数组``` let list:number[]=[1,2,3] let list:Array<number>=[1,2,3] ```             |
| 元组类型  |    无    |              元组类型，用来表示已知元素数量和类型的数组，比如坐标点 ``` let x:[number,string]=[1,"hello"] ```              |
| 枚举类型  |  enum   |              枚举类型，用来定义一组命名常量，枚举类型默认从0开始，也可以自定义 ``` enum Color{Red,Green,Blue} ```               |
| void  |  void   | 用于标识方法返回值的类型，表示该方法没有返回值 ``` function warnUser():void{ alert("this is my warning message") } ``` |
| never  |  never   | 表示一个不会发生任何事情的代码，比如抛出异常 ``` function error(message:string):never{ throw new Error(message) } ``` |
|null  |  null   |                                            表示空值，空对象                                             |
| undefined  |  undefined   |                                            表示未定义，未赋值                                            |
| unknown  |  unknown   |       表示未知类型，不能赋予其他类型       ``` function dv(param:unknown){return param as number /2}```        |

## 函数类型

::: tip
TS定义函数类型需要定义输入参数类型和返回值类型
返回类型也可以忽略，因为TS会自动推导返回类型
:::

``` ts
function add(x:number,y:number):number{
return x+y
}
```

``` ts
let myAdd: (baseValue: number, increment: number):number => {
 return x+y
}
```

### 可选参数
``` ts
function buildName(firstName:string,lastName?:string){
 return firstName
 }
```
> 注意可选参数要放在函数入参的最后面，不然会导致编辑报错

### 默认参数
``` ts
function buildName(firstName:string,lastName='default'){
return firstName+lastName
}
```

### 剩余参数
``` ts
function push(array:any[],...items:any[]){
items.forEach(function(item){}
array.push(...items)
}
```

### 函数重载
::: tip
函数重载是指两个函数名称相同，但是参数个数或参数类型不同，他的好处显而易见，
不需要把相似功能的函数拆分成多个函数名称不同的函数。
:::
``` ts
function add(x:number,y:number):number;
function add(x:string,y:string):string;
function add(x:number|string,y:number|string):number|string{
if(typeof x==='number'&&typeof y==='number'){}
if(typeof x==='string'&&typeof y==='string'){}
throw new Error('参数类型不匹配')
}
```
## 类



## interface
::: tip
`interface(接口)`：是由ts 设计出来用于定义对象类型的，可以对对象的属性进行描述
:::
1. 首字母大写
2. 属性必须和类型定义的时候完全一致
> 注意：interface 不是js 中的关键字，所以ts 编译成js 后，这些interface 是不会生成到js 中的
> 都会被删除 interface 只能在ts 中用来做静态检查

- 只读属性 `readonly`
- 索引签名 `[key:string]:any`
- 描述函数类型
```
interface Person {
(x:number,y:number):number;
}
const add:Person = function(x:number,y:number):number{
return x+y;
}
```

## 类

``` ts
class Animal{
 constructor(name:string){
  this.name=name
 }
}
```

`public`: 公有的，一个类里默认所有的方法和属性都是 public。

`private`: 私有的，只属于这个类自己，它的实例和继承它的子类都访问不到。

`protected`: 受保护的，继承它的子类可以访问，实例不能访问

`static` : 静态的，只属于这个类，实例和子类都不能访问

`readonly`: 只读的，只在初始化的时候赋值，不能修改

`abstract`: 抽象的，抽象类不能被实例化，只能被继承。抽象类可以有抽象方法和抽象属性。

`this`: 表示当前实例

`implements`:implements 是实现的意思，class 实现 interface。

```ts

interface a {
 playmusic():void;
}

class b implements a {
    playmusic(): void {
    }
}
```


## enum

``` ts
enum Color{Red,Green,Blue}
let c:Color=Color.Green
let colorName:string=Color[2]
console.log(colorName)

enum Color{Red=1,Green=2,Blue=4}
let c:Color=Color.Green
let colorName:string=Color[2]
console.log(colorName)
```
> 注意：如果枚举值是数字，那么默认情况下，第一个枚举值是0，第二个是1，以此类推。
> 如果枚举值是字符串，那么第一个枚举值是1，第二个是2，以此类推。
> 枚举的意义在于，可以定义一些带名字的常量集合，清晰地表达意图和语义，更容易地理解代码和调试。
常用于和后端联调时，区分后端返回的一些代表状态语义的数字或字符串，降低阅读代码时的心智负担。


# 进阶

## 联合类型
``` ts
let myFavoriteNumber:string|number='seven'

```
## 交叉类型
::: tip
如果要对对象类型进行扩展，可用使用 `&` 操作符，比如 `type Fish=Animal & {swim:()=>void}`
:::
``` ts
type Fish=Animal & {swim:()=>void}
```

## 类型别名 type

::: tip
类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
-- TS 文档
:::

## type 和 interface 区别

1. 相同点
- 都可以定义一个对象或函数
- 都允许继承 （interface 使用 extends 实现继承 type 使用 & 实现继承）
2. 不同点
- interface 是ts 设计出来用于定义对象类型的，可以对对象的形状进行描述
- type 是类型别名，用于给 类型起一个新名字，可以给原始值、联合类型、元组以及其它任何你需要手写的类型起别名。
- type 可以和 interface 很像，但是 interface 只能描述对象，而 type 可以描述原始值、联合类型、元组以及其它任何你需要手写的类型。
- interface 可以合并重复声明，而 type 不可以


## 类型断言
``` ts
let myFavoriteNumber:string|number='seven'
let myFavoriteNumber:string=myFavoriteNumber as string
```
 
## 字面量类型
```ts
type Gender='male'|'female'
let gender:Gender='male'
```