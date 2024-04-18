let btn = document.getElementById('btn')
let div = document.getElementById('resultado')
console.log(btn);

const arrPessoa = []

function cadastrar() {

    let nomeInput = document.getElementById('nome').value
    let sobrenomeInput = document.getElementById('sobrenome').value
    let categoriaInput = document.getElementById('categoria').value
    let pesoInput = document.getElementById('idade').value
    let alturaInput = document.getElementById('anoA').value

    let Imc = IMC(pesoInput, alturaInput)
    let categoriaImc = categoriaIMC(Imc)


const pessoa = {
    nome: nomeInput,
    sobrenome: sobrenomeInput,
    categoria: categoriaInput,
    idade: pesoInput,
    anoA: alturaInput,
    imc: IMC(pesoInput, alturaInput),
    categoriaIMC: categoriaIMC(IMC(pesoInput, alturaInput))
}
arrPessoa.push(pessoa)
imprimir()
console.log(arrPessoa)

}


function IMC(idade, anoA)
{
    
    return anoA - idade
}



function imprimir()
{
    div.innerHTML = '';
    for(let i = 0; arrPessoa.length; i++) {
        div.innerHTML += 
        `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${arrPessoa[i].nome} - ${arrPessoa[i].sobrenome}</td>
        <td>${arrPessoa[i].idade}</td>
        <td>${arrPessoa[i].anoA}</td>
        <td>${arrPessoa[i].categoria} </td>
        <td>${arrPessoa[i].imc} </td> 
        </tr>
        `
    }
}

function categoriaIMC(imc)
{
    //calcular a categoria do imc
    if(imc <= 18)
    {
        return 'Menor de idade'
    }
    else
    {
        return 'Maior de idade'
    }
}

btn.addEventListener('click', cadastrar)