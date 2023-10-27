// function backf (...val) {

//     console.log(val) 
//     return;
// }

// t = 10;
// h = 30;
// h2 = 30;

// backf(t, h, h2)

// var nombre = "daniel" 

// if (nombre === "claudia"){
//     console.log(nombre, " eres Fea")
// } else if (nombre === "daniel"){
//     console.log(nombre, " eres guapo")
// }


// var  password = 658383;

// for (var i = 0; i < 3; i++){
//     if (password === 658383){
//         console.log("Contraseña correcta")
//         break;
//     }else if (password != 658383){
//         console.log("Error de contraseña"); 
//     }
// }



var virtualPet = {              //Objeto 
    sleepy: true,               //Propiedad
    nap: function() {           // Ge    
        this.sleepy = false;    //
    },
    wakeUp: function() {
        this.sleepy = true;
      }
}

// Llamando a un método para volver a establecer sleepy en true
// virtualPet.wakeUp = function() {
//     this.sleepy = true;
//   };

console.log(virtualPet.sleepy) // Llamando a la propiedad sleepy del objeto virtualPet   //True
virtualPet.nap()    //Lla al metodo nap el cuál modifica a la propiedad sleepy de true a false
console.log(virtualPet.sleepy) //Imprimo la propiedad sleepy
virtualPet.wakeUp() //Mando a llamar al metodo wakeUp el cuál vuelve al valor original de sleepy de false a true
console.log(virtualPet.sleepy) // Mando a la consola la propiedad sleepy del objeto virtualPet

var thermostat = {
    temperature: 70, // temperatura inicial
    setTemperature: function(newTemp) {
      this.temperature = newTemp;
    },
    resetToDefault: function() {
      this.temperature = 70; // restaurar temperatura predeterminada
    }
  };

  console.log(thermostat.temperature); // Muestra la temperatura actual: 70
thermostat.setTemperature(75); // Cambiar la temperatura a 75 grados
console.log(thermostat.temperature); // Muestra la nueva temperatura: 75

// Luego, algo sucede y decides restaurar la temperatura predeterminada
thermostat.resetToDefault(); // Restaurar la temperatura predeterminada
console.log(thermostat.temperature); // Muestra la temperatura restaurada: 70


function consoleStyler(color, background, fontSize, txt) {
 
    var message = "%c" + txt;
    
    var style = `color: ${color};`;
    
    style += `background: ${background};`;
    
    style += `font-size: ${fontSize};`;
    
    console.log(message, style);
}
consoleStyler("blue", "yellow", "20px", "Texto con estilo");


function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
  }
  
  function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
      console.log(`%cFeliz cumpleaños`, fontStyle);
    } else if (reason == "champions") {
      console.log(`%c¡Felicidades por el título!`, fontStyle);
    } else {
      console.log(message, style);
    }
  }
  
  consoleStyler('#1d5c63', '#ede6db', '40px', '¡Felicidades!');
  celebrateStyler('birthday');
  
  function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
  }
  
  styleAndCelebrate('ef7c8e', 'fae8e0', '30px', '¡Lo lograste!', 'champions');
  
