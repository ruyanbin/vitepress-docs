# Maven

::: tip
`Maven`: 是Apache组织提供的一个项目构建工具,专门为Java项目提供构建和依赖管理支持的工具
:::

## 依赖
`Manven`中最关键的部分，我们使用Maven来管理依赖管理功能。当Ajar 包用到Bjar包时，Bjar包必须先被下载到本地，再被Ajar引用。

# Maven 开发环境配置

1. 下载[Maven](https://maven.apache.org/download.cgi)
2. 解压到本地
    例如`D:\app\tools\apache-maven-3.9.9`
3. 配置环境变量
   3.1 添加环境变量`MAVEN_HOME`
   3.2 配置环境变量`PATH`，添加`%MAVEN_HOME%\bin`
   3.3 配置环境变量`CLASSPATH`，添加`%MAVEN_HOME%\lib\*`
   
4. 配置Maven仓库
 指定本地仓库位置，默认为`%USERPROFILE%\.m2\repository`
 在`%MAVEN_HOME%\conf\settings.xml`中配置

 ``` 
 <localRepository>D:\app\tools\apache-maven-3.9.9\mvn_resp</localRepository>
 ```

 > 注意：Maven仓库目录必须存在，否则会报错
 >配置Maven仓库目录，例如`D:\app\tools\apache-maven-3.9.9\mvn_resp`
 > ：一定要把 localRepository 标签从注释中拿出来
 > 注意：本地仓库本身也需要使用一个非中文、没有空格的目录。
5. 配置Maven代理
    `Maven`下载jar包时,默认访问境外的中央仓库，而国外速度very很慢，我们可以配置代理，使用国内镜像。
    1. 将原有的配置文件`%MAVEN_HOME%\conf\settings.xml`中的 `<mirror>` 配置注释掉
    
    2. 在`%MAVEN_HOME%\conf\settings.xml`中添加如下配置
     ``` http://maven.aliyun.com/nexus/content/groups/public ```
   
6. 配置JDK 版本

如果按照默认配置运行，Java 工程使用的默认 JDK 版本是 1.5，而我们熟悉和常用的是 JDK 1.8 版本。修改配置的方式是：将 profile 标签整个复制到 settings.xml 文件的 profiles 标签内

```
  <profile>
    <id>jdk-1.8</id>
    <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
    </activation>
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
       <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```

6.1  配置JDK版本
Maven 是一个用 Java 语言开发的程序，它必须基于 JDK 来运行，需要通过 JAVA_HOME 来找到 JDK 的安装位置
1. 配置JDK环境变量
::: tip
配置环境变量的规律：
XXX_HOME 通常指向的是 bin 目录的上一级
PATH 指向的是 bin 目录
:::

7. 通过 `mvn -v ` 验证配置是否成功
  

## `Maven`  使用

`Maven` 坐标是 `Maven` 项目的唯一标识符，它由 `groupId`、`artifactId`、`version` 组成。
`maven`使用三个向量在Maven仓库中定位到一个`jar`包

- `groupId`:公司或组织的ID 及公司或组织域名的倒序，通常也会加上项目名称
  例如``` groupId=com.example.project```
- `artifactId`:一个项目或者项目中的的一个模块id, 即模块名称，将
   ```
   artifactId=my-module
   ```
- `version`:版本号

```
<groupId>javax.servlet</groupId>
<artifactId>servlet-api</artifactId>
<version>2.5</version>

```

## pom.xml
POM 表示将工程抽象为一个模型，再用程序中的对象来描述这个模型。这样我们就可以用程序来管理项目了。我们在开发过程中，最基本的做法就是将现实生活中的事物抽象为模型，然后封装模型相关的数据作为一个对象，这样就可以在程序中计算与现实事物相关的数据。

POM 理念集中体现在 Maven 工程根目录下 pom.xml 这个配置文件中。所以这个 pom.xml 配置文件就是 Maven 工程的核心配置文件。其实学习 Maven 就是学这个文件怎么配置，各个配置有什么用。

```
<!-- 当前Maven工程的坐标 -->
<groupId>com.example</groupId>
<artifactId>demo</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>demo</name>
<description>Demo project for Spring Boot</description>
<!-- 当前Maven工程的打包方式，可选值有下面三种： -->
<!-- jar：表示这个工程是一个Java工程  -->
<!-- war：表示这个工程是一个Web工程 -->
<!-- pom：表示这个工程是“管理其他工程”的工程 -->
<packaging>jar</packaging>
<properties>
    <!-- 工程构建过程中读取源码时使用的字符集 -->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>
<!-- 当前工程所依赖的jar包 -->
<dependencies>
    <!-- 使用dependency配置一个具体的依赖 -->
    <dependency>
        <!-- 在dependency标签内使用具体的坐标依赖我们需要的一个jar包 -->
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
        <!-- scope标签配置依赖的范围 -->
        <scope>test</scope>
    </dependency>
</dependencies>

```

### 依赖
上面说到我们使用 Maven 最主要的就是使用它的依赖管理功能，引入依赖存在一个范围，maven的依赖范围包括： compile，provide，runtime，test，system。

|依赖范围|编译|测试|运行时|是否会被打入jar包|
|:---:|:---:|:---:|:---:|:---:|
|compile|是|是|是|是|
|provided|是|是|否|否|
|runtime|否|是|是|否|
|test|否|是|否|否|
|system|是|是|否|是|

>而在实际开发中，我们常用的就是 compile、test、provided 。

- 依赖的传递
A 依赖 B，B 依赖 C，那么在 A 没有配置对 C 的依赖的情况下，A 里面能不能直接使用 C？

再以上的前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围。

B 依赖 C 时使用 compile 范围：可以传递
B 依赖 C 时使用 test 或 provided 范围：不能传递，所以需要这样的 jar 包时，就必须在需要的地方明确配置依赖才可以。

- 依赖的排除
  当 A 依赖 B，B 依赖 C 而且 C 可以传递到 A 的时候，A 不想要 C，需要在 A 里面把 C 排除掉。而往往这种情况都是为了避免 jar 包之间的冲突。

```
<dependency>
	<groupId>net.javatv.maven</groupId>
	<artifactId>auth</artifactId>
	<version>1.0.0</version>
	<scope>compile</scope>
    
	<!-- 使用excludes标签配置依赖的排除	-->
	<exclusions>
		<!-- 在exclude标签中配置一个具体的排除 -->
		<exclusion>
			<!-- 指定要排除的依赖的坐标（不需要写version） -->
			<groupId>commons-logging</groupId>
			<artifactId>commons-logging</artifactId>
		</exclusion>
	</exclusions>
</dependency>
```