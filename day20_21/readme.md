# 事件
## 常用事件
onclick  
onload  页面结束加载时触发  
onkeydown  
onkeypress  
## 事件流
> 事件捕获阶段
> 处于目标阶段
> 事件冒泡阶段

## 事件处理程序
### DOM0
每个元素都有自己的事件处理程序
```
var btn = document.getElementById("ByBtn");
btn.onclick = function(){
  alert("!!!");
}
```
### DOM2
指定了两个方法用于处理和删除事件处理程序
addEventListener() removeEventListener()  
所有的DOM节点都包含这两个方法
接收三个参数
1.要处理的函数名  例如click
2.函数
3.布尔值  *如果为true 在捕获阶段调用，如果为false 在冒泡阶段调用*  
```
var btn = document.getElementById("Mybtn");
btn.addEventListener("click",function(){
    alert(this.id);
},false);
btn.removeEventListener("click",函数名，false);
```

## 事件对象
无论指定事件用什么方法（dom0 dom2）都会传入event对象
> btn.onclick = function(event){}
event包含于创建他有关的属性和方法，还包括一些共同的属性方法 **target**

## 事件委托 事件代理
父元素包含子元素，子元素的事件加到父元素上，可以减少dom操作，利用target可以找到子元素
详情：https://www.cnblogs.com/liugang-vip/p/5616484.html

## 定时
> setTimeOut()
> setInterval()
> clearTimeout 清除已设置的setTimeout对象
> clearInterval 清除已设置的setInterval对象
SetInterval为自动重复，setTimeout不会重复。
```
e = setTimeOut("函数名()",时间间隔毫秒);
clearTimeOut(e);
```

## CSS Sprite 雪碧图
开启定位，调整position
```
