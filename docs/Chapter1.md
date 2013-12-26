第 1 章 JavaScript基本语法
================
###目录
* **[1.1在HTML中使用javascript][1]**
  + **[1.1.1使用\<script>嵌入JavaScript代码][2]**
  + **[1.1.2包含外部Javascript文件][3]**
* **[1.2基本语法][4]**
  + **[1.2.1区分大小写][5]**
  + **[1.2.2标识符][6]**
  + **[1.2.3注释][7]**
  + **[1.2.4关键字和保留字][8]**
  + **[1.2.5变量][9]**
  + **[1.2.6数据类型][10]**
    * **[1.2.6.1 typeof操作符][11]**
    * **[1.2.6.2 Undefined类型][12]**
    * **[1.2.6.3 Null类型][13]**
    * **[1.2.6.4 Boolean类型][14]**
    * **[1.2.6.5 Number类型][15]**
      + **[1.2.6.5.1 浮点值][16]**
      + **[1.2.6.5.2 数值范围][17]**
      + **[1.2.6.5.2 NaN][18]**
      + **[1.2.6.5.4 数值转换][19]**
    * **[1.2.6.5 String类型][20]**
      + **[1.2.6.6.1 转义字符][21]**
      + **[1.2.6.6.2 字符串特点][22]**
      + **[1.2.6.6.3 转换字符串][23]**
    * **[1.2.6.7 Object类型][24]**  
  + **[1.2.7 操作符][25]**
   * **[1.2.7.1 一元操作符][26]**
      + **[1.2.7.1.1 递增和递减][27]**
      + **[1.2.7.1.2 加、减、乘、除和取余][28]**
   * **[1.2.7.2 位操作符][29]**  
      + **[1.2.7.2.1 原码、反码和补码][30]**
      + **[1.2.7.2.2 非][31]**
      + **[1.2.7.2.3 与][32]**
      + **[1.2.7.2.4 或][33]**
      + **[1.2.7.2.5 异或][34]**
      + **[1.2.7.2.6 左移][35]**
      + **[1.2.7.2.7 有符号右移动][36]**
      + **[1.2.7.2.8 无符号右移动][37]**
    * **[1.2.7.3 逻辑运算符][38]**  
      + **[1.2.7.3.1 逻辑非][39]**
      + **[1.2.7.3.2 逻辑与][40]**
      + **[1.2.7.3.3 逻辑或][41]**
    * **[1.2.7.4 关系运算符][42]**
    * **[1.2.7.5 赋值运算符][43]**
    * **[1.2.7.6 三目运算符][44]**
 + **[1.2.8语句][45]**
    * **[1.2.8.1 if语句][46]**
    * **[1.2.8.2 switch语句][47]**
    * **[1.2.8.3 do-while语句][48]**
    * **[1.2.8.4 while语句][49]**
    * **[1.2.8.5 for语句][50]**
    * **[1.2.8.6 for-in语句][51]**
    * **[1.2.8.7 label语句][52]**
    * **[1.2.8.8 break和continue语句][53]**
    * **[1.2.8.9 with语句][54]**
 + **[1.2.9函数][55]**
    * **[1.2.9.1函数的定义和调用][56]**
    * **[1.2.9.2 参数][57]**
    * **[1.2.9.3 没有重载][58]**

  
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

#### 1.1.1 使用\<script>嵌入Javascript代码

 
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
#### 1.1.2 包含外部Javascript文件 

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
有3个函数可以把非数值转换为数值：

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
        alert(Number(false)); //0
       alert(Number(null));//0
       alert(Number(undefined)); //NaN
       alert(Number("1"));  //1
       alert(Number("-123"));  //-123
       alert(Number("011"));  //11 0被忽略
       alert(Number("0xA"));//10
       alert(Number("abc"));//NaN  
        </script>
``` 

* parseInt()：parseInt()可以将字符串转换为数值，转换规则如下：
  + 它会忽略字符串前面的空格，直至找到第一个非空格字符串。如果第一个字符串不是数字字符或者正负号，parseInt()就会返回NaN。
  + 如果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续自付或者遇到了一个非数字字符。
  + parseInt()能够识别出各种整数格式，parseInt()可以为函数提供第二个参数：转换时使用的基数。
``` javascript

      <script type="text/javascript">
      alert(parseInt(false)); //NaN
       alert(parseInt(null));//NaN
       alert(parseInt(undefined)); //NaN
       alert(parseInt("1"));  //1
       alert(parseInt("-123"));  //-123
       alert(parseInt("011"));  //11 0被忽略
       alert(parseInt("0xA"));//10
       alert(parseInt("abc"))//NaN
       alert(parseInt("123abc"));//123
       alert(parseInt("384.45"));//384 因为小数点不是有效的数字字符。
       alert(parseInt("10",2));// 2 按照2进制进行解析
       alert(parseInt("10",8));// 8
       alert(parseInt("10",10));//10 
       alert(parseInt("10",16));//16
       alert(parseInt("AGA",16));//10 
       alert(parseInt("AGA",10));//NaN
       alert(parseInt("0xAGA",16));//按照16进制解析
       </script>
``` 
* parseFloat():
   + 与parseInt()函数类似，也是从第一个字符开始解析每个字符。而且也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。也就是说字符串的第一个小数点是有效的，而第二个小数点是无效的。
   + 和parseInt()一样都会忽略前导的0。parseFloat()可以识别前面讨论过的所有浮点数值格式，也包括十进制整数格式。但十六进制格式的字符串则始终被转换为0。
   + parseFloat()只解析十进制，因此它没有用第二个参数指定基数的用法。最后还需要注意一点：如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后都是0），parseFloat()会返回整数。
``` javascript

      <script type="text/javascript">
       alert(parseFloat("123blue"));//123
       alert(parseFloat("0xA"));//0
       alert(parseFloat("22.5"));//22.5
       alert(parseFloat("22.33.44"));//22.33
       alert(parseFloat("3.12e8"));//312000000
       </script>
``` 

##### 1.2.6.6 String类型

字符串可以由双引号或单引号表示，这两种语法形式没有什么区别。不过，以双引号开头的字符串也必须是以双引号结尾，而单引号开头的字符串必须以单引号结尾。

###### 1.2.6.6.1 转义字符
###### 1.2.6.6.2 字符串特点
字符串是不可变的。
###### 1.2.6.6.3 转换字符串

要把一个值转换为一个字符串有两种方式

* 使用toString()方法
  + 几乎每个值都有的toString()方法，但null和undefined值没有这个方法。
  + 在调用toString()方法时，可以传递一个参数：输入数值的基数，通过传递基数，toString()可以输入以二进制、八进制、十六进制，乃至其他任意有效进制格式表示。
  
  ``` javascript
      <script type="text/javascript">
       var a=10,b=true;
       alert(a.toString());//10
       alert(a.toString(2));//1010
       alert(a.toString(8));//12
       alert(a.toString(10));//10
       alert(a.toString(16));//a
       alert(b);//true
       </script>
``` 
* 使用转型函数String(),这个函数能够将任何类型的值转换为字符串。
  + 如果值有toString()方法，则叼哦那个该方法（没有参数）并返回相应的结果。
  + 如果值是null，则返回"null"
  + 如果值是undefined,则返回 “undefined”。
   ``` javascript
      <script type="text/javascript">
       var a=10,b=true,c=null,d;
       alert(String(a));//10
       alert(String(b));//true
       alert(String(c));//null
       alert(String(d));//undefined
       </script>
``` 

##### 1.2.6.7 Object类型

对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。在不传递参数的情况下，完全可以省略圆括号，不过不推荐这么做。
   ``` javascript
      <script type="text/javascript">
      var o1=new Object();
      var o2=new Object;//有效，但不推荐省略括号
       </script>
```
Object类型是所有实例的基础。Object每个实例都具有一下属性和方法。
* Constructor：构造函数
* hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例子中是否存在。
* isPrototypeOf(object)：用于检查传入的对象是否是另一个对象的原型。
* propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句来枚举。
* toLocaleString()：
* toString()：
* valueOf()：

#### 1.2.7 操作符

##### 1.2.7.1 一元操作符

###### 1.2.7.1.1 递增和递减

###### 1.2.7.1.2 加、减、乘、除和取余

##### 1.2.7.2 位操作符

###### 1.2.7.2.1 原码、反码和补码

###### 1.2.7.2.2 非 

按位非操作符用一个波浪线（~）表示。

###### 1.2.7.2.3 与

按位与操作符由一个和号字符（&）表示。

###### 1.2.7.2.4 或

按位或操作符由一个竖线符号（|）表示。

###### 1.2.7.2.5 异或
按位异或操作符由一个插入符号（^）表示。

###### 1.2.7.2.6 左移
左移操作符由两个小于号（<<）表示。

###### 1.2.7.2.7 有符号右移动
有符号右移动操作符由两个大于号（>>）表示。
###### 1.2.7.2.8 无符号右移动
无符号右移动操作符由三个大于号（>>>）表示。

##### 1.2.7.3 逻辑运算符

###### 1.2.7.3.1 逻辑非
逻辑非操作符由一个叹号（!）表示。
###### 1.2.7.3.2 逻辑与
逻辑与操作符由两个和好（&&）表示。
###### 1.2.7.3.3 逻辑或
逻辑或操作符由两个竖线符号（||）表示。

##### 1.2.7.4 关系运算符
##### 1.2.7.5 赋值运算符
##### 1.2.7.6 三目运算符
#### 1.2.8语句
##### 1.2.8.1 if语句
##### 1.2.8.2 switch语句
可以在switch语句中使用任何数据类型，每个case的值不一定是常量，可以是变量，甚至是表达式。
   ``` javascript
   <script type="text/javascript">
      var b="goodbye";
       switch("goodbye"){
           case "hello"+"world":
                alert("Greeting");
                break; 
           case b:
                alert("GoodBye");
                break; 
       }//输出goodbye
     </script>
```

   ``` javascript
      <script type="text/javascript">
     var num=25;
       switch(true){
           case num<0:
           alert("Less than 0");
           break;
           case num>=0 && num<=25:
           alert("BetWeen 0 and 25");
           break;
           default:
           alert("More Than 25");
       }//BetWeen 0 and 25
       </script>
```

##### 1.2.8.3 do-while语句
##### 1.2.8.4 while语句
##### 1.2.8.5 for语句
##### 1.2.8.6 for-in语句
##### 1.2.8.7 label语句
使用label语句可以在代码中添加标签，方便使用。
##### 1.2.8.8 break和continue语句
break和continue语句用于在循环中精确地控制代码执行。break语退出整个循环，continue会退出当前循环。
 ``` javascript
      <script type="text/javascript">
       var num=0;
        for(var i=1;i<10;i++){
            if(i%5==0){
               break;
            }
             num++;
        }
        alert(num);//4
       </script>
```

 ``` javascript
      <script type="text/javascript">
       var num=0;
        for(var i=1;i<10;i++){
            if(i%5==0){
               continue;
            }
             num++;
        }
        alert(num);//8
       </script>
```
##### 1.2.8.9 with语句
with语句的作用是将作用于设置到一个特定的对象中，with语句语法
with(expression)statement;



#### 1.2.9函数

##### 1.2.9.1函数的定义和调用

 ``` javascript
 
      <script type="text/javascript">
         //函数声明
        function sayHi(name,message){
            alert("Hello "+name+","+message);
        }
        //调用
        sayHi("Nicholas","how are you today?");
        //输出Hello Nicholas,how are you today?
        
        //函数定义不必指定是否返回值
        /**
         * 1.函数执行完return语句之后停止并立即退出，因此位于
         * return语句之后的任何代码都不会执行
         * 2.return语句可以不带任何返回值 如：return;
         */
        function sum(num1,num2){
            return num1+num2;
        }
        alert(sum(3,4));//7
       </script>
```

##### 1.2.9.2 参数

JavaScript函数不介意传递进来多少几个参数，也不再回传递进来的参数是什么数据类型。也就是说，即便你定义的函数只接受俩个参数，在调用这个函数时，也未必一定要传递两个参数。之所以会这样，JavaScript中的参数在内部用一个arguments对象表示。

arguments对象与数组类似，可以使用方括号语法访问它的每一个元素，用length属性来确定传递进来多少个参数
 ``` javascript
 
      <script type="text/javascript">
          //函数声明
        function sayHi(){
            alert("Hello "+arguments[0]+","+arguments[1]);
        }
        //调用
        sayHi("Nicholas","how are you today?");
        function howManyArgs(){
            alert(arguments.length);
        }
        howManyArgs("a","b");//2
        howManyArgs();//0
        howManyArgs("c");//1
        //混合使用
        function add(num1,num2){
            return arguments[0]+num2;
        }
        alert(add(10,20));//30

       </script>
```
##### 1.2.9.3 没有重载
 ``` javascript
 
      <script type="text/javascript">
         function add(num){
            return num+100;
        }
        function add(num1,num2){
            return num1+num2;
        }
        alert(add(199));//NaN

       </script>
```






[1]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#11-%E5%9C%A8html%E4%B8%AD%E4%BD%BF%E7%94%A8javascript
[2]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#111-%E4%BD%BF%E7%94%A8script%E5%B5%8C%E5%85%A5javascript%E4%BB%A3%E7%A0%81
[3]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#112-%E5%8C%85%E5%90%AB%E5%A4%96%E9%83%A8javascript%E6%96%87%E4%BB%B6
[4]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
[5]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#121%E5%8C%BA%E5%88%86%E5%A4%A7%E5%B0%8F%E5%86%99
[6]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#122%E6%A0%87%E8%AF%86%E7%AC%A6
[7]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#123%E6%B3%A8%E9%87%8A
[8]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#124%E5%85%B3%E9%94%AE%E5%AD%97%E5%92%8C%E4%BF%9D%E7%95%99%E5%AD%97
[9]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#125%E5%8F%98%E9%87%8F
[10]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#126%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
[11]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1261-typeof%E6%93%8D%E4%BD%9C%E7%AC%A6
[12]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1262-undefined%E7%B1%BB%E5%9E%8B
[13]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1263-null%E7%B1%BB%E5%9E%8B
[14]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1264-boolean%E7%B1%BB%E5%9E%8B
[15]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1265-number%E7%B1%BB%E5%9E%8B
[16]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12651%E6%B5%AE%E7%82%B9%E5%80%BC
[17]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12652%E6%95%B0%E5%80%BC%E8%8C%83%E5%9B%B4
[18]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12653nan
[19]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12654%E6%95%B0%E5%80%BC%E8%BD%AC%E6%8D%A2
[20]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1266-string%E7%B1%BB%E5%9E%8B
[21]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12661-%E8%BD%AC%E4%B9%89%E5%AD%97%E7%AC%A6
[22]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12662-%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%89%B9%E7%82%B9
[23]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12663-%E8%BD%AC%E6%8D%A2%E5%AD%97%E7%AC%A6%E4%B8%B2
[24]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1267-object%E7%B1%BB%E5%9E%8B
[25]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#127-%E6%93%8D%E4%BD%9C%E7%AC%A6
[26]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1271-%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6
[27]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12711-%E9%80%92%E5%A2%9E%E5%92%8C%E9%80%92%E5%87%8F
[28]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12712-%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E5%92%8C%E5%8F%96%E4%BD%99
[29]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1272-%E4%BD%8D%E6%93%8D%E4%BD%9C%E7%AC%A6
[30]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12721-%E5%8E%9F%E7%A0%81%E5%8F%8D%E7%A0%81%E5%92%8C%E8%A1%A5%E7%A0%81
[31]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12722-%E9%9D%9E
[32]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12723-%E4%B8%8E
[33]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12724-%E6%88%96
[34]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12725-%E5%BC%82%E6%88%96
[35]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12726-%E5%B7%A6%E7%A7%BB
[36]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12727-%E6%9C%89%E7%AC%A6%E5%8F%B7%E5%8F%B3%E7%A7%BB%E5%8A%A8
[37]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12728-%E6%97%A0%E7%AC%A6%E5%8F%B7%E5%8F%B3%E7%A7%BB%E5%8A%A8
[38]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1273-%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6
[39]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12731-%E9%80%BB%E8%BE%91%E9%9D%9E
[40]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12732-%E9%80%BB%E8%BE%91%E4%B8%8E
[41]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#12733-%E9%80%BB%E8%BE%91%E6%88%96
[42]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1274-%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6
[43]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1275-%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6
[44]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1276-%E4%B8%89%E7%9B%AE%E8%BF%90%E7%AE%97%E7%AC%A6
[45]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#128%E8%AF%AD%E5%8F%A5
[46]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1281-if%E8%AF%AD%E5%8F%A5
[47]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1282-switch%E8%AF%AD%E5%8F%A5
[48]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1283-do-while%E8%AF%AD%E5%8F%A5
[49]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1284-while%E8%AF%AD%E5%8F%A5
[50]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1285-for%E8%AF%AD%E5%8F%A5
[51]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1286-for-in%E8%AF%AD%E5%8F%A5
[52]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1287-label%E8%AF%AD%E5%8F%A5
[53]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1288-break%E5%92%8Ccontinue%E8%AF%AD%E5%8F%A5
[54]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1289-with%E8%AF%AD%E5%8F%A5
[55]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#129%E5%87%BD%E6%95%B0
[56]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1291%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89%E5%92%8C%E8%B0%83%E7%94%A8
[57]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1292-%E5%8F%82%E6%95%B0
[58]: https://github.com/malinkang/JavaScript/blob/master/docs/Chapter1.md#1293-%E6%B2%A1%E6%9C%89%E9%87%8D%E8%BD%BD





