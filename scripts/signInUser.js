import {newUser} from './firebase.js' 

const buttonSignIn = document.getElementById('sign-in-button')
buttonSignIn.addEventListener('click', (e) => signIn(e))

function signIn(e){
    e.preventDefault()
    const email = document.getElementById('email')?.value
    const password = document.getElementById('password')?.value
    const passwordConfirm = document.getElementById('password-confirm')?.value

    if(password === passwordConfirm){
        newUser(email,password); 
    } else{
        alert('The passwords entered do not match, please try again')
    }
  }

