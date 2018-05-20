# 文本溢出显示省略号+分隔线文字+其他
## div自适应于浏览器高度
```
html,
body{
    height:100%;
    overflow:hidden;
}
```
然后div高度100%；

## 文本溢出显示省略号
### 单行文本
```
overflow：hidden;
text-overflow:ellipisis;
white-space:nowrap;
```

### 多行文本
适用于webKit浏览器
```
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertial;
```
display:-webkit-box; 将对象作为弹性伸缩盒模型显示；
-webkit-line-clamp:2;限制在块元素内的文本行数；
-webkit-box-orient:vertial;子元素的排列方式，竖版；

## 分隔线
![分隔线](https://github.com/CatsBrother/ife2018/raw/master/readMeImg/分隔线.png) 
主要看了两种思想
第一种单标签实现，文字左右是两个高度为1px的div，div的宽度即为分隔线的长度
第二种是通过相对定位移动文字的位置，并设置背景色遮挡住一部分分隔线，分隔线是边框

详细讲解的链接：http://www.daqianduan.com/example?pid=4258 

### markdown怎样插入代码
···（tab上面的键）
代码段
···
需要切换英文输入法


