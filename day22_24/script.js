var firbtns = document.getElementsByClassName("firbtns");
var firbtn = document.getElementsByTagName("button");
var lab = document.getElementsByClassName("firlab");
var radio_a = document.getElementById("firradio-a");
var radio_b = document.getElementById("firradio-b");
var firresult = document.getElementById("firresult");

firbtns[0].onclick = function(e){
	num_a = document.getElementById("firnum-a").value;
	num_a = Number(num_a);
	num_b = document.getElementById("secnum-b").value;
	num_b = Number(num_b);

	var t =e.target;
	var iid = t.id;
	var rad = which();
	var txt = text_value(rad);
	switch(iid){
		case "isNum":
			var val = judgeNum(txt,0);
			if (val) {
				firresult.innerHTML = "是数字！";
			}else{
				firresult.innerHTML = "不是数字！";
			}
			break;
		case "round":
			judgeNum(num_a,num_b);
			firresult.innerHTML = num_a.toFixed(num_b);
			break;
		case "abs":
			judgeNum(txt,0);
			firresult.innerHTML = Math.abs(text_value(rad));
			break;
		case "ceil":
			judgeNum(txt,0);
			firresult.innerHTML = Math.ceil(text_value(rad));
			break;
		case "floor":
			judgeNum(txt,0);
			firresult.innerHTML = Math.floor(text_value(rad));
			break;
		case "inte":
			judgeNum(txt,0);
			firresult.innerHTML = intRound(txt);
			break;
		case "max":
			judgeNum(num_a,num_b);
			firresult.innerHTML = Math.max(num_a,num_b);
			break;
		case "min":
			judgeNum(num_a,num_b);
			firresult.innerHTML = Math.min(num_a,num_b);
			break;
	}
}
//判断radio选择的是哪个
function which(){
	if (radio_a.checked) {
		return radio_a;
	}else if (radio_b.checked) {
		return radio_b;
	}
}
//根据radio获取text值
function text_value(type){
	if (type == radio_a) {
		return num_a;
	}else{
		return num_b;
	}
}
//判断是否为数字
function judgeNum(num1,num2){
	if (isNaN(num1) || isNaN(num2)) {
		console.log("error!It is not number!");
		return false;
	}
	else{
		return true;
	}
}
//四舍五入取整
function intRound(num){
	return num.toFixed(0);
}





var strrada = document.getElementById("secradio-a");
var strtxta = document.getElementById("str-a");
var strradb = document.getElementById("secradio-b");
var strtxtb = document.getElementById("str-b");
var numa = document.getElementById("secnum-a");
var numb = document.getElementById("secnum-b");
var secresult = document.getElementById("secresult");
secbtns.onclick = function(e){
	var t = e.target;
	var btnid = t.id;
	switch(btnid){
		case "long":
			var ttext = getvalue();
			secresult.innerHTML = ttext.length;
			break;
		case "char":
			var ttext = getvalue();
			secresult.innerHTML = ttext.charAt(2);
			break;
		case "concat":
			var text1 = strtxta.value;
			var text2 = strtxtb.value;
			secresult.innerHTML = text1.concat(text2);
			break;
		case "indexof":
			var text1 = strtxta.value;
			var text2 = strtxtb.value;
			secresult.innerHTML = text1.indexOf(text2);
			break;
		case "last_index":
			var text1 = strtxta.value;
			var text2 = strtxtb.value;
			secresult.innerHTML = text2.lastIndexOf(text1);
			break;
		case "slice":
			var num1 = numa.value;
			var num2 = numb.value;
			var arr = getvalue();
			secresult.innerHTML = arr.slice(num1, num2);
			break;
		case "row":
			var text = getvalue();
			var rownum = text.split("\n");
			secresult.innerHTML = rownum.length;
			break;
		case "sub":
			var num1 = numa.value;
			var num2 = numb.value;
			var arr = getvalue();
			secresult.innerHTML = arr.substr(num1, num2);
			break;
		case "high":
			var text = getvalue();
			secresult.innerHTML = text.toUpperCase();
			break;
		case "low":
			var text = getvalue();
			secresult.innerHTML = text.toLowerCase();
			break;
		case "space":
			var text = getvalue();
			while(text.indexOf(" ")!=-1){
				text=text.replace(" ","");
			}
			secresult.innerHTML = text;
			break;
		case "replace":
			var text = getvalue();
			var text1 = strtxta.value;
			var text2 = strtxtb.value;
			if (text1 == text) {
				text1 = text2;
			}
			while(text.indexOf("a")!=-1){
				text=text.replace("a",text2);
			}
			secresult.innerHTML = text;
			break;
		}
	}

	//获取当前选中的值
	function getvalue(){
		if (strrada.checked) {
			return strtxta.value;
		} else if (strradb.checked) {
			return strtxtb.value;
		}
	}

	/*
	实现一个字符串头尾去除空格的函数
	注意需要去除的空格，包括全角、半角空格
	暂时不需要学习和使用正则表达式的方式
	*/
	function diyTrim(str) {
	    var secresult = "";
	    // do something
	    secresult = str.split(" ").join("");
	    secresult = secresult.split("　").join("");
	    return secresult;
	}

	// 测试用例
	console.log(diyTrim(' a f b    ')); // ->a f b
	console.log(diyTrim('    ffdaf    ')); // ->ffdaf
	console.log(diyTrim('1    ')); // ->1
	console.log(diyTrim('　　f')); // ->f
	console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
	console.log(diyTrim(' ')); // ->
	console.log(diyTrim('　')); // ->
	console.log(diyTrim('')); // ->

	/*
	去掉字符串str中，连续重复的地方
	*/
	function removeRepetition(str) {
	    var secresult = "";
	    // do something
	    var ch;
	    for (var i = 0; i < str.length; i++) {
	    	if (ch !== str.charAt(i)) {
	    		ch = str.charAt(i);
	    		secresult += ch;
	    	}
	    }
	    return secresult;
	}

	// 测试用例
	console.log(removeRepetition("aaa")); // ->a
	console.log(removeRepetition("abbba")); // ->aba
	console.log(removeRepetition("aabbaabb")); // ->abab
	console.log(removeRepetition("")); // ->
	console.log(removeRepetition("abc")); // ->abc

var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
	var loop = function(branch){
		if (!branch) {
			return false;
		}
		if (branch.name == name) {
			return branch.id;
		}
		return (loop(branch.left)||loop(branch.left == 0))||loop(branch.right);
	}
	return loop(tree);
}
console.log(findIdByName("Carl"));

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
	var loop = function(branch){
		if (!branch) {
			return false;
		}
		if (branch.id == id) {
			return branch.name;
		}
		return (loop(branch.left)||loop(branch.left == 0))||loop(branch.right);
	}
	return loop(tree);
}
console.log(findNameById("02"));
// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
	var loop = function(obj){
		console.log(obj.name);
		if (obj.left) 
			loop(obj.left);
		if (obj.right) {
			loop(obj.right);
		}
	}
	return loop(tree);
}
getListWithDLR();
// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
	var loop = function(obj){
		if (obj.left) 
			loop(obj.left);
		console.log(obj.name);
		if (obj.right) {
			loop(obj.right);
		}
	}
	return loop(tree);
}
getListWithLDR();
// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
 var loop = function(obj){
		if (obj.left) 
			loop(obj.left);
		
		if (obj.right) {
			loop(obj.right);
		}
		console.log(obj.name);
	}
	return loop(tree);
}
getListWithLRD();



var con = document.getElementById("queue-input");
var thbtn = document.getElementById("thbtn");
var inb = document.getElementById("in_btn");
var out = document.getElementById("out_btn");
var font = document.getElementById("font_btn");
var empty = document.getElementById("empty_btn");
var p = document.getElementById("queue-cont");
var queue = ["apple", "pear"];

//队头对应数组最后一个元素
/*	thbtn.onclick = function(e){
		var t = e.target;
		switch(t){
			case inb:
				var que = con.value;
				queue.push(que);
				var strque = queue.join("->");
				p.innerHTML = strque;
				break;
			case out:
				queue.shift();
				var strque = queue.join("->");
				p.innerHTML = strque;
				break;
			case font:
				var len = queue.length;
				p.innerHTML = queue[len-1];
				break;
			case empty:
				if (queue.length == 0) {
					p.innerHTML += "队列为空";
				}else{
					p.innerHTML += "队列非空";
				}
				break;
		}
	}
*/
//队头对应数组第一个元素
thbtn.onclick = function(e){
	var t = e.target;
	switch(t){
		case inb:
			var que = con.value;
			queue.unshift(que);
			var strq = queue.join("<-");
			p.innerHTML = strq;
			break;
		case out:
			queue.pop();
			var strq = queue.join("<-");
			p.innerHTML = strq;
			break;
		case font:
			p.innerHTML = queue[0];
			break;
		case empty:
			if (queue.length == 0) {
				p.innerHTML = "队列为空";
			}else{
				p.innerHTML = "队列非空";
			}
			break;
	}
}



var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr1.sort(function(a,b){
	return b-a;
})
console.log(arr1);

//分别按字母顺序a-z及z-a进行排序
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr2.sort();
console.log(arr2);
arr2.sort().reverse();
console.log(arr2);

//二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
arr3.sort(function(a,b){
	return b[1]-a[1];
})
console.log(arr3);
//按元素对象的value值从小到大进行排序
var arr4 = [
	{
		id: 1,
		name: 'candy',
		value: 40
	}, {
		id: 2,
		name: 'Simon',
		value: 50
	}, {
		id: 3,
		name: 'Tony',
		value: 45
	}, {
		id: 4,
		name: 'Annie',
		value: 60
	}
];
arr4.sort(function(a,b){
	return a.value - b.value;
})
console.log(arr4);

var stack = ["apple", "pear"];
	var stackin = document.getElementById("stack-input");
	var sta_p = document.getElementById("stack-cont");
	var push_btn = document.getElementById("push-fivbtn");
	var pop_btn = document.getElementById("pop-fivbtn");
	var font_btn = document.getElementById("font-fivbtn");
	var empty_btn = document.getElementById("empty-fivbtn");
	var fivbtn = document.getElementById("fivbtn");
	//栈顶为最后一个元素
	/*fivbtn.onclick = function(e){
		var t = e.target;
		switch(t){
			case push_btn:
				stack.push(stackin.value);
				var str = stack.join("->");
				sta_p.innerHTML = str;
				break;
			case pop_btn:
				stack.pop();
				var str = stack.join("->");
				sta_p.innerHTML = str;
				break;
			case font_btn:
				sta_p.innerHTML = stack[stack.length-1];
				break;
			case empty_btn:
				if (stack.length == 0) {
					sta_p.innerHTML = "栈为空";
				}else{
					sta_p.innerHTML = "栈不为空";
				}
				break;
		}
	}*/
	//栈顶为第一个元素
	fivbtn.onclick = function(e){
		var t = e.target;
		switch(t){
			case push_btn:
				stack.unshift(stackin.value);
				var str = stack.join("<-");
				sta_p.innerHTML = str;
				break;
			case pop_btn:
				stack.shift();
				var str = stack.join("<-");
				sta_p.innerHTML = str;
				break;
			case font_btn:
				sta_p.innerHTML = stack[0];
				break;
			case empty_btn:
				if (stack.length == 0) {
					sta_p.innerHTML = "栈为空";
				}else{
					sta_p.innerHTML = "栈不为空";
				}
				break;
		}
	}

	//对象转为数组：
	var scoreObject = {
		"Tony": {
			"Math": 95,
			"English": 79,
			"Music": 68
		}, 
		"Simon": {
			"Math": 100,
			"English": 95,
			"Music": 98
		}, 
		"Annie": {
			"Math": 54,
			"English": 65,
			"Music": 88
		}
	}
	function objArr(obj){
		var scoreArr = [];
		for(key in obj){
			var person = obj[key];
			scoreArr.push([key,person.Math,person.English,person.Music]);
		}
		console.log(scoreArr);
	}
	objArr(scoreObject);
	
	//数组转为对象
	var menuArr = [
		[1, "Area1", -1],
		[2, "Area2", -1],
		[3, "Area1-1", 1],
		[4, "Area1-2", 1],
		[5, "Area2-1", 2],
		[6, "Area2-2", 2],
		[7, "Area1-2-3", 4],
		[8, "Area2-2-1", 6],
	];
	//这段好难，借鉴了https://github.com/XYShaoKang/2018-baidu-ife-course-record/blob/master/other/JavaScript/day22/js/code8.js
	function arrObj(arr,root){
		var obj = {};
		for(const iterator of arr){
			if(iterator[2] == root){
				obj[iterator[0]] = {};
				obj[iterator[0]].name = iterator[1];
				var tempObj = arrObj(arr,iterator[0]);
				if(Object.keys(tempObj).length>0){
					obj[iterator[0]].subMenu = tempObj;
				}
			}
		}
		return obj;
	}
	
	console.log(arrObj(menuArr,-1));