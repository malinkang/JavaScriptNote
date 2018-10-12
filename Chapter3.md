第 3 章 面向对象
=================

### 目录


### 3.1 属性

#### 3.1.1 属性类型

JavaScript中有两种属性：数据属性和访问器属性。

* 数据属性：数据属性有四个描述其行为的特性。
  + [[Configurable]]:
  + [[Enumerable]]:
  + [[Writable]]：表示能否修改属性的值。
  + [[Value]]：包含这个属性的数据值。
* 访问器属性：访问器属性有如下4个特征
  + [[Configurable]]:
  + [[Enumerable]]:
  + [[Get]]
  + [[Set]]
  
要修改属性默认的特性，使用Object.defineProperty()方法。这个方法接受三个参数：
属性所在的对象、属性的名字和一个描述符对象。

可以多次调用Object.defineProperty()方法修改同一个属性，但在把configurable特性设置为fasle之后就会有限制了。

``` javascript

        <script type="text/javascript">
			//创建一个对象
			var person = {};
			Object.defineProperty(person, "name", {
				//只读
				writeable : false,
				value : "Nicholas"
			});
			alert(person.name);
			//Nicholas
			person.name = "Greg";
			alert(person.name);
			//Nicholas
			var book = {
				_year : 2004,
				edition : 1
			};
			Object.defineProperty(book, "year", {
				get : function() {
					return this._year;
				},
				set : function(newValue) {
					if (newValue > 2004) {
						this._year = newValue;
						this.edition += newValue - 2004;
					}
				}
			});
			book.year = 2005;
			alert(book.edition);//2

        </script>
        
```
#### 3.1.2 定义多个属性
使用Object.defineProperties()方法。利用这个方法可以通过描述符一次定义多个属性。
这个方法接受两个对象参数：

``` javascript
 <script type="text/javascript">
			var book = {};
			Object.defineProperties(book, {
				_year : {
					value : 2004
				},
				edition : {
					value : 1
				},
				year:{
				    get:function(){
				        return this._year;
				    }
				},
				set:function(newValue){
				    if(newValue>2004){
				        this._year=newValue;
				        this.edition+=newValue-2004;
				    }
				}
			});
        </script>
```
#### 3.1.3 读取属性的特性

``` javascript

   <script type="text/javascript">
			var book = {};
			Object.defineProperties(book, {
				_year : {
					value : 2004
				},
				edition : {
					value : 1
				},
				year:{
				    get:function(){
				        return this._year;
				    }
				},
				set:function(newValue){
				    if(newValue>2004){
				        this._year=newValue;
				        this.edition+=newValue-2004;
				    }
				}
			});
			var descriptor=Object.getOwnPropertyDescriptor(book,"_year");
			alert(descriptor.value);//2004
			alert(descriptor.configurable);//false
        </script>

``` 
### 3.2 创建对象

#### 3.2.1 字面量创建对象

``` javascript

        <script type="text/javascript">
        //创建一个对象
        var person=new Object();
        person.name="NIcholas";
        person.age=29;
        preson.sayName=function(){
          alert(this.name);  
        };
        //也可以写成
        var person2={
            name:"Nicholas",
            age:29,
            sayName:function(){
                alert(this.name);
            }
        };
        </script>

``` 

#### 3.2.2 工厂模式

#### 3.2.3 构造函数模式

#### 3.2.4 原型模式

#### 3.2.5 组合使用构造函数模式和原型模式

#### 3.2.6 动态原型模式

#### 3.2.7 寄生构造函数模式

#### 3.2.8 稳妥构造函数模式

### 3.3 继承

#### 3.3.1 原型链

#### 3.3.2 借用构造函数

#### 3.3.3 组合继承

#### 3.3.4 原型式继承

#### 3.3.5 寄生式继承

#### 3.3.6 寄生组合式继承


