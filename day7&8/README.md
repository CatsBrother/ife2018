# 关于布局

## 浮动float
   通过float：left or right 可以让元素向左或右浮动，浮动元素主要目的是实现文字包裹。
### 高度坍塌
元素浮动会脱离文档流，父元素的高度如果被子元素撑开，子元素浮动，父元素的高度会坍塌
清除浮动的方法主要有：
- 父元素设置 overflow：hidden；
- 父元素浮动
- clear：both；  clear改变自身元素位置
- after伪类
为父元素添加after伪类
' .clearfix:after{  
    content:"";  
    display:table;  
    clear:both;  
} '
### 包裹性
块元素默认占据整行的宽度，浮动之后宽度为width。
元素浮动之后浮动元素之间距离消失（也就是空格没有了）。
## 定位position
定位主要有
#### z-index
利用position定位也就是layer模型，也就是开启了定位的元素和原本的文档流不处于同一层上，因此可以定位移动，不影响其他元素，z-index影响的是不同层，z-index值默认为0，值越大，位置越靠上，最上面的元素会被显示出来。
#### 绝对定位
position：absolute
绝对定位相对于页面，或者距离最近的开启了相对定位的元素
#### 相对定位
相对定位相对于元素原本的位置，也可以开启用于其他元素的绝对定位
#### 静态定位和固定定位
static静态定位，默认值，不常用
fixed 固定定位，相对于浏览器的窗口，常用语右下角广告...

## 弹性布局flex
弹性盒子可以帮助自动布局
#### 弹性布局模型，默认x轴方向为主轴，y轴方向为交叉轴，开启弹性布局，子元素默认按照主轴方向排列。
#### 开启弹性布局，父元素 display：flex；
#### 属性
flex-direction：指定主轴方向 row为默认值，横向排列  
flex-direction：column 设置主轴方向为竖直方向  
flex-wrap：wrap   自动换行    
align-item 控制元素在交叉轴上的分布，默认值为strech，即为从最上方开始向下  
可以设置为center（居中）  flex-start  flex-end  
justify-content  主轴位置  默认为flex-start  
order 可以设置子元素的排列顺序，order值越大显示的越靠后   order值可以为负值  
flex：1    
父元素设置，使子元素高度相等
子元素设置宽度撑满父元素且自适应
flex-grow  元素占父元素宽度比例
## 圣杯布局
外部div包含三个div，分别是content left right 
content的宽度自适应
- 设置content的宽度为100%
- #left  margin-left=-100%；
  #right margin-left=-200px；
  设置负外边距，将左右两栏放到上面一栏（相当于挡住了content对应部分）
- 给父div设置左右两栏宽度的padding（相当于挤压content）
- 给左右两栏开启定位放在padding的位置  

## 小知识点
### 外边距折叠
如果两个相邻的元素都设置了外边距，并且外边距接触，就会产生外边距折叠，较小的margin消失，较大的保留
可以开启BFC解决。
### box-sizing 
box-sizing主要包括两个
#### box-sizing：content-box
W3C标准，为默认值，content-box的width和height只包含content，不包括border，margin，padding
#### border-box
IE标准  包括content，border，padding   **不包括margin**





















