
        var inputTemp;
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
		

function show(obj){//数字

	if(document.getElementById("val").value != "Error"){

	if(itu){

			document.getElementById("val").value = [];

		}

	if(!itr){

			document.getElementById("val").value = [];

		}

    if(pointer == 2&&(!second)){
				
			document.getElementById("val").value = [];
			
			}

	inputTemp = document.getElementById("val");

	if( document.getElementById("val").value == "0" ){ 
			
		inputTemp.value = obj.innerHTML;

		}else{

		inputTemp.value = inputTemp.value + obj.innerHTML;

			}

	if(pointer == 1){

		first = inputTemp.value;

			} 

	else if(pointer == 2){
			
		second = inputTemp.value;
			
			}

		its=true;//运算符后又有数字

		itu=false;

		itr=true;

		}

	}


//退格
function funback(){

	if(document.getElementById("val").value != "Error"){

		if(itr){

	var val = document.getElementById("val");

    document.getElementById("val").value=document.getElementById("val").value.slice(0,-1);

	if(val.value == "0" || val.value == "" || val.value == "-0" ||val.value == "-" ){

		val.value = "0";
		
	}

	if(pointer==1){

		first=document.getElementById("val").value;

			}else{

		second=document.getElementById("val").value;

			}

}

}

}

//点
function point(obj){

	if(document.getElementById("val").value != "Error"){

		if(!itr){

			document.getElementById("val").value = "0";

		}


		if(first==0){

			inputTemp.value="0";

		}

		if(inputTemp.value=="0"){

			inputTemp.value="0"+obj.innerHTML;

		}

    if(inputTemp.value.indexOf(".") > 0 ){

    	inputTemp.value=inputTemp.value;

    }

    else{

	inputTemp.value = inputTemp.value + obj.innerHTML;

    }

    if(pointer==1){

    	first=inputTemp.value;

	}else{

		second=inputTemp.value;

	}

    itu=false;

    itr=true;

}

}


//CE
function funclear(obj){

	if(document.getElementById("val").value != "Error"){

    document.getElementById("val").value = "0";

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
function sclear(){//还原

	first=[];

	second=[];

	pointer=1;

	operator=false;

	inoperator=false;

	operater=false;

	afterCaculation = false;

	its=true;

	document.getElementById("val").value = "0";

	itu=false;

	itr=false;

}


//运算符
function orderIn(obj){

	if(document.getElementById("val").value!="Error"){

	operator = obj.innerHTML;

	if(pointer== 2 && its && inoperator&&second){

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

if(document.getElementById("val").value == "NaN"||document.getElementById("val").value == "Infinity"){

	document.getElementById("val").value = "Error";

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
function getResult(obj){

	if(document.getElementById("val").value!="Error"){

		
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

    inputTemp = document.getElementById("val");

    inputTemp.value = first;

    document.getElementById("val").value=document.getElementById("val").value-0;

    if(document.getElementById("val").value=="NaN"||document.getElementById("val").value=="Infinity"){

	document.getElementById("val").value="Error";

      }
	
	  pointer = 1;

      afterCaculation = true;

      its=true;

      itu=true;

      itr=false;



}

}


function imate(obj){

	if(document.getElementById("val").value!="Error"){

	operater = obj.innerHTML;

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

     inputTemp.value = first;

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

     inputTemp.value = second;

	 }

     if(document.getElementById("val").value=="NaN"||document.getElementById("val").value=="Infinity"){

	document.getElementById("val").value="Error";


     }

	 afterCaculation = true;

	 itr=false;

}

}

//取反
function opsi(obj){

	if(document.getElementById("val").value!="Error"&&document.getElementById("val").value!= "0" && document.getElementById("val").value!= ""){

    if(pointer==1){

         if(document.getElementById("val").value.substr(0,1)=="-"){

   		first=document.getElementById("val").value.substr(1);

   		inputTemp.value=document.getElementById("val").value.substr(1);

        }else{

        first = document.getElementById("minus").innerHTML + first;

        inputTemp.value=document.getElementById("minus").innerHTML + first;

        }

        pointer = 1;

	    inputTemp.value = first;

    }

    if(pointer==2){

    	 if(document.getElementById("val").value.substr(0,1)=="-"){

   		second=document.getElementById("val").value.substr(1);

   		inputTemp.value=document.getElementById("val").value.substr(1);

        }else{

        second = document.getElementById("minus").innerHTML + second;

        inputTemp.value=document.getElementById("minus").innerHTML + second;

        }

        pointer = 2;

	    inputTemp.value = second;

    }

	    afterCaculation = true;

         if(document.getElementById("val").value=="NaN"||document.getElementById("val").value=="Infinity"){

		document.getElementById("val").value="Error";

	}

		if(document.getElementById("val")==""){

			document.getElementById("val")="0";

		}

}

}

