# 几个小练习
## For in 循环
遍历对象的属性  
```
var person = {
    fnamme:"john",
    lname:"doe",
    age:"25"
};
for (x in person){
     txt = txt + person[x];
}
```
## break 和continue
break 用于跳出循环  
continue用于跳出循环中的一次迭代  

## try catch throw
try：包括可能错误的代码  
catch：当try中发生错误时执行catch   
throw：创建自定义的错误，相当于try中出错，throw返回对应的错误给catch  
try和catch总是成对出现  
```
try{
    if ...  throw A;
    if ...  throw B;
}
catch(err){  //如果有throw err为对应的A或B

}
```
## 数值转换
Number() parseInt() parseFloat()
#### Number
可以用于任何类型
true——1  
false——0  
null——0  
undefined——NaN  
""——0  
16进制数字 ——对应十进制  
Date—— 1970.1.1至今毫秒数  
其他——NaN  

#### parseInt  
相比number()更常用 可以用于取整  
123blue——123  
12.2——12  
""——NaN  
### 判断是否为NaN 不能用== 用isNaN();

### 判断是否为整数
Number.Integer(3.3) false  
* ES6新增  只支持chrom和firefox  

## 字符串翻转
```
str=str.split("").reverse().join("");
```

## 输出固定长度的数字，不足部分用0补足
```
function PrefixInteger(num.length){
    return("00000000000000000000"+num).substr(-length);
}
```

## 获取当前时间
var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)  
myDate.getFullYear();    //获取完整的年份(4位,1970-????)  
myDate.getMonth();       //获取当前月份(0-11,0代表1月)  
myDate.getDate();        //获取当前日(1-31)  
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)  
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)  
myDate.getHours();       //获取当前小时数(0-23)  
myDate.getMinutes();     //获取当前分钟数(0-59)  
myDate.getSeconds();     //获取当前秒数(0-59)  
myDate.getMilliseconds();    //获取当前毫秒数(0-999)  
myDate.toLocaleDateString();     //获取当前日期  
var mytime=myDate.toLocaleTimeString();     //获取当前时间  
myDate.toLocaleString( );        //获取日期与时间  
