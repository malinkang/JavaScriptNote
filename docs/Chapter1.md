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
* 其他字可以是字母、下划线、美元符号或数字。
* 不能是关键字和保留字

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
#### 1.2.6数据类型

* 简单数据类型
  + Undefined
  + Null
  + Boolean
  + Number
  + String
* 复杂数据类型
  + Object:

##### 1.2.6.1 typeof操作符

typeof操作符用来获取变量的数据类型。typeof操作符的操作数尅是变量message，也可以是数值字面量。注意，typeof是一个操作符而不是函数，因此圆括号尽管可以使用，但不是必须的。

``` javascript
        <script type="text/javascript">
        var a,b="abc",c=true,d=100;
        alert(typeof(a));//undefined
        alert(typeof(b));//string
        alert(typeof(c));//boolean 
        alert(typeof d);//number
        alert(typeof 123);//number
        alert(typeof null);//object null被认为是一个空的对象引用
        </script>
 ``` 
#####  1.2.6.2 Undefined类型

Undefined类型只是一个值，即特殊的undefined。在使用var声明变量但未对其赋初值或者赋值为undefined，这个变量的值就是undefined。
``` javascript
        <script type="text/javascript">
       var msg;
       alert(msg);//undefined
       //alert(age); 产生错误
       //对未初始化和未生命的变量执行typeof操作符都反悔undefined
       alert(typeof msg);//undefined
       alert(typeof age);//undefined
        </script>
``` 
##### 1.2.6.3 Null类型

Null类型也只有一个值，即null。null表示一个空对象指针。所以使用typeof操作符检测null会返回object。

##### 1.2.6.4 Boolean类型

Boolean只有两个字面值：true和false；虽然Boolean类型的字面值只有两个，但是所有类型的值都有与这两个Boolean值等价的值。要将一个值转换为其对应的Boolean值，可以调用类型转换函数Boolean()。
``` javascript
        <script type="text/javascript">
        var str1="";
        var str2="abc";
        //String 任何非空字符串转换为true，空字符串转换为false；
        alert(Boolean(str1));//false
        alert(Boolean(str2));//ture
        var i1=0;
        var i2=100;
        //Number 任何非0数值转换为true，0和NaN转换为false
        alert(Boolean(i1));//false
        alert(Boolean(i2));//ture
        //Object 任何对象转换为true，null转换为false
        //Undefined N/A转换为true undefined转换为false
        </script>
``` 
##### 1.2.6.5 Number类型

Javascript定义了不同的数值字面量格式。

* 十进制 var intNum＝55；
* 八进制 第一位必须是0 例如：var octalNum＝075;
* 十六进制 前两位必须是0x，后跟任何十六禁止数字（0～9，A～F），字母A～F可以大写也可以小写。 例如：var hexNum＝0xA；

###### 1.2.6.5.1.浮点值

所谓浮点数值，就是该数值中必须包含一个小数点。并且小数点后面必须至少有一位数字。虽然小数点前面可以没有证书，但是我们不推荐这种写法。
``` javascript
        <script type="text/javascript">
        var floatNum1=1.1;
        var floatNum2=0.1;
        var floatNum3=.1//有效但不推荐
        </script>
``` 
由于保存浮点数值需要内存空间是保存整数值的两倍，因此，如果小数点后面没有任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如1.0），那么该值会被转换为整数，如下：
``` javascript
        <script type="text/javascript">
        var floatNum1=1.;//小数点后面没有数字--解析为1
        var floatNum2=10.0;//整数--解析为10
        </script>
``` 
可以使用科学计数法来表示浮点数值：前面是一个数值，中间是一个大写或小写字母E，后面是10的幂中的指数。
``` javascript
        <script type="text/javascript">
        var floatNum＝3.124e7//等于31240000
        </script>
``` 
默认情况下，Javascript会将那些小数点后面带有6个0以上的浮点值转换为科学计数法。

``` javascript
        <script type="text/javascript">
             alert(0.000003);//0.000003
        alert(0.0000003);//3e-7        
        </script>
``` 
浮点数值的最高精度是17位小数。

###### 1.2.6.5.2.数值范围
Javascript能够表示的最小数值是Number.MIN_VALUE，最大数值是Number.MAX_VALUE;如果计算的结果得到一个超出Javascript数值范围的值，那么这个数值自动转换成特殊的Infinity值。如果是负数，则会被转换成-Infinity。

###### 1.2.6.5.3.NaN
NaN，即非数值（Not a Number）是一个特殊数值，这个数值用于表示一个本来要返回数值操作数未返回数值的情况。

NaN本身有两个非同寻常的特点：
* 任何涉及NaN的操作（例如NaN/10）都会返回NaN。
* NaN与任何值都不想等，包括NaN本身。

针对NaN的这两个特点，JavaScript定义了一个isNaN（）函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我确定这个参数是否不是数值。isNaN()在接收一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值。


``` javascript
        <script type="text/javascript">
         alert(isNaN(NaN));//true;
       alert(isNaN(10));//false
       alert(isNaN("10"));// false 可以被转能换成数字10
       alert(isNaN("abc"));//true 
       alert(isNaN(true));//false 可以转换成数字1    
        </script>
``` 
###### 1.2.6.5.4.数值转换
有3个函数可以把飞数值转换为数值：

* Number()：可以用于任何数据类型，转换的规则如下
  + 如果是Boolean值，true和false将分别被转换为1和0.
  + 如果是数字值，只是简单的传入和返回
  + 如果是null，返回0
  + 如果是undefined，返回NaN
  + 如果是字符串，遵循下列规则
    * 如果字符串中包含数字（包含前面带正好或负号的情况），则将其转换为十进制
    * 如果字符串中包含有效的十六进制格式，则将其转换为相同大小的数值。
    * 如果字符串是空的，将其转换为0
    * 如果字符串中包含除上述格式以外的字符，则将其转换为NaN。
  + 如果是对象，则调用对象的valueof()方法,然后按照前面的规则转换返回的值。如果转换的结果是NaN，则调用对象的toString()方法，然后再次按照前面的规则转换成字符串。

 ``` javascript
        <script type="text/javascript">
         alert(isNaN(NaN));//true;
       alert(isNaN(10));//false
       alert(isNaN("10"));// false 可以被转能换成数字10
       alert(isNaN("abc"));//true 
       alert(isNaN(true));//false 可以转换成数字1    
        </script>
``` 
* parseInt()：把字符串转换成数值
* parseFloat()：把字符串转换成数值




