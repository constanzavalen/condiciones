function verificar() {
    const sticker1 = Number(document.getElementById('input1').value);
    const sticker2 = Number(document.getElementById('input2').value);
    const sticker3 = Number(document.getElementById('input3').value);
    const mensaje = document.getElementById('respuesta');

    let total = sticker1 + sticker2 + sticker3;

 if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0) {
    mensaje.innerHTML = "Los valores ingresados son incorrectos";
 } else if (total > 10) {
    mensaje.innerHTML = "Llevas demasiados stickers";
 } else {
    mensaje.innerHTML = "Llevas " + total + " stickers";
 }

}

