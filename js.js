//Form validáció

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const nevPattern = /^.{8,20}$/u;

function joEmail() {
    const email = document.getElementById('email').value.trim();
    return emailPattern.test(email);
}

function joMev() {
    const nev = document.getElementById('felhasznalonev').value.trim();
    return nevPattern.test(nev);
}

document.getElementById('urlap').addEventListener('submit', (event) => {
    event.preventDefault();

    const uzenet = document.getElementById('uzenet');

    if (!joMev()) {
        uzenet.textContent = 'A felhasználónév 8-20 karakter hosszú legyen.';
        document.getElementById('felhasznalonev').focus();
        return;
    }

    if (!joEmail()) {
        uzenet.textContent = 'Adj meg egy érvényes email-címet.';
        document.getElementById('email').focus();
        return;
    }

    uzenet.textContent = '';
    document.getElementById('belepes').hidden = true;
    document.getElementById('jatek').hidden = false;
});




//Játék működése
    
document.getElementById('ujra').addEventListener('click', () => {
    document.getElementById('eredmeny').textContent = '';
    document.getElementById('tePont').textContent = '0';
    document.getElementById('gepPont').textContent = '0';
});



