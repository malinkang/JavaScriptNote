# 第20章 JSON

## 20.1 语法

JSON的语法可以表示以下三种类型的值。

* 简单值
* 对象
* 数组

### 20.1.1 简单值

### 20.1.2 对象

### 20.1.3 数组

## 20.2 解析与序列化

### 20.2.1 JSON对象

```javascript
		var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011
		}
		var jsonText = JSON.stringify(book);
		console.log(jsonText);
		//{"title":"Professional javascript","authors":["Nicholas C.Zakas"],"edition":3,"year":2011}
		var bookCopy = JSON.parse(jsonText);
		console.log(bookCopy.title);
		//Professional javascript
```

### 20.2.2 序列化选项

#### 1.过滤结果

```javascript
		var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011
		}
		var jsonText = JSON.stringify(book,["title","edition"]);
		console.log(jsonText);
		//{"title":"Professional javascript","edition":3}
```

```javascript
	var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011
		}
		var jsonText = JSON.stringify(book,function(key,value){
			switch (key) {
				case "authors":
					return value.join(",");
				case "year":
					return 5000;
				//如果函数返回了undefined，那么相应的属性会被忽略
				case "edition":
					return undefined;
				default:
					return value;
			}
		});
		console.log(jsonText);
		//{"title":"Professional javascript","authors":"Nicholas C.Zakas","year":5000}
```

#### 2.字符串缩进

```javascript
		var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011
		}
		//每个级别缩进4个空格
		var jsonText = JSON.stringify(book, null, 4);
		console.log(jsonText);
		// {
  //   		"title": "Professional javascript",
  //   		"authors": [
  //       		"Nicholas C.Zakas"
  //   		],
  //   		"edition": 3,
  //   		"year": 2011
		// }
```

```javascript
	var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011
		}
	
		var jsonText = JSON.stringify(book, null, "--");
		console.log(jsonText);
		// {
		// --"title": "Professional javascript",
		// --"authors": [
		// ----"Nicholas C.Zakas"
		// --],
		// --"edition": 3,
		// --"year": 2011
		// }
```

#### 3.toJSON\(\)方法

```javascript
		var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011,
			toJSON:function(){
				return this.title;
			}
		}
	
		var jsonText = JSON.stringify(book);
		console.log(jsonText);
		//"Professional javascript"
```

### 20.2.3 解析选项

```javascript
		var book = {
			title:"Professional javascript",
			authors:[
				"Nicholas C.Zakas"
			],
			edition:3,
			year:2011,
			releaseDate: new Date(2011,11,1)
		}
	
		var jsonText = JSON.stringify(book);
		console.log(jsonText);
		var bookCopy = JSON.parse(jsonText,function(key,value){
			if(key == "releaseDate"){
				return new Date(value);
			} else {
				return value;
			}
		});
		console.log(bookCopy.releaseDate.getFullYear());
		//2011
```

