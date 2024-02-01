
var box=document.getElementsByClassName('box');
var ary=[...box];
var c=1;

function clicks(color){
    if(c==1){
        ary[0].style.backgroundColor=color;
        c=c+1;
    }
    else if(c==2){
        ary[1].style.backgroundColor=color;
        c=c+1;
        }
    else if(c==3){
        ary[2].style.backgroundColor=color;
        c=c+1;
    }
    else if(c==4){
        ary[3].style.backgroundColor=color;
        c=1;
    }
    }



   
