/**14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let cadenaTexto = prompt(['ingrese su texto']);

let texto = cadenaTexto.split('');

//console.log(texto)

//console.log(texto[0].concat("-"))


for(let i = 0; i < texto.length; i++){
  document.write(`${texto[i].concat("-")}`)
}

