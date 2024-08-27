# MutationObserver

::: tip

MutationObserver 是一个在浏览器环境中一种用于监听 DOM 变化的 JavaScript API，它可以用于监听 DOM 树中指定节点及其子节点的变化，当节点内容、属性、子节点结构等发生改变时，它可以及时检测到并触发回调函数。这对于前端开发来说非常有用，可以被用来监控 DOM 变化、异步数据加载和自定义组件等场景。

:::

## 1. 基本用法

```js
const targetNode = document.getElementById("some-id");
const config = { attributes: true, childList: true, subtree: true };
const callback = function (mutationsList, observer) {
	for (const mutation of mutationsList) {
		if (mutation.type === "childList") {
			console.log("A child node has been added or removed.");
		} else if (mutation.type === "attributes") {
			console.log("The " + mutation.attributeName + " attribute was modified.");
		}
	}
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
```

## 2. 参数

- `targetNode`：要观察的目标节点。
- `config`：一个配置对象，用于指定要观察的变化类型。可以包含以下属性：
  - `attributes`：如果为 true，则观察目标节点的属性变化。
  - `attributeOldValue`：如果为 true，则记录目标节点的属性变化前的值。默认为 false。
  - `childList`：如果为 true，则观察目标节点的子节点变化。
  - `characterData`：如果为 true，则观察目标节点的文本内容变化。
  - `characterDataOldValue`：如果为 true，则记录目标节点的文本内容变化前的值。默认为 false。
  - `subtree`：如果为 true，则观察目标节点的所有后代节点。
- `callback`：当目标节点发生变化时执行的回调函数。

## 3. 方法

- `disconnect()`：停止观察目标节点。调用此方法后，MutationObserver 将不再监听目标节点的变化。
- `observe(targetNode, config)`：开始观察目标节点。可以多次调用此方法来观察多个目标节点。
- `takeRecords()`：返回一个包含所有未处理的 MutationRecord 对象的数组，并将这些 MutationRecord 对象从 MutationObserver 的队列中移除。

## 4. MutationRecord

MutationRecord 对象表示一个 DOM 树的变化。它包含以下属性：

- `type`：变化类型，可以是`"attributes"`、`"childList"`或`"characterData"`。
- `target`：变化发生的目标节点。
- `addedNodes`：如果变化类型为`"childList"`，则包含被添加的子节点的列表。
- `removedNodes`：如果变化类型为`"childList"`，则包含被移除的子节点的列表。
- `previousSibling`：如果变化类型为`"childList"`，则包含被添加或移除的节点的前一个兄弟节点。
- `nextSibling`：如果变化类型为`"childList"`，则包含被添加或移除的节点的后一个兄弟节点。
- `attributeName`：如果变化类型为`"attributes"`，则包含被修改的属性的名称。

MutationRecord 对象还可以包含一些额外的属性，具体取决于变化类型。例如，如果变化类型为`"attributes"`，则`attributeName`属性将包含被修改的属性的名称，而`oldValue`属性将包含被修改的属性的原始值。

```js 手写mextTick
export  function myNextTick(cb) {
  let app = document.createElement('app')
  var observerOPtion = {
   childList: true, // 观察自截单是否变化
   attributes: true, // 观察属性是否变化
   subtree: true, // 观察目标节点所有后代节点 默认false
  }

  let observer = new MutationObserver(function(mutations) {
	//当don
	fn();
	// 取消监听
	observer.disconnect();
  })、
  observer.observe(app, observerOPtion)

}

```
