# 继承

::: tip
继承是面向对象编程的一个特征，它允许我们定义一个类作为另一个类的子类，从而继承父类的属性和方法。子类可以继承父类的属性和方法，也可以添加自己的属性和方法。
:::

## 继承的语法

```python
class 子类名(父类名):
    ...
```

## 继承的示例

````python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("I am an animal.")

class Dog(Animal):
    def speak(self):
        print("Woof!")
:::


### 获取对象信息
::: tip
获取对象信息是指获取对象的类型、属性和方法等信息。
在Python中，可以通过dir()函数来获取对象的信息。dir()函数返回一个包含对象所有属性和方法的列表。
:::

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("I am an animal.")

class Dog(Animal):
    def speak(self):
        print("Woof!")

dog = Dog("Buddy")
print(dir(dog))
```

## 多态

::: tip
多态是面向对象编程的一个特征，它允许我们定义一个接口，然后让不同的类实现这个接口，从而实现不同的行为。
多态的目的是让代码更加灵活和可扩展。
:::

## 封装

::: tip
封装是面向对象编程的一个特征，它允许我们将数据和方法封装在一个类中，从而实现数据的隐藏和保护。
封装的目的是让代码更加安全和可靠。
:::

## 抽象

::: tip
抽象是面向对象编程的一个特征，它允许我们定义一个抽象类，然后让不同的类继承这个抽象类，从而实现不同的行为。
抽象的目的是让代码更加简洁和易于理解。
:::

### api

#### type

```python
type(object)
```

返回对象的类型

#### isinstance

```python
isinstance(object, classinfo)
```

判断对象是否是某个类的实例

#### hasattr

```python
hasattr(object, name)
```

判断对象是否有某个属性

#### getattr

```python
getattr(object, name[, default])
```

获取对象的属性值

#### setattr

```python
setattr(object, name, value)
```

设置对象的属性值

#### delattr

```python
delattr(object, name)
```

删除对象的属性

#### dir
::: tip

获取对象的所有属性和方法
:::
```python
dir(object)
```

#### help

```python
help(object)
```
::: tip
获取对象的帮助信息
:::
#### id
::: tip
获取对象的内存地址
:::
```python
id(object)
```


#### repr

::: tip

获取对象的字符串表示
:::
```python
repr(object)
```

#### str
::: tip
获取对象的字符串表示
:::

```python
str(object)
```


#### vars
::: tip
获取对象的属性值
:::
```python
vars(object)
```

#### format
::: tip
格式化字符串
:::
```python
format(value[, format_spec])
```



#### input
::: tip
获取用户输入
:::
```python
input([prompt])
```

#### open
::: tip
打开文件
:::
```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

#### print
::: tip
打印输出
:::
```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

#### sum
::: tip
求和
:::
```python
sum(iterable[, start])
```

#### len
::: tip
获取对象的长度
:::
```python
len(object)
```

#### max
::: tip
获取最大值
:::
```python
max(iterable, *[, key, default])
```

#### min
::: tip
获取最小值
:::
```python
min(iterable, *[, key, default])
```

#### round
::: tip
四舍五入
:::
```python
round(number[, ndigits])
```

#### abs
::: tip
获取绝对值
:::
```python
abs(x)
```

#### pow
::: tip
幂运算
:::
```python
pow(x, y[, z])
```

#### divmod
::: tip
取商和余数
:::
```python
divmod(x, y)
```

````
