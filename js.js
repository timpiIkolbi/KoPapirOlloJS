const emailEll = /^[^\s@]{3,}@[^\s@]{3,}\.+[^\s@]{2,}$/;
function ellenorzesEmail(){
    const email = document.getElementById('email').value.trim();

    if (email.match(emailEll)){
        
    }
    else{
        document.getElementById('kiiras') = "Hibás az email"
    }
}
const userName = /^{8,20}$/
function ellenorzesUser(){
    const user = document.getElementById('username').value.trim();
    if (user.match(userName)){

    }
    else {
        
    }
}
