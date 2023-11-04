/**8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numeroPiramide = parseInt(prompt('ingrese un numero entre 1 y 50'));

if(numeroPiramide >=1 && numeroPiramide <=50){
  for (let piramide = 1; piramide <= numeroPiramide; piramide++) {
  for (let i = 1; i <= piramide; i++) {
    let numero = 1;
    document.write(`<strong>${piramide}</strong>`)
  }
  document.write(`<br>`)
}
} else {
  alert('ingrese un numero valido')
}
