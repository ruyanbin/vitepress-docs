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

:::
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
注意可选参数要放在函数入参的最后面，不然会导致编辑报错

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
:::
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
