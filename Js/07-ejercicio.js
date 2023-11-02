/**7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */



let numeroPiramide= parseInt(prompt('ingrese un numero no mayor a 50'));

if(numeroPiramide > 1 && numeroPiramide < 51 ){
  for(let numero = 0; numero <= numeroPiramide ; numeroPiramide--){
   for(let i = 0 ; i <= numeroPiramide; i++)
   document.write(`<strong>${numeroPiramide}</strong>`)
   document.write(`<br>`)
     
  }
} else {
  alert('numero incorrecto, ingrese un numero del 1 al 50')
}

 





/*
for (let piramide = 1; piramide <= numeroPiramide; piramide++) {
  for (let i = 1; i <= piramide; i++) {
   
    document.write(`<strong>${piramide}</strong>`)
  }
  document.write(`<br>`)
}*/
