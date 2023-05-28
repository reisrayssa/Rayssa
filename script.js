perfil = document.querySelector('.header .flex .perfil');

document.querySelector('#user-btn').onclick = () =>{
    perfil.classList.toggle('active');
}















const form = document.getElementById('form')
const username = document.getElementById (' username')
const email = document.getElementById ('email')
const password = document.getElementById ('passowrd')
const passowrdConfirmation = document.getElementById (' password-confimation')


form.addEdeventListener('submit' (e) =>{
 e.preventDefault();
 checkInputs();
});

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if(usernameValue === ''){
        setErrorFor(username, 'O nome do usuário é obrigatório.')
    }
}

function setErrorFor( input,message){
   const formControl = input.parentElement;
   const small=formControl.querySelector('small')

   //add a msg de erro
   small.innerText = message;

   //add clas de erro
   formControl.className = "form-control error";
}


function setSuccssFor{
    const formControl = input.parentElement;

   // add  class de sucesso
   formControl.className = 'form-control success'
}