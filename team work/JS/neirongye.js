var plus=function(){
	var num=document.getElementById('number').value;
	num=(num-0)+1;
	document.getElementById('number').value=num;
}

var minus=function(){
	var num=document.getElementById('number').value;
	if(num>0){
	num=(num-0)-1;
	}
	document.getElementById('number').value=num;
}

var i=0;
var j=1;
var h=2;
window.onload=function(){
	var io=setInterval(
		function(){
			if(i<6){
				i=i+1;
			}
			else{
				i=1;
			}
		var im=document.getElementById('topimg'+i);
		im.style.borderWidth ='2px';
		im.style.borderStyle ='solid';
		im.style.borderColor ='rgb(183,3,4)';
		for(var t=1;t<7;t++){
			var er=document.getElementById('topimg'+t);
			if(t!=i){
				er.style.borderColor = 'white';
			}
		}
		var tu1=document.getElementById('topleftimg'+j);
		tu1.style.display="none";
        var tu2=document.getElementById('topleftimg'+h);
        tu2.style.display="block";
        var tem=h;
        h=j;
        j=tem;
        console.log("i"+i+"j"+j);
},2000)
}