var url="https://api.github.com/users/SH3422";
// console.log(url);
var result=document.getElementById('result');
var result1=document.getElementById('result1');
var result2=document.getElementById('result2');
var result4=document.getElementById('result4');

async function fun(){
    var resp=await fetch(url);
    var res=await resp.json();
    console.log(res);

    result.innerText="URL    : " + res.url;
    result1.innerText="LOGIN : " +res.login;
    result2.innerText="ID    : " +res.id;
    result4.innerText="NAME  : " +res.name;

}
fun()