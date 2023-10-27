//Desctructores

const car1 = {speed: 300, color: "blue"} //Objetct
const car2 = {speed: 150, color: "brown"}

const car3 = { //Object
    speed: 200,
    color: "red"
}

console.log(Object.keys(car1));
console.log(Object.values(car2));
console.log(Object.entries(car3));

//Ahora tiene todos los ingredientes que necesita para repetir las claves y los valores de propiedad de cualquier objeto.

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( keys of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[keys])
}

function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  console.log("--------------------------------------------------------------------------------------------------")

  function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();