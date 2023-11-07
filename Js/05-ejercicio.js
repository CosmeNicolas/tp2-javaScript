/**5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’

ver switch

//isNaN: si es un numero retorna false, perso si no es un numero retorna true
 */



do {
  let dni = parseInt(prompt('Ingrese su DNI'));
  if (dni >= 0 && dni < 1000000000) {
    let letraDni = dni % 23;
    console.log(letraDni)
    switch (letraDni) {
      case 0:
        console.log('su letra es "T')
        break;
      case 1:
        console.log('su letra es "R"')
        break;
      case 2:
        console.log('Su letra es "W"')
      case 3:
        console.log('Su letra es "A"')
        break;
      case 4:
        console.log('Su letra es "G"')
        break;
      case 5:
        console.log('Su letra es "M"')
        break;
      case 6:
        console.log('Su letra es "Y"')
        break;
      case 7:
        console.log('Su letra es "F"')
        break;
      case 8:
        console.log('Su letra es "P"')
        break;
      case 9:
        console.log('Su letra es "D"')
        break;
      case 10:
        console.log('Su letra es "X"')
        break;
      case 11:
        console.log('Su letra es "B"')
        break;
      case 12:
        console.log('Su letra es "N"')
        break;
      case 13:
        console.log('Su letra es "J"')
        break;
      case 14:
        console.log('Su letra es "Z"')
        break;
      case 15:
        console.log('Su letra es "S"')
        break;
      case 16:
        console.log('Su letra es "Q"')
        break;
      case 17:
        console.log('Su letra es "V"')
        break;
      case 18:
        console.log('Su letra es "H"')
        break;
      case 19:
        console.log('Su letra es "L"')
        break;
      case 20:
        console.log('Su letra es "C"')
        break;
      case 21:
        console.log('Su letra es "K"')
        break;
      case 22:
        console.log('Su letra es "E"')
        break;
      default:
        if (isNaN(letraDni) == true) {
          alert('No es un numero, ingrese un numero valido');
        }
    };
  } else {
    alert('No es un numero, ingrese un numero valido')
  }
} while (confirm('Desea ingresar otro numero?'))

