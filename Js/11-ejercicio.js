/*11- Realiza un script que pida por teclado 3 edades y 3 nombres
 e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */



for (let nombre = 0; nombre < 1; nombre++) {
    const persona = [prompt('ingrese su nombre')];
    const edad = [prompt('Ingrese su edad')];
    const personaYedad1 = (persona.concat(edad));
    const personaYedad2 = (persona.concat(edad));
   // const personaYedad3 = (persona.concat(edad));

    console.log(personaYedad1[0,1]);
    console.log(personaYedad2[0,1]);
   if(personaYedad1[0,1] > personaYedad2[0,1]){
    alert('la primera persona es mayor a la segunda')
    }
    //console.log(persona1);


    //let personaEdad = []

    //console.log(persona + " "+ edad);
    /*if(edad  > edad){
        console.log('La primera  es mayor a las otras 2')
    }if(edad > edad ){
         console.log('La primera  es mayor a la 1 y 3')
    }if(edad  > edad ){
         console.log('La primera  es mayor a la 1 y 2')
        }*/
}
