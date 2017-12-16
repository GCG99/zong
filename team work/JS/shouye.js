//陈玉沅
$(".secondright0").eq(0).mouseenter(function(){
	$(".secondright0-word").eq(0).fadeIn();
})
$(".secondright0").eq(0).mouseleave(function(){
	$(".secondright0-word").eq(0).fadeOut();
})
$(".head-bottom").eq(0).find("ul").find("li").eq(0).click(function(){
	$(".head-bottom").eq(0).find("ul").find("li").eq(1).css({"color":"black"});
	$(".head-bottom").eq(0).find("ul").find("li").eq(2).css({"color":"black"});
	$(".head-bottom").eq(0).find("ul").find("li").eq(3).css({"color":"black"});
})
$(".thirdleft2out").eq(0).mouseenter(function(){
	$(".thirdleft2-word").eq(0).fadeIn();
})
$(".thirdleft2out").eq(0).mouseleave(function(){
	$(".thirdleft2-word").eq(0).fadeOut();
})
for(var i=1;i<5;i++)
{
	$(".head-bottom-nav-"+i).eq(0).click(function(){
		
		$(".head-bottom-nav li").removeClass(" click-on-nav")
		$(this).addClass("  click-on-nav");
	})
}
var t=1;
var indexnow=$(this).index();
for(var i=1;i<7;i++){
$(".right-circle-"+i).eq(0).click(function(){
	$(".bodyfirst_right1-circle li").removeClass(" click-on-circle")
	$(this).addClass("  click-on-circle");
	num=indexnow;
})
$(".right-circle-"+i).eq(0).mouseover(function(){
	$(".bodyfirst_right_photo").eq(0).stop().animate({"left":"-"+indexnow*1131+"px"},500);
	$(".bodyfirst_right1-circle li").removeClass(" click-on-circle").eq(indexnow).addClass("  click-on-circle")
	// $(".bodyfirst_right_photo").stop().animate({"left":"-"+goleft+"px"},2000);
})
}

var num=0;
var	timer=setInterval(function(){	
	num++;
	if(num==6){
		num=1;
	$(".bodyfirst_right_photo").eq(0).css({"left":"0px"})
	}
	var goleft=num*1131;	
	console.log("num"+num)

	if(num==5)
		$(".bodyfirst_right1-circle li").removeClass(" click-on-circle").eq(0).addClass("  click-on-circle")
	else
		$(".bodyfirst_right1-circle li").removeClass(" click-on-circle").eq(num).addClass("  click-on-circle")
	$(".bodyfirst_right_photo").stop().animate({"left":"-"+goleft+"px"},2000);

},3000)
//高晨歌
var i=1;
var j=2;
var k=3;
var x=10;
var y=20;
var z=30;
var change1= document.getElementById('secondrightdiv1');
var change2= document.getElementById('secondrightdiv2');
var change3= document.getElementById('secondrightdiv3');
var op=true;
$("#rightarrow").click(function(){
	if(change1.style.right=="65px"){
		$("#secondrightdiv1").animate({"right":"-1100px","z-index":-10},5000);
	}
	if(change1.style.right=="-1100px"){
		$("#secondrightdiv1").animate({"right":"1300px","z-index":x},5000);
	}
	if(change1.style.right=="1300px"){
		$("#secondrightdiv1").animate({"right":"65px","z-index":x},5000);
	}
	if(change2.style.right=="65px"){
		$("#secondrightdiv2").animate({"right":"-1100px","z-index":-10},5000);	}
	if(change2.style.right=="-1100px"){
		$("#secondrightdiv2").animate({"right":"1300px","z-index":x},5000);	}
	if(change2.style.right=="1300px"){
		$("#secondrightdiv2").animate({"right":"65px","z-index":x},5000);
	}
	if(change3.style.right=="65px"){
		$("#secondrightdiv3").animate({"right":"-1100px","z-index":-10},5000);
	}
	if(change3.style.right=="-1100px"){
		$("#secondrightdiv3").animate({"right":"1300px","z-index":x},5000);	
	}
	if(change3.style.right=="1300px"){
		$("#secondrightdiv3").animate({"right":"65px","z-index":x},5000);
	}
 /* $("#secondrightdiv"+i).animate({"right":"-1100px","z-index":x},5000);
  $("#secondrightdiv"+j).animate({"right":"65px","z-index":y},5000);
  $("#secondrightdiv"+k).animate({"right":"1300px","z-index":-100},5000);
  var temp=i;*/
  /*i=k;
  k=j;
  j=temp;
  var tem=0;*/
});

var chang1= document.getElementById('thirdleftpics1');
var chang2= document.getElementById('thirdleftpics2');
var chang3= document.getElementById('thirdleftpics3');
var oy=true;
window.onload=function(){
	if(op){
		change1.style.right="65px";
		change2.style.right="1300px";
		change3.style.right="-1100px";
	}
	op=false;
	if(oy){
		chang1.style.right="306px";
		chang2.style.right="1300px";
		chang3.style.right="-1000px";
	}
	oy=false;
}
$("#leftarrow").click(function(){
	if(chang1.style.right=="306px"){
		$("#thirdleftpics1").animate({"right":"-1000px","z-index":-10},5000);
	}
	if(chang1.style.right=="-1000px"){
		$("#thirdleftpics1").animate({"right":"1300px","z-index":20},5000);
	}
	if(chang1.style.right=="1300px"){
		$("#thirdleftpics1").animate({"right":"306px","z-index":20},5000);
	}
	if(chang2.style.right=="306px"){
		$("#thirdleftpics2").animate({"right":"-1000px","z-index":-100},5000);	}
	if(chang2.style.right=="-1000px"){
		$("#thirdleftpics2").animate({"right":"1300px","z-index":20},5000);	}
	if(chang2.style.
		right=="1300px"){
		$("#thirdleftpics2").animate({"right":"306px","z-index":20},5000);
	}
	if(chang3.style.right=="306px"){
		$("#thirdleftpics3").animate({"right":"-1000px","z-index":-10},5000);
	}
	if(chang3.style.right=="-1000px"){
		$("#thirdleftpics3").animate({"right":"1300px","z-index":20},5000);	
	}
	if(chang3.style.right=="1300px"){
		$("#thirdleftpics3").animate({"right":"306px","z-index":20},5000);
	}
});