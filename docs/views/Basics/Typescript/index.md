# typescript

:::
它是Javascript的超集，可以编译成Javascript代码，并且可以在浏览器中运行。
添加型检查，可以减少错误。
:::

 安装
```bash
npm install -g typescript
```
创建一个ts文件
```bash
touch index.ts
```
编译
```bash
tsc index.ts
```
运行
```bash
node index.js
```
在typescript中，我们可以使用类型注解来指定变量的类型。例如：
```typescript
let name: string = "John";
```

## 变量声明规则

1. 变量名称可以包含数字和字母
2. 除了下划线和$符号外，不能包含其他字符，包括空格
3. 变量名不能以数字开头