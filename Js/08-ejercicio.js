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

if(numeroPiramide > 0 && numeroPiramide < 51){
  for(let i = 1; i <= numeroPiramide; i++){
    for(let i = 1; i <= numeroPiramide; i++){
      document.write(`${i+numeroPiramide}`)

    }
    
    document.write(`<br>`)
  }

}else {
  alert('No es un numero entre 1 y 50, ingrese un numero valido')
}


