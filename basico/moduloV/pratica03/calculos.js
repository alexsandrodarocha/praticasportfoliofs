/* Desenvolva aqui a rotina */
const valorBase = document.querySelector('#valor_base')
const valorTransporte = document.querySelector('#valor_transporte')
const valorAlimentacao = document.querySelector('#valor_alimentacao')
const receita = document.querySelector('#valor_receita')
const botaoCalcular = document.querySelector('#btn_calcular')
valorBase.addEventListener('input', () => receitaTotal())
valorTransporte.addEventListener('input', () => receitaTotal())
valorAlimentacao.addEventListener('input', () => receitaTotal())
const descontoAutomovel = document.querySelector('#valor_automovel')
const faltas = document.querySelector('#faltas')
const descontos = document.querySelector('#valor_descontos')
descontoAutomovel.addEventListener('input', () => descontosTotal())
faltas.addEventListener('input', () => descontosTotal())
const total = document.querySelector('#valor_total')

function receitaTotal(){
    const result = Number(valorBase.value) + Number(valorTransporte.value) + Number(valorAlimentacao.value)
    receita.value = result
    return result
}

function descontosTotal(){
    const result = Number(descontoAutomovel.value) + Number(faltas.value)
    descontos.value = result
    return result
}

function calcular(){
    const receitaT = receitaTotal()
    const descontosT = descontosTotal()
    const result = Number(receitaT) - Number(descontosT)
    total.value = result
    console.log(result)
}






