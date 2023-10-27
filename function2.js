// function meal(animal){
//     animal.food = animal.food + 10;
// }

// var dog = {
//     food: 10
// };

// meal(dog);
// meal(dog);
// console.log(dog.food);

// var globalVar = 77;

// function scopeTest() {
//     var localVar = 88;
// }



// function two(){
//     return 2;
// }

// function one(){
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
//  }

//  console.log(calculate(two, one))

function totalImpuesto (zapatos, impuesto){
    valorTotal = zapatos * impuesto;
    return valorTotal;
}

function precioNeto(zapatos) {
    precioFinal = zapatos - valorTotal;
    var x = 100;
    return precioFinal;
}



zapatos = 350;
impuesto = 0.16;
console.log("Impuesto total del producto: ",totalImpuesto(zapatos, impuesto));
console.log("Precio final del producto: ", precioNeto(zapatos));
console.log(x)
