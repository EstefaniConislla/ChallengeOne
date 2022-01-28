

// const clear = document.getElementById('btnClear');
// clear.addEventListener('click', limpiar)



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
    console.log(result);
}
encriptar.addEventListener('click', encriptado);


// const desencriptar = document.getElementById('btnDesencriptar');
// desencriptar.addEventListener("click", function(e){
//     e.preventDefault();
//     const text = document.getElementById('inputTexto');
//     const result = document.getElementById('outputTexto');
//     result.value=desencriptado(text.value);
// })




// function limpiar() {
//     text.value="";
//     result.value="";
// }

// const copy = document.getElementById('btnCopy');
// copy.addEventListener('click', function(copiar){
//     copiar.preventDefault();
//     const result = document.getElementById('outputTexto');
//     console.log(result.value);
//     result.select();
//     navigator.clipboard.writeText(result.value)
// });
    