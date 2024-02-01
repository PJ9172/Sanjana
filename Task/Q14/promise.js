var fees=false;
function fun()
{
    var a=new Promise(function(reject,resolve){
        if(fees){
            resolve("fees completed..then give the hall ticket...")
        }else{
            var err=new Error("fees not completed...not give the hall ticket...")
            reject(err)
        }
     })
     return a;
}
console.log(fun());