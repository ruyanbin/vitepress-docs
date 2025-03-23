# 高级特性
## 切片
切片操作可以从一个序列中获取一个子序列，语法为：

```python
sname[start : end : step]
```

- start表示起始索引（包含该索引本身），默认为0
- end表示终止索引（不包含该索引本身），默认为序列的长度
- step表示步长，默认为1

::: tip
切片的本质是获取序列中指定索引对应的元素
:::
```
#### 示例
>>> s = 'abcdefg'
>>> s[1:5]
'bcde'
>>> s[1:5:2]
'bcd'
```

## 列表生成
列表生成式是一个语法糖，用于快速创建列表，语法为：

```python
[表达式 for 变量 in 序列]
```
```
#### 示例
>>> [x * x for x in range(1, 11)]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## 生成器
::: tip
生成器是一个特殊的迭代器，它可以通过函数来创建，函数中使用yield语句来返回一个值，每次调用生成器的next()方法时，函数会执行到yield语句，然后返回yield语句后面的值，直到函数执行完毕。
在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行
:::
```
#### 示例
>>> def fib(max):
...     n, a, b = 0, 0, 1
...     while n < max:
...         yield b
...         a, b = b, a + b
...         n = n + 1
...     return 'done'
>>> f = fib(6)
```
::: tip
generator是非常强大的工具，在Python中，可以简单地把列表生成式改成generator，也可以通过函数实现复杂逻辑的generator。

要理解generator的工作原理，它是在for循环的过程中不断计算出下一个元素，并在适当的条件结束for循环。对于函数改成的generator来说，遇到return语句或者执行到函数体最后一行语句，就是结束generator的指令，for循环随之结束。
:::

## 迭代器
::: tip
迭代器是一个可以记住遍历的位置的对象，迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。
:::
```
#### 示例
>>> from collections.abc import Iterable
>>> isinstance([], Iterable)
True
>>> isinstance({}, Iterable)
True
>>> isinstance('abc', Iterable)
True
``` 
### Iterable 与 Iterator区别
::: tip
Iterable 是可迭代对象，而 Iterator 是迭代器。
Iterable 可以通过 iter() 函数转换为 Iterator
Iterator 可以被 for 循环使用，但是 Iterable 不能。
Iterator 可以被 next() 函数调用，但是 Iterable 不能。
 用iter 函数可以将 Iterable 转换为 Iterator

:::
### 如何判断一个对象是可迭代对象
::: tip
判断一个对象是否是 Iterable 对象，可以使用 isinstance() 函数，如果对象是 Iterable 对象，则返回 True，否则返回 False。
:::

### 小结
::: danger
凡是可作用于for循环的对象都是Iterable类型；

凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列；

集合数据类型如list、dict、str等是Iterable但不是Iterator，不过可以通过iter()函数获得一个Iterator对象。
Python的for循环本质上就是通过不断调用next()函数实现的
:::