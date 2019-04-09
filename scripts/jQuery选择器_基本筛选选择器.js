$(document).ready(function(){
	var int;
	$("#btn1").click(function(){
		clearInterval(int);
		int=setInterval(colorChange,1000);
		var div;
		function colorChange(){
			function color(){
				var color="#";
				var num=['0','1','2','3','4','5','6','a','b','c','d','e','f'];
				for (var i = 0; i < 6; i++) {
					var randomNum=Math.floor(Math.random()*13);
					color += num[randomNum];
				}
				return color;
			}//color函数结束
			function getDiv(){
				div=$("div>div");
				for (var i = 0; i < div.length; i++) {
					div[i].style.backgroundColor="#ffa500";
				}//for循环结束，（使每一次格子颜色变化之后再重置为橙色）
				console.log(div[0]);
				var randomDiv1=Math.floor(Math.random()*9);//获取[0,8]的随机数
				var randomDiv2=Math.floor(Math.random()*9);
				var randomDiv3=Math.floor(Math.random()*9);
				//将随机的颜色赋予给随机获取的三个div格子⬇️
				div[randomDiv1].style.backgroundColor=color();
				div[randomDiv2].style.backgroundColor=color();
				div[randomDiv3].style.backgroundColor=color();
			}//getDiv函数结束
			getDiv();
		}//colorChange函数结束
		colorChange();
	});//#btn1点击事件结束
	$("#btn2").click(function(){
		div=$("div>div")
		for (var i = 0; i < div.length; i++) {
			div[i].style.backgroundColor="#ffa500";
		}
		clearInterval(int);
	});
});//ready函数结束