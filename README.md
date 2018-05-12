# ife2018
2018年百度前端学院任务仓库

# 三种简历
![简历1](https://github.com/CatsBrother/ife2018/raw/master/readMeImg/resume1.png)
第一份简历难度不大，两个三级标题之间的距离之间用了一个<br>解决了
![简历2](https://github.com/CatsBrother/ife2018/raw/master/readMeImg/resume2.png)
第二份简历还是遇到了一些问题，主要是左边简历模块，高度不能自适应，只是写好了一个高度，并不能根据简历的长短自动调整。
![简历3](https://github.com/CatsBrother/ife2018/raw/master/readMeImg/resume3.png)
第三份简历难度也不大，还是比较好写的。
这三个小练习写完了，过程磕磕绊绊不是很流畅，有的东西不太熟悉，需要查一查才知道问题出在哪里，怎样解决。基础还是不够牢固。
下面总结几个小知识点：

# BFC
形成 BFC 的条件 
1、浮动元素，float 除 none 以外的值； 
2、绝对定位元素，position（absolute，fixed）； 
3、display 为以下其中之一的值 inline-blocks，table-cells，table-captions； 
4、overflow 除了 visible 以外的值（hidden，auto，scroll）


# clear：both
写代码过程中发现有时候clear：both不管用，查了一下发现是这样的
clear影响的永远只是自己.没法让他人去哪儿.只会让自己去哪儿.
clear属性只是在block元素是起作用，如果你把clear:both用在一个inline-block或inline元素上，clear:both是不会起任何作用的。
可以用after伪类来解决。
用div包裹inline-block元素，然后:after 选择器在被选元素的内容后面插入内容（如下）即可解决问题
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}


# readme怎样插入图片
顺便解决了一下github readme怎样添加图片
首先将本地图片放在文件夹并上传至github，在readme中写入
! [简历1] (https://github.com/CatsBrother/ife2018/raw/master/readMeImg/resume1.png)
//去掉空格
[]内为图片文字描述， 然后是(https://github.com/用户名/仓库名/raw/master/图片文件夹名/图片名) 即可
readme可以自动将链接解析为图片并替代。

# 浮动元素自动变成块元素

# 怎样在线预览
https://www.jianshu.com/p/75e30889e70a
