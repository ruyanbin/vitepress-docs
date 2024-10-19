# Mybatis

## 接口创建

``` mybatis
@Mapper
public interface 接口 {
  
}
```

## 查询

``` jdk
@Select("select * from 表名")
public List<实体类> list()
```

查询单个

```
@Select("select * from 表名 where id = #{id}")
public 实体类 get(int id)
```

## 删除

``` jdk
@Delete("delete from 表名 where id = #{id}")
public int delete(int id)
```

## 新增

``` jdk
// 返回自增主键
@Options(useGeneratedKeys = true, keyProperty = "id")
@Insert("insert into 表名 (字段1, 字段2) values (#{字段1}, #{字段2})")
public int insert(实体类 实体类)
```

## 修改

```
@Update("update 表名 set 字段1 = #{字段1}, 字段2 = #{字段2} where id = #{id}")
public int update(实体类 实体类)
```

## 数据封装

::: tip
  实体类的属性名与数据库表的字段名一致,myBatis 会自动封装数据
  不一致的话,需要在实体类的属性上添加 @Column 注解,指定数据库表中的字段名
:::

1. 起别名

```
@Select("select id as id, name as name from 表名")
public List<实体类> list()
```

2. `@Result`

```
@Select("select id, name from 表名")
@Results({
    @Result(property = "id", column = "id"),
    @Result(property = "name", column = "name")
})
public List<实体类> list()
```

3. 开启mybatis 驼峰明明开关

```
mybatis.configuration.map-underscore-to-camel-case=true
```

## 映射文件

### 在 `application.properties`  文件中添加 映射文件存储位置

```
<!-- 方法1 -->
mybatis:
        # 指定全局配置文件位置
        config-location: classpath:mybatis/mybatis-config.xml
        # 指定sql映射文件位置
       mapper-locations: classpath:mybatis/mapper/*.xml
   <!-- 正确方式二: -->
         # 指定sql映射文件位置
   mybatis:
       mapper-locations: classpath:mybatis/mapper/*.xml
       configuration:
           map-underscore-to-camel-case: true
```

### 然后

1. 在res偶然测试中创建mapper文件夹,在mapper文件夹中创建映射文件
2. 映射文件的命名规则: 接口的全限定名.xml
3. 映射文件的位置: mapper文件夹中
4. 映射文件的命名空间: 接口的全限定名
5. 映射文件的标签: select, insert, update, delete
