/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente */

const nota = parseInt(prompt("Ingrese su nota"));

if (nota === 0 || nota === 1 || nota === 2) {
  alert('Su nota es "Muy Deficiente"');
}
if (nota === 3 || nota === 4) {
  alert('Su nota es "Insuficiente"');
}
if (nota === 5 || nota === 6) {
  alert('Su nota es "Suficiente"');
}
if (nota === 7) {
  alert('Su nota esta "Bien"');
}
if (nota === 8 || nota === 9) {
  alert('Su nota es "Notable"');
}
if (nota === 10) {
  alert('Su nota es "Sobresaliente"');
} else if (nota > 10 || nota < 0) {
  alert("Numero Erroneo");
}


git