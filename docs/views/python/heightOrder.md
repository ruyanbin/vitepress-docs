# 高阶函数

## 高阶函数的定义

- 接收函数作为参数，或者将函数作为返回值的函数就是高阶函数
- 当我们使用一个函数作为参数时，实际上是将指定的代码传递进了目标函数

### map

- map(func, lst)，将传入的函数变量 func 作用到 lst 变量的每个元素中，并将结果组成新的列表(Python2)/迭代器(Python3)返回
- map 函数的作用是将传入的函数依次作用到序列的每个元素，并把结果作为新的 Iterator 返回。
- map()函数接收两个参数，一个是函数，一个是 Iterable，map 将把函数依次作用到序列的每个元素，并把结果作为新的 Iterator 返回。

```python
def square(x):
    return x * x


print(list(map(square, [1, 2, 3, 4, 5, 6, 7, 8, 9])))
# [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### reduce

- reduce(func, lst)，其中 func 必须有两个参数。每次 func 计算的结果继续和序列的下一个元素做累积计算
- reduce 把一个函数作用在一个序列[x1, x2, x3, ...]上，这个函数必须接收两个参数，reduce 把结果继续和序列的下一个元素做累积计算，其效果就是：

```python
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
```

```python
from functools import reduce


def add(x, y):
    return x + y


print(reduce(add, [1, 3, 5, 7, 9]))
# 25
```

### filter

- filter(func, lst)，结果也是一个 Iterator，把传入的函数依次作用于每个元素，然后根据返回值是 True 还是 False 决定保留还是丢弃该元素
- filter()函数用于过滤序列，过滤掉不符合条件的元素，返回由符合条件元素组成的新迭代器。

```python
def is_odd(n):
    return n % 2 == 1


print(list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15])))
# [1, 5, 9, 15]
```

### sorted

- sorted(iterable, key=None, reverse=False)
- 对所有可迭代的对象进行排序操作。
- iterable -- 可迭代对象。
- key -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。
- reverse -- 排序规则，reverse = True 降序 ， reverse = False 升序（默认）。
- 返回重新排序的列表。

```python
a = [5,7,6,3,4,1,2]
b = sorted(a)       # 保留原列表
print(a)
print(b)
# [5, 7, 6, 3, 4, 1, 2]
# [1, 2, 3, 4, 5, 6, 7]
```

```python
a = [5,7,6,3,4,1,2]
b = sorted(a,reverse=True)  # 保留原列表
print(a)
print(b)
# [5, 7, 6, 3, 4, 1, 2]
# [7, 6, 5, 4, 3, 2, 1]
```

```python
a = [5,7,6,3,4,1,2]
b = sorted(a,key=abs)  # 保留原列表
print(a)
print(b)
# [5, 7, 6, 3, 4, 1, 2]
# [1, 2, 3, 4, 5, 6, 7]
```

### 装饰器

- 装饰器，一种特殊的函数，它接收一个函数作为参数，并返回一个函数。
- 装饰器可以用来修改函数的行为，而不需要修改函数的代码。
- 装饰器是一种非常强大的工具，可以用来实现各种高级功能，如日志记录、性能测试、权限检查等。

```python
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper

@log
def now():
    print('2015-3-25')

now()
# call now():
# 2015-3-25
```

### 偏函数

- 偏函数，将函数的某些参数固定下来，返回一个新的函数。
- 偏函数可以用来简化函数的调用，减少函数的参数个数。
- 偏函数可以用来实现一些高级功能，如默认参数、可变参数等。

```python
import functools

int2 = functools.partial(int, base=2)
print(int2('1000000'))
print(int2('1010101'))
# 64
# 85
```
