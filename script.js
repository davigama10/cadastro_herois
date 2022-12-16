// script

alert("Tutorial de uso:\nInsira o nome e a força de um herói, e clique em 'salvar herói para adicioná-lo.\nClique em 'mostrar heróis' para listar todos os heróis.\nClique em 'excluir todos' para limpar a lista de heróis.\nClique em 'excluir um' e digite na box o nome do herói que deseja excluir.\nPara editar a força de um herói, clique no herói na lista e digite a nova força na box. ")

//classe com os atributos de um herói
class item {
    constructor(name, strenght) {
        this.name = name;
        this.strenght = strenght;
    }
}

var arr = [];

//Funão para salvar um herói:

function salvar(){

    //verifica se o localstorage não é vazio, então atribui a variavél 'arr' o array que já existe no localstorage
    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }

    //cria variável 'aux' que recebe os dados do herói que vai ser inserido
    var aux = new item(document.getElementById('hero_name').value, document.getElementById('hero_strenght').value);

    //insere 'aux' no array 'arr'
    arr.push(aux);  

    //limpa as caixas input
    document.getElementById('hero_name').value = "";
    document.getElementById('hero_strenght').value = "";

    //salva o novo array no localstorage
    localStorage.meuArr = JSON.stringify(arr);

    //volta o foco do teclado para a caixa 'nome do herói'
    document.getElementById('hero_name').focus();
}


function carregar(){

    //atribuo a variável 'resultDIV' o endereço da div de classe 'saida' html, que é a div onde os heróis serão printados
    let resultDIV = document.getElementById('saida');
    resultDIV.innerHTML = "";

    //verifica se o localstorage não é vazio, então atribui a variavél 'arr' o array que já existe no localstorage
    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }

    //percorre o array
    arr.forEach(function(opa){

        //variável que cria o texto que será printado para cada herói
        var text = 'herói: ' + opa.name + '<br> força: ' + opa.strenght;
        console.log(opa);

        //crio a tag html do tipo botão que será os heróis printados
        let aux = document.createElement("button");
        aux.className = 'auxiliar'
        aux.type = "button";

        //funcionalidade para chamar a função editar quando clicar no herói na lista
        aux.addEventListener('click', function(event) {

            //chama a função editar e passa o herói clicado como parâmetro
            editar(opa);
        });
        
        //atribui o conteúdo do herói a variável 'aux' e joga ela na div criada
        aux.innerHTML = text;
        resultDIV.append(aux);

    })

    //volta o foco do teclado para a caixa 'nome do herói'
    document.getElementById('hero_name').focus();
}

//função para excluir todos os elementos do array
function excluir(){
    
    //cria novo array vazio
    arr = [];

    //atribui ao localstorage o novo array vazio
    localStorage.meuArr = JSON.stringify(arr);

    //volta o foco do teclado para a caixa 'nome do herói'
    document.getElementById('hero_name').focus();

    //chama a função que mostra todos os heróis
    carregar();
}

//função que edita a força de um  herói específico
function editar(item){

    //cria variável que recebe a nova força digitada na caixa
    let novo_strenght = prompt("Digite a nova força: ");

    //muda a força do hero passado como parâmetro
    item.strenght = novo_strenght; 

    //salva a mudança no localstorage
    localStorage.meuArr = JSON.stringify(arr);

    //chama a função que mostra todos os heróis
    carregar();
}

//função que exclui apenas um herói
function excluir_um(){

    //cria variável que recebe o nome digitado na caixa
    let aux_nome = prompt("Digite o nome do héroi que deseja excluir: ")

    //variável auxiliar para indíce do herói que será excluido
    var counter = 0;

    //variável auxiliar para saber se o loop achou o nome digitado na caixa
    var aux = 0;

    //loop que percorre o array
    arr.forEach(function(opa){

        //condicional que verifica se o nome do herói do elemento no array é igual ao nome digitado na caixa
        if(opa.name == aux_nome){

            //exclui do array 1 elemento com o índice 'counter'
            arr.splice(counter, 1);

            //salva a mudança no localstorage
            localStorage.meuArr = JSON.stringify(arr);

            //chama a função que mostra todos os heróis
            carregar();

            //caso tenha encontrado o herói, variavel auxiliar = 1
            aux = 1;
        }

        //counter aumenta em cada iteração do loop
        counter++;
    })

    //caso não tenha encontrado o herói (condicional não executou)
    if (aux == 0){
        alert("Esse herói não existe!");
    }
}




