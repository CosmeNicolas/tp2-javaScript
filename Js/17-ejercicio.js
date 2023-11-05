/**17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1


 */


const texto = prompt('ingrese un texto');



for(let i = 0 ; i < texto.length ; i++){
  if(texto.charAt(i) === 'a' || texto.charAt(i) === 'e' ||texto.charAt(i) === 'i' ||texto.charAt(i) === 'o' ||texto.charAt(i) === 'u'){
    //console.log(texto[i].length)
  document.write(`<strong>la letra vocal "${texto[i]}" esta en la posicion  ${texto[i].length}</strong>`)
  } else {
    alert('texto erroneo, por favor ingrese un texto')
  }
}
