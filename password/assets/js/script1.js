function verificar() {
    const option1 = document.getElementById('select1').value;
    const option2 = document.getElementById('select2').value;
    const option3 = document.getElementById('select3').value;

    let clave = option1 + option2 + option3;

    if (clave == 911) {
        document.getElementById('resultado').innerHTML = "password 1 correcta";
    } else if (clave == 714) {
        document.getElementById('resultado').innerHTML = "password 2 correcta";
    } else {
        document.getElementById('resultado').innerHTML = "password incorrecta";
    }

}