/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

const edad = parseInt(prompt('Ingrese su Edad'));

if(edad >= 18){
  document.write('Ya puede conducir ');
} if(edad <=17){
  document.write('Es menor de edad, no puede conducir')
};