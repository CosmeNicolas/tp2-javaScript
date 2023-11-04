/**15- Realiza un script que cuente el número de vocales que tiene un texto.
 */


let cadenaTexto = prompt(['ingrese su texto']);
let texto = cadenaTexto.split('');
let numeroVocales = cadenaTexto.match(/[aeiou]/gi).length;

document.write(`El numero de vocales que hay en el texto "${cadenaTexto}" es ${numeroVocales} `)


for (let i = 0; i < texto.length; i++) {
  if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
    let vocales = texto[i].length
    console.log(vocales)
  }
}




