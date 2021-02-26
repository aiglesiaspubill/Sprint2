let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
let arrayMultiples = [];
let arrayRepiten = [];
let arrayEliminarPares = [];




//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()
function comparar(){

    console.log("EJERCICIO 1: COMPARAR EDAD CON SIMON");
    let edadFernandoSimon = 57;
    let edadCliente = prompt("EJERCICIO 1: EDAD SIMON. Escribe tu edad:");

    if(edadFernandoSimon<edadCliente){
        console.log("ERES MAYOR QUE FERNANDO SIMON");
    }else if(edadFernandoSimon>edadCliente){
        console.log("ERES MENOR QUE FERNANDO SIMON");
    }else{
        console.log("TIENES LA MISMA EDAD QUE FERNANDO SIMON");
    }
}


//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %

function parimpar(){

    console.log("EJERCICIO 2: SABER SI UN NUMERO ES PAR o IMPAR");
    let numeroCliente = prompt ("EJERCICIO 2: PAR O IMPAR. Escribe un numero: ");
    if(numeroCliente%2==0){
        console.log("EL NUMERO ES PAR");
    }else{
        console.log("EL NUMERO ES IMPAR");
    }
}



//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %

function recorrerArray(){
    console.log("EJERCICIO 3: MULTIPLES DE 3");
    let i;
    console.log("ESTOS SON LOS NUMEROS ENCONTRADOS");
    for(i=0; i<numeros.length-1; i++) {
        if(numeros[i]%3==0){
            
            arrayMultiples.push(numeros[i]);
        }
    }
    console.log(arrayMultiples);
}



//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

function menor(){
    console.log("EJERCICIO 4. MENOR");
    let i=0;
    let menor = numeros[i];
    for(i=1; i<numeros.length-1; i++){
        if(menor>numeros[i]){
            menor = numeros[i];
        }
    }
    console.log("EL NUMERO ENCONTRADO ES: " +menor);
}



//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

function mayor(){
    console.log("EJERCICIO 5. MAYOR");
    let i=0;
    let mayor = numeros[i];
    for(i=1; i<numeros.length-1; i++){
        if(mayor<numeros[i]){
            mayor = numeros[i];
        }
    }
    console.log("EL NUMERO ENCONTRADO ES: " +mayor);
}


//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes()

function seRepiten() {
    console.log("EJERCICIO 6. SE REPITEN");
    for(let pos=0; pos<numeros.length-1; pos++){
        for(let i=0; i<numeros.length-1; i++){
            let num = numeros[pos];
            if(pos!= i && num == numeros[i]){
                if(arrayRepiten.includes(num)){
                    continue;
                }else{
                    arrayRepiten.push(num);
                }
            }
        }
        
    }
    console.log(arrayRepiten);
    
}



//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()
function eliminarPares(){
    console.log("EJERCICIO 7: ELIMINAR LOS PARES");
    for(let i=0; i<numeros.length-1; i++)
    {
        if ((numeros[i])%2===0)
        {
            numeros.splice(i,1);
            i--;
        }
        else
        {
            continue;
        }
    }
    
    console.log(numeros);

}


//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()

function dados()
{
    console.log("EJERCICIO 8: TIRAR DOS DADOS. ESTE NO ME SALE");
    let array =[];
    for(i=0; i<36000; i++){

        let dado1 = Math.floor((Math.random()*6)+1);
        let dado2 = Math.floor((Math.random()*6)+1);

        let suma = dado1 + dado2;

        


        

    }


}

dados();


//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()


//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()


//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 26,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};


function mostraNombreApellido(){
    console.log("RETORNARNOMBRE Y APELLIDO");
    let nombre = mentor.nombre;
    let apellido = mentor.apellido;
    console.log("Su nombre y apellidos son los siguientes: " + nombre +" "+ apellido);
}



//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()

function retornarKeys(){
    console.log("EJERCICIOS 12: RETORNAR KEYS")
    let arrayKeys = Object.keys(mentor);
    console.log(arrayKeys);
}



//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado
let edadTuca = 4;
let edadTam = 2;