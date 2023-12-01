const card = document.querySelectorAll('.card')
const titulo = document.querySelectorAll('.titulo-card')
const descricao = document.querySelectorAll('.descricao-card')
const botaoEditar = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')

function alterarCard(){
    card.forEach(card => card.style.backgroundColor = '#dd7108')
    
    titulo.forEach(titulo => {
        titulo.innerText = 'Meu Card'
        titulo.style.color = '#2b385b'
    }) 

    descricao.forEach(descricao=> {
        descricao.innerText = 'Descrição modificada pelo JavaScript'
        descricao.style.color = 'white'
        descricao.style.margin = '4em 0'
        descricao.style.fontSize = '14px'
    }) 
    
    botaoEditar.forEach(botao => {
        botao.style.backgroundColor = 'green'
        botao.style.color = 'white'
        botao.style.padding = '0.5em'
        botao.style.borderRadius = '10px'
        botao.style.borderStyle = 'none'
    })
    
    botaoApagar.forEach(botao => {
        botao.style.backgroundColor = 'red'
        botao.style.color = 'white'
        botao.style.padding = '0.5em'
        botao.style.borderRadius = '10px'
        botao.style.borderStyle = 'none'
    }) 
    
}
alterarCard()

function editarCard(){
    window.alert('Clicou em Editar!')
}

function apagarCard(){
    const apagar = confirm('Tem certeza que deseja excluir este card?')
    if(apagar){
        alert('Confirmado!')
    } else {
        alert('Cancelou!')
    }
}


