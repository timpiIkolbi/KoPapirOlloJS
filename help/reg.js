document.getElementById('kiiras').textContent = "Hibák"

const emailEll = /^[^\s@]{3,}@[^\s@]{3,}\.+[^\s@]{2,}$/;
function ellenorzesEmail(){
    const email = document.getElementById('email').value.trim();

    if (email.match(emailEll)){
        
    }
    else{
        document.getElementById('kiiras').textContent = "Hibás az email"
    }
}
const passwordEll = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
function ellenorzesJelszo(){
    const password = document.getElementById('password').value.trim();
    if (password.match(passwordEll)){

    }
    else{
        document.getElementById('kiiras').textContent = "Hibás a jelszó"
    }
}

function ellenorzesUjraJelszo(){
    const passwordAgainEll = document.getElementById('password').value.trim();
    const passwordAgain = document.getElementById('passwordagain').value.trim();
    if (passwordAgainEll == passwordAgain){

    }
    else{
        document.getElementById('kiiras').textContent = "A jelszavak nem egyeznek"
    }

}




function regGomb(){
    ellenorzesEmail()
    ellenorzesJelszo()
    ellenorzesUjraJelszo()
}

