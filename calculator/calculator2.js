function initialize(container){

			var valu = document.createElement("input");

			valu.classList.add("val");
			valu.setAttribute("id","val");

			var contain =  document.getElementById(container);
			contain.classList.add("container");
			contain.appendChild(valu);

			valu.value="0";

			var buttons = document.createElement("div");
			contain.appendChild(buttons);

			var t = document.createElement("button");
			t.innerHTML = "%";
			buttons.appendChild(t);
			t.classList.add("button");

			var root = document.createElement("button");
			root.innerHTML = "√";
			buttons.appendChild(root);
			root.onclick =function(){imate(root.innerHTML);}
			root.classList.add("button");

			var w = document.createElement("button");
			w.innerHTML = "x^2";
			buttons.appendChild(w);
			w.classList.add("button");

			var upDown = document.createElement("button");
			upDown.innerHTML = "1/x";
			buttons.appendChild(upDown);
			upDown.onclick =function(){ imate(upDown.innerHTML);}
			upDown.classList.add("button");

			var CE = document.createElement("button");
			CE.innerHTML = "CE";
			buttons.appendChild(CE);
			CE.onclick =function(){ funclear(this);}
			CE.classList.add("button");

			var C = document.createElement("button");
			C.innerHTML = "C";
			buttons.appendChild(C);
			C.onclick = function(){sclear();}
			C.classList.add("button");

			var back = document.createElement("button");
			back.innerHTML = "←";
			buttons.appendChild(back);
			back.onclick = function(){funback();}
			back.classList.add("button");

			var div = document.createElement("button");
			div.innerHTML = "/";
			buttons.appendChild(div);
			div.onclick = function(){orderIn(div.innerHTML);}
			div.classList.add("button");

			var seven = document.createElement("button");
			seven.innerHTML = "7";
			buttons.appendChild(seven);
			seven.onclick = function(){show(seven.innerHTML);}
			seven.classList.add("button");

			var eight = document.createElement("button");
			eight.innerHTML = "8";
			buttons.appendChild(eight);
			eight.onclick = function(){show(eight.innerHTML);}
			eight.classList.add("button");

			var nine = document.createElement("button");
			nine.innerHTML = "9";
			buttons.appendChild(nine);
			nine.onclick = function(){show(nine.innerHTML);}
			nine.classList.add("button");

			var multi = document.createElement("button");
			multi.innerHTML = "*";
			buttons.appendChild(multi);
			multi.onclick = function(){orderIn(multi.innerHTML);}
			multi.classList.add("button");

			var four = document.createElement("button");
			four.innerHTML = "4";
			buttons.appendChild(four);
			four.onclick = function(){show(four.innerHTML);}
			four.classList.add("button");

			var five = document.createElement("button");
			five.innerHTML = "5";
			buttons.appendChild(five);
			five.onclick =function(){ show(five.innerHTML);}
			five.classList.add("button");

			var six = document.createElement("button");
			six.innerHTML = "6";
			buttons.appendChild(six);
			six.onclick =function(){ show(six.innerHTML);}
			six.classList.add("button");


			var minus = document.createElement("button");
			minus.innerHTML = "-";
			buttons.appendChild(minus);
			minus.onclick = function(){orderIn(minus.innerHTML);}
			minus.classList.add("button");

			var one = document.createElement("button");
			one.innerHTML = "1";
			buttons.appendChild(one);
			one.onclick =function(){ show(one.innerHTML);}
			one.classList.add("button");

			var two = document.createElement("button");
			two.innerHTML = "2";
			buttons.appendChild(two);
			two.onclick = function(){ show(two.innerHTML);}
			two.classList.add("button");
 
			var three = document.createElement("button");
			three.innerHTML = "3";
			buttons.appendChild(three);
			three.onclick =function(){ show(three.innerHTML);}
			three.classList.add("button");

			var plus = document.createElement("button");
			plus.innerHTML = "+";
			buttons.appendChild(plus);
			plus.onclick = function(){orderIn(plus.innerHTML);}
			plus.classList.add("button");

			var oppo = document.createElement("button");
			oppo.innerHTML = "±";
			buttons.appendChild(oppo);
			oppo.onclick =function(){ opsi();}
			oppo.classList.add("button");

			var zero = document.createElement("button");
			zero.innerHTML = "0";
			buttons.appendChild(zero);
			zero.onclick =function(){ show(zero.innerHTML);}
			zero.classList.add("button");

			var dot = document.createElement("button");
			dot.innerHTML = ".";
			buttons.appendChild(dot);
			dot.onclick = function(){point(dot.innerHTML);}
			dot.classList.add("button");

			var equal = document.createElement("button");
			equal.innerHTML = "=";
			buttons.appendChild(equal);
			equal.onclick=function(){getResult(equal.innerHTML);}
			equal.classList.add("button");


		var first;
		var second=0;
		var pointer=1;
		var operator;//双目运算符
		var inoperator;
		var afterCaculation=false;
		var its=true;
		var itu=false;
		var itr=false;
		var operater;//单目运算符
		

var show = function (obj){//数字

	if(valu.value != "Error"){

	if(itu){

			valu.value = [];

		}

	if(!itr){

			valu.value = [];

		}

    if(pointer == 2&&(!second)){
				
			valu.value = [];
			
			}

	if( valu.value == "0" ){ 
			
		valu.value = obj;

		}else{

		valu.value = valu.value + obj;

			}

	if(pointer == 1){

		first = valu.value;

			} 

	else if(pointer == 2){
			
		second = valu.value;
			
			}

		its=true;//运算符后又有数字

		itu=false;

		itr=true;

		}

	}


//退格
var funback=function (){

	if(valu.value != "Error"){

		if(itr){

    valu.value=valu.value.slice(0,-1);

	if(valu.value == "0" || valu.value == "" || valu.value == "-0" ||valu.value == "-" ){

		valu.value = "0";
		
	}

	if(pointer==1){

		first=valu.value;

			}else{

		second=valu.value;

			}

}

}

}

//点
var point=function(obj){

	if(valu.value != "Error"){

		if(!itr){

			valu.value = "0";

		}


		if(first==0){

			valu.value="0";

		}

		if(valu.value=="0"){

			valu.value="0"+obj;

		}

    if(valu.value.indexOf(".") > 0 ){

    	valu.value=valu.value;

    }

    else{

	valu.value = valu.value + obj;

    }


    itu=false;

    itr=true;

}

}


//CE
var funclear=function (obj){

	if(valu.value != "Error"){

    valu.value = "0";

    if (pointer==1) {

	first=0;

	}

    if(pointer==2){

	second="uuu";

    }

	afterCaculation = true;

}

}

//C
var sclear=function (){//还原

	first=[];

	second=[];

	pointer=1;

	operator=false;

	inoperator=false;

	operater=false;

	afterCaculation = false;

	its=true;

	valu.value = "0";

	itu=false;

	itr=false;

}


//运算符
var orderIn=function (obj){

	if(valu.value!="Error"){

	operator = obj;

	if(pointer== 2 && its && inoperator){

	    if(inoperator=="+"){	 			

		     if(!second&&second!="uuu"){//连加
		 	
		 	    second = first;

		 	    }

		    if(second=="uuu"){

		 	    second=0;

		     }

		     first = (first - 0) + (second - 0);
		 			
		 	}

        if(inoperator=='-'){

    	    if(!second&&second!="uuu"){

		     	second = first;

		 	    }

		    if(second=="uuu"){

		 	    second=0;

		    }

		    first = (first - 0) - (second - 0);

        }

        if(inoperator=='*'){

    	    if(!second&&second!="uuu"){

		 	    second = first;

		 	}

		    if(second=="uuu"){

		 	    second=0;

		    }

		    first = (first - 0) * (second - 0) ;

        }

        if(inoperator=='/'){


    	   if(second=="uuu"){

		 	    second=0;

		}

        	if(second==0){

    		    first="Error";

    	    }

    	    if(!second&&second!="uuu"){

		 	    second = first;

		}
    	 

		     first = (first-0) / (second-0);

     }//结果赋给first 加上操作符 second 下一轮运算

}

if(valu.value == "NaN"||valu.value == "Infinity"){

	valu.value = "Error";

}

    pointer=2;//指向第二操作数

    second=0;

    its=true;

    inoperator = operator;

    afterCaculation = true;

    itr=false;
		
}

}

//=
var getResult=function (obj){

	if(valu.value!="Error"){

		
    if(operator=="+"){	 			

		 if(!second){//连加
		 	
		 	second = first;

		 	}

		 if(second=="uuu"){

		 	second=0;

		 }

		 first = (first - 0) + (second - 0);
		 			
		 		}

    if(operator=='-'){//连减

    	if(!second&&second!="uuu"){

		 	second = first;

		 	}

		if(second=="uuu"){

		 	second=0;

		 }

		first = (first - 0) - (second - 0);

    }

    if(operator=='*'){

    	if(!second){

		 	second = first;

		 	}

		 if(second=="uuu"){

		 	second=0;

		 }

		first = (first - 0) * (second - 0) ;

    }

    if(operator=='/'){

    	if(!second){

		 	second = first;

		 	}

    	if(second=="uuu"){

		 	second=0;

		 }

    	if(second==0){

    		first="Error";

    	}

        if(first!="Error"){

		 first = (first-0) / (second-0);

        }

    }

    valu.value = first;

    valu.value=valu.value-0;

    first=valu.value;

    if(valu.value=="NaN"||valu.value=="Infinity"){

	valu.value="Error";

      }
	
	  pointer = 1;

      afterCaculation = true;

      its=true;

      itu=true;

      itr=false;



}

}


var imate=function (obj){

	if(valu.value!="Error"){

	operater = obj;

	if(pointer==1){

    if (operater=='√') {

		 first = Math.sqrt(first);

    }

    if (operater=='1/x') {

    	if(first==0){

    		first="Error";

    	}else{

    	first = 1 / (first-0) ;

    }

    }

     valu.value = first;

 }

 if(pointer==2){

    if (operater=='√') {

		 second = Math.sqrt(second);

    }

    if (operater=='1/x') {

    	if(second==0){

    		second="Error";

    	}else{

    	second = 1 / (second-0) ;

    }

    }

     valu.value = second;

     itr=true;

	 }

     if(valu.value=="NaN"||valu.value=="Infinity"){

	valu.value="Error";


     }

	 afterCaculation = true;

	 itu=true;

}

}

var opsi = function (){

	if(valu.value!="Error"&&valu.value!= "0" && valu.value!= ""){

    if(pointer==1){

         if(valu.value.substr(0,1)=="-"){

   		first=valu.value.substr(1);

        }else{

        first = minus.innerHTML + first;

        }

        pointer = 1;

	    valu.value = first;

    }

    if(pointer==2){

    	 if(valu.value.substr(0,1)=="-"){

   		second=valu.value.substr(1);

        }else{

        second = document.getElementById("minus").innerHTML + second;

        }

        pointer = 2;

	    valu.value = second;

    }

	    afterCaculation = true;

        itu=false;

         if(valu.value=="NaN"||valu.value=="Infinity"){

		valu.value="Error";

	}

		if(valu==""){

			valu="0";

		}


}
}
}

	initialize("container1");

	initialize("container");
