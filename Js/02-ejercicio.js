/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente */

const nota = parseInt(prompt('Ingrese su nota de 0 a 10'));

for (let index = 0; index < nota; index++) {
  if(nota <= 0 || nota <= 2) {
    alert('Su nota es Muy deficiente')
  }
  
}

/*else {
  alert('no esta en el rango de los numeros solicitados de 0 a 10')
}*/