var box=document.getElementsByClassName('box');

var ary=[...box];

ary.map((element, index)=>{
    
  element.addEventListener('click',()=>{
        
        if(element.style.backgroundColor=="white"){
            element.style. backgroundColor="black";
        }
        else{
            element.style.backgroundColor="white";
        }
    });
})