function sum(a ,b) {
    return a + b;

}

function some(f){
    const fn = f;

    return (a)=>{
        return (b) =>{
            return fn(a,b);
        }
    }
}   

const c = some(sum);
const c1 = c(25);
console.log(c1(5));
console.log(c1(10));
console.log(c1(15));

function mul(h,r){
    return h * r;
}

function co(fr){
    const fc = fr;
    
    return (h)=>{
        return(r)=>{
            return fc(h,r)
        }
    }   
}
const g = co(mul);
const g1 = g(10); 
console.log(g1(10))

console.log("-------------------------------------------------------------------------------------")

function log(hi){
    const hash = hi;

    return (msg) => {
        console.log(`Log ${hash} ${msg}`)
    }
}
const crypto = require('crypto');

const l = log(crypto.randomUUID);

l("Hola");

console.log("-------------------------------------------------------------------------------------")



