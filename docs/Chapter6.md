第 6 章 DOM
==============================


DOM是针对HTML和XML文档的一个API。DOM描述了一个层次化的节点树。

### 6.1 节点层次

DOM可以将任何HTML和XML文档描绘成一个由多个节点构成的结构。节点可以分为几种不同的类型，每种类型分别表示文档中不同的信息及标记。每个节点都拥有各自的特点、数据和方法，另外也与其他节点存在某种关系。

文档节点是每个文档的根节点。文档节点只有一个子节点，我们称之为文档元素。每个文档只有一个文档元素。

节点一共有12中类型，这些类型都继承自一个基类型。

#### 6.1.1 Node类型

JavaScript中所有的节点类型都继承自Node类型。

##### 6.1.1.1 常用属性

* 每个节点都有一个nodeType属性，用于表明节点的类型。节点类型由在Node类型中定义的下列12个数值常量来表示：

  * Node.ELEMENT_NODE=1;
  * Node.ATTRIBUTE_NODE＝2;
  * Node.TEXT_NODE＝3;
  * Node.CDATA_SECTION_NODE;
  * Node.ENTITY_REFERENCE_NODE
  * Node.ENTITY_NODE
  * Node.PROCESSING_INSTRUCTION_NODE
  * Node.COMMENT_NODE
  * Node.DOCUMENT_NODE
  * Node.DOCUMENT_TYPE_NODE
  * Node.DOCUMENT_FRAGMENT_NODE
  * Node.NOTATION_NODE

* nodeName属性：元素的标签名字。
* nodeValue属性：

##### 6.1.1.1.2 节点关系

* childNodes属性，其中保存了一个NodeList对象，NodeList是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。
   * NodeList中的节点可以通过方括号，也可以通过item()方法来访问。
   * length属性表示节点的数量。
   * 使用Array.prototype.slice.call(someNode.childNodes,0)方法将NodeList对象换为数组。
* parentNode属性，该属性指向文档树中的父节点。
* 包含在childNodes列表中的每个节点相互之间都是同胞节点。通过使用列表中的每个节点的previousSibling和nextSibling属性可以访问同一个列表中的其他节点。列表中的第一个节点的previousSibling属性值为null，而列表中的最后一个节点的nextSibling属性的值同样也为null。只有一个节点时，这两个值都为空。
* 父节点与第一个和最后一个子节点之间也存在特殊关系。父节点的firstChild和lastChild属性分别指向其childNodes列表中的第一个和最后一个节点。只有一个子节点的情况下指向同一个节点。没有子节点则两个值都为null。
* hasChildNodes()方法,有子节点返回true，否则返回false
* ownerDocument，该属性指向表示整个文档的文档节点。

##### 6.1.1.1.3 操作节点

* appendChild()方法：用于向childNodes列表的末尾添加一个节点，返回新增的节点。
   * 如果传入的appendChild()中的节点已经是文档的一部分了，那么结果就是将该节点从原来的位置转移到新位置，任何DOM节点也不能同时出现在文档中的多个位置上。
* insertBefore()方法：将节点放到指定节点的前面。这个方法接受两个参数：要插入的节点和作为参照的节点。如果没有指定参照节点，则添加到末尾。返回新增节点。
* replaceChild()：替换节点，接受两个参数：新节点和要替换的节点。
* removeChild()：移除节点，返回被移除的节点。

##### 6.1.1.1.4 其他方法

* cloneNode()

#### 6.1.2 Document类型

JavaScript通过Document类型表示文档。在浏览器中document对象是HTMLDocument（继承自Document类型）的一个实例，表示整个HTML页面。而且document也是window对象的一个属性，因此可以将其作为全局对象来访问。Document节点具有一下特征：

* nodeType的值为9。
* nodeName的值为 “#document”
* nodeValue的值为null;
* parentNode的值为null;
* ownerDocument的值为null;
* 子节点可能是一个DocumentType、Element、ProcessingInstruction或Comment

##### 6.1.2.1 文档子节点

访问子节点的方式有两种

* documentElement属性
* 通过childNodes列表访问文档元素。
* 作为HTMLDocument的实例，document对象还有一个body属性，直接指向<body>元素。
* doctype

##### 6.1.2.2 文档信息

作为HTMLDocument的一个实例，document对象还有一些标准的Document对象没有的属性。这些属性提供了document对象所表现的网页的一些信息。

* title 包含着\<title>元素中的文本。
* 修改title属性的值不会改变\<title>元素。
* URL属性：包含页面完整的URL
* domain属性中包含页面的域名
* referrer属性中则保存着链接到当前页面的那个页面的url

##### 6.1.2.3 查找元素

* getElementById():根据ID获取元素，如果页面中多个元素的ID值相同，只返回文档中第一次出现的元素。
* getElementsByTagName():根据标签名，返回包含零或多个元素的NodeList。在HMLTDocument中，这个方法会返回一个HTMLCollection对象，该对象与NodeList非常类似。HTMLCollection对象还有一个方法，叫做namedItem()，使用这个方法可以通过元素的name特性取得集合中的项。假设下面提到的页面中包含如下<img>元素

> \<img src="myimage.gif" name="myImage">

那么就可以通过如下方式从images变量中取得这个<img>元素。

>var myImage=images.namedItem("myImage");

也可以通过方括号语法来访问

>var myImage=images["myImage"];

要想取得文档中的所有元素，可以向getElementsByTagName()中传入* 。

* getElementsByName()：只有HTMLDocument类型才有的方法，这个方法会返回带有给定name特性的所有元素。返回也是一个HTMLCollection对象。

##### 6.1.2.4 特殊集合

除了属性和方法，document对象还有一些特殊的集合。这些集合都是HTMLCollection对象，为访问文档常用的部分提供了快捷方式，包括：

* document.anchors 包含文档中所有带name特性的\<a>元素。
* document.applets 包含文档中所有的\<applet>元素。
* document.forms
* document.images
* document.links

##### 6.1.2.5 DOM一致性检测

##### 6.1.2.6 文档写入

document提供了输入到网页的能力：write（），writenln(),open()和close()。

其中，write()和writeln()方法都接受一个字符串参数，即要写入到输入流中的文本。此外，还可以使用write()和writeln()方法动态地包含外部资源。在包含外部JavaScript文件等。在包含JavaScript文件时，必须注意不能直接包含字符串“\</script>”，因为这会导致该字符串被解释成脚本块的结束，它后面的代码将无法执行。

#### 6.1.3 Element类型

Element类型用于表现XML和HTML元素，提供了对元素标签名，子节点及特性的访问。Element节点具有以下特征：

* nodeType的值为1
* nodeName的值为元素的标签名
* nodeValue的值为null
* parentNode可能是Document或Element

##### 6.1.3.1 HTML元素

所有HTML元素都由HTMLElement类型表示。HTMLElement类型直接继承自Element并添加一些属性。

* id
* title
* lang
* dir
* calssName

##### 6.1.3.2 取得特性

操作特性的DOM方法有三个

* getAttribute()
* setAttribute()
* removeAttribute()

这三个方法可以针对任何特性使用，包括那些以HTMLElement类型属性的形式定义的特性。传递给getAttribute()的特性名。


##### 6.1.3.3 设置特性

与getAttribute()对应的方法是setAttribute()

##### 6.1.3.4 attributes属性

##### 6.1.3.5 创建元素

##### 6.1.3.6 元素的子节点


#### 6.1.4 Text类型

##### 6.1.4.1 创建文本节点

##### 6.1.4.2 规范化文本节点

##### 6.1.4.3 分割文本节点

#### 6.1.5 Comment类型

#### 6.1.6 CDATASection类型

#### 6.1.7 DocumentType类型

#### 6.1.8 DocumentFragment类型

#### 6.1.9 Attr类型

### 6.2 DOM操作技术

#### 6.2.1 动态脚本

#### 6.2.2 动态样式

#### 6.2.3 操作表格

#### 6.2.4 使用NodeList

### 6.3 选择符API

#### 6.3.1 querySelector()方法

#### 6.3.2 querySelectorAll()方法

#### 6.3.3 matchesSelector()方法

### 6.4 元素遍历

### 6.5 HTML5

#### 6.5.1 与类相关的扩展


#### 6.5.2 焦点管理

#### 6.5.3 HTMLDocument的变化

#### 6.5.4 字符集属性

#### 6.5.5 自定义数据类型

#### 6.5.6 插入标记

#### 6.5.7 scrollIntoView（）方法

### 6.6 专有扩展

#### 6.6.1 文档模式

#### 6.6.2 children属性

#### 6.6.3 contains()方法

#### 6.6.4 插入文本

#### 6.6.5 滚动

### 6.7 DOM2和DOM3

#### 6.7.1 DOM变化

#### 6.7.2 样式

#### 6.7.3 遍历

#### 6.7.4 范围












   


