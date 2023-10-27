/*
    los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
    Es muy importante tener en cuenta que el nombre de los gatters/setters no puede
    ser el mismo que la propiedad porque se produciría u  bucle: al acceder a la propiedad
    invocaríamos al método que a su vez accede a la propiedad que invoca al método..
    Por ello, muchos desarrolladores utilizan el guión bajo para nombre la propiedad.
*/

var persona = {
    name: "Daniel",
    lastname: "Romero",
    get fullname (){
        return `${this.name} ${this.lastname}`
    },
    set fullname (fullvalue) {
        const arreglo = fullvalue.split(" ");
        this.name = arreglo[0];
        this.lastname = arreglo[1];
    }
};
console.log(persona.fullname);
persona.fullname = "Claudia Arellano"
console.log(persona.fullname);
