var inputbox=document.getElementById('inputbox');
console.log(inputbox);

var outputbox=document.getElementById('outputbox');

var data=JSON.parse(localStorage.getItem('data'))||[];

show()

function show()
{
    outputbox.innerHTML=''
    if(data.length==0){
        outputbox.innerHTML="<h2>array is empty....</h2>";
    }else{
      data.map((element,index)=>{

        var para =document.createElement('p');
        para.innerHTML=`<p>${element}</p>`
        outputbox.appendChild(para);
        
      })

    }
}

function additem(){
    
    
        data.push(inputbox.value);
        localStorage.setItem('data',JSON.stringify(data));
        inputbox.value=''

   
    show()

}

