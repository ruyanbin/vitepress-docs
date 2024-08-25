import{_ as s,c as a,o as n,a5 as i}from"./chunks/framework.Dnp7cN4M.js";const g=JSON.parse('{"title":"手写代码","description":"","frontmatter":{},"headers":[],"relativePath":"views/Basics/js/handwriting.md","filePath":"views/Basics/js/handwriting.md","lastUpdated":1724510526000}'),p={name:"views/Basics/js/handwriting.md"},l=i(`<h1 id="手写代码" tabindex="-1">手写代码 <a class="header-anchor" href="#手写代码" aria-label="Permalink to &quot;手写代码&quot;">​</a></h1><h2 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-label="Permalink to &quot;instanceof&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> function myInstanceof(left, right) {</span></span>
<span class="line"><span>  let proto = Object.getPrototypeOf(left)</span></span>
<span class="line"><span>  prototype = right.prototype</span></span>
<span class="line"><span>  while (true) {</span></span>
<span class="line"><span>  if(proto === null) return false</span></span>
<span class="line"><span>  if(proto === prototype) return true</span></span>
<span class="line"><span>    proto = Object.getPrototypeOf(proto)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="手写promise" tabindex="-1">手写promise <a class="header-anchor" href="#手写promise" aria-label="Permalink to &quot;手写promise&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    const PENDING = &quot;pending&quot;;</span></span>
<span class="line"><span>    const RESOLVED = &quot;resolved&quot;;</span></span>
<span class="line"><span>    const REJECTED = &quot;rejected&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function MyPromise(fn) {</span></span>
<span class="line"><span>      //保存初始化状态</span></span>
<span class="line"><span>      let selt = this;</span></span>
<span class="line"><span>      //初始化状态</span></span>
<span class="line"><span>      this.state = PENDING;</span></span>
<span class="line"><span>      //用于保存resolve或者rejected传入的值</span></span>
<span class="line"><span>      this.value = null;</span></span>
<span class="line"><span>      //用于保存resolve的回调函数</span></span>
<span class="line"><span>      this.resolvedCallbacks = [];</span></span>
<span class="line"><span>      //用于保存reject的回调函数</span></span>
<span class="line"><span>      this.rejectedCallbacks = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //状态转变为resolved的方法</span></span>
<span class="line"><span>      function resolve(value) {</span></span>
<span class="line"><span>        //判断传入的元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变</span></span>
<span class="line"><span>        if (value instanceof MyPromise) {</span></span>
<span class="line"><span>          return value.then(resolve, reject);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //保证代码的执行顺序为本轮事件循环的末尾</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>          //只有状态为pending时才能转变</span></span>
<span class="line"><span>          if (self.state === PENDING) {</span></span>
<span class="line"><span>            //修改状态</span></span>
<span class="line"><span>            self.state = RESOLVED;</span></span>
<span class="line"><span>            //设置传入的值</span></span>
<span class="line"><span>            self.value = value;</span></span>
<span class="line"><span>            //执行回调函数</span></span>
<span class="line"><span>            self.resolvedCallbacks.forEach((callback) =&gt; {</span></span>
<span class="line"><span>              callback(value);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }, 0);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //状态转变为rejected方法</span></span>
<span class="line"><span>      function reject(value) {</span></span>
<span class="line"><span>        //保证代码的执行顺序为本轮事件循环的末尾</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>          //只有状态为pending时才能转变</span></span>
<span class="line"><span>          if (self.state === PENDING) {</span></span>
<span class="line"><span>            //修改状态</span></span>
<span class="line"><span>            self.state = REJECTED;</span></span>
<span class="line"><span>            //设置传入的值</span></span>
<span class="line"><span>            self.value = value;</span></span>
<span class="line"><span>            //执行回调函数</span></span>
<span class="line"><span>            self.rejectedCallbacks.forEach((callback) =&gt; {</span></span>
<span class="line"><span>              callback(value);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }, 0);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //将两个方法传入函数执行</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        fn(resolve, reject);</span></span>
<span class="line"><span>      } catch (e) {</span></span>
<span class="line"><span>        //遇到错误时，捕获错误，执行reject函数</span></span>
<span class="line"><span>        reject(e);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      MyPromise.prototype.then = function (onResolved, onRejected) {</span></span>
<span class="line"><span>        //首先判断两个参数是否为函数类型，因为这两个参数是可选参数</span></span>
<span class="line"><span>        onResolved =</span></span>
<span class="line"><span>          typeof onResolved === &quot;function&quot;</span></span>
<span class="line"><span>            ? onResolved</span></span>
<span class="line"><span>            : function (value) {</span></span>
<span class="line"><span>                return value;</span></span>
<span class="line"><span>              };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onRejected =</span></span>
<span class="line"><span>          typeof onRejected === &quot;function&quot;</span></span>
<span class="line"><span>            ? onRejected</span></span>
<span class="line"><span>            : function (error) {</span></span>
<span class="line"><span>                throw error;</span></span>
<span class="line"><span>              };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //如果是等待状态，则将函数加入对应列表中</span></span>
<span class="line"><span>        if (this.state === PENDING) {</span></span>
<span class="line"><span>          this.resolvedCallbacks.push(onResolved);</span></span>
<span class="line"><span>          this.rejectedCallbacks.push(onRejected);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //如果状态已经凝固，则直接执行对应状态的函数</span></span>
<span class="line"><span>        if (this.state === RESOLVED) {</span></span>
<span class="line"><span>          onResolved(this.value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (this.state === REJECTED) {</span></span>
<span class="line"><span>          onRejected(this.value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="then" tabindex="-1">then <a class="header-anchor" href="#then" aria-label="Permalink to &quot;then&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>then(onFulfilled, onRejected) {</span></span>
<span class="line"><span>const self = this</span></span>
<span class="line"><span>return myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  let fullfilled = ()=&gt;{ try{ let result = onFulfilled(self.value) // 承前</span></span>
<span class="line"><span>  return result instanceof myPromise ? result.then(resolve,reject) : resolve(result)</span></span>
<span class="line"><span>  } catch(error) { reject(error)}}</span></span>
<span class="line"><span>  let rejected = ()=&gt;{</span></span>
<span class="line"><span>  try{</span></span>
<span class="line"><span>   let result = onRejected(self.value)</span></span>
<span class="line"><span>   return result instanceof myPromise ? result.then(resolve,reject) : resolve(result) </span></span>
<span class="line"><span>  } catch(error){reject(error) }}</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  switch(self.state){</span></span>
<span class="line"><span>  case PENDING:</span></span>
<span class="line"><span>   self.onResolvedCallbacks.push(fullfilled)</span></span>
<span class="line"><span>   self.onRejectedCallbacks.push(rejected)</span></span>
<span class="line"><span>   break;</span></span>
<span class="line"><span>   case RESOLVED:</span></span>
<span class="line"><span>   fullfilled()</span></span>
<span class="line"><span>   break;</span></span>
<span class="line"><span>   case REJECTED:</span></span>
<span class="line"><span>   rejected()</span></span>
<span class="line"><span>   break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="promise-all" tabindex="-1">promise.all <a class="header-anchor" href="#promise-all" aria-label="Permalink to &quot;promise.all&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>接收一个Promise实例的数组或具有Iterator接口的对象作为参数</li><li>这个方法返回一个新的Promise对象</li><li>遍历传入的参数，用Promise.resolve()将参数“包一层”,使其变成一个Promise对象</li><li>参数所有回调成功才是成功，返回值数组与参数顺序一致</li><li>参数数组其中一个失败，则触发失败状态，第一个触发失败状态的Promise错误信息作为Promise.all的错误信息</li></ul></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function myPromiseAll(promises) {</span></span>
<span class="line"><span>return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  if(!Array.isArray(promises)){</span></span>
<span class="line"><span>  throw new TypeError(&#39;Error&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> var resolvedCount = 0;</span></span>
<span class="line"><span> var promisenNum=promises.length;</span></span>
<span class="line"><span> var resolvedValues = [];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> for(var i = 0; i &lt; promisenNum; i++){</span></span>
<span class="line"><span>   Promise.resolve(promises[i]).then(value=&gt;{</span></span>
<span class="line"><span>   resolvedCount++;</span></span>
<span class="line"><span>   resolvedValues[i] = value;</span></span>
<span class="line"><span>   if(resolvedCount === promisenNum){</span></span>
<span class="line"><span>   return resolve(resolvedValues);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   },error=&gt;{</span></span>
<span class="line"><span>   return reject(error);</span></span>
<span class="line"><span>   })</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   )</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="promise-race" tabindex="-1">promise.race <a class="header-anchor" href="#promise-race" aria-label="Permalink to &quot;promise.race&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该方法的参数是Promise实例数组，然后其then注册的回调方法是数组中的某一个Promise的状态变为fufilled的时候执行。因为Promise的状态只能改变一次，那么我们只需要把Promise.race中产生的Promise对象的resolve，注入到数组中的每一个Promise实例中的回调函数即可。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Promise.race=function (args){</span></span>
<span class="line"><span>      return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>        for(let i=0,len=args.length;i&lt;len;i++){</span></span>
<span class="line"><span>          args[i].then(resolve, reject)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="promise-finally" tabindex="-1">promise.finally <a class="header-anchor" href="#promise-finally" aria-label="Permalink to &quot;promise.finally&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>finally(callback){</span></span>
<span class="line"><span>return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>this.then(result=&gt;{</span></span>
<span class="line"><span>callback(),</span></span>
<span class="line"><span>resolve(result)</span></span>
<span class="line"><span>},reason=&gt;{</span></span>
<span class="line"><span>callback(),</span></span>
<span class="line"><span>reject(reason)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="更改this-指向的方法" tabindex="-1">更改this 指向的方法 <a class="header-anchor" href="#更改this-指向的方法" aria-label="Permalink to &quot;更改this 指向的方法&quot;">​</a></h2><h3 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-label="Permalink to &quot;call&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 扩展Function.prototype，实现一个myCall方法，用于改变函数的调用上下文（即this指向）及参数传递。</span></span>
<span class="line"><span>* @param {Object} context - 要改变的函数调用上下文（this指向），如果没有提供，则默认为window。</span></span>
<span class="line"><span>* @param {...*} args - 传递给函数的参数，可以是任意数量的参数。</span></span>
<span class="line"><span>* @returns {Object} - 返回改变后的上下文对象。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function.prototype.myCall = function(context) {</span></span>
<span class="line"><span>    if(typeof context !== &#39;function&#39;){</span></span>
<span class="line"><span>     throw new TypeError(&#39;Error&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 如果没有提供context参数，则默认使用window作为上下文。</span></span>
<span class="line"><span>    let context = context || window;</span></span>
<span class="line"><span>    // 在context对象上添加一个名为fn的属性，值为当前函数（即使用myCall方法的函数）。</span></span>
<span class="line"><span>    context.fn = this;</span></span>
<span class="line"><span>    // 创建一个空数组，用于存储传递给函数的参数。</span></span>
<span class="line"><span>    let args = [];</span></span>
<span class="line"><span>    // 遍历arguments对象，从索引1开始，跳过第一个参数（即context），收集所有参数。</span></span>
<span class="line"><span>    for(let i = 1; i &lt; arguments.length; i++) {</span></span>
<span class="line"><span>        // 将每个参数转换为字符串形式，并添加到args数组中，用于后续动态调用函数时传递。</span></span>
<span class="line"><span>        args.push(&#39;arguments[&#39; + i + &#39;]&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 使用context对象上新添加的fn属性（即当前函数），以及收集到的参数，动态调用函数。</span></span>
<span class="line"><span>    context.fn(...args);</span></span>
<span class="line"><span>    // 删除context对象上添加的fn属性，清理现场。</span></span>
<span class="line"><span>    delete context.fn;</span></span>
<span class="line"><span>    // 返回改变后的上下文对象。</span></span>
<span class="line"><span>    return context;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;apply&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 为Function的原型添加一个myApply方法，允许函数绑定到一个指定的上下文，并用指定的参数调用</span></span>
<span class="line"><span>function.prototype.myApply = function(context, args) {</span></span>
<span class="line"><span>#   检查当前函数是否为函数类型，如果不是，则抛出类型错误</span></span>
<span class="line"><span>  if(typeof this !==&#39;function&#39;){</span></span>
<span class="line"><span>    throw new TypeError(&#39;Error&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 初始化函数调用结果变量</span></span>
<span class="line"><span>  let result = null;</span></span>
<span class="line"><span>  // 将context设置为传入的context对象，如果未传入则默认为window，以适应没有上下文的调用场景</span></span>
<span class="line"><span>  context=context || window;</span></span>
<span class="line"><span>  // 在context对象上添加一个临时方法fn，用于绑定和调用原函数</span></span>
<span class="line"><span>  context.fn = this;</span></span>
<span class="line"><span>  // 判断是否传入了参数，如果有，则使用传入的参数调用函数，否则不传参数调用</span></span>
<span class="line"><span>  if(arguments[1]){</span></span>
<span class="line"><span>    result = context.fn(...arguments[1]);</span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>    result = context.fn();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 删除临时添加到context上的fn方法，以避免对context的持续污染</span></span>
<span class="line"><span>  delete context.fn;</span></span>
<span class="line"><span>  // 返回函数调用的结果</span></span>
<span class="line"><span>  return result</span></span></code></pre></div><h3 id="手写-bind" tabindex="-1">手写 bind <a class="header-anchor" href="#手写-bind" aria-label="Permalink to &quot;手写 bind&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>     Function.prototype.myBind = function(context) {</span></span>
<span class="line"><span>      if(typeof this != &#39;function&#39;){</span></span>
<span class="line"><span>        throw new TypeError(&#39;Error&#39;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     var self = this;</span></span>
<span class="line"><span>     var args =[...arguments].slice(1);</span></span>
<span class="line"><span>     return function Fn() {</span></span>
<span class="line"><span>        return fn.apply(this instanceof Fn? this :context, args.concat(...arguments));</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     }</span></span></code></pre></div><h2 id="手写-防抖函数" tabindex="-1">手写 防抖函数 <a class="header-anchor" href="#手写-防抖函数" aria-label="Permalink to &quot;手写 防抖函数&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>事件在触发 n 秒后才执行，如果在这 n 秒内又被触发，则重新计时。</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(  timer  )  {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fn.apply(context,args);},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delay);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="手写节流" tabindex="-1">手写节流 <a class="header-anchor" href="#手写节流" aria-label="Permalink to &quot;手写节流&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>节流函数的作用是，在一定时间内，只执行一次函数。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>functuion throttle(fn, delay) {</span></span>
<span class="line"><span>let curTime = Date.now();</span></span>
<span class="line"><span>return function () {</span></span>
<span class="line"><span> let args = arguments;</span></span>
<span class="line"><span> let context = this;</span></span>
<span class="line"><span> let nowTime = new Date();</span></span>
<span class="line"><span> if(nowTime - curTime &gt; delay){</span></span>
<span class="line"><span> curTime = Date.now();</span></span>
<span class="line"><span>return fn.apply(context, args);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="手写类型判断" tabindex="-1">手写类型判断 <a class="header-anchor" href="#手写类型判断" aria-label="Permalink to &quot;手写类型判断&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function type(obj) {</span></span>
<span class="line"><span>if(obj === null) {</span></span>
<span class="line"><span>return obj + &#39;&#39;;</span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(typeof obj === &#39;object&#39;){</span></span>
<span class="line"><span>let valueClass = Object.prototype.toString.call(obj).slice(8, -1);</span></span>
<span class="line"><span>return valueClass;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>return typeof obj;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="函数柯里化" tabindex="-1">函数柯里化 <a class="header-anchor" href="#函数柯里化" aria-label="Permalink to &quot;函数柯里化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function currency(fn,args) {</span></span>
<span class="line"><span> let args = args|| [];</span></span>
<span class="line"><span> let length = fn.length;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> return function () {</span></span>
<span class="line"><span> let subArgs = args.slice(0);</span></span>
<span class="line"><span> for(let i = 0; i &lt; arguments.length; i++) {</span></span>
<span class="line"><span> subArgs.push(arguments[i]);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> if(subArgs.length &lt; length) {</span></span>
<span class="line"><span>  return currency(fn, subArgs);</span></span>
<span class="line"><span> } else {</span></span>
<span class="line"><span> return fn.apply(this, subArgs);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>- es6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const curry = fn =&gt; (...args) =&gt; args.length === fn.length ? fn(...args) : curry(fn, ...args);</span></span></code></pre></div><h2 id="promise-手写-ajax" tabindex="-1">promise 手写 ajax <a class="header-anchor" href="#promise-手写-ajax" aria-label="Permalink to &quot;promise 手写 ajax&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xhr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XMLHttpRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,url,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onreadystatechange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.readyState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.responseText);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.statusText));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.responseType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRequestHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Accept&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onerror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.statusText));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="手写浅拷贝" tabindex="-1">手写浅拷贝 <a class="header-anchor" href="#手写浅拷贝" aria-label="Permalink to &quot;手写浅拷贝&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      newObj[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[key];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 扩展运算法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="手写深拷贝" tabindex="-1">手写深拷贝 <a class="header-anchor" href="#手写深拷贝" aria-label="Permalink to &quot;手写深拷贝&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iobj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     newObj[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj[key]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[key];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj;q2wert</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="数组求和" tabindex="-1">数组求和 <a class="header-anchor" href="#数组求和" aria-label="Permalink to &quot;数组求和&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="数组扁平化" tabindex="-1">数组扁平化 <a class="header-anchor" href="#数组扁平化" aria-label="Permalink to &quot;数组扁平化&quot;">​</a></h2><h3 id="es5" tabindex="-1">ES5 <a class="header-anchor" href="#es5" aria-label="Permalink to &quot;ES5&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flatten</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[i])){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flatten</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[i]));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[i]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flatten</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(next) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flatten</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(next) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> next)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, [])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="js-对象转树形数组" tabindex="-1">js 对象转树形数组 <a class="header-anchor" href="#js-对象转树形数组" aria-label="Permalink to &quot;js 对象转树形数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function objToArr(obj) {</span></span>
<span class="line"><span>let result =[]</span></span>
<span class="line"><span> if(!Array.isArray(obj)){</span></span>
<span class="line"><span> return result</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> let map={}</span></span>
<span class="line"><span> obj.forEach(item=&gt;{</span></span>
<span class="line"><span> map[item.id] = item</span></span>
<span class="line"><span> })</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> obj.forEach(item=&gt;{</span></span>
<span class="line"><span>  let parent = map[item.parentId]</span></span>
<span class="line"><span>  if(parent){</span></span>
<span class="line"><span>  (parent.children || (parent.children = [])).push(item)</span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>  result.push(item)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> }) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,48),e=[l];function t(h,k,r,c,E,d){return n(),a("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
