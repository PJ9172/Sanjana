var box =document.getElementsByClassName ('box');

var ary=[...box];
var c=1;

ary.map((element, index)=>{

    element.addEventListener('click',()=>{
        if(c==1)
        {
                element.style.backgroundColor="orange";
            c=c+1;
        } 
        else if(c==2)
        {
                     element.style.backgroundColor="white";
            c=c+1;  
        }
        else if(c==3)
        {
         element.style.backgroundColor="green";
        c=1;
        }
});

});

