const Validator = {

    pattern: {
        tajszam : /^\d{3} \d{3} \d{3}$/,
        szemelyID : /^\d{6}[A-Z]{2}$/,
        nev : /^[A-ZÁÖÜÓŐÚŰÉÍ][a-záéóöőúüűí]/,
    },
    validate(text, type){
        return text.match(this.pattern[type]) ? "Érvényes " + type : "Érvénytelen " + type
    }
}

console.log(validator.validate('123 456 789', 'taj'))
console.log(validator.validate('512123FA', 'szemelyiID'))
console.log(validator.validate('Fitymadia', 'nev'))


function ellenorzes(){
    const taj = document.getElementById('tajszam').value.trim();
    const szig = document.getElementById('szemelyIg').value.trim();
    const nev = document.getElementById('nev').value.trim();

    const eredmenyek = [
        Validator.validate(taj, 'tajszam'),
        Validator.validate(szig, 'szemelyIg'),
        Validator.validate(nev, 'nev')
    ]

    alert(eredmenyek)
}