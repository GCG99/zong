//陈玉沅
//出现红块
var totalpage=13;//总页数
var nowpage=1;
var listsize=9

$(".main-bottom-photo-8").eq(0).mouseover(function(){
	$(".main-bottom-photo-8-word").eq(0).fadeIn();
})
$(".main-bottom-photo-8").eq(0).mouseleave(function(){
	$(".main-bottom-photo-8-word").eq(0).fadeOut();
})
//点击导航栏文字
for(var i=1;i<5;i++)
{
	$(".head-bottom-nav-"+i).eq(0).click(function(){
		
		$(".head-bottom-nav li").removeClass(" click-on-nav")
		$(this).addClass("  click-on-nav");
	})
}
//翻页


function addli(){
	var ulhtml=$(".main-bottom-photo-page-1").eq(0).html();
	for(var i=0;i<totalpage;i++)
	{
		// $(".banner").before("<ul>"+ulhtml+"</ul>");
		$(".main-bottom-top").append("<ul>"+ulhtml+"</ul>")
	}
	for(var i=0;i<totalpage;i++){
		$(".main-bottom-top ul").eq(i).addClass("main-bottom-photo-page-"+(i+1))
		$(".main-bottom-top ul").eq(i).css({"opacity":"0"});
	}
	$(".main-bottom-top ul").eq(0).css({"opacity":"1","z-index":50});
	$(".banner").eq(0).css({"opacity":"1","z-index":30});
}
addli();
function changetoright(){
	// $(".main-bottom-photo-page-"+(nowpage)).css({"z-index":50},1)
	// $(".main-bottom-photo-page-"+(nowpage-1)).animate({"left":"-"+1258*(nowpage-1),"opacity":"0","z-index":20},3000);	
	// $(".main-bottom-photo-page-"+(nowpage)).animate({"left":"-"+1258*(nowpage-1),"opacity":"1","z-index":50},3000);
	// $(".main-bottom-photo-page-"+(nowpage)).siblings().animate({"left":"-"+1258*(nowpage-1),"z-index":20},3000);
	// $(".main-bottom-photo-page-"+(nowpage+1)).animate({"left":"-"+1258*(nowpage-1),"z-index":50},1)
	$(".main-bottom-photo-page-"+(nowpage-1)).animate({"left":"-"+1258*(nowpage-1),"opacity":"0"},300);	
	$(".main-bottom-photo-page-"+(nowpage)).animate({"left":"-"+1258*(nowpage-1),"opacity":"1"},300);
	$(".main-bottom-photo-page-"+(nowpage)).siblings().animate({"left":"-"+1258*(nowpage-1)},300);
	$(".main-bottom-page-ul li").removeClass(" click-on-page")
	$(".page-"+(nowpage)).eq(0).addClass("  click-on-page");
	if(nowpage>5 && nowpage<=9){
	//重建li
	var list=document.getElementsByClassName("main-bottom-page-ul");
	var newlist=document.createElement("li");
	var textnode=document.createTextNode((nowpage+4));
	newlist.classList.add("page-"+(nowpage+4));
	newlist.appendChild(textnode);
	newlist.onclick=function(){
		touchpage(this);
	}
	list[0].appendChild(newlist)
	$(".main-bottom-page-ul").eq(0).find("li").eq(0).remove();	
	}
	console.log(1258*(nowpage-1))
	
}
function changetoleft(){

	// $(".main-bottom-photo-page-"+(nowpage)).css({"z-index":50},1)
	// $(".main-bottom-photo-page-"+(nowpage)).animate({"left":"-"+1258*(nowpage-1),"opacity":"1","z-index":50},300);	
	// $(".main-bottom-photo-page-"+(nowpage+1)).animate({"left":"-"+1258*(nowpage-1),"opacity":"0","z-index":20},300);
	// $(".main-bottom-photo-page-"+(nowpage)).siblings().animate({"left":"-"+1258*(nowpage-1),"z-index":20},300)
	$(".main-bottom-photo-page-"+(nowpage)).animate({"left":"-"+1258*(nowpage-1),"opacity":"1"},300);	
	$(".main-bottom-photo-page-"+(nowpage+1)).animate({"left":"-"+1258*(nowpage-1),"opacity":"0"},300);
	$(".main-bottom-photo-page-"+(nowpage)).siblings().animate({"left":"-"+1258*(nowpage-1)},300)
		// $(".main-bottom-photo-page-"+(nowpage-1)).animate({"left":"-"+1258*(nowpage-1),"z-index":50},1)
	// $(".banner").css({"left":"0px"});
	$(".main-bottom-page-ul li").removeClass(" click-on-page")
	$(".page-"+(nowpage)).eq(0).addClass("  click-on-page");
	if(nowpage>=5 && nowpage<9){
	//重建li
	var list=document.getElementsByClassName("main-bottom-page-ul");
	var newlist=document.createElement("li");
	var textnode=document.createTextNode((nowpage-4));
	newlist.classList.add("page-"+(nowpage-4));
	newlist.appendChild(textnode);
	newlist.onclick=function(){
		touchpage(this);
	}
	list[0].prepend(newlist)
	$(".page-"+(nowpage+5)).eq(0).remove();	
	}
	console.log(1258*(nowpage-1))
	
}
//向左翻页
$(".page-right").eq(0).click(function(){
	if(nowpage!=totalpage){
		nowpage++;
		changetoright();

	}
	console.log(nowpage)
})
//向右翻页
$(".page-left").eq(0).click(function(){
	if (nowpage!=1){
	nowpage--;
	changetoleft();}
	console.log(nowpage)
})
function touchpage(obj){
	var nextpage=obj.innerHTML;
	if(nextpage>nowpage){
	$(".main-bottom-photo-page-"+nowpage).animate({"left":"-"+1258*(nextpage-1),"opacity":"0"},300);	
	$(".main-bottom-photo-page-"+nextpage).animate({"left":"-"+1258*(nextpage-1),"opacity":"1"},300);
	$(".main-bottom-photo-page-"+nextpage).siblings().animate({"left":"-"+1258*(nextpage-1)},300)
	}
	else if(nextpage<nowpage){
	$(".main-bottom-photo-page-"+nextpage).animate({"left":"-"+1258*(nextpage-1),"opacity":"1"},300);	
	$(".main-bottom-photo-page-"+nowpage).animate({"left":"-"+1258*(nextpage-1),"opacity":"0"},300);
	$(".main-bottom-photo-page-"+nowpage).siblings().animate({"left":"-"+1258*(nextpage-1)},300)
	}
	if(nextpage>=5 && nextpage<=9)
	{
		var list=document.getElementsByClassName("main-bottom-page-ul");
		for(var i=0;i<9;i++)
			$(".main-bottom-page-ul").eq(0).find("li").eq(1).remove()
		for(var i=9;i>0;i--)
		{
			var newlist=document.createElement("li");
			newlist.innerHTML=nextpage-5+i;
			newlist.classList.add("page-"+(nextpage-5+i));
			newlist.onclick=function(){
				touchpage(this);
			}
			list[0].prepend(newlist);
		}
		}
	
	else if(nextpage<5){
		var list=document.getElementsByClassName("main-bottom-page-ul");
		for(var i=0;i<9;i++)
			$(".main-bottom-page-ul").eq(0).find("li").eq(1).remove()
		for(var i=9;i>0;i--)
		{
			var newlist=document.createElement("li");
			newlist.innerHTML=i;
			newlist.classList.add("page-"+(i));
			newlist.onclick=function(){
				touchpage(this);
			}
			list[0].prepend(newlist);
		}
	}
	else if(nextpage>9){
		var list=document.getElementsByClassName("main-bottom-page-ul");
		var listleft=document.getElementsByClassName("page-left");
		for(var i=0;i<9;i++)
			$(".main-bottom-page-ul").eq(0).find("li").eq(1).remove()
		for(var i=9;i>0;i--)
		{
			var newlist=document.createElement("li");
			newlist.innerHTML=i+4;
			newlist.classList.add("page-"+(i+4));
			newlist.onclick=function(){
				touchpage(this);
			}
			list[0].prepend(newlist);
		}
			
	}
	$(".main-bottom-page-ul").eq(0).find("li").removeClass(" click-on-page")
	$(".page-"+nextpage).addClass("  click-on-page");
	nowpage=nextpage;
}
