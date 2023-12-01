function digitName(){
    const nome = prompt('Digite seu nome: ')
    document.querySelector('#text').innerHTML = `E aí ${nome}! Você esta deixando seu site dinâmico.`
}