# 第13章 事件

## 13.1 事件流

### 13.1.1 事件冒泡

### 13.1.2 事件捕获

### 13.1.3 DOM事件流

## 13.2 事件处理程序

### 13.2.1 HTML事件处理程序

```markup
<input type="button" value="Click Me" onclick="alert('Clicked')">
```

```javascript
	<script type="text/javascript">
		function showMessage(){
			alert("Hello world!");
		}
	</script>
	<input type="button" value="Click Me" onclick="showMessage()">
```



