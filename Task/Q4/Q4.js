var box=document. getElementsByClassName('box');

var ary=[...box];

ary.map((element,index)=>{
let prev;
    if(index==0)
    {
       prev=ary.lenght-1;
    }
    else{
        prev=index-1;
    }
    
    let newval=(parseInt(element.innerText)+parseInt(ary[prev].innerText));
    
    element.innerHTML=`<h1>${newval}</h1>`
})
