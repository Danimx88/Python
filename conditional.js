//Conditional statement
var light = "green";

if(light == "green") {
    console.log("The light is " + light + ", Drive. " + "case 'if-else'")
} else if (light == "orange") {
    console.log("The light is " + light + ", Get ready. " + "case 'if-else'")
} else if (light == "red") {
    console.log("The light is " + light + ", Dont' drive. " + "case 'if-else'")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red" + "case 'if-else'");
}

// if else

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("The light is " + light + ", Drive. " + "case 'switch'");
        break;
    case 'orange':
        console.log("The light is " + light + ", Get ready. " + "case 'switch'");
        break;
    case 'red':
        console.log("The light is " + light + ", Don't drive. " + "case 'switch'");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red' + "case 'switch'");
        break;
 }

 var age = 10;
if (age >= 65 ){
    console.log("You get your income from your pension");
}else if (age < 65 && age > 18){
    console.log("Each month you get a salary");
}else if (age < 18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}

var day0 = "Sunday";
switch (day0){
    case "Monday":
    console.log('Do something on ' + day0);
    break;
    case "Tuesday":
    console.log('Do something on ' + day0);
    break;
    case "Wednesday":
    console.log('Do something on ' + day0);
    break;
    case "Thursday":
    console.log('Do something on ' + day0);
    break;
    case "Friday":
    console.log('Do something on ' + day0);
    break;
    case "Saturday":
    console.log('Do something on ' + day0);
    break;
    case "Sunday":
    console.log('Do something on ' + day0);
    break;
    default:
        //this block will run if no condition matches
        console.log('There is no such day');
}

var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

var miSwitch = 30;

switch(true) {
    case 0<=10:
        console.log("Eres un bebé");
        break;
    case 11 <=17:
        console.log("Eres un niño");
        break;
    case (miSwitch>= 18 && miSwitch<=24):
        console.log("Eres un Joven");
        break;
    case (miSwitch>= 25 && miSwitch<=45):
        console.log("Eres un adulto");
        break;
    case 46 <=65:
        console.log("Eres un adulto mayor");
        break;
    case 66 <=Infinity:
        console.log("Eres una oersona de la tercera edad");
        break;
    default:
        console.log("Dato incorrecto");
}

var inicio = 10; // Inicio del rango
var fin = 50;   // Fin del rango

console.log("Números primos en el rango de " + inicio + " a " + fin + ":");

while (inicio <= fin) {
  var esPrimo = true;

  if (inicio <= 1) {
    esPrimo = false;
  } else if (inicio <= 3) {
    esPrimo = true;
  } else if (inicio % 2 === 0 || inicio % 3 === 0) {
    esPrimo = false;
  } else {
    var divisor = 5;
    while (divisor * divisor <= inicio) {
      if (inicio % divisor === 0 || inicio % (divisor + 2) === 0) {
        esPrimo = false;
        break;
      }
      divisor += 6;
    }
  }

  if (esPrimo) {
    console.log(inicio);
  }

  inicio++;
}

/* Dentro del bucle while, utilizamos declaraciones if para determinar si cada número es primo. Para verificar si un número es primo, aplicamos una serie de condiciones:

Si el número es menor o igual a 1, no es primo.
Si el número es igual a 2 o 3, es primo.
Si el número es divisible por 2 o 3, no es primo.
Para otros números, utilizamos un bucle while con un divisor inicial de 5. Verificamos si el número es divisible por el divisor o el divisor más 2 en cada iteración hasta que el cuadrado del divisor sea mayor que el número. Si encontramos un divisor que divide al número, entonces no es primo.
Si la variable esPrimo se mantiene en true, significa que el número es primo y lo mostramos en la consola. */

//_____________________________________________________________________________________________________________________________________
//Para For

//Ejemplo 1: Imprimir números del 1 al 5:

for (var i = 1; i <= 5; i++) {
    console.log("Para for: ", i); //Este bucle "for" imprimirá los números del 1 al 5 en la consola.


  }

 //Este bucle "for" calculará la suma de los números del 1 al 10 y mostrará el resultado en la consola.:
 
var suma = 0;

for (var i = 1; i <= 10; i++) {
  suma += i;
}

console.log("La suma de los números del 1 al 10 es: " + suma); //Este bucle "for" calculará la suma de los números del 1 al 10 y mostrará el resultado en la consola.

//Ejemplo 3: Recorrer un arreglo e imprimir sus elementos:

var nombres = ["Juan", "María", "Carlos", "Ana"];

for (var i = 0; i < nombres.length; i++) {
  console.log("Nombre: " + nombres[i]);
}

//En este caso, el bucle "for" recorrerá un arreglo de nombres e imprimirá cada nombre en la consola.

//Ejemplo 4: Tabla de multiplicar:

var numero = 5;

for (var i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

//Este bucle "for" generará la tabla de multiplicar del número 5 y mostrará los resultados en la consola.

//EJEMPLO UNIFICADO

var continuar = true;

while (continuar) {
  var operacion = prompt("Ingrese una operación (suma, resta, multiplicación, división) o 'salir' para detenerse:");
  
  if (operacion === "salir") {
    continuar = false;
    break;
  }

  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2 = parseFloat(prompt("Ingrese el segundo número:"));
  var resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicación":
      resultado = num1 * num2;
      break;
    case "división":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        alert("Error: No se puede dividir por cero.");
        continuar = false;
      }
      break;
    default:
      alert("Operación no válida.");
      break;
  }

  if (!isNaN(resultado)) {
    console.log("El resultado de " + operacion + " " + num1 + " y " + num2 + " es: " + resultado);
  }
}

/*

¡Por supuesto! Aquí tienes un ejemplo que combina los bucles "for" y "while" junto con declaraciones "if" y "switch" en JavaScript para simular una calculadora simple que realiza operaciones hasta que el usuario decida detenerla:

javascript
Copy code
var continuar = true;

while (continuar) {
  var operacion = prompt("Ingrese una operación (suma, resta, multiplicación, división) o 'salir' para detenerse:");
  
  if (operacion === "salir") {
    continuar = false;
    break;
  }

  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2 = parseFloat(prompt("Ingrese el segundo número:"));
  var resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicación":
      resultado = num1 * num2;
      break;
    case "división":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        alert("Error: No se puede dividir por cero.");
        continuar = false;
      }
      break;
    default:
      alert("Operación no válida.");
      break;
  }

  if (!isNaN(resultado)) {
    console.log("El resultado de " + operacion + " " + num1 + " y " + num2 + " es: " + resultado);
  }
}
En este ejemplo, el programa utiliza un bucle "while" para permitir que el usuario realice operaciones aritméticas
repetidamente hasta que decida detenerse al ingresar "salir". Dentro del bucle "while", se utiliza una declaración
"switch" para determinar qué operación realizar (suma, resta, multiplicación o división). Luego, se utilizan 
declaraciones "if" para manejar casos especiales, como la división por cero o una operación no válida. Los resultados
de las operaciones válidas se imprimen en la consola.
*/

//EJEMPLO UNIFICADO 2

var inventario = [
    { id: 1, nombre: "Producto A", stock: 10, precio: 50 },
    { id: 2, nombre: "Producto B", stock: 5, precio: 30 },
    { id: 3, nombre: "Producto C", stock: 15, precio: 40 }
  ];
  
  var continuar = true;
  
  while (continuar) {
    console.log("Opciones disponibles:");
    console.log("1. Ver inventario");
    console.log("2. Realizar una compra");
    console.log("3. Salir");
    
    var opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));
  
    switch (opcion) {
      case 1:
        console.log("Inventario:");
        for (var i = 0; i < inventario.length; i++) {
          console.log(
            "ID: " + inventario[i].id +
            ", Nombre: " + inventario[i].nombre +
            ", Stock: " + inventario[i].stock +
            ", Precio: $" + inventario[i].precio
          );
        }
        break;
      
      case 2:
        var idProducto = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
        var cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        
        for (var i = 0; i < inventario.length; i++) {
          if (inventario[i].id === idProducto) {
            if (inventario[i].stock >= cantidad) {
              var totalCompra = cantidad * inventario[i].precio;
              inventario[i].stock -= cantidad;
              console.log("Compra realizada con éxito. Total a pagar: $" + totalCompra);
            } else {
              console.log("No hay suficiente stock para realizar esta compra.");
            }
            break;
          }
        }
        break;
      
      case 3:
        continuar = false;
        console.log("Gracias por utilizar el programa de gestión de inventario.");
        break;
      
      default:
        console.log("Opción no válida. Por favor, seleccione una opción válida.");
        break;
    }
  }

  /* En este ejemplo, el programa utiliza un bucle "while" para permitir que el usuario realice operaciones
aritméticas repetidamente hasta que decida detenerse al ingresar "salir". Dentro del bucle "while",
se utiliza una declaración "switch" para determinar qué operación realizar (suma, resta, multiplicación o división).
Luego, se utilizan declaraciones "if" para manejar casos especiales, como la división por cero o una operación no válida.
Los resultados de las operaciones válidas se imprimen en la consola.
  */

//EJEMPLO UNIFICADO 3

// Definición de productos en el inventario
var inventario = [
    { id: 1, nombre: "Producto A", stock: 10, precio: 50 },
    { id: 2, nombre: "Producto B", stock: 5, precio: 30 },
    { id: 3, nombre: "Producto C", stock: 15, precio: 40 }
  ];
  
  // Variables de usuario y carrito de compras
  var continuarComprando = true;
  var carrito = [];
  
  // Función para calcular el total de la compra
  function calcularTotal(carrito) {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
      total += carrito[i].cantidad * carrito[i].producto.precio;
    }
    return total;
  }
  
  // Bucle principal
  while (continuarComprando) {
    console.log("Opciones disponibles:");
    console.log("1. Ver inventario");
    console.log("2. Agregar producto al carrito");
    console.log("3. Ver carrito de compras");
    console.log("4. Finalizar compra");
    
    var opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));
  
    switch (opcion) {
      case 1:
        console.log("Inventario:");
        for (var i = 0; i < inventario.length; i++) {
          console.log(
            "ID: " + inventario[i].id +
            ", Nombre: " + inventario[i].nombre +
            ", Stock: " + inventario[i].stock +
            ", Precio: $" + inventario[i].precio
          );
        }
        break;
      
      case 2:
        var idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
        var cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        
        for (var i = 0; i < inventario.length; i++) {
          if (inventario[i].id === idProducto) {
            if (inventario[i].stock >= cantidad) {
              // Agregar producto al carrito
              carrito.push({ producto: inventario[i], cantidad: cantidad });
              inventario[i].stock -= cantidad;
              console.log("Producto agregado al carrito.");
            } else {
              console.log("No hay suficiente stock para esta cantidad.");
            }
            break;
          }
        }
        break;
      
      case 3:
        console.log("Carrito de compras:");
        for (var i = 0; i < carrito.length; i++) {
          console.log(
            "Producto: " + carrito[i].producto.nombre +
            ", Cantidad: " + carrito[i].cantidad
          );
        }
        console.log("Total a pagar: $" + calcularTotal(carrito));
        break;
      
      case 4:
        continuarComprando = false;
        console.log("Compra finalizada. Total a pagar: $" + calcularTotal(carrito));
        break;
      
      default:
        console.log("Opción no válida. Por favor, seleccione una opción válida.");
        break;
    }
  }

  /*
  Ahora, explicaré las partes clave del código línea por línea:
Se define un inventario de productos como un arreglo de objetos. Cada objeto representa un producto con propiedades como "id", "nombre", "stock" y "precio".
Se declaran variables para rastrear si el usuario desea continuar comprando (continuarComprando) y el contenido del carrito de compras (carrito).
Se define una función calcularTotal para calcular el total de la compra en función de los elementos del carrito.
Se inicia un bucle while que ejecutará el programa hasta que continuarComprando sea false.
Se presenta un menú de opciones al usuario y se solicita una elección.
Se utiliza un switch para manejar las diferentes opciones seleccionadas por el usuario.
En el caso 1, se muestra el inventario de productos.
En el caso 2, se solicita al usuario el ID del producto y la cantidad que desea comprar. Se busca el producto en el inventario y se agrega al carrito si hay suficiente stock.
En el caso 3, se muestra el contenido del carrito de compras y se calcula el total a pagar utilizando la función calcularTotal.
En el caso 4, se finaliza la compra y se muestra el total a pagar.
Se proporciona una opción predeterminada para manejar selecciones inválidas.
Este ejemplo simula un sistema de gestión de tienda en línea básico y muestra cómo combinar bucles, condicionales y funciones para crear una aplicación más compleja.
  */
  
for (var i = 1; i <= 3; i++) {
    console.log("This is line ", i)
}

