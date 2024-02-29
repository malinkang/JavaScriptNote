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