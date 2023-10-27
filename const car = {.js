const car = {
    engine : true
}

const sportCar = Object.create(car);
sportCar.speed = "fast";
sportCar.engine2 = true;

function eef (animal) {
for (const prop of Object.keys(sportCar)){
    console.log(prop);
}

}


// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream',
    'milkshake'];

    function logDairy() {
    dairy.forEach(element => {
        console.log(element)
    });
}

logDairy();

// Task 2

const animal = {
    canJump: true
}

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop])
    }
}

// Task 3

function animalCan (){

    for (const prop in bird) {
     console.log (prop + ": " + bird[prop])
     }
}
birdCan();
animalCan();
