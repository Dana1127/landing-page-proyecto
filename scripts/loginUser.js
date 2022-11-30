import {login, logout} from './firebase.js' 
import {signIn} from './signInUser' 


const buttonLogin = document.getElementById('login-button')
buttonLogin.addEventListener('click', (e) => loginForm(e))


const buttonLogout = document.getElementById('logout-button')
buttonLogout.addEventListener('click', (e) => logoutForm(e))

signIn();

function loginForm(e){
    e.preventdefault();
    const emailLogin = document.getElementById('login-email')?.value
    const passwordLogin = document.getElementById('login-password')?.value

    login(email,password);

}

function logoutForm(e){
    e.preventdefault();
    const emailLogin = document.getElementById('login-email')?.value
    const passwordLogin = document.getElementById('login-password')?.value

    logout();
}



