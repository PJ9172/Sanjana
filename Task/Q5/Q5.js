const boxes = document.getElementsByClassName('box'); 
for ( box of  boxes){
    box.addEventListener('click', (event) =>{           
          event.target.remove();
        });
     }