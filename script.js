// script

class item {
    constructor(name, strenght) {
        this.name = name;
        this.strenght = strenght;
    }
}

var arr = [];


function salvar(){

    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }

    var aux = new item(document.getElementById('hero_name').value, document.getElementById('hero_strenght').value);
    arr.push(aux);  
    arr.forEach(function (bora){
        console.log(bora);
    })  
    document.getElementById('hero_name').value = "";
    document.getElementById('hero_strenght').value = "";
    localStorage.meuArr = JSON.stringify(arr);
    document.getElementById('hero_name').focus();
}


function carregar(){

    let resultDIV = document.getElementById('saida');
    resultDIV.innerHTML = "";

    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }

    arr.forEach(function(opa){
        var text = 'herói: ' + opa.name + '<br> força: ' + opa.strenght;
        console.log(opa.strenght);
        let p = document.createElement("p");
        p.innerHTML = text;
        resultDIV.append(p);

    })

    document.getElementById('hero_name').focus();
}

function excluir(){
    arr = [];
    localStorage.meuArr = JSON.stringify(arr);
    document.getElementById('hero_name').focus();
}




