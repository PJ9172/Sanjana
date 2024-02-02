var inputbox=document.getElementById('inputbox');
var outputbox=document.getElementById('outputbox');

var data=JSON.parse(localStorage.getItem('data'))||[];

console.log(typeof(arrayLength));
show();
function add(){
   // console.log(inputbox.value);
    if(inputbox.value==""){
        alert("value must be entered....")
    }else{
        if(data.includes(inputbox.value)){
            alert("data is already available.....")
        }
        else{
            data.push(inputbox.value)
            localStorage.setItem('data',JSON.stringify(data));
            show();
            inputbox.value="";
        }
        
    }
    
}
function show(){
    outputbox.innerHTML="";
    var arrayLength = data.length;
    if(arrayLength==0){
       outputbox.innerText="local strorage is empty...";
        
    }else{
        data.map((element)=>{
            var r=document.createElement("div");
            r.innerHTML=`<p>${element}</p>`;
            outputbox.appendChild(r);
        })
    }
}
