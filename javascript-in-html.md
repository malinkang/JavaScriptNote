# 基础

## 2.1 &lt;script&gt;元素

向HTML页面中插入JavaScript的主要方法，就是使用`<script>`元素

HTML4.01为`<script>`定义了6个属性：

* async
* charset
* defer
* language：已废弃
* src：可选。表示包含要执行代码的外部文件。
* type：

使用`<script>`元素的方式有两种：

1.直接在页面中嵌入JavaScript代码

```javascript
<script type="text/javascript">
    alert("Hi");
</script>
```

2.包含外部javascript文件。

```javascript
<script type="text/javascript" src="example.js"></script>
```

也可以省略结束的&lt;/script&gt;标签，例如

```javascript
<script type="text/javascript" src="example.js"/>
```

在使用`<script>`嵌入JavaScript代码，记住不要在代码中任何地方出现`</script>`字符串,如下面代码就会产生错误：

```javascript
<script type="text/javascript">
        alert("</script>");
</script>
```

当浏览器遇到字符串`</script>`时，就会认为是结束的`</srcipt>`标签。通过把这个字符串分割成两部分可以解决这个问题。例如：

```javascript
<script type="text/javascript">
    alert("<\/script>");
</script>
```

### 2.1.1 标签的位置

### 2.1.2 延迟脚本

### 2.1.3 异步脚本

### 2.1.4 在XHTML中的语法

### 2.1.5 不推荐使用的语法

## 2.2 嵌入代码与外部文件

## 2.3 文档模式

## 2.4  &lt;noscript&gt;元素



