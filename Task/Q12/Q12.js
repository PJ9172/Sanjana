var box=document.getElementById('box');

 var d= new Date();

  
    


setInterval(()=>{
  var  t=new Date();
    box.innerText=t.toLocaleTimeString();
    
},1000)


var days=['Sun','Mon','Tuse','Wed','Thurs','Fri','Satur'];
var day=days[d.getDay()];


var months=['Jan','Feb','March','April','May','June','July'];
var m=months[d.getMonth()];


var rbox=document.getElementById('rbox');

var result=document.createElement('div');
result.style.height="45px";
result.style.width="300px";
result.style.fontSize="30px";


result.innerHTML=

result.innerHTML =day+" "+m+" "+d.getDate()+"     "+d.getFullYear();

rbox.appendChild(result);
