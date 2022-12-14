// script

class item {
    constructor(name, strenght) {
        this.name = name;
        this.strenght = strenght;
    }
}

var arr = [];


function salvar(){
    var aux = new item(document.getElementById('hero_name').value, document.getElementById('hero_strenght').value);
    arr.push(aux);  
    arr.forEach(function (bora){
        console.log(bora);
    })  
    document.getElementById('hero_name').value = "";
    document.getElementById('hero_strenght').value = "";
}


function carregar(){

    let resultDIV = document.getElementById('d');
    resultDIV.innerHTML = "";

    arr.forEach(function(opa){
        var text = 'nome do herói: ' + opa.name + ' força: ' + opa.strenght;
        let p = document.createElement("p");
        p.innerHTML = text;
        resultDIV.append(p);

    })
}




