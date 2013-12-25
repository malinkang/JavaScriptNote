第 2 章 作用域、引用类型
================

### 目录
* **[2.1作用域][1]**
  + **[2.1.1全局变量和局部变量][2]** 
  + **[2.1.2没有块级作用域][3]**  
* **[2.2引用类型][4]**
  + **[2.2.1 Object类型][5]** 
  + **[2.2.2 Array类型][6]** 
    * **[2.2.2.1 创建数组][7]**
    * **[2.2.2.2 数组项和长度][8]** 
    * **[2.2.2.3 检测数组][9]**
    * **[2.2.2.4 转换方法][10]** 

### 2.1作用域

#### 2.1.1全局变量和局部变量

``` javascript
 <script type="text/javascript">
      function add(num1,num2){
          //使用var定义的为局部变量
          var sum= num1+num2;
      }
      var result(1,2);
      //alert(sum);//出错
       //1.全局变量
      function add2(num1,num2){
          //使用var定义的为局部变量
           sum= num1+num2;
      }
      var result2(1,2);
      alert(sum);//3
 </script>
```

#### 2.1.2没有块级作用域

``` javascript

 <script type="text/javascript">
       if(true){
           var a="abc";
       }
       alert(a);//abc
       
       for(var i=0;i<10;i++){
           
       }
       alert(i);//10
 </script>
 
```
### 2.2引用类型

#### 2.2.1 Object类型

创建Object实例的方式有两种
``` javascript
 <script type="text/javascript">
        /**
         * 创建Object对象有两种方式
         */
        //方式1
       var person1=new Object();
       person1.name="张三";
       person1.age=29;
       //方式2
       var person2={
           name: "李四",
           age:18,
           //属性名也可以使用字符串
           "nickname":"小四"
       };
       var person3={};
       person3.name="王五";
       person3.age=18;
       //访问属性
       //1.点语法
       alert(person3.name);
       //2.用方括号进行访问
       /**
        * 两种方式没有区别，方括号可以通过变量进行访问
        */
       alert(person3["name"]);
       var name="name";
       alert(person3[name]);
 </script>
```
#### 2.2.2 Array类型

与其他语言不同的是，JavaScript数组的每一项都可以保存任何类型的数据。

##### 2.2.2.1 创建数组
创建数组的基本方式有两种:

* 使用Array构造函数 
  + 如果预先知道数组要保存的项目数量，也可以给该构造函数传递该数量
  + 也可以想Array构造函数传递数组中应该包含的项；如果传递的是数值，会按照给定的数值创建包含给定项数的数组；其他值则会创建包含那个值的只有一项的数组。
  + 用Array构造函数时也可以省略new操作符
``` javascript

 <script type="text/javascript">
     //使用构造函数创建数组
        var colors1=new Array();
        //如果预先知道数组要保存的项目数量，也可以给该构造函数传递该数量
        var colors2=new Array(10);
        //也可以想Array构造函数传递数组中应该包含的项 
        // 如果传递的是数值，会按照给定的该数值创建包含给定项数的数组；其他值则会创建
        //包含那个值的只有一项的数组。
        var colors3=new Array("blue","red","green");
        //使用Array构造函数时也可以省略new操作符
        var colors4=Array(3);
 </script>
```

* 数字字面量表示法。


``` javascript
 <script type="text/javascript">
   //创建一个包含3个字符串的数组
        var colors5=["red","green","blue"];
        //创建了一个空数组
        var colors6=[];
        //在IE8以及以前IE版本中，values是一个包含3个项目每一项的值分别为1、2和undefined的数组
        //在其他浏览器和IE9+，value会成为一个包含2项且值分别为1和2的数组。
        var values=[1,2,];//会创建一个包含2或3项的数组
        var values2=[,,,,,];//会创建一个包含5或6项的数组 每一项都为undefined
  </script>
        
```
##### 2.2.2.2 数组项和长度

``` javascript
 <script type="text/javascript">
        //创建一个包含3个字符串的数组
        var colors5=["red","green","blue"];
        color5[2]="white";//修改第三项
        colors5[20]="black";
        alert(colors5.length);//21 //数组自动增加到该索引值加1的长度
        //数组的length属性不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或者向
        //数组中添加新项
        colors5.length=2;
        alert(colors5[2]);//undefined
  </script>
       
```
##### 2.2.2.3 检测数组

``` javascript
 <script type="text/javascript">
      /**
         * 两种方式区别没有搞明白
         */
        var colors5=["red","green","blue"];
        //方式1
        if(colors5 instanceof Array){
            alert("是数组");
        }
        //方式2
        if(Array.isArray(colors5)){
             alert("是数组");
        }
       
  </script>
       
```
##### 2.2.2.4 转换方法

``` javascript
 <script type="text/javascript">
         var colors=["red","green","blue"];
        alert(colors.toString());//red,green,blue
        alert(colors.valueOf());//red,green,blue
        alert(colors);//red,green,blue 
        //默认用逗号分割可以，可以用join设置不同的分隔符
        alert(colors.join("-"));//red-green-blu
  </script>
       
```


