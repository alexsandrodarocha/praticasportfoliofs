
const corposCelestes = []
async function getBodies() {
    const result = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
    return result.data.bodies
}

getBodies().then((result) => {
    corposCelestes.push(...result)
    console.log('1:')
    console.log(corposCelestes)
    console.log('2:')
    console.log(planetasFiltro())
    console.log('3:')
    encontrarTerra()
    const planetas = planetasFiltro()
    console.log('4:')
    nTemLua(planetas)
    console.log('5:')
    mapPlanetas(planetas)
    console.log('6:')
    filtroTamanhos(planetas)
    console.log('7:')
    informacoes(planetas)
    console.log('8:')
    massaMenores(planetas)
    console.log('9:')
    luasEDensidade(planetas)
    console.log('10:')
    //descoberta(corposCelestes)
    console.log('11:')
    encontrandoAstro('La Terre')
    console.log('12:')
    filtroGraus(corposCelestes)
    console.log('13:')
    planetasSeparados(corposCelestes)
    console.log('14:')
    ordemComplexa(corposCelestes)
    console.log('15:')
    planetaOrbitado(corposCelestes)
    console.log('16:')
    mediaMassaPlanetas(planetas)
    console.log('17:')
    distanciaSaturnoPlutao(corposCelestes)
    console.log('18:')
    planetasComLuas(planetas)
    console.log('19:')
    desafioFinal(corposCelestes)
}).catch((err) => {
    console.log(err)
});

function planetasFiltro(){
    const result = corposCelestes.filter(planeta => planeta.isPlanet)
    return result
}

function encontrarTerra(){
    const result = corposCelestes.find(planeta => planeta.englishName === 'Earth')
    console.log(result)
}

function nTemLua(planetas){
    const filtroSome = planetas.some(planeta => planeta.moons === null)
    const filterPlanetas = planetas.filter(planeta => planeta.moons === null)
    let s = ''
    filterPlanetas.forEach(indice => {
        s += (indice.name + '... ');
    });
    return console.log('Algum planeta no array filtrado não tem luas? ' + filtroSome), console.log('São eles: ' + s)
}

function mapPlanetas(planetas){
    const nomes = planetas.map(planeta => {
        return planeta.name
    })
    console.log(nomes);
}

function filtroTamanhos(planetas){
    const nomes = planetas.map(planeta => {
        return {
            nome: planeta.name,
            tamanho: planeta.equaRadius
        }
    })

    const ordem = nomes.sort(function (x, y) {
        return x.tamanho - y.tamanho
    })
    console.log(ordem);
}

function informacoes(planetas) {
    const nomes = planetas.map(planeta => {
        return planeta.name
    })
    console.log(nomes)
    const info = nomes.join()
    console.log(info, typeof info);

}

function massaMenores(planetas) {
    const massa = planetas.sort((a, b) => a.equaRadius - b.equaRadius)
    let arr = []
    let soma = 0
    massa.forEach(x => {
        if (arr.length < 5) {
            arr.push(x)
            const exponenciacao = x.mass.massValue * Math.pow(10, x.mass.massExponent)
            soma += exponenciacao
        }
    })
    console.log('Soma das 5 menores massas', arr, soma);
}

function luasEDensidade(planetas) {
    let result = planetas.forEach(planeta => {
        if (planeta.moons != null && planeta.moons.length > 2 && planeta.density > 1) {
            console.log('luas e densidade', planeta.name, planeta.density);
        }
    })
    console.log(result);
}

function descoberta(astros) {
    let des = astros.map(astro => {
        if (astro.discoveryDate) {
            return astro
        }
    })

    des.sort((a, b) => {
        const dateA = new Date(
            a.discoveryDate.split("/").reverse().join("-")
        );
        const dateB = new Date(
            b.discoveryDate.split("/").reverse().join("-")
        );

        return dateA - dateB;
    })
    for (let indice of des) {
        console.log(indice.name, indice.discoveryDate);
    }
}

function encontrandoAstro(nome) {
    const array = corposCelestes
    const find = array.find(astro => {
        return astro.name === nome
    })
    console.log(`Gravidade do astro ${find.name}: ${find.gravity}, Densidade: ${find.density}, Massa: ${find.mass.massValue}, Distancia: ${find.aphelion}, ${find.perihelion}`)
}

function filtroGraus(astros) {
    const temp = 273.15
    const filtro = astros.filter(astro => {
        const calculo = astro.avgTemp - temp
        return calculo >= 8 && calculo <= 30
    })
    console.log(filtro)
}

let obj = {}
function planetasSeparados(planetas) {
    const separados = planetas.map(i => {
        if (obj[i.bodyType] === undefined) {
            obj[i.bodyType] = []
        }
        obj[i.bodyType].push(i)

    })
    console.log(obj);
}

function ordemComplexa(astros) {
    for (let i in obj) {
        const ordem = obj[i].sort((a, b) => b.equaRadius - a.equaRadius)
        const ordemSlice = ordem.slice(0, 3)
        console.log(ordemSlice);
    }
}

function planetaOrbitado(planetas) {
    const orbitado = planetas.filter(planeta => {
        return planeta.aroundPlanet != null
    })
    orbitado.forEach(planeta => {
        console.log(planeta.name, planeta.aroundPlanet);
    })
}

function mediaMassaPlanetas(p) {
    const planetas = p.filter(planeta => planeta.bodyType === 'Planet')
    const soma = planetas.reduce((acc, currentValue) => {
        return acc + currentValue.mass.massValue * Math.pow(10, currentValue.mass.massExponent)
    }, 0)

    const media = soma / planetas.length
    console.log(media);
}

function distanciaSaturnoPlutao(a) {
    const aphelion = a.find(astro => astro.id === 'saturne').aphelion
    const perihelion = a.find(astro => astro.id === 'pluton').perihelion
    console.log(perihelion - aphelion);
}

function planetasComLuas(p) {
    p.forEach(planeta => {
        if (planeta.moons != null) console.log(planeta.name, planeta.moons.length);
    })
}

function desafioFinal(a) {
    const arrayPlanetas = a.filter(astro => astro.isPlanet)
    console.log(arrayPlanetas);
    const massas = arrayPlanetas.map(planeta => planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent))
    massas.sort((a, b) => a - b)
    console.log(massas);
    let indice = Math.floor(massas.length / 2)
    let indice1 = 0
    let indice2 = 0
    
    if (massas.length % 2 === 0) {
        console.log('par');
        indice1 = (massas.length / 2) - 1
        indice2 = massas.length / 2
        const medianaPar = (massas[indice1] + massas[indice2]) / 2
        console.log(medianaPar);
        const nomePlanetas = arrayPlanetas.filter(planeta => planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent) >= massas[indice1] && planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent) <= massas[indice2])
        console.log('Planetas mais próximos da mediana:', nomePlanetas);

    } else {
        console.log('impar');
        const medianaImpar = massas[Math.floor(massas.length / 2)]
        console.log(medianaImpar);
        const nomePlaneta = arrayPlanetas.filter(planeta => planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent) === massas[indice])
        console.log('Planeta mais próximo da mediana:', nomePlaneta);
    }
}