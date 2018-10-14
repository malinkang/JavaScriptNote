# 第8章 BOM

BOM即浏览器对象模型。

## 8.1 window对象

BOM的核心对象是window，它表示浏览器的一个实例。

### 8.1.1 全局作用域

```javascript
<script type="text/javascript">
    //全局作用域中定义了一个变量age和一个函数setAge()
    //它们被自动归在了window对象名下。
    var age = 29;
    function sayAge() {
        alert(this.age);
    }

    alert(window.age);
    sayAge();
    window.sayAge();
    //定义全局变量和在window对象上直接定义属性还是有一点差别的
    /**
     * 全局变量不能通过delete操作符删除
     * 但是直接在window对象上定义的属性可以
     */
    var name = "nick";
    window.color = "red";
    delete window.name;
    //false
    delete window.color;
    //true
    alert(window.name);
    //nick
    alert(window.color);
    //undefined
    /**
     * 尝试访问未声明的变量会抛出错误，但是通过查询window对象，
     * 可以知道某个可能未声明的变量是否存在
     */
    //var newValue＝oldValue;//错误，因为oldValue未定义
    //newValue的值是undefined
       var newValue=oldValue;
</script>
```

### 8.1.2 窗口关系和框架

### 8.1.3 窗口位置

用来确定和修改window对象位置的属性和方法有很多。

IE、Safari、Opera和Chrome都提供了screenLeft和ScreenTop属性，分别用来表示窗口相对于屏幕左边有上边的位置。 Firfox则在screenX和screenY属性，提供相同的窗口位置信息，Safari和Chrome也同时支持这两个属性。Opera虽然也支持screenX和screenY属性，但与screenLeft和screenTop属性并不对应。

```javascript
<script type="text/javascript">
    var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
    var topPos=(typeof window.screenTop=="number")?window.screenTop:window.screenY;
    alert(leftPos);
    alert(topPos);
    /**
     * moveTo()接受的是新位置的x和y坐标
     * 
     * moveBy()接收的是在水平和垂直方向移动的像素
     */
    //移动 将窗口移动到屏幕左上角
    window.moveTo(0,0);
    //将窗向下移动100像素
    window.moveBy(0,100);
    //将窗口移动到（200，300）
    window.moveTo(200,200);
    //将窗口向左移动50像素
    window.moveBy(-50,0);
</script>
```

### 8.1.4 窗口大小

### 8.1.5 导航和打开窗口

### 8.1.6 间歇调用和超时调用

### 8.1.7 系统对话框

* alert（）
* confirm（）
* prompt\(\)

```javascript
<script type="text/javascript">
    if(confirm("Are you sure?")){
        alert("I'm so glad you're sure!");
    }else{
        alert("I'm sorry to hear you're not sure");
    }
    var result=prompt("What's your name?","Michael");
    if(result!=null){
        alert("Welcome "+result);
    }
    //显示打印对话框
    window.print();
    //显示查找对话框
    window.find();
</script>
```

## 8.2 location对象

location是最有用的BOM对象之一,它提供了当前窗口中加载的文档有关的信息，还提供了一些导航功能。事实上，location对象是一个特别的对象，因为它既是window对象的属性，也是doucument对象的属性；window.location和document.location引用的是同一个对象。

### 8.2.1 查询字符串参数

#### 8.2.2 位置操作

## 8.3 navigator对象

### 8.3.1 检测插件

### 8.3.2 注册处理程序

## 8.4 screen对象

### 8.5 history对象

