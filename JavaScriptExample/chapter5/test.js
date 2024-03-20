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