 var result =document.getElementById("result"); 

 var inputbox = document.getElementById("inputbox"); 

 var btn=document.getElementById('btn');


 function change(){
if(inputbox.value==0||inputbox.value<0||inputbox.value==" "){
    alert("invalid number...")
}else{

      result.innerHTML   = inputbox .value ; 
    btn.style.display='none';
    inputbox.style.display='none';
   }

        } 

var btn2 =document.getElementById('btn2')



function generate(){
 
 var ibox=document.getElementsByClassName('ibox')
 
var ary=[...ibox];

 if(ary[0].value==""|| ary[0].value<0||ary[1].value==""||ary[1].value<0 ||ary[2].value==""||ary[2].value<0||ary[3].value==""||ary[3].value<0){
     alert(" invalid number")
 }
 else{
     
         var video = document.getElementById("myVideo");
  video.style.display = "block";  
  video.play();  
  
  
  var inputbox=document.getElementById('inputbox');
  for(var i=0;i<4;i++){
      var input =document.createElement('input');
      input.type="number";
      input.style.width=" 35px";
      input.style.height="35px";
      input.style.marginLeft="6px";
      inputbox.appendChild(input);
      
      var intnum=setInterval(generate,1000);
  }
  
  function generate(){
      var randnum=Math.floor(Math.random()*100);
      input.value=randnum;
  }
  
}

    }
    
   
   
 
    
        
    

    

   
        
    
