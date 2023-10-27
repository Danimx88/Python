const beers = [{
    name: "Sout",
    brand: "Minerva"
},{
    brand: "Erding",
    name: "Pikantus",
},{
    name: "Porter",
    brand: "Fsdmn"
},{
    name: "IPA",
    brand: "Languitas"
},{
    name: "Pikantus",
    brand: "Erding"
},{
    name: "Corona",
    brand: "Modelo"
    },]

function load(d, r, f){
    const data = d;
    let i = 0;
    let reg = r;
    const fn = f;

    return ()=>{
        if(i >= data.length) return;

        const arr = [];

    for(let j = 0; j < reg && i < data.length; j++ ){
        arr.push(data[i++]);
    }
    fn(arr);
    }

}

const showData = load(beers, 2, (arr) =>{
    
}
);

