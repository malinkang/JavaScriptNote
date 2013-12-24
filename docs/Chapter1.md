第 1 章
================

###1.1 在HTML中使用JavaScript


向HTML页面中插入javascript的主要方法，就是使用\<script>元素

HTML4.01为\<script>定义了6个属性：

* async
* charset
* defer
* language：已废弃
* src：可选。表示包含要执行代码的外部文件。
* type：

使用\<script>元素的方式有两种：直接在页面中嵌入javascript代码和包含外部javascript文件。

* **使用\<script>嵌入Javascript代码**

 
``` javascript

       <script type="text/javascript">
            alert("Hi");
        </script>

```

在使用\<script>嵌入javascript代码，记住不要在代码中任何地方出现\</script>字符串,如下面代码就会产生错误：

``` javascript

   <script type="text/javascript">
            alert("</script>");
    </script>

```
当浏览器遇到字符串\</script>时，就会认为是结束的\</srcipt>标签。通过把这个字符串分割成两部分可以解决这个问题。例如：

``` javascript

      <script type="text/javascript">
            alert("<\/script>");
      </script>

```
* **包含外部Javascript文件**

``` javascript

      <script type="text/javascript" src="example.js"></script>

```
也可以省略结束的</script>标签，例如

``` javascript

      <script type="text/javascript" src="example.js"/>

```
### 1.2基本语法

#### 1.2.1区分大小写

#### 1.2.2标识符

* 第一个标识符必须是一个字母、下划线或者美元符号；
* 其他字符尅是字母、下划线、美元符号或数字。

按照惯例，Javascript标识符采用驼峰大小写格式。
#### 1.2.3注释

>//单行注释

>/**/多行注释

#### 1.2.4关键字和保留字

#### 1.2.5变量

JavaScript的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。定义变量时要使用var操作符。

``` javascript

          <script type="text/javascript">
        //定义了一个名字为message的变量，该变量可以用来保存任何值。
        //像这样未经过初始化的变量，会保存一个特殊值undefined
            var message;
            //javascript也支持直接给初始化变量
            var msg="hi";
            alert(msg);
            //可以修改变量的同时修改数据类型 但不推荐这样
            var msg=100;
            alert(msg);
        </script>

```
var在函数内定义的变量为局部变量，如果省略var则是全局变量

``` javascript
      <script type="text/javascript">
        function test1(){
            var msg1="hi";//局部变量
        }
        test1();
        //alert(msg1);错误
        function test2(){
            msg2="hi";//全局变量
        }
        test2();
        alert(msg2);
    </script>

```








