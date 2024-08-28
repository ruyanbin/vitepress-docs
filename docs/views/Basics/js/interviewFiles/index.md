## proxy 能够监听到对象中对象的引用吗？

::: tip
是的，proxy 能够监听到对象属性的读取和设置操作，包括对象中嵌套的对象的引用操作。但是要注意的是，当你想要监听-个嵌套对象内部的变化时，
南无你需要单独为这个嵌套对象也创建一个 proxy 实例。因为 proxy 只能直接监听他直接代理的对象的操作，对于嵌套对象的操作，需要嵌套的使用 proxy
来使用 proxy 来实现深度监听。
:::

```js
function createDeppProxy(obj) {
	const handler = {
		get(target, property, receiver) {
			const value = Reflect.get(target, property, receiver);
			if (typeof value === "object" && value !== null) {
				return createDeppProxy(value);
			}
			return value;
		},
		set(target, property, value, receiver) {
			return Reflect.set(target, property, value, receiver);
		},
	};
	return new Proxy(obj, handler);
}

const obj = {
	name: "zhangsan",
	age: 18,
	address: {
		city: "beijing",
		street: "huayang",
	},
};

console.log(createDeppProxy(obj));
```

### 实现一个函数，支持深度遍历 js 对象，且允许在遍历的时候，修改对象的数据，得到新的对象。

```js
function deepTraverse(obj, modifierFunction) {
	if (typeof obj !== "object" || obj === null) {
		return modifierFunction(obj);
	}
	if (Array.isArray(obj)) {
		return obj.map((item) => deepTraverse(item, modifierFunction));
	}

	const modifiedObj = {};
	Object.keys(obj).forEach((key) => {
		const value = obj[key];
		if (typeof value === "object" && value !== null) {
			modifiedObj[key] = deepTraverse(value, modifierFunction);
		} else {
			modifiedObj[key] = modifierFunction(value, key);
		}
	});
	return modifiedObj;
}

const obj = {
	a: 1,
	b: [1, 2, 3],
	c: {
		f: 1,
		e: 3,
	},
};
const modifierFunction = deepTraverse(obj, (value, key) => {
	if (typeof value === "number") {
		return value + 10;
	}
	return value;
});
console.log(obj, "before");
console.log(modifierFunction, "after");
```

## js 如何判空

```js
function isEmpty(value) {
	if (typeof value === "string" && value.trim() === "") {
		return true;
	}
	if (typeof value === "number" && value === 0) {
		return true;
	}
	if (Array.isArray(value) && value.length === 0) {
		return true;
	}
	if (
		typeof value === "object" &&
		value !== null &&
		Object.keys(value).length === 0
	) {
		return true;
	}
	if (value === null) {
		return true;
	}
	if (value === undefined) {
		return true;
	}
	if (value instanceof Map && value.size === 0) {
		return true;
	}
	if (value instanceof Set && value.size === 0) {
		return true;
	}
	return false;
}
```

## 判断一个对象 是否为空，包含了其原型链上是否有自定义的数据和方法

```js {4}
function isObjectEmpty(obj) {
	const ownProperties = Object.getOwnPropertyNames(obj);
	for (const property of ownProperties) {
		const descriptor = Object.getOwnPropertyDescriptor(obj, property);
		if (
			(descriptor.value &&
				descriptor.value !== null &&
				descriptor.value !== undefined) ||
			typeof descriptor.value === "function"
		) {
			return false;
		}
	}
	const protoype = Object.getPrototypeOf(obj);
	while (protoype && protoype !== Object.prototype) {
		const prototypeProperties = Object.getOwnPropertyNames(protoype);
		for (const property of prototypeProperties) {
			const descriptor = Object.getOwnPropertyDescriptor(protoype, property);
			if (
				(descriptor.value &&
					descriptor.value !== null &&
					descriptor.value !== undefined) ||
				typeof descriptor.value === "function"
			) {
				return false;
			}
		}
		prototype = Object.getPrototypeOf(protoype);
	}
	return true;
}
```

## 虚拟滚动

::: tip
使用 InterSectionObserver API 来实现虚拟滚意味着我们会依赖于浏览器的 API 来观察元素进入或离开视口，
而非直接监听滚动事件。因此，我们不需要监听滚动事件，只需要在元素进入或离开视口时，更新其位置和显示状态即可。
:::

```js
class virtualScroll {
	constructor(container, itemHeight, totalItems, renderItem) {
		this.container = container;
		this.itemHeight = itemHeight;
		this.totalItems = totalItems;
		this.renderItem = renderItem;
		this.observer = new IntersectionObserver(
			this.handleIntersection.bind(this),
			{
				root: this.container,
				threshold: 1,
			}
		);
		this.items = new Map();
		this.init();
	}
	init() {
		for (let i = 0; i < this.totalItems; i++) {
			const placeholder = this.createPlaceholder(i);
			this.container.appendChild(placeholder);
			this.observer.observe(placeholder);
		}
	}

	createPlaceholder(index) {
		const placeholder = document.createElement("div");
		placeholder.style.height = `${this.itemHeight}px`;
		placeholder.dataset.index = index;
		return placeholder;
	}
	handleIntersection(entries) {
		entries.forEach((entry) => {
			const index = parseInt(entry.target.dataset.index);
			if (entry.isIntersecting) {
				const item = this.renderItem(index);
				this.container.appendChild(item);
				this.items.set(index, item);
			} else if (this.items.has(index)) {
				const placeholder = this.createPlaceholder(index);
				this.container.replaceChild(placeholder, this.items.get(index));
				this.observer.observe(placeholder);
				this.items.delete(index);
			}
		});
	}
}

function renderItem(index) {
	const item = document.createElement("div");
	item.classList.add("item");
	item.textContent = `Item ${index}`;
	item.dataset.index = index;
	item.style.height = `30px`;
	return item;
}
const container = document.querySelector(".container");
const virtualScroll = new virtualScroll(container, 30, 1000, renderItem);
```

## 电梯导航

```tip
let rightBox = document.querySelector('.rightBox')
    rightBox.addEventListener('click', function (e) {
      let target = e.target || e.srcElement;
      if (target && !target.classList.contains('rightBox')) {
        document.querySelector('.' + target.className.replace('Li', '')).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }, false)

    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        let target = document.querySelector('.' + entry.target.className + 'Li')

        if (entry.isIntersecting && entry.intersectionRatio > 0.65) {

          document.querySelectorAll('li').forEach(el => {
            if(el.classList.contains('active')){
              el.classList.remove('active')
            }
          })

          if (!target.classList.contains('active')) {
            target.classList.add('active')
          }
        }
      })
    }, {
      threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
    })

    document.querySelectorAll('div').forEach(el => {
      observer.observe(el)
    })

```


## 在选的文本中添加右键菜单

1.监听鼠标右键事件 在文档或富文本区域上添加 contextmenu 事件的监听
```
document.addEventListener('contextmenu', function (e) {
// 阻止默认事件
event.preventDefault()
// 添加自定义菜单
})
```
2. 显示自定义右键菜单
创建自定义菜单元素并根据选择的文本设置菜单选项

```
function showMenu(event) {
 const customMenu = document.createElement('div')
 customMenu.style.position = 'absolute'
 customMenu.style.top = event.clientY + 'px'
 customMenu.style.left = event.clientX + 'px'
 // 
 const menuItems1 = document.createElement('div')
 menuItems1.textContent = '复制'
 menuItems1.addEventListener('click', function () {
 copySelectedText()})
 customMenu.appendChild(menuItems1)
 document.body.appendChild(customMenu)
}

```

3. 处理菜单的点击事件
 例如复制选中文本功能
```
function copySelectedText() {
const selection = window.getSelection()
if (selection.toString()) {
const range = selection.getRangeAt(0)
const clipboardData = new ClipboardEvent('copy',{
  clipboardData: {text: range.toString()},
  bubbles: true
}).clipboardData
data.executeCommand('copy',false,clipboardData)
}
}
```
4. 移除自定义菜单 当用户点击菜单之外的区域时，隐藏自定义菜单
```
document.addEventListener('click', function (e) {
const customMenu = document.querySelector('.customMenu')
if (customMenu && !customMenu.contains(e.target)) {
customMenu.remove()}

})


```