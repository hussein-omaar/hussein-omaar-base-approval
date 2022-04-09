

const errorMessage = document.querySelector('.error-message');
const errorarrow =   document.querySelector('.error-icon');
const email = document.querySelector('.email');
const btn = document.querySelector('.btn');
const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener('click' , action);




function action (event){

    event.preventDefault();
    if (!email.value.match(mailformat)){

        errorMessage.classList.remove('error');
        errorarrow.classList.remove('error')

        
        
    }
    
    
    
    
    else{

        errorMessage.classList.add('error');
        errorarrow.classList.add('error')

        
        
        
    }
    
  


 

    // if(email == 10){


    //     // errorarrow.classList.remove('error');
    //     // errorMessage.classList.remove('error');
        
    
    // }
    
}



