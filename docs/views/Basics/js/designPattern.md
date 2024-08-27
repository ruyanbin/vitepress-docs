---
prev:
  text: "首页"
  link: /views/Basics/js/index
next:
  text: "webapi"
  link: /views/Basics/js/webApi
---

# 设计模式

::: tip
设计模式是用来提升代码质量，增强代码可读性，提高代码复用性和可维护性的设计原则集合
:::

## 1. 创建型模式

### 1.1 单例模式

:::
单例模式使用在任何情况下一个类仅有一个实例，并且提供一个访问它的全局访问点的设计模式，他主要用于控制对全局唯一资源的访问
:::

```js
class singleton {
	static instance = null;
	constructor() {
		if (!singleton.instance) {
			singleton.instance = this;
		}
		return singleton.instance;
	}
	someMethod() {
		// 实现共享资源的方法
	}
}

const instance1 = new singleton();
const instance2 = new singleton();
console.log(instance1 == instance2); // 输出 true 表明他们是一个实例
```

### 1.2 抽象工厂模式

::: tip
抽象工厂模式提供了一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们具体的类。客户端使用此接口选择所需要的产品线，而不需要知道具体的类
:::

```js
// 抽象工厂
class AbstractFactory {
	createCar() {
		throw new Error("抽象方法需要，需要子类实现");
	}

	createTruck() {
		throw new Error("抽象方法需要，需要子类实现");
	}
}
// 具体工厂
class CarFactory extends AbstractFactory {
	createCar() {
		return new Car();
	}

	createTruck() {
		return new Truck();
	}
}
//产品
class Car {}
class Truck {}
const factory = new CarFactory();
const car = factory.createCar();
const truck = factory.createTruck();
```

### 工厂模式

::: tip
工厂模式是指定义一个创建对象的接口，让子类决定实例化哪一个类。工厂模式让类的实例化延迟到子类。
:::

```js
class Car {}
class Truck {}
class Factory {
	create(type) {
		switch (type) {
			case "car":
				return new Car();
			case "truck":
				return new Truck();
			default:
				throw new Error("未知类型");
		}
	}
}
const factory = new Factory();
const car = factory.create("car");
const truck = factory.create("truck");
```

### 1.3 建造者模式

::: tip
建造者模式将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。客户端只需要指定构建的对象类型，而具体如何构建，由该类型的建造者决定。
:::

```js
class Product {
	constructor() {
		this.computers = {
			cpu: "",
			memory: "",
		};
	}
	setCpu(cpu) {
		this.computers.cpu = cpu;
		return this;
	}
	setMemory(memory) {
		this.computers.memory = memory;
		return this;
	}
}

class children extends Product {
	// 添加一些特有的方法和属性
}

const buildr = new children().useCpu("intel").useMemory("8G");
```

### 1.4 原型模式

::: tip
原型模式通过复制原型对象来创建新对象，而不是通过构造函数来创建。原型对象可以包含实例属性和方法，也可以包含原型属性和方法。原型对象可以被共享，从而节省内存。原型对象可以被修改，从而影响所有实例。原型对象可以被继承，从而实现多继承。原型对象可以被复制，从而实现深拷贝。原型对象可以被序列化，从而实现网络传输。原型对象可以被反序列化，从而实现网络传输。原型对象可以被缓存，从而实现缓存。原型对象可以被缓存，从而实现缓存。原型对象可以被缓存，从而实现缓存。原型对象可以被缓存，从而实现缓存。原型对象可以被缓存，从而实现缓存
:::

```js
function prototypeObj(obj) {
this.name = obj.name;
}
prototypeObj.prototype.clone = function () {
 let clone =Object.create(this);
 clone.name = this.name+’——clone‘
 return clone;
}

const obj = new prototypeObj({name: 'prototype'});
const clone = obj.clone();
console.log(clone);
```

## 2. 结构型模式

### 2.1 适配器模式

::: tip
适配器模式是一种结构型设计模式，它允许两个不兼容的对象进行合作。适配器模式通过将一个类的接口转换成客户希望的另一个接口，使原本由于接口不兼容而不能一起工作的类可以一起工作。适配器模式可以解决两个不兼容的接口之间的兼容性问题，也可以解决两个不兼容的类之间的兼容性问题。
:::

```ts
class Adaptee {

specificRequest() {
console.log('执行特殊请求')
}
}

// 目标接口
interface Target {
request(): void;
}

// 适配器类
class Adapter implements Target {
private adaptee: Adaptee;
constructor(private adaptee: Adaptee) {
 this.adaptee = adaptee;
}
request(): void {
 this.adaptee.specificRequest();
}

//使用
const  adaptee = new Adaptee();

let
    adapter = new Adapter(adaptee);
// adapter.request();//输出 '执行特殊请求'

```

### 2.2 桥接模式

::: tip
桥接模式是一种结构型设计模式，它将抽象部分与它的实现部分分离，使它们可以独立地变化. 从而提高了系统的可扩展性和可维护性。

:::

```
// 抽象部分
abstract class Shape {
abstract drawCircle(radius: number,x: number,y: number): void;
}
//具体实现
class DrawinAPI1 extends Shape {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`drawing circle with radius ${radius} at position (${x},${y}) using API1`)
    }
}
class DrawinAPI2 extends Shape {
    drawCircle(radius: number, x: number, y: number): void {
      console.log(`drawing circle with radius ${radius} at position (${x},${y}) using API2`)
    }
}

class Shape1 {
 protected api: DrawinAPI1;
    constructor(api: DrawinAPI1) {
        this.api = api;
    }
    setApi(api: DrawinAPI1) {
    this.api = api;
    }
    abstract draw(): void;
}

// 结构与实验相结合

class Circle extends Shape1 {
    constructor(api) {
        super.constructor(api);
    }
    draw(): void {
        this.api.drawCircle(10, 0, 0);
    }
}
```

### 2.3 装饰器模式

::: tip
装饰器模式是一种结构型设计模式，它允许向一个现有的对象添加新的功能，同时又不改变其结构。 ，动态地给一个对象添加新的功能。
装饰器模式可以实现代码的解耦和可扩展性。
:::

```ts
class Coffee {
	cost(): number {
		return 10;
	}

	description(): string {
		return "咖啡";
	}
}

// 装饰器
abstract class CoffeeDecorator implements Coffee {
	protected coffee: Coffee;

	constructor(coffee: Coffee) {
		this.coffee = coffee;
	}

	cost(): number {
		return this.coffee.cost();
	}

	description(): string {
		return this.coffee.description();
	}
}

class MilkDecorator extends CoffeeDecorator {
	constructor(coffee: Coffee) {
		super(coffee);
	}
	cost(): number {
		return super.cost() + 5;
	}
	description(): string {
		return super.description() + "+ 牛奶";
	}
}
// 使用
const coffee = new Coffee();
console.log(coffee.cost()); // 10
console.log(coffee.description()); // 咖啡

// 使用装饰器
const milkCoffee = new MilkDecorator(coffee);
console.log(milkCoffee.cost()); // 15
console.log(milkCoffee.description()); // 咖啡+ 牛奶
```

### 2.4 组合模式

::: tip

组合模式是一种结构型设计模式，它允许你将对象组合成树形结构，以表示“部分-整体”的层次结构。
组合模式使得用户对单个对象和组合对象可以具有一致的访问性。组合模式可以方便地实现对对象和组合对象的统一处理
:::

```ts
class Component {
	operation(): string {
		return "默认组件操作";
	}

	add(component: Component): void {}
	remove(component: Component): void {}
}

class Leaf extends Component {
	operation(): string {
		return "叶子节点操作";
	}
}

class Composite extends Component {
	private children: Component[] = [];

	add(component: Component): void {
		this.children.push(component);
	}

	remove(component: Component): void {
		const index = this.children.indexOf(component);
		if (index > -1) {
			this.children.splice(index, 1);
		}
	}

	operation(): string {
		let result = "";
		for (const child of this.children) {
			result += child.operation();
		}
		return `复合组件操作: ${result}`;
	}
}

// 使用
let leaf = new Leaf();
console.log(leaf.operation()); // 输出："叶子节点操作"

let composite = new Composite();
composite.add(leaf);

console.log(composite.operation()); // 输出："复合组件操作: 叶子节点操作"
```

### 2.5 外观模式

::: tip

外观模式是一种结构型设计模式，
它通过提供一个统一的接口来隐藏系统的复杂性，使得客户端可以更方便地使用这些系统。
:::

```ts
class SubSystemOne {
	method1(): void {
		console.log("子系统1的方法1被调用");
	}
}

class SubSystemTwo {
	method2(): void {
		console.log("子系统2的方法2被调用");
	}
}

class Facade {
	private subsystemOne: SubSystemOne;
	private subsystemTwo: SubSystemTwo;

	constructor() {
		this.subsystemOne = new SubSystemOne();
		this.subsystemTwo = new SubSystemTwo();
	}
}
```

### 2.6 享元模式

::: tip
享元模式是一种结构型设计模式，它允许重复使用现有的对象，从而减少内存使用量，提高性能。
:::

```ts
class Flyweight {
	private intrinsicState: string;

	constructor(intrinsicState: string) {
		this.intrinsicState = intrinsicState;
	}

	operation(extrinsicState: string): string {
		return `${this.intrinsicState}, ${extrinsicState}`;
	}
}

class FlyweightFactory {
	private flyweights: Map<string, Flyweight> = new Map();

	getFlyweight(intrinsicState: string): Flyweight {
		let flyweight = this.flyweights.get(intrinsicState);
		if (!flyweight) {
			flyweight = new Flyweight(intrinsicState);
			this.flyweights.set(intrinsicState, flyweight);
		}
		return flyweight;
	}
}

// 使用
let factory = new FlyweightFactory();

let flyweight1 = factory.getFlyweight("TypeA");
console.log(flyweight1.operation("Instance1")); // 输出："TypeA, Instance1"

let flyweight2 = factory.getFlyweight("TypeA");
console.log(flyweight2.operation("Instance2")); // 输出："TypeA, Instance2"

// 注意这里返回的是同一个享元对象，节省了内存
```

## 行为设计模式

### 模版方法模式

模版方法模式是一种行为设计模式，它定义了一个算法的框架，并将一些步骤延迟到子类中实现。

```js
class AbstractClass {
	templateMethod(): void {
		this.baseOperation1();
		this.optionalOperation1();
		this.requiredOperation1();
		this.optionalOperation2();
	}
	baseOperation1(): void {
		console.log("抽象类中的基本操作1");
	}
	requiredOperation1(): void {
		console.log("必须要执行的方法");
	}
	optionalOperation1(): void {
		console.log("可选方法");
	}
	optionalOperation2(): void {
		console.log("可选方法");
	}
}

class ConcreteClass extends AbstractClass {
	optionalOperation1() {
		console.log("子类重写可选方法");
	}

	optionalOperation2() {
		console.log("子类重写可选方法");
	}
}
let concreteClass = new ConcreteClass();
concreteClass.templateMethod();
```

## 命令设计模式

::: tip
将一个请求封装为一个对象，从而允许你用不同的请求、队列或者日志来参数化其他对象。
命令模式也支持可撤销的操作。

:::

```js
class Receiver {
	executeCommand(): void {
		console.log("接受命令");
	}
}
class Command {
	constructor(receiver: Receiver) {
		this.receiver = receiver;
	}
	execute(): void {
		this.receiver.executeCommand();
	}
	undo(): void {
		console.log("撤销命令");
	}
}

class Invoker {
	command: Command | null = null;
	setCommand(command: Command) {
		this.command = command;
	}
	invoke(): void {
		if (this.command) {
			this.command.execute();
		}
	}
	undo(): void {
		if (this.command) {
			this.command.undo();
		}
	}
}
```

### 迭代器设计模式

::: tip
提供一方法顺序访问聚合对象的各个元素，而不暴露聚合对象的内部表示。
:::

```js
class Collection {
	cosnstructor(items: string[]) {
		this.items = items;
	}
	[Symbol.iterator]() {
		let index = 0;
		let collection = this.items;
		return {
			next: () => {
				if (index < collection.length) {
					return {
						value: collection[index++],
						done: false,
					};
				} else {
					return {
						value: undefined,
						done: true,
					};
				}
			},
		};
	}
}
let collection = new Collection(["a", "b", "c"]);
for (let item of collection) {
	console.log(item);
}
// 数组内置迭代器

let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
	console.log(fruit);
}
```

## 观察者设计模式

::: tip
定义了对象之间的依赖关系，当一个对象发生改变时，所有依赖于它的对象都会得到通知并被自动更新。
:::

```js
class Subject {
	constructor() {
		this.observers = [];
	}
	subscribe(observer) {
		this.observers.push(observer);
	}
	unsubscribe(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}
	notify(data: any) {
		this.observers.forEach((observer) => observer.update(data));
	}
}

class Observer {
	update(data: any) {
		console.log(`Observer received data: ${data}`);
	}
}

let subject = new Subject();
let observer1 = new Observer();
let observer2 = new Observer();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello");
subject.unsubscribe(observer1);
subject.notify("World");
```
