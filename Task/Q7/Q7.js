/*  const circles = document.getElementsByClassName('circle'); 
for ( circle of  circles){
    circle.addEventListener('click', (event) =>{           
          event.target.remove();
          newdiv.appendChild(event);
        });
     } */

/*  
var 
 circle=document.getElementsByClassName('circle ');

circle.AddEventListener('click',(event)=>{
    event.target.remove();
    newdiv.appendChild(event);
}) */
   
/*  const circles=document.getElementsByClassName('circle');
for(circle of circles ){
    circle.AddEventListener('click',(event)=>{
        event.target.remove();
    })
} 
 */
const boxes = document.getElementsByClassName('circle'); 
for ( circle of  boxes){
    circle.addEventListener('click', (event) =>{           
          event.target.remove();
          newdiv.appendChild(event.target);
        });
     }
