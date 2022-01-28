const encriptar = document.getElementById('btnEncriptar');
function encriptado() {
    let result = document.getElementById('outputTexto');
    let text = document.getElementById('inputTexto').value;
    text = text.toLowerCase().trim();
   
    text = text.replaceAll("e","enter");
    text = text.replaceAll("i","imes");
    text = text.replaceAll("a","ai");
    text = text.replaceAll("o","ober");
    text = text.replaceAll("u","ufat");
    result.value=text;
}
encriptar.addEventListener('click', encriptado);

const desencriptar = document.getElementById('btnDesencriptar');
function desencriptado() {
    let result = document.getElementById('outputTexto');
    let text = document.getElementById('inputTexto').value;
    text = text.toLowerCase().trim();
   
    text = text.replaceAll("enter","e");
    text = text.replaceAll("imes","i");
    text = text.replaceAll("ai","a");
    text = text.replaceAll("ober","o");
    text = text.replaceAll("ufat","u");
    result.value=text;
}
desencriptar.addEventListener('click', desencriptado);

const clear = document.getElementById('btnClear');
function limpiar() {
    let result = document.getElementById('outputTexto');
    let text = document.getElementById('inputTexto');
    text.value=" ";
    result.value=" ";
}
clear.addEventListener('click', limpiar);


const copy = document.getElementById('btnCopy');
function copiar() {
    let result = document.getElementById('outputTexto');
    result.select();
    navigator.clipboard.writeText(result.value)
}
copy.addEventListener('click', copiar);
copiar.preventDefault();
    