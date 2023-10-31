/*11- Realiza un script que pida por teclado 3 edades y 3 nombres
 e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */




const personaNombre1 = prompt('ingrese su nombre');
const personaEdad1 = parseInt(prompt('ingrese su edad'));

const personaNombre2 = prompt('ingrese su nombre');
const personaEdad2 = parseInt(prompt('ingrese su edad'));

const personaNombre3 = prompt('ingrese su nombre');
const personaEdad3 = parseInt(prompt('ingrese su edad'));




if(personaEdad1 > personaEdad2 && personaEdad1 > personaEdad3){
    document.write(`El usuario ${personaNombre1} de ${personaEdad1} años de edad es mayor que ${personaNombre2} y que ${personaNombre3}`)
} else if (personaEdad2 > personaEdad1 && personaEdad2 > personaEdad3) {
    document.write(`El usuario ${personaNombre2} de ${personaEdad2} años de edad es mayor que ${personaNombre1} y que ${personaNombre3}`)
} else if (personaEdad3 > personaEdad1 && personaEdad3 > personaEdad2){
    document.write(`El usuario ${personaNombre3} de ${personaEdad3} años de edad es mayor que ${personaNombre1} y que ${personaNombre2}`)
} else {
    alert('uno de estos usuario tiene la misma edad que los otros dos o todos tienen la misma edad')
}







//solucion con errores 
/*for (let nombre = 0; nombre < 1; nombre++) {
    const persona = [prompt('ingrese su nombre')];
    const edad = [prompt('Ingrese su edad')];
    const personaYedad = (persona.concat(edad));
 
    const persona1 = []
    console.log(personaYedad[personaYedad.length - 1]);



agregar elementos a un arrelglo
    persona1.push(personaYedad[1])
    console.log(persona1)

console.log(personaYedad2[0,1]);
if(personaYedad1[0,1] > personaYedad2[0,1]){
    alert('la primera persona es mayor a la segunda')
    
console.log(persona1);


let personaEdad = []

console.log(persona + " "+ edad);
if(edad  > edad){
        console.log('La primera  es mayor a las otras 2')
    }if(edad > edad ){
         console.log('La primera  es mayor a la 1 y 3')
    }if(edad  > edad ){
         console.log('La primera  es mayor a la 1 y 2')
        
}*/
