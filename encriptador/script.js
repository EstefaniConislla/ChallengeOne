
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


const encriptar = document.querySelector(#btnEncriptar);
const desencriptar = document.querySelector(#btnDesencriptar).value;
const text = document.querySelector(#inputTexto).value;
const result = document.querySelector(#msg);
const clear = document.querySelector(#btnClear);
const copy = document.querySelector(#btnCopy);


clear.addEventListener('click', limpiar);
copy.addEventListener('click', copiar);
encriptar.addEventListener('click', encriptado);

function encriptado() {
    text = text.replaceAll("e","enter");
    text = text.replaceAll("i","imes");
    text = text.replaceAll("a","ai");
    text = text.replaceAll("o","ober");
    text = text.replaceAll("u","ufat");
    result.value= text
}

function desencriptado(){
    text = text.replaceAll("e","enter");
    text = text.replaceAll("i","imes");
    text = text.replaceAll("a","ai");
    text = text.replaceAll("o","ober");
    text = text.replaceAll("u","ufat");
    result.value= text
}

function limpiar() {
    text.value="";
    result.value="";
}
function copiar() {
    result.select();
    document.execCommand('copy');
    document.execCommand('copy');
}