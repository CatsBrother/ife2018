# DOM
## 什么是DOM
W3C 文档对象模型Document Object Model（文档对象模型） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准
## 常用的dom方法和属性
### DOM方法
> getElementById  
> getElementsByTagName  
> getElementsByClassName  
> appendChild(node) 插入新的子节点  
> removeChild(node) 删除子节点  
### DOM 属性
> innerHTML  
> parentNode  
> childNode  
> attributes 节点的属性节点  
### 改变元素的样式
```
document.getElementById(id).style.property = new style
```
## DOM节点
![dom树](https://ws1.sinaimg.cn/large/bcf1f3c9gy1fromhxw3vzj20di07edfr.jpg)
DOM节点包括 元素节点  文本节点  属性节点
元素节点和文本节点之间存在父子关系
innerHTML 只能用于元素节点，不能用于文本节点，否则返回undefined
## querySelector() 方法
### document.querySelector("css选择器")
返回文档中匹配指定css选择器的**第一个元素**
```
document.guerySelector("#demo");
```
### element.querySelector("css选择器")
返回文档中匹配指定css选择器的**第一个元素**
```
var x = document.getElementById("demo");
x.guerySelector("p").innerHTML = "hello world";
```
### element.querySelectorAll("css选择器")
以nodelist返回文档中匹配指定css选择器的所有元素，可以指定某个元素，例如：
> document.guerySelectorAll(".demo")[1];

### 与getElementById的区别
query选择符选出的元素及数组是静态的，getElement是动态的。
