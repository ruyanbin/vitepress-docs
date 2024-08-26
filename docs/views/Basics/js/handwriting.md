# 手写代码

## instanceof

```
 function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left)
  prototype = right.prototype
  while (true) {
  if(proto === null) return false
  if(proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
 }
```
##  手写promise

``` 
    const PENDING = "pending";
    const RESOLVED = "resolved";
    const REJECTED = "rejected";

    function MyPromise(fn) {
      //保存初始化状态
      let selt = this;
      //初始化状态
      this.state = PENDING;
      //用于保存resolve或者rejected传入的值
      this.value = null;
      //用于保存resolve的回调函数
      this.resolvedCallbacks = [];
      //用于保存reject的回调函数
      this.rejectedCallbacks = [];

      //状态转变为resolved的方法
      function resolve(value) {
        //判断传入的元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (value instanceof MyPromise) {
          return value.then(resolve, reject);
        }
        //保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
          //只有状态为pending时才能转变
          if (self.state === PENDING) {
            //修改状态
            self.state = RESOLVED;
            //设置传入的值
            self.value = value;
            //执行回调函数
            self.resolvedCallbacks.forEach((callback) => {
              callback(value);
            });
          }
        }, 0);
      }

      //状态转变为rejected方法
      function reject(value) {
        //保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
          //只有状态为pending时才能转变
          if (self.state === PENDING) {
            //修改状态
            self.state = REJECTED;
            //设置传入的值
            self.value = value;
            //执行回调函数
            self.rejectedCallbacks.forEach((callback) => {
              callback(value);
            });
          }
        }, 0);
      }

      //将两个方法传入函数执行
      try {
        fn(resolve, reject);
      } catch (e) {
        //遇到错误时，捕获错误，执行reject函数
        reject(e);
      }

      MyPromise.prototype.then = function (onResolved, onRejected) {
        //首先判断两个参数是否为函数类型，因为这两个参数是可选参数
        onResolved =
          typeof onResolved === "function"
            ? onResolved
            : function (value) {
                return value;
              };

        onRejected =
          typeof onRejected === "function"
            ? onRejected
            : function (error) {
                throw error;
              };

        //如果是等待状态，则将函数加入对应列表中
        if (this.state === PENDING) {
          this.resolvedCallbacks.push(onResolved);
          this.rejectedCallbacks.push(onRejected);
        }
        //如果状态已经凝固，则直接执行对应状态的函数
        if (this.state === RESOLVED) {
          onResolved(this.value);
        }

        if (this.state === REJECTED) {
          onRejected(this.value);
        }
      };
    }
```
### then 

```
then(onFulfilled, onRejected) {
const self = this
return myPromise((resolve, reject) => {
  let fullfilled = ()=>{ try{ let result = onFulfilled(self.value) // 承前
  return result instanceof myPromise ? result.then(resolve,reject) : resolve(result)
  } catch(error) { reject(error)}}
  let rejected = ()=>{
  try{
   let result = onRejected(self.value)
   return result instanceof myPromise ? result.then(resolve,reject) : resolve(result) 
  } catch(error){reject(error) }}
  
  switch(self.state){
  case PENDING:
   self.onResolvedCallbacks.push(fullfilled)
   self.onRejectedCallbacks.push(rejected)
   break;
   case RESOLVED:
   fullfilled()
   break;
   case REJECTED:
   rejected()
   break;
  }

})
}
 
```

### promise.all

::: tip
- 接收一个Promise实例的数组或具有Iterator接口的对象作为参数
- 这个方法返回一个新的Promise对象
- 遍历传入的参数，用Promise.resolve()将参数“包一层”,使其变成一个Promise对象
- 参数所有回调成功才是成功，返回值数组与参数顺序一致
- 参数数组其中一个失败，则触发失败状态，第一个触发失败状态的Promise错误信息作为Promise.all的错误信息
:::
``` 
function myPromiseAll(promises) {
return new Promise((resolve, reject) => {
  if(!Array.isArray(promises)){
  throw new TypeError('Error');
  }
  
 var resolvedCount = 0;
 var promisenNum=promises.length;
 var resolvedValues = [];
 
 for(var i = 0; i < promisenNum; i++){
   Promise.resolve(promises[i]).then(value=>{
   resolvedCount++;
   resolvedValues[i] = value;
   if(resolvedCount === promisenNum){
   return resolve(resolvedValues);
   }
   },error=>{
   return reject(error);
   })
   
   )
 }
})

}

```

### promise.race

::: tip
该方法的参数是Promise实例数组，然后其then注册的回调方法是数组中的某一个Promise的状态变为fufilled的时候执行。因为Promise的状态只能改变一次，那么我们只需要把Promise.race中产生的Promise对象的resolve，注入到数组中的每一个Promise实例中的回调函数即可。

:::

``` 
    Promise.race=function (args){
      return new Promise((resolve,reject)=>{
        for(let i=0,len=args.length;i<len;i++){
          args[i].then(resolve, reject)
        }
      })
    }
```

### promise.finally

``` 
finally(callback){
return new Promise((resolve,reject)=>{
this.then(result=>{
callback(),
resolve(result)
},reason=>{
callback(),
reject(reason)
})
})

}

```
## 更改this 指向的方法
### call

```
/*
* 扩展Function.prototype，实现一个myCall方法，用于改变函数的调用上下文（即this指向）及参数传递。
* @param {Object} context - 要改变的函数调用上下文（this指向），如果没有提供，则默认为window。
* @param {...*} args - 传递给函数的参数，可以是任意数量的参数。
* @returns {Object} - 返回改变后的上下文对象。
*/
function.prototype.myCall = function(context) {
    if(typeof context !== 'function'){
     throw new TypeError('Error');
    }
    // 如果没有提供context参数，则默认使用window作为上下文。
    let context = context || window;
    // 在context对象上添加一个名为fn的属性，值为当前函数（即使用myCall方法的函数）。
    context.fn = this;
    // 创建一个空数组，用于存储传递给函数的参数。
    let args = [];
    // 遍历arguments对象，从索引1开始，跳过第一个参数（即context），收集所有参数。
    for(let i = 1; i < arguments.length; i++) {
        // 将每个参数转换为字符串形式，并添加到args数组中，用于后续动态调用函数时传递。
        args.push('arguments[' + i + ']');
    }
    // 使用context对象上新添加的fn属性（即当前函数），以及收集到的参数，动态调用函数。
    context.fn(...args);
    // 删除context对象上添加的fn属性，清理现场。
    delete context.fn;
    // 返回改变后的上下文对象。
    return context;
}

```

### apply

```
# 为Function的原型添加一个myApply方法，允许函数绑定到一个指定的上下文，并用指定的参数调用
function.prototype.myApply = function(context, args) {
#   检查当前函数是否为函数类型，如果不是，则抛出类型错误
  if(typeof this !=='function'){
    throw new TypeError('Error');
  }
  // 初始化函数调用结果变量
  let result = null;
  // 将context设置为传入的context对象，如果未传入则默认为window，以适应没有上下文的调用场景
  context=context || window;
  // 在context对象上添加一个临时方法fn，用于绑定和调用原函数
  context.fn = this;
  // 判断是否传入了参数，如果有，则使用传入的参数调用函数，否则不传参数调用
  if(arguments[1]){
    result = context.fn(...arguments[1]);
  }else {
    result = context.fn();
  }
  // 删除临时添加到context上的fn方法，以避免对context的持续污染
  delete context.fn;
  // 返回函数调用的结果
  return result

```

### 手写 bind

``` 
     Function.prototype.myBind = function(context) {
      if(typeof this != 'function'){
        throw new TypeError('Error');
     }
     var self = this;
     var args =[...arguments].slice(1);
     return function Fn() {
        return fn.apply(this instanceof Fn? this :context, args.concat(...arguments));
     }
     
     }
```

## 手写 防抖函数

::: tip
事件在触发 n 秒后才执行，如果在这 n 秒内又被触发，则重新计时。
:::

``` js
 function debounce(fn, delay) {
  let timer = null;

  return function ()  {
    let context = this;
    let args = arguments;

if(  timer  )  {
clearTimeout(timer);
    timer = null;
    }

    timer = setTimeout(() = >
{
fn.apply(context,args);},
delay);


}
}

```

## 手写节流

::: tip
节流函数的作用是，在一定时间内，只执行一次函数。
:::

``` 
functuion throttle(fn, delay) {
let curTime = Date.now();
return function () {
 let args = arguments;
 let context = this;
 let nowTime = new Date();
 if(nowTime - curTime > delay){
 curTime = Date.now();
return fn.apply(context, args);
}
}
}
```

## 手写类型判断

```
function type(obj) {
if(obj === null) {
return obj + '';
}  

if(typeof obj === 'object'){
let valueClass = Object.prototype.toString.call(obj).slice(8, -1);
return valueClass;
} else {
return typeof obj;
}

}
```

## 函数柯里化
``` 
function currency(fn,args) {
 let args = args|| [];
 let length = fn.length;
 
 return function () {
 let subArgs = args.slice(0);
 for(let i = 0; i < arguments.length; i++) {
 subArgs.push(arguments[i]);
 }
 if(subArgs.length < length) {
  return currency(fn, subArgs);
 } else {
 return fn.apply(this, subArgs);
 }
 }

}
- es6

const curry = fn => (...args) => args.length === fn.length ? fn(...args) : curry(fn, ...args);
```

## promise 手写 ajax

```js
function getJson(url){
 let promise = new Promise((resolve,reject)=>{
  let xhr = new XMLHttpRequest();
     xhr.open('GET',url,true)
     xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
       if(xhr.status === 200){
        resolve(xhr.responseText);
       }else {
        reject(new Error(xhr.statusText));
       }
      }
     }
     xhr.responseType = 'json';
     xhr.setRequestHeader('Accept','application/json');
     xhr.onerror = function() {
     reject(new Error(xhr.statusText));
     }
     xhr.send();
     
 })
    return promise;

}

```

## 手写浅拷贝

```js
 function  shallowCopy(obj) {

if(!obj || typeof obj !== 'object') return 
    let newObj = obj instanceof Array ? [] : {};
    
    for(let key in obj){
     if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key];
     }
    }
}

- Object.assign()
- 扩展运算法
- Array.prototype.slice()
- Array.prototype.concat()
```

## 手写深拷贝

```js
function deepCopy(obj) {
    if(!iobj || typeof obj !== 'object') return 
    
    let newObj = obj instanceof Array ? [] : {};
    
    for (let key in obj){
     if(obj.hasOwnProperty(key)){
     newObj[key] = typeof obj[key] === 'object'? deepCopy(obj[key]) : obj[key];
     }
    
    }

    return newObj;q2wert
}

```

--------

## 数组求和

```js

let arr=[]
let sum = arr.reduce((a,b)=>a+b,0)
```

## 数组扁平化
### ES5
```js
function flatten(arr) {
let result = [];

for (let i = 0; i < arr.length; i++){
if(Array.isArray(arr[i])){
result = result.concat(flatten(arr[i]));
} else {
result.push(arr[i]);
}

}
    return result
}


```
### ES6
```js
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
```

## js 对象转树形数组

``` 
function objToArr(obj) {
let result =[]
 if(!Array.isArray(obj)){
 return result
 }
 
 let map={}
 obj.forEach(item=>{
 map[item.id] = item
 })
 
 obj.forEach(item=>{
  let parent = map[item.parentId]
  if(parent){
  (parent.children || (parent.children = [])).push(item)
  }else {
  result.push(item)
  }
 
 }) 

return result

}

```