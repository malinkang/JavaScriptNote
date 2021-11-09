
### 4.1 基本类型和引用类型的值

#### 4.1.1 动态属性

对于引用类型的值，我们可以为其添加属性和方法，也可以改变和删除其属性和方法。

```js
var person = new Object();
person.name= "Nicholas";
alert(person.name);//Nicholas
```
但是，我们不能给基本类型的值添加属性。

```js
var name = "Nicholas";
name.age = 27;
alert(name.age);// undefined
```

#### 4.1.2 复制变量值

一个变量向另外一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。

```javascript
var num1 = 5;
var num2 = num1;
alert(num2); // 5
```

一个变量向另外一个变量复制引用类型的值时，同样也会将存储的变量对象中的值复制一份放到新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。

```javascript
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name); // Nicholas
```
#### 4.1.3 传递参数

ECMAScript中访问变量有按值和按引用两种方式，而参数只能按值传递。

向参数传递基本类型。

```javascript
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count); // 20
alert(result); // 30
```

向参数传递引用类型。

```javascript
function setName(obj) {
    obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name);
```


#### 4.1.4 检测类型

`typeof`操作符可以确定一个变量是字符串、数值、布尔值，还是undefined。如果变量的只是一个对象或null，则`typeof`操作符会像下面例子中所示的那样返回`object`。

```javascript
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
alert(typeof s); //string
alert(typeof i); //number
alert(typeof b); //boolean
alert(typeof u); // undefined
alert(typeof n); //object
alert(typeof o); //object
```

`instanceof`操作符可以判断一个值是否是某种类型的对象。


### 4.2 执行环境及作用域

