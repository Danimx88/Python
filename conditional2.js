// var inicial = 0.25;
// for (var i=1; i< 31 ;i++){
//     console.log("Día", i, inicial );
//     inicial+= inicial;
// }

// function Mifuncion (a,b){
//     var suma = a + b;
//     console.log("La suma es: ",suma);
// }

// Mifuncion(5,6)

// var numero0 = 1;
// var im0 = numero0 % 2;
// var numero1 = 7;
// var im1 = numero1 % 2;
// var numero2 = 4;
// var im2 = numero2 % 2;
// console.log(im0);
// console.log(im1);
// console.log(im2);

// var num = [1,2,4,6,8,6,3,10,6,6,3,9,5]; 

// for (var i = 0; i < (num.length); i++ ){
//     if (num[i] % 2 == 0 ){
//         console.log("Numero", num[i], " es par");
//     }else {
//         console.log("Numero", num[i], " es impar")
//     }
    
// }

// invertir mayusculas y minusculas
// var miCadena = "JaVaScRIpT eS GenIaL";
// var miCadenaModificada;

// for (var i = 0; i < miCadena.length; i++){
//     var t;
//     if(miCadena[i].indexOf(" ") !== -1){
//         console.log("espacio en blanco")
//         t = t + miCadena[i];
//     }else if(miCadena[i] === miCadena[i].toUpperCase()){
//         console.log(miCadena[i], "es Mayuscula")
//         var may = miCadena[i];
//         t += may.toLowerCase();
//     }else if(miCadena[i] === miCadena[i].toLowerCase()){ //toLowerCase(); para minusculas
//         console.log(miCadena[i], "es Minusucula")
//         var min = miCadena[i];
//         t += min.toUpperCase();
//     }
//     miCadenaModificada = t.substring("undefined".length)
// }

// console.log(miCadena);
//miCadenaModificada += miCadenaModificada.substring("undefined".length);
// console.log(miCadenaModificada);
    

// function dividir(a, b) {
//     if (b === 0) {
//       throw new Error("División por cero no permitida");
//     }
//     return a / b;
//   }
  
//   try {
//     var resultado = dividir(10, 0);
//     console.log(resultado);
//   } catch (error) {
//     console.error("Ocurrió un error:", error.message);
//   }
  

//   var q = "Hola";
//   q.match(/d/);
//   console.log(q);
//   console.log(q.match(/d/));

  function addTwoNums(a, b) {
    try {
      if (typeof a !== 'number') {
        throw new ReferenceError('the first argument is not a number');
      } else if (typeof b !== 'number') {
        throw new ReferenceError('the second argument is not a number');
      } else {
        console.log(a + b);
      }
    } catch (err) {
      console.log("¡Error!", err);
    }
  }
  
  addTwoNums(5, "5");
  console.log("It still works");
  addTwoNums(5, 6);


  function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

try {
    throw new Error();
    console.log("hello");
}   catch(err){
    console.log("Bye")
}

try {
    Number(5).toPrecision(300)
}   catch(e){
    console.log("Bye")
}

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

var o = null;
console.log(o)