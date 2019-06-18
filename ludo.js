var tokena=2;
var tokenb=2;
var point=0;
var dice;
var id1;
var check=document.getElementById("check");
var val;
var num;
var classA1=0;
var classA2=0;
var classB1=0;
var classB2=0;
var m=0;
var n=0;
function diceroll()
{   var num=document.getElementById("second");
    var checkform=document.forms.myform;
    val=checkform.select.value;
 if((val>0)&&(val<=6))
    dice = val;
 else if(val==0)
 {
 	dice=Math.floor(Math.random()*6)+1;
 }
  else {
   	alert("ENTER A VALID INTEGER BETWEEN 1 TO 6");
   }
   var first=document.getElementById("first");
   var num=document.getElementById("second");
   num.innerHTML="number-"+dice;
   if((point%2)==0)
   {
   	first.innerHTML="ITS PLAYER A'S TURN";
   	num.innerHTML="number- "+dice;
   	move_a();
   }
   else{
   	first.innerHTML="ITS PLAYER B'S TURN";
   	num.innerHTML="number-"+dice;
   	move_b();
   }

 }

function move_a()
      {
    	if((tokena==1)&&(dice==6))
    	{
    	 contactA();
         }
         else if(tokena==2)
         {
         	contactA();
         }
         else if((tokena==1)&&(dice!=6)){

    		move_a1();
    		    	}
         else if((tokena==0) && (classA1==0)){
        	move_a2();
        }
   }
  function contactA()
{	
    if((dice==6)&&(tokena==2))
    {
    var grid=document.getElementsByClassName("tm-a1");
	var box=document.getElementById("1");
	box.appendChild(grid[0]);
	  classA1=1;
	  tokena--;
    }
	else if((dice==6)&&(tokena==1))
	{
	   var grid=document.getElementsByClassName("tm-a2");
		var box=document.getElementById("1");
		box.appendChild(grid[0]);
		classA2=1;
		tokena--;
	}
	else if((dice!=6)&&(tokena==2))
	{
    	point++;
    }
    else if((dice!=6)&&(tokena==1)&&(classA1==0))
    {
        point++;
    }
}
function move_a1(){
    	
         if((tokena!=2 )&&((classA1+dice)<28)){
          move(dice,"tm-a1",classA1);
          classA1=classA1+dice;
          if((classA1+dice)==28){
        	var grid=document.getElementsByClassName("tm-a1");
        	grid[0].parentNode.removeChild(grid[0]);
        	classA1=0;
        	point++;
        	if(dice==6){
        		point--;
        	}
    }
    bat();
 }
}
function move_a2(){
	   if((point%2)==0){
 		if(tokena==1){
 			lockerA();
 		}
 		else if((tokena!=1)&&(classA1+dice<28)){
 			move(dice,"tm-a2",classA2);
 			classA2=classA2+dice;
 			if((classA2+dice)==28){
 			var grid=document.getElementById("tm-a2");
 			grid[0].parentNode.removeChild(grid[0]);
 			classA2=0;
 			if((classB2<14)||(n==0)){
        var win=document.getElementById("win");
        win.innerHTML="PLAYER A IS THE WINNER!!!!";
    }
 		   }
 		}bat();
 	}
}	       
 
function move_b()
{
    	if((tokenb==1)&&(dice==6))
    	{
    	  contactB();
    	}
    	else if(tokenb==2)
    	{
    		contactB();
    	}
    	else if((tokenb==1)&&(dice!=6)){
    		move_b1();
    	}
    	else if((tokenb==0)&&(classB1==0)){
    		move_b2();
    	}
}
function contactB(){
	if((dice==6)&&(tokenb==2)){
		var grid=document.getElementsByClassName("tm-b1");
		var box=document.getElementById("15");
		box.appendChild(grid[0]);
		classB1=15;
		tokenb--;
	}
	else if((dice==6)&&(tokenb==1)){
		var grid=document.getElementsByClassName("tm-b2");
		var box=document.getElementById("15");
		box.appendChild(grid[0]);
		classB2=15;
		tokenb--;
	}
	else if((dice!=6)&&(tokenb==2)){
		point++;
	}
	else if((dice!=6)&&(tokenb==1)&&(classB1==0)){
		point++;
	}
}
function move_b1(){
	if((point%2)!=0)
	{
		if(((m!=1)&&(classB1<=28))||(((classB1+dice)<14)&&(m==1)))
		{
			if((classB1+dice)<=28)
			{
				move(dice,"tm-b1",classB1);
				classB1=classB1+dice;
			}
			else{
				classB1=classB1-28;
				move(dice,"tm-b1",classB1);
				classB1=classB1+dice;
				m++;
			}
			if(((classB1+dice)==14)&&(m==1)){
			var grid=document.getElementsByClassName("tm-b1");
			grid[0].parentNode.removeChild(grid[0]);
			classB1=0;
			m++;
			point++;
			if(dice==6){
				point--;
			}
		}
		}bat();
	}

}
function move_b2()
{
	if((point%2)==0)
	{
		if(tokenb==1){
			lockerB();
		}
		else if(((classB2<=28)&&(n!=1))||(((classB2+dice)<14)&&(n==1)))
		{
			if((classB2+dice)<=28)
			{
				move(dice,"tm-b2",classB2);
				classB2=classB2+dice;
			}
			else
			{
				classB2=classB2-8;
				move(dice,"tm-b2",classB2);
				classB2=classB2+dice;
				n++;
			}
			if(((classB2+dice)==14)&&(n==1))
			{
			var grid=document.getElementById("tm-b2");
			grid[0].parentNode.removeChild(grid[0]);
			classB2=0;
			n++;
			if(classA2<28)
			{
				var win = document.getElementById("win");
				win.innerHTML="PLAYER B WINNER";

			}
		}
	  }bat();
	}
}
function bat()
{
  	if(classA1!=0)
  	{
  		if((classA1==classB1)||(classA1==classB2))
  		{
  			if((point%2)==0)
  			{
  				var a1=document.getElementsByClassName("tm-a1");
  				var k=document.getElementById("lock-a");
  				k.appendChild(a1[0]);
  				if(tokena==1)
  				{
  					tokena++;
  					classA1=0;
  				}
  				else
  				{
  					var k1=document.getElementsByClassName("tm-a2");
  					var k2=document.getElementsByClassName("tm-a1");
  					k1[0].setAttribute("class","tm-a1");
  					k2[0].setAttribute("class","tm-a2");
  					classA1=classA2;
  					classA2=0;
  					k2[0].innerHTML="A1";
  					k1[0].innerHTML="A2";
  					tokena=1;
  				}
  			}
  			else
  			{
  				if(classA1==classB1)
  				{
  					var b1=document.getElementsByClassName("tm-b1");
  					var k=document.getElementById("lock-b");
  					k.appendChild(b1[0]);
  					if(tokenb==1)
  					{
  						tokenb++;
  						classB1=0;
  						m=0;
  					}
  					else
  					{
  						var k1=document.getElementsByClassName("tm-b2");
  						var k2=document.getElementsByClassName("tm-b1");
  						k1[0].setAttribute("class","tm-b1");
  						k2[0].setAttribute("class","tm-b2");
  						classB1=classB2;
  						classB2=0;
  						k2[0].innerHTML="B1";
  						k1[0].innerHTML="B2";
  						tokenb=1;
  						n=0;

  					}
  				}
  				else
  				{
  					var b2=document.getElementsByClassName("tm-b2");
  					var k=document.getElementById("lock-b");
  					k.appendChild(b2[0]);
  					classB2=0;
  					tokenb++;
  					n=0;
  				}
  			}
  		}
  	}
}
function move(dice,classname,classnum){
    classnum=dice+classnum;
    var grid=document.getElementsByClassName(classname);
	var box=document.getElementById(classnum);
	box.appendChild(grid[0]);
    point++;
    if(dice==6)
    {
 	point--;
    }
}