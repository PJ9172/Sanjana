function change(){
 var input1=document.getElementById('input1');
  
    
 var input2=document.getElementById('input2');
 
 var box=document.getElementsByClassName('box');
 
 var Ary=[...box];

var delbox=document.getElementById('delbox');
 


 var a=parseInt(input1.value)-1;
 var b=parseInt(input2.value)-1;
 
  
  for(var i=a;i<=b;i++){
  if(a<0)
  {
     alert("invalid number...enter correct     num.."); 
 
  }
  else{
      
       Ary[i].remove(box);
      delbox.appendChild(Ary[i]);
     } 
  }
  
 
 123
 
 
 
 
 
 
 
 /*  *for(var i=a;i<=b;i++)
  {
     /* var boxes =document.    
     getElementByClasName ('box');
     for(box of boxes){
         box.remove();
     }
       
      for(var i=a;i<=b;i++){
         
      }*/
  
  
}
