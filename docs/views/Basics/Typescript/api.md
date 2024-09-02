# interface
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