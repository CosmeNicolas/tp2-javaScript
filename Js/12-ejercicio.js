/**
 * 12- Realiza un script que genere un 
número aleatorio entre 1 y 99
 */

const numero = confirm('generar numero Aleatorio');

if(numero == true){
    for (let aleatorio = 1; aleatorio < 99; aleatorio++){
        numeroAleatorio = Math.random();
        console.log(numeroAleatorio)
    } 
        
} else {
    alert('cancelaste crear un numero aleatorio')
}
