# myBatisPlus

::: tip
`myBatisPlus` 是一个 ORM 框架，基于 myBatis 的增强，简化开发。
[中文官网](https://baomidou.com/introduce/)
:::

## 常用注解

| 注解                           |描述| 作用                                                         |
|:---:|:------------------------|:-------------------------:|
| `@TableField(exist = false)  `   | 用于指定实体类中的字段与数据库表中的列之间的映射关系。虽然MyBatis也提供了类似的映射功能，但@TableField提供了更多的配置选项，如是否更新、是否查询等。|忽略字段，不映射数据库字段                                    |
|` @TableId(type = IdType.AUTO)  ` | 用于指定实体类中的主键字段，并可以配置主键的生成策略（如自增、UUID等）。这也是MyBatis-Plus特有的注解，用于增强对主键字段的处理|主键策略，默认为 `IdType.ID_WORKER`，可以自定义策略，例如 `AUTO`、`ID_WORKER`、`UUID` 等 |
|` @TableName("tb_user")   `       |于指定实体类对应的数据库表名。这是MyBatis-Plus特有的注解，用于解决实体类名与数据库表名不一致的问题 | `@TableName("tb_user")`|
|` @TableLogic  `                  | 用于标记实体类中的逻辑删除字段。通过配置该注解，MyBatis-Plus会自动将删除标记设置为1，而不是将数据删除。这是MyBatis-Plus特有的注解，用于增强对逻辑删除的处理 | 逻辑删除，默认为 `0`，可以自定义逻辑删除值，例如 `1`、`2` 等 |


## 集成步骤

### 1. 添加依赖

``` pom.xml
<!--mybatis-plus
这个版本需要指定了，因为场景启动器里面没有 -->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.7</version>
</dependency>

<!-- MyBatis-Plus代码生成器（逆向工程）-->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-generator</artifactId>
    <version>3.5.7</version>
</dependency>

<!-- MyBatis-Plus代码生成器所需引擎 
   模板引擎来生成代码文件 -->
<dependency>
   <groupId>org.freemarker</groupId>
   <artifactId>freemarker</artifactId>
   <version>2.3.31</version>
</dependency>

<!-- MySQL JDBC驱动 -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>

<!--lombok用来简化实体类-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <scope>provided</scope>
</dependency>


```