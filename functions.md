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

## 5.2 参数和返回值

JavaScript函数不介意传递进来多少几个参数，也不再回传递进来的参数是什么数据类型。也就是说，即便你定义的函数只接受俩个参数，在调用这个函数时，也未必一定要传递两个参数。之所以会这样，JavaScript中的参数在内部用一个arguments对象表示。

arguments对象与数组类似，可以使用方括号语法访问它的每一个元素，用length属性来确定传递进来多少个参数

```javascript
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

## 5.3 作为值的函数

