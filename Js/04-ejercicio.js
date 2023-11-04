/**
 * 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

while(confirm('Desea ingresar un numero?')){
  let numero = parseInt(prompt('ingrese un numero'))
  console.log(numero)
  let sumas = numero + numero
  document.write(" "+ sumas +" ")
  if(!numero){
    alert('no es un numero')
  }
}
 




//isNaN: si es un numero retorna false, perso si no es un numero retorna true
  

