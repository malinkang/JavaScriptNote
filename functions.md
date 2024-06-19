---
title: 函数
tags:
  - JavaScript
comments: true
---

## 函数的定义和调用

```javascript
//定义方式1：函数声明的方式定义
function sum1(num1, num2) {
    return num1 + num2;
}
console.log(sum1(10, 20));
//定义方式2：函数表达式
let sum2 = function (num1, num2) {
    return num1 + num2;
};
console.log(sum2(10, 20));
//定义方式3：箭头函数
let sum3 = (num1, num2) =>{
    return num1 + num2;
};
console.log(sum3(10, 20));
//定义方式4：Function构造函数 不推荐
let sum4 = new Function("num1", "num2", "return num1 + num2");
console.log(sum4(10, 20));
```

## 箭头函数


=== "JavaScript"
    ```javascript
    let ints = [1, 2, 3];
    console.log(ints.map(function (i) { return i * i; }))
    //箭头函数简洁的语法非常适合嵌入函数的场景
    console.log(ints.map((i) => { return i * i }));
    //如果只有一个参数，可以不用括号，只有没有参数，或者多个参数情况下才需要括号
    console.log(ints.map(i => { return i * i }));
    //箭头后面只有一行代码，可以省略大括号
    console.log(ints.map(i =>  i * i ));
    ```
=== "Kotlin"
    ```kotlin
    var ints = arrayOf(1, 2, 3)
    println(ints.map(fun(i:Int):Int{
        return i * i;
    }))
    println(ints.map({i-> 
        println("i = $i")
        i * i
    }))
    // map 返回一个新list
    print(ints.map { it * it })
    ```
## 函数名
因为函数名就是指向函数的指针，所以它们跟其他包含对象指针的变量具有相同的行为。这意味着一个函数可以有多个名称，如下所示：

```javascript
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 10));           // 20
let anotherSum = sum;
console.log(anotherSum(10, 10));   // 20
sum = null;
console.log(anotherSum(10, 10));   // 20
```

ECMAScript 6的所有函数对象都会暴露一个只读的name属性，其中包含关于函数的信息。多数情况下，这个属性中保存的就是一个函数标识符，或者说是一个字符串化的变量名。即使函数没有名称，也会如实显示成空字符串。如果它是使用Function构造函数创建的，则会标识成"anonymous"：

```javascript
function foo() {}
let bar = function() {};
let baz = () => {};
console.log(foo.name);                   // foo
console.log(bar.name);                   // bar
console.log(baz.name);                   // baz
console.log((() => {}).name);          //（空字符串）
console.log((new Function()).name);   // anonymous
```

如果函数是一个获取函数、设置函数，或者使用bind()实例化，那么标识符前面会加上一个前缀：

```javascript
function foo() {}
console.log(foo.bind(null).name);     // bound foo
let dog = {
  years: 1,
  get age() {
    return this.years;
  },
  set age(newAge) {
    this.years = newAge;
  }
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name);   // get age
console.log(propertyDescriptor.set.name);   // set age
```

## 参数



JavaScript函数不介意传递进来多少几个参数，也不再回传递进来的参数是什么数据类型。也就是说，即便你定义的函数只接受俩个参数，在调用这个函数时，也未必一定要传递两个参数。之所以会这样，JavaScript中的参数在内部用一个arguments对象表示。

arguments对象与数组类似，可以使用方括号语法访问它的每一个元素，用length属性来确定传递进来多少个参数

```javascript
function howManyArgs(){
    console.log(arguments.length);
  }
howManyArgs("a","b");//2
howManyArgs();//0
howManyArgs("c");//1
//混合使用
function add(num1,num2){
    return arguments[0]+num2;
}
console.log(add(10,20));//30
```

如果函数是使用箭头语法定义的，那么传给函数的参数将不能使用arguments关键字访问，而只能通过定义的命名参数访问

```javascript
function foo() {
  console.log(arguments[0]);
}
foo(5); // 5
let bar = () => {
  console.log(arguments[0]);
};
bar(5);   // ReferenceError: arguments is not defined
```
虽然箭头函数中没有arguments对象，但可以在包装函数中把它提供给箭头函数：

```javascript
function foo() {
  let bar = () => {
    console.log(arguments[0]); // 5
  };
  bar();
}
foo(5);
```

ES6标准引入了rest参数，代表未声明的参数。

```javascript
function foo (a,b,...rest) {
  console.log("a="+a);
  console.log("b="+b);
  console.log("rest="+rest);
}
foo(1,2,3,4,5); // a=10 b=2 rest=3,4,5
foo(1); //a=1 b=undefined rest=
```

## 默认参数

```javascript
function makeKing(name = 'Henry') {
  return `King ${name} VIII`;
}
console.log(makeKing('Louis'));   // 'King Louis VIII'
console.log(makeKing());           // 'King Henry VIII'
```

## 参数扩展与收集

```javascript
let values = [1, 2, 3, 4];
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}
console.log(getSum(...values)); // 10
console.log(getSum(-1, ...values));             // 9
console.log(getSum(...values, 5));              // 15
console.log(getSum(-1, ...values, 5));         // 14
console.log(getSum(...values, ...[5,6,7]));   // 28
```