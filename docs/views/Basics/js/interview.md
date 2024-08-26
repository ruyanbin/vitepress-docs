## proxy 能够监听到对象中对象的引用吗？

::: tip
 是的，proxy 能够监听到对象属性的读取和设置操作，包括对象中嵌套的对象的引用操作。但是要注意的是，当你想要监听-个嵌套对象内部的变化时，
南无你需要单独为这个嵌套对象也创建一个proxy 实例。因为proxy只能直接监听他直接代理的对象的操作，对于嵌套对象的操作，需要嵌套的使用proxy 
来使用proxy来实现深度监听。
:::

``` js 
function createDeppProxy(obj) {

const handler = {
get(target,property,receiver){
 const value = Reflect.get(target,property,receiver)
 if(typeof value === 'object' && value!== null){
    return createDeppProxy(value)
 }
 return value
},
set(target,property,value,receiver){
 return Reflect.set(target,property,value,receiver)
}

}
return new Proxy(obj,handler)
}

const obj = {
    name:"zhangsan",
    age:18,
    address:{
        city:"beijing",
        street:"huayang"
    }
}

console.log(createDeppProxy(obj))

```

### 实现一个函数，支持深度遍历js 对象，且允许在遍历的时候，修改对象的数据，得到新的对象。

```js
function deepTraverse(obj,modifierFunction){
 if(typeof obj!=='object'|| obj===null){
     return modifierFunction(obj)
 }
    if(Array.isArray(obj)){
    return obj.map(item=>deepTraverse(item,modifierFunction))
    }
    
    const modifiedObj = {}
    Object.keys(obj).forEach(key=> {
        const value = obj[key]
        if(typeof value === 'object' && value!== null){
            modifiedObj[key] = deepTraverse(value,modifierFunction)
        }else{
            modifiedObj[key] = modifierFunction(value,key)
        }   
    })
    return modifiedObj
}

const obj = {
a:1,
    b:[1,2,3],
    c:{
    f:1,e:3}
    
}
const modifierFunction =deepTraverse(obj,(value,key)=>{
 if( typeof value === 'number'){
  return value+10
 }
    return value
})
console.log(obj,'before')
console.log(modifierFunction,'after')
```

## js 如何判空

```js
function isEmpty(value) {
    if (typeof value === 'string' && value.trim() === '') {
        return true
    }
    if (typeof value ==='number' && value === 0) {
        return true
    }
    if(Array.isArray(value)&& value.length === 0){
     return true
    }
    if(typeof value === 'object' && value !==null &&Object.keys(value).length === 0){
    return true
    }
    if(value === null){
    return true
    }
    if(value === undefined){
    return true
    }
    if(value instanceof Map && value.size === 0){
     return true
    }
    if(value instanceof Set && value.size === 0){
     return true
    }
    return false
}

```

## 判断一个对象 是否为空，包含了其原型链上是否有自定义的数据和方法

```js {4}

function isObjectEmpty(obj) {
const ownProperties = Object.getOwnPropertyNames(obj)
    for (const property of ownProperties) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, property)
        if((descriptor.value && descriptor.value!== null&& descriptor.value!==undefined)|| typeof descriptor.value === 'function'){
            return false
        }
    }
    const protoype = Object.getPrototypeOf(obj)
    while(protoype && protoype !== Object.prototype){
    const prototypeProperties = Object.getOwnPropertyNames(protoype)
        for (const property of prototypeProperties) {
        const descriptor = Object.getOwnPropertyDescriptor(protoype, property)
            if((descriptor.value && descriptor.value!== null&& descriptor.value!==undefined)|| typeof descriptor.value === 'function') {
            
                return false
            }
            }
        prototype = Object.getPrototypeOf(protoype)
    }
    return true

}
```
