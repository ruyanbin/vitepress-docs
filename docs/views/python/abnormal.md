# 异常捕获

```python
try:
    # 尝试执行的代码
    pass
except 错误类型1:
    # 针对错误类型1，对应的代码处理
    pass
except (错误类型2, 错误类型3):
    # 针对错误类型2 和 3，对应的代码处理
    pass
except Exception as result:
    print("未知错误 %s" % result)
else:
    # 没有异常才会执行的代码
    pass
finally:
    # 无论是否有异常，都会执行的代码
    print("无论是否有异常，都会执行的代码")
```

：：：tip
try...except...else...finally
：：：
注意
：：：warning

1. try 只负责检测异常，不负责处理异常
2. except 只负责处理异常，不负责检测异常
3. else 只负责没有异常时执行的代码，不负责检测异常
4. finally 只负责不管是否有异常都会执行的代码，不负责检测异常和异常处理

只要一处 except 的捕获到了异常，就不会继续往下捕获异常了
finally 一般用于释放资源，如文件、网络连接、数据库连接等
except Exception 里的 as e 可以省略> e
：：：

# 抛出异常

## raise

```python
raise 异常类型(错误信息)
```

## assert

```python
assert 条件
assert 条件, 错误信息
```
