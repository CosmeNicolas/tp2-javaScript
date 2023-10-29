/**
 * 12- Realiza un script que genere un 
número aleatorio entre 1 y 99
 */

const numero = confirm('generar numero Aleatorio');


if(numero == true){
    for (let aleatorio = 0; aleatorio < 10; aleatorio++){
        numeroAleatorio = Math.random();
           numerofinal = (numeroAleatorio * 100)
        const entero = parseInt(numerofinal)
        
            alert(entero) 
           //console.log(entero)
           //document.write(entero)
    } 
        
} else {
    alert('cancelaste crear un numero aleatorio')
}

