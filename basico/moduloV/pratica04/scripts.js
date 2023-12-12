// 1. Desenvolva uma página HTML que replique a imagem acima,
// contendo um formulário com todos os itens mostrados.
//OK
// 2. Todos os campos de dados pessoais devem ser preenchidos
// obrigatoriamente pelo usuário.
//OK
// 3. Ao carregar a página deve vir previamente marcado um dos radios
// buttons.
//OK
// 4. O usuário deve marcar ao menos um checkbox. Deve ser validado o
// preenchimento desse input.
//OK
// 5. O campo de texto de label “mini-curriculo” não é obrigatório o
// preenchimento pelo usuário.
//OK
// 6. Capture os dados preenchidos no formulário utilizando os métodos
// de manipulação do DOM. Ao final, mostre no console.log os dados
// preenchidos pelo usuário.
//OK
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const checkInteresses = document.querySelectorAll('input[name="interesse"]:checked')
    if (checkInteresses.length === 0) {
        alert('Marque ao menos uma área de interesse!')
        return
        
    }
    console.log('Nome: ' + nome.value);
    console.log('Endereço: ' + endereco.value);
    console.log('Cidade: ' + cidade.value);
    console.log('Estado: ' + estado.value);
    console.log('Cargo: ' + document.querySelector('input[name="cargo"]:checked').id);
    
    const interesses = []
    const checkboxes = document.getElementsByName('interesse');
    checkboxes.forEach(c => {
        if (c.checked) {
            interesses.push(c.value);
        }

    });
    console.log('Interesses: ' + interesses.join(', '));
    console.log('Mini-curriculo: ' + curriculo.value)
})