function sumaF (...numbers){
    var sum = 0;

    for (var number of numbers){
        if (typeof number ==="number"){
            sum += number;
        }
    }
    return sum;
}

console.log(sumaF(2,4,6,4,3));
////////////////////////////////////////////////////////

function consoleLog(val) {
    console.log(val);
    return val
}

consoleLog("Hello")
//////// En la programación funcional, usamos muchas funciones y variables. /////////////////////////
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);


function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

//Por ejemplo, si tengo un objeto virtualPet, puedo darle una propiedad sleepy y un método nap():

var virtualPet = {
    sleepy: true,
    nap: function() {}
}

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())