const formulario = document.getElementById('formulario');
let linhas = '';
const inputNome = document.getElementById('inputNome');
const inputTelefone = document.getElementById('inputTelefone');
let telefones = [];
let nomes = [];

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if (!verificarDuplicidade()) {
        atualizarTabela();
        limparCampos();
    }
});

function verificarDuplicidade(){
    if (telefones.includes(inputTelefone.value)) {
        alert('Telefone duplicado, por favor, adicione um número diferente');
        return true;
    }
    return false;
}

function atualizarTabela(){
    telefones.push(inputTelefone.value);
    nomes.push(inputNome.value);
    montarLinhas();
    document.getElementById('tabelaBody').innerHTML = linhas;
}

function limparCampos(){
    inputTelefone.value = '';
    inputNome.value = '';
}

function montarLinhas(){
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha;
}
