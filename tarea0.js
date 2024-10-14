//EL1

// User profile

let nombreDeUsuario = prompt("Ingrese su nombre de usuario");

let edad = +prompt("Ingrese su edad");

// sólo se le permitirá al usuario ingresar 5 de sus peliculas favoritas.


let listaDePeliculasFavoritas =[];


for(i=0;i<=4;i++){
    let peliculasFavoritas=prompt("Ingrese el nombre de su pelicula favorita")
    listaDePeliculasFavoritas.push(peliculasFavoritas)
}


//Storege. Guardando la información de usuario.

const infoUsuario ={
    username:nombreDeUsuario,
    age:edad,
    listaDePeliculasFavoritas,
}

//Reune la información del usuario.

function informacionUsuario(){
    let indice=Math.floor(Math.random() * listaDePeliculasFavoritas.length) // elige aleatoriamente alguna de las peliculas que ingreso el usuario.
    console.log(`Tu nombre de usuario es de: ${infoUsuario.username} años`);
    console.log(`Tu edad es: ${infoUsuario.age}`);
    console.log(`Una de tus pelicuals favoritas es: ${infoUsuario.listaDePeliculasFavoritas[indice]}`);

}

//Muestra la información del usuario.

informacionUsuario()

///////////////////////////////////////////

// EL2

// Highest number

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Arreglo ya ordenado o vacío
    }

    const pivot = arr[arr.length - 1]; // Elegir el último elemento como pivote
    const left = []; // Elementos menores que el pivote
    const right = []; // Elementos mayores que el pivote

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Agregar a la izquierda
        } else {
            right.push(arr[i]); // Agregar a la derecha
        }
    }

    // Ordenar recursivamente y concatenar
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Ejemplo:
const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray.at(-1));  





//////////////////////////////////////////

// EL3

// Palindrome

const palindromo = prompt("Ingrese la oración que desea verificar si es un palindromo");

function esPalindromo(){
    let processedUnoPalindromo = palindromo.toLowerCase(); //Reasignación de la variable y conversión a mínusculas para homógeneidad.
    processedUnoPalindromo=processedUnoPalindromo.replace(/ /g,''); //Quita los espacios vacíos entre las letras.
    let processedDosPalindromo = processedUnoPalindromo.split(''); //Convierte la cadena processedUnoPalindromo en un array
    processedDosPalindromo= processedDosPalindromo.reverse(); // Invierte el orden del arreglo [1,2,3] -> [3,2,1]
    processedDosPalindromo=processedDosPalindromo.join(''); // Convierte el arreglo en cadena nuevamente

    if(processedUnoPalindromo===processedDosPalindromo){
        return console.log("La oración que ingreso es un palíndromo")
    }else{
        return console.log("La oración que ingreso no es un palíndromo")
     }

}

esPalindromo() // Muestra si es o no un palíndromo 

////////////////////////////////////

// EAL1

//Sum of Resistors in Series

function sumResistance(arreglo) {
    let sum = 0; // Inicializar la suma

    for (let i of arreglo) {
        if (i < 0) {
            i = -i; // Convertir a positivo
        }
        sum += i; // Sumar el valor (positivo)
    }

    return sum; // Devolver la suma total
}


const resistencias = [-5, 10, -3, 7]; //Ejemplo
const resultado = sumResistance(resistencias);
console.log(resultado); // Imprimir el resultado


////////////////////

// EAL2

// Secret Society


//Esta función arroja la posición de la letra

function biyectiveUno(letra) {
    const abcedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let indice = -1; // Inicializamos en -1 por si la letra no se encuentra

    for (let i = 0; i < abcedario.length; i++) {
        if (abcedario[i] === letra) {
            indice = i;
            break; // Salimos del bucle una vez que encontramos la letra
        }
    }
    
    return indice;
}
   
console.log(biyectiveUno("Z")) // Muestra el índice o posición de la letra Z.


// Esta función arroja una letra del abcedario, dado un número entre 0 y 25.

function biyectiveDos(numero) {
    const abcedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    if (numero >= 0 && numero < abcedario.length) {
        return abcedario[numero];
    } else {
        return undefined; // lanza indefinido si el número está fuera de rango.
    }
}

console.log(biyectiveDos(25)) // muestra la letra en la posición 25


// Esta funcón obtiene la primera letra de una cadena  o string

function primeraLetra(cadena) {
    const p = cadena.charAt(0);
    return p;
}

console.log(primeraLetra("POLA")) // Muestra la primera letra de la cadena POLA 

// Función para el nombre de la sociedad secreta

function secretName(lista) {
    const listaDePosicion = [];
    
    for (let i = 0; i < lista.length; i++) {
        const nombre = lista[i];
        const p = primeraLetra(nombre);
        const P = p.toUpperCase(); // esto evitará casos como: jOsÉ.
        const bP = biyectiveUno(P); //Convertira las letras en su posición en el abcdario
        listaDePosicion.push(bP);
    }
    
    const listaOrdenada = listaDePosicion.sort(); 
    let codigoSecreto="";
    for (let i = 0; i < listaOrdenada.length; i++) {      
        const Pb = biyectiveDos(listaOrdenada[i]);
        codigoSecreto+=Pb       
    
    }
    return codigoSecreto
}

// Ejemplo de uso
const nombres = ["brian", "CArloS", "Alicia"];
console.log(secretName(nombres)); // Muestra el nombre de la sociedad secreta.

//////////////

//EL3

//Array of Mutiples 

function arrayMultiplos(multiplo, longitud) {
    const l = [];
    const m = [];

    // Llenar el arreglo l con números del 1 a longitud que ingresa el usuario.
    for (let i = 1; i <= longitud; i++) {
        l.push(i);
    }

    // Llenar el arreglo m con el número del cual se quieren saber los múltiplos. 
    for (let i of l) {
        m.push(i * multiplo);
    }

    return m; // Devolver el arreglo de múltiplos.
}

// Ejemplo:
const resultado1 = arrayMultiplos(3, 5);
console.log(resultado1); // [3, 6, 9, 12, 15]

