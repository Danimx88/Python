const nombre = "Daniel";
const apellido = "Romero";

console.log(`Información: ${nombre} y ${apellido}`);
console.log("Información: " + nombre + " y " + apellido);

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  console.log(`${1 + 1 + 1 + 1 + 1 + 5} stars!`)

  let first =`djkshjfkh
  sd`;
  console.log(first)
