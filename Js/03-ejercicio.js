/*3- Realiza un script que pida cadenas de texto  hasta que se pulse
 “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas 
 concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/



let texto = prompt('ingrese su texto');
//let cadenas = [];
//cadenas.push(texto)

for (let i = 1; i <= 10; i++) {
    if(confirm()== true){
    } else if (confirm(texto)== false) {
        document.write('texto falso - ')
    };
    
    console.log(texto)
}


//console.log(cadenas)

/*let cadena = confirm(texto);

if(confirm(cadena)== true){
    console.log('es verdadero')
} else {
    console.log('es false')
}*/