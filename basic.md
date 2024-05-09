# 第3章 基本概念

## 语法

### 区分大小写

### 标识符

* 第一个标识符必须是一个字母、下划线或者美元符号；
* 其他字可以是字母、下划线、美元符号或数字。

### 注释

> //单行注释

> /\*\*/多行注释


## 变量

### var关键字

在应用程序中，使用变量来作为值的符号名。变量的名字又叫做标识符。标识符可以是按照下列格式规则组合起来的一或多个字符：

* 第一个标识符必须是一个字母、下划线\(\_\)或者美元符号\($\)；
* 其他字可以是字母、下划线、美元符号或数字。
* 不能是关键字和保留字。

按照惯例，JavaScript标识符采用驼峰大小写格式。

JavaScript的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。定义变量时要使用`var`操作符。

```javascript
//定义了一个名字为message的变量，该变量可以用来保存任何值。
//像这样未经过初始化的变量，会保存一个特殊值undefined
var message;
//javascript也支持直接给初始化变量
var msg="hi";
alert(msg);
//可以修改变量的同时修改数据类型 但不推荐这样
var msg=100;
alert(msg);
```

#### var声明作用域

var在函数内定义的变量为局部变量，如果省略var则是全局变量。

```javascript
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
```

#### var声明提升

JavaScript变量的另一特别之处是，你可以引用稍后声明的变量而不会引发异常。这一概念称为`变量声明提升hoisting`；JavaScript变量感觉上是被“提升”或移到了所有函数和语句之前。然而提升后的变量将返回 undefined值。所以在使用或引用某个变量之后进行声明和初始化操作，这个被提升的引用仍将得到 undefined值。

```javascript
alert(x); //undefined
if(true){
  var x = 5;
}
```

## 数据类型

JavaScript语言定义了下面7种不同类型的值：

* 六种简单数据类型
  * Undefined
  * Null
  * Boolean
  * Number
  * String
  * Symbol\(在 ECMAScript 6 中新添加的类型\)
* 一种复杂数据类型
  * Object

### 3.4.1 typeof操作符

`typeof`操作符用来获取变量的数据类型。typeof操作符的操作数可以是变量，也可以是数值字面量。注意，`typeof`是一个操作符而不是函数，因此圆括号尽管可以使用，但不是必须 的。

```javascript
var a,b="abc",c=true,d=100;
alert(typeof(a)); //undefined
alert(typeof(b)); //string
alert(typeof(c)); //boolean
alert(typeof d); //number
alert(typeof 123);//number
alert(typeof null);//object null被认为是一个空的对象引用
```

### 3.4.2 Undefined类型

Undefined类型只是一个值，即特殊的undefined。在使用var声明变量但未对其赋初值或者赋值为undefined，这个变量的值就是undefined。

```javascript
var msg;
//undefined
alert(msg);
//alert(age); 产生错误
//对未初始化和未声明的变量执行typeof操作符都返回undefined
//undefined
alert(typeof msg);
//undefined
alert(typeof age);
```

### 3.4.3 Null类型

Null类型也只有一个值，即null。null表示一个空对象指针。所以使用typeof操作符检测null会返回object。

### 3.4.4 Boolean类型

Boolean只有两个字面值：true和false；虽然Boolean类型的字面值只有两个，但是所有类型的值都有与这两个Boolean值等价的值。要将一个值转换为其对应的Boolean值，可以调用类型转换函数Boolean\(\)。

```javascript
//String 任何非空字符串转换为true，空字符串转换为false；
var str1="";
var str2="abc";
alert(Boolean(str1));//false
alert(Boolean(str2));//ture
//Number 任何非0数值转换为true，0和NaN转换为false
var i1=0;
var i2=100;

alert(Boolean(i1));//false
alert(Boolean(i2));//ture
//Object 任何对象转换为true，null转换为false

//Undefined N/A转换为true undefined转换为false
```

### 3.4.5 Number类型

Javascript定义了不同的数值字面量格式。

* 十进制 var intNum＝55；
* 八进制 第一位必须是0 例如：var octalNum＝075;
* 十六进制 前两位必须是0x，后跟任何十六禁止数字（0～9，A～F），字母A～F可以大写也可以小写。 例如：var hexNum＝0xA；

ES6提供了二进制和八进制数值的新的写法，分别用前缀`0b`（或`0B`）和`0o`（或`0O`）表示。

从ES5开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6进一步明确，要使用前缀0o表示。

```javascript
alert(0B100);//4
alert(0b010);//2
alert(0o11);//9
```

#### 1.浮点值

所谓浮点数值，就是该数值中必须包含一个小数点。并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但是我们不推荐这种写法。

```javascript
var floatNum1=1.1;
var floatNum2=0.1;
//有效但不推荐
var floatNum3=.1;
```

由于保存浮点数值需要内存空间是保存整数值的两倍，因此，如果小数点后面没有任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如1.0），那么该值会被转换为整数，如下：

```javascript
//小数点后面没有数字--解析为1
var floatNum1=1.;
//整数--解析为10
var floatNum2=10.0;
```

可以使用科学计数法来表示浮点数值：前面是一个数值，中间是一个大写或小写字母E，后面是10的幂中的指数。

```javascript
//等于31240000
var floatNum＝3.124e7;
```

默认情况下，Javascript会将那些小数点后面带有6个0以上的浮点值转换为科学计数法。

```javascript
alert(0.000003);//0.000003
alert(0.0000003);//3e-7
```

浮点数值的最高精度是17位小数。

#### 2.数值范围

Javascript能够表示的最小数值是Number.MIN\_VALUE，最大数值是Number.MAX\_VALUE;如果计算的结果得到一个超出Javascript数值范围的值，那么这个数值自动转换成特殊的Infinity值。如果是负数，则会被转换成-Infinity。

#### 3.NaN

NaN即非数值（Not a Number）是一个特殊数值，这个数值用于表示一个本来要返回数值操作数未返回数值的情况。

NaN本身有两个非同寻常的特点：

* 任何涉及NaN的操作（例如NaN/10）都会返回NaN。
* NaN与任何值都不相等，包括NaN本身。

针对NaN的这两个特点，JavaScript定义了一个isNaN（）函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我确定这个参数是否不是数值。isNaN\(\)在接收一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值。

```javascript
alert(isNaN(NaN));//true;
alert(isNaN(10));//false
alert(isNaN("10"));// false 可以被转能换成数字10
alert(isNaN("abc"));//true 
alert(isNaN(true));//false 可以转换成数字1
```

#### 4.数值转换

有3个函数可以把非数值转换为数值：

* Number\(\)：可以用于任何数据类型，转换的规则如下
  * 如果是Boolean值，true和false将分别被转换为1和0.
  * 如果是数字值，只是简单的传入和返回
  * 如果是null，返回0
  * 如果是undefined，返回NaN
  * 如果是字符串，遵循下列规则
    * 如果字符串中包含数字（包含前面带正好或负号的情况），则将其转换为十进制
    * 如果字符串中包含有效的十六进制格式，则将其转换为相同大小的数值。
    * 如果字符串是空的，将其转换为0
    * 如果字符串中包含除上述格式以外的字符，则将其转换为NaN。
  * 如果是对象，则调用对象的valueof\(\)方法,然后按照前面的规则转换返回的值。如果转换的结果是NaN，则调用对象的toString\(\)方法，然后再次按照前面的规则转换成字符串。

```javascript
alert(Number(false)); //0
alert(Number(null));//0
alert(Number(undefined)); //NaN
alert(Number("1"));  //1
alert(Number("-123"));  //-123
alert(Number("011"));  //11 0被忽略
alert(Number("0xA"));//10
alert(Number("abc"));//NaN
```

* parseInt\(\)：parseInt\(\)可以将字符串转换为数值，转换规则如下：
  * 它会忽略字符串前面的空格，直至找到第一个非空格字符串。如果第一个字符串不是数字字符或者正负号，parseInt\(\)就会返回NaN。
  * 如果第一个字符是数字字符，parseInt\(\)会继续解析第二个字符，直到解析完所有后续自付或者遇到了一个非数字字符。
  * parseInt\(\)能够识别出各种整数格式，parseInt\(\)可以为函数提供第二个参数：转换时使用的基数。

```javascript
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
```

* parseFloat\(\):
  * 与parseInt\(\)函数类似，也是从第一个字符开始解析每个字符。而且也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。也就是说字符串的第一个小数点是有效的，而第二个小数点是无效的。
  * 和parseInt\(\)一样都会忽略前导的0。parseFloat\(\)可以识别前面讨论过的所有浮点数值格式，也包括十进制整数格式。但十六进制格式的字符串则始终被转换为0。
  * parseFloat\(\)只解析十进制，因此它没有用第二个参数指定基数的用法。最后还需要注意一点：如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后都是0），parseFloat\(\)会返回整数。

```javascript
alert(parseFloat("123blue"));//123
alert(parseFloat("0xA"));//0
alert(parseFloat("22.5"));//22.5
alert(parseFloat("22.33.44"));//22.33
alert(parseFloat("3.12e8"));//312000000
```

### 3.4.6 String类型

字符串可以由双引号或单引号表示，这两种语法形式没有什么区别。不过，以双引号开头的字符串也必须是以双引号结尾，而单引号开头的字符串必须以单引号结尾。

#### 1.多行字符串

由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 `...` 表示：

```javascript
alert(`多行
字符串
测试`);
```

#### 2.字符串连接

要把多个字符串连接起来，可以用+号连接：

```javascript
var name = "malinkang";
var age = 28;
var message = "name is "+name+" ,age is "+age+".";
alert(message);
```

如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量。

```javascript
var name = "malinkang";
var age = 28;
var message = `name is ${name} ,age is ${age} .`;
alert(message);
```

#### 3.转换字符串

要把一个值转换为一个字符串有两种方式

* 使用toString\(\)方法
  * 几乎每个值都有的toString\(\)方法，但null和undefined值没有这个方法。
  * 在调用toString\(\)方法时，可以传递一个参数：输入数值的基数，通过传递基数，toString\(\)可以输入以二进制、八进制、十六进制，乃至其他任意有效进制格式表示。

```javascript
var a=10,b=true;
alert(a.toString());//10
alert(a.toString(2));//1010
alert(a.toString(8));//12
alert(a.toString(10));//10
alert(a.toString(16));//a
alert(b);//true
```

* 使用转型函数String\(\),这个函数能够将任何类型的值转换为字符串。
  * 如果值有toString\(\)方法，则叼哦那个该方法（没有参数）并返回相应的结果。
  * 如果值是null，则返回"null"
  * 如果值是undefined,则返回 “undefined”。

```javascript
var a=10,b=true,c=null,d;
alert(String(a));//10
alert(String(b));//true
alert(String(c));//null
alert(String(d));//undefined
```

#### 4.操作字符串

### 3.4.7 Object类型

对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。在不传递参数的情况下，完全可以省略圆括号，不过不推荐这么做。

```javascript
var o1=new Object();
var o2=new Object;//有效，但不推荐省略括号
```

Object类型是所有实例的基础。Object每个实例都具有一下属性和方法。

* Constructor：构造函数
* hasOwnProperty\(propertyName\)：用于检查给定的属性在当前对象实例子中是否存在。
* isPrototypeOf\(object\)：用于检查传入的对象是否是另一个对象的原型。
* propertyIsEnumerable\(propertyName\)：用于检查给定的属性是否能够使用for-in语句来枚举。
* toLocaleString\(\)：
* toString\(\)：
* valueOf\(\)：



## 3.5 操作符

### 3.5.1 一元操作符

#### 1.加、减、乘、除和取余

#### 2.递增和递减

#### 3.幂\(\*\*\)

```javascript
alert(2**10); //1024
```

### 3.5.2 位运算符

#### 1.按位非

按位非操作符用一个波浪线（~）表示。

```javascript
var num1 = 25;    //      0000 0000 0000 0000 0000 0000 0001 1001
var num2 = ~num1; // 补码  1111 1111 1111 1111 1111 1111 1110 0110 
                  // 反码  1111 1111 1111 1111 1111 1111 1110 0101
                  // 原码  1000 0000 0000 0000 0000 0000 0001 1010
                  // 0x2^0+1x2^1+0x2^2+1x2^3+1x2^4 = 0+2+0+8+16 = 26
console.log(num2); // -26
```

#### 2.与

按位与操作符由一个和号字符（&）表示。按位与操作只在两个数值对应位都是1时才返回1，任何一位是0，结果都是0。

```javascript
var num1 = 25;   //      0000 0000 0000 0000 0000 0000 0001 1001
var num2 = -3;  //原码    1000 0000 0000 0000 0000 0000 0000 0011
                //反码    1111 1111 1111 1111 1111 1111 1111 1100
                //补码    1111 1111 1111 1111 1111 1111 1111 1101
                // &      0000 0000 0000 0000 0000 0000 0001 1001
var result = num1 & num2;
console.log(result); //  1x2^0+0x2^1+0x2^2+1x2^3+1x2^4 = 1+0+0+8+16=25
```

#### 3.或

按位或操作符由一个竖线符号（\|）表示。按位或操作再有一个位是1的情况下就返回1，而只有在两个位都是0的情况下才返回0。

```javascript
var num1 = 25;   //      0000 0000 0000 0000 0000 0000 0001 1001
var num2 = -3;  //原码    1000 0000 0000 0000 0000 0000 0000 0011
                //反码      1111 1111 1111 1111 1111 1111 1111 1100
                //补码     1111 1111 1111 1111 1111 1111 1111 1101
                // |       1111 1111 1111 1111 1111 1111 1111 1101
var result = num1 | num2;
console.log(result); //  -3
```

#### 4.异或

按位异或操作符由一个插入符号（^）表示。相同为0，不同为1。

```javascript
var num1 = 25;   //      0000 0000 0000 0000 0000 0000 0001 1001
var num2 = -3;  //原码    1000 0000 0000 0000 0000 0000 0000 0011
                //反码      1111 1111 1111 1111 1111 1111 1111 1100
                //补码     1111 1111 1111 1111 1111 1111 1111 1101
                // ^       1111 1111 1111 1111 1111 1111 1110 0100
                //         1111 1111 1111 1111 1111 1111 1110 0011
                //         1000 0000 0000 0000 0000 0000 0001 1100
var result = num1 ^ num2;
console.log(result); // -28 2^2+2^3+2^4 = 4+8+16=28
```

#### 5.左移

左移操作符由两个小于号（&lt;&lt;）表示。左移不会影响操作数的符号位。

```javascript
var oldValue = -2;  //1111 1111 1111 1111 1111 1111 1111 1110 
                    //1111 1111 1111 1111 1111 1111 1100 0000 移位操作
                    //1111 1111 1111 1111 1111 1111 1011 1111 反码
                    //1000 0000 0000 0000 0000 0000 0100 0000 
var newValue = oldValue << 5; 
console.log(newValue); //-64
```

左移不会影响操作数的符号位。

```javascript
var oldValue = 2;
var newValue = oldValue << 30; //将1移动到符号位上
console.log(newValue); // -2147483648
```

#### 6.有符号右移动

有符号右移动操作符由两个大于号（&gt;&gt;）表示。

#### 7.无符号右移动

无符号右移动操作符由三个大于号（&gt;&gt;&gt;）表示。对于正数来说，无符号右移的结果与有符号右移相同。对于负数来说，情况就不一样了。首先，无符号右移是以0来填充空位，而不是像有符号右移那样以符号位的值来填充空位。

```javascript
var oldValue = -2;
var newValue = oldValue >>> 5;
console.log(newValue); //134217727
```

### 3.5.3 逻辑运算符

#### 1.逻辑非

逻辑非操作符由一个叹号（!）表示。

#### 2.逻辑与

逻辑与操作符由两个和号（&&）表示。

#### 3.逻辑或

逻辑或操作符由两个竖线符号（\|\|）表示。

### 3.5.4 关系运算符

### 3.5.6 赋值运算符

### 3.5.7 条件运算符

## 3.6 语句

### 3.6.1 条件语句

####  if语句

#### switch语句

可以在switch语句中使用任何数据类型，每个case的值不一定是常量，可以是变量，甚至是表达式。

```javascript
var b="goodbye";
switch("goodbye"){
   case "hello"+"world":
        alert("Greeting");
        break; 
   case b:
        alert("GoodBye");
        break; 
}//输出goodbye
```

```javascript
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
```

### 3.6.2 循环语句

#### for语句

#### do-while语句

#### while语句

#### for-in语句

for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。

语法

```javascript
for (property in expression) statement
```

```javascript
var person = {
  name : "malinkang",
  age : 28,
  job : "Android Engineer"
};
for (i in person) {
  console.log(i);
}
//name
//age
//job
```

### 3.6.3 label语句

使用label语句可以在代码中添加标签，方便使用。

### 3.6.4 控制转移语句

break和continue语句用于在循环中精确地控制代码执行。break语退出整个循环，continue会退出当前循环。

```javascript
var num=0;
for(var i=1;i<10;i++){
    if(i%5==0){
       break;
    }
     num++;
}
alert(num);//4
```

```javascript
var num=0;
for(var i=1;i<10;i++){
    if(i%5==0){
       continue;
    }
     num++;
}
alert(num);//8
```

### 3.6.5 对象操作语句

#### with语句

with语句的作用是将作用于设置到一个特定的对象中，with语句语法 with\(expression\)statement;[二、八、十、十六进制转换（图解篇）](http://www.cnblogs.com/gaizai/p/4233780.html)

* [原码, 反码, 补码 详解](https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)

