/*16- Realiza un script que pida una cadena de texto 
y la devuelva al revés. Es decir, si tecleo 
“hola que tal” deberá mostrar “lat euq aloh”.*/

let texto = prompt('ingrese texto');

let textoStr = texto.split('');

textoStr.reverse();

document.write(textoStr)


let reverseTexto = textoStr.join();


console.log(reverseTexto)

