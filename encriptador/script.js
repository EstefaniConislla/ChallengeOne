
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
const desencriptar = document.querySelector(#btnDescriptar);
const text = document.querySelector(#inputText);
const result = document.querySelector(#msgCopy);
const clear = document.querySelector(#btnClear);
const copy = document.querySelector(#btnCopy);


clear.addEventListener('click', limpiar);
copy.addEventListener('click', copiar);

function limpiar() {
    text.value="";
    result.value="";
}
function copy() {
    result.select();
    document.execCommand('copy');
    document.execCommand('copy');
}