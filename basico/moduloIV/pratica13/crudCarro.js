// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema
// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco
// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

let veiculos = [{
    id: '61',
    modelo: 'Truck',
    marca: 'Ford',
    ano: 2021,
    cor: 'White',
    preco: 35000
  },
  {
    id: '78',
    modelo: 'SUV',
    marca: 'Toyota',
    ano: 2022,
    cor: 'White',
    preco: 20000
  },
  {
    id: '2',
    modelo: 'Truck',
    marca: 'Honda',
    ano: 2022,
    cor: 'Blue',
    preco: 36000
  },
  {
    id: '17',
    modelo: 'Hatchback',
    marca: 'Toyota',
    ano: 2022,
    cor: 'Black',
    preco: 30000
  },
  {
    id: '27',
    modelo: 'Truck',
    marca: 'Ford',
    ano: 2021,
    cor: 'Red',
    preco: 35000
  },
  {
    id: '12',
    modelo: 'Truck',
    marca: 'Chevrolet',
    ano: 2021,
    cor: 'Black',
    preco: 30000
  },
  {
    id: '76',
    modelo: 'Hatchback',
    marca: 'Chevrolet',
    ano: 2021,
    cor: 'Blue',
    preco: 25000
  },
  {
    id: '58',
    modelo: 'SUV',
    marca: 'Ford',
    ano: 2020,
    cor: 'Red',
    preco: 30000
  },
  {
    id: '78',
    modelo: 'Truck',
    marca: 'Toyota',
    ano: 2020,
    cor: 'White',
    preco: 20000
  },
  {
    id: '41',
    modelo: 'Hatchback',
    marca: 'Ford',
    ano: 2022,
    cor: 'Black',
    preco: 25000
  }]

function menu() {
    alert(`
    Bem-vindo ao sistema de CRUD de veículos:
    No momento, o sistema tem ${veiculos.length} carros cadastrados.
    Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo
    2 - Listar todos os veículos
    3 - Filtrar veículos por marca
    4 - Atualizar veículo
    5 - Remover veículo
    6 - Sair do sistema
`)

    let opcao = prompt(`Escolha uma opção: `)

    switch (opcao) {
        case "1":
            cadastrarVeiculos()
            break;
        case "2":
            listarVeiculos()
            break;
        case "3":
            filtrarVeiculos()
            break;
        case "4":
            atualizarVeiculo()
            break;
        case "5":
            removerVeiculo()
            break;
        case "6":
            alert("Programa finalizado.")
            break;
        default:
            alert('Opção inválida!')
            menu()
    }
}

function cadastrarVeiculos() {
    let id = veiculos.length + 1
    let modelo = prompt("Digite o modelo do veículo:")
    let marca = prompt("Digite a marca do veículo:")
    let ano = prompt("Digite o ano do veículo:")
    let cor = prompt("Digite a cor do veículo:")
    let preco = prompt("Digite o preço do veículo:")
    
    veiculos.push({
        id: id,
        modelo: modelo,
        marca: marca,
        ano: ano,
        cor: cor,
        preco: preco,
    })
    alert("O veículo cadastrado!")
    menu()
}

function listarVeiculos() {
    veiculos.sort((a, b) => a.preco - b.preco)

    for (let i = 0; i < veiculos.length; i++) {
        let veiculo = veiculos[i]
        alert("ID: " + veiculo.id + " Modelo: " + veiculo.modelo + " Marca: " + veiculo.marca +
              " Ano: " + veiculo.ano + " Cor: " + veiculo.cor + " Preço: R$" + veiculo.preco)
    }

    menu()
}

function filtrarVeiculos() {
    let marcaFiltro = prompt("Digite a marca para filtrar:")
    let veiculosFiltrados = veiculos.filter((veiculo) => veiculo.marca.toLowerCase() === marcaFiltro.toLowerCase())
    veiculosFiltrados.sort((a, b) => a.preco - b.preco)
    
    for (let i = 0; i < veiculosFiltrados.length; i++) {
        let veiculoFiltrado = veiculosFiltrados[i]
        alert("ID: " + veiculoFiltrado.id + " Modelo: " + veiculoFiltrado.modelo +
              " Cor: " + veiculoFiltrado.cor + " Preço: R$" + veiculoFiltrado.preco)
    }

    menu()
}

function atualizarVeiculo() {
    let idAtualizar = prompt("Digite o ID do veículo:")
    let atualizarVeiculo = veiculos.find((veiculo) => veiculo.id == idAtualizar)
    if (atualizarVeiculo) {
        atualizarVeiculo.cor = prompt("Digite a nova cor do veículo:")
        atualizarVeiculo.preco = prompt("Digite o novo preço do veículo:")

        alert("Veículo atualizado com sucesso!")
    } else {
        alert("Veículo não encontrado.");
    }

    menu()
}

function removerVeiculo() {
    let idRemover = prompt("Digite o ID do veículo:")
    let removerVeiculo = veiculos.findIndex((veiculo) => veiculo.id == idRemover)
    if (removerVeiculo !== -1) {
        veiculos.splice(removerVeiculo, 1)
        alert("Veículo removido com sucesso!")
    } else {
        alert("Veículo não encontrado.")
    }

    menu()
}

menu()