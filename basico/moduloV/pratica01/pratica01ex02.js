let clicks = 0
function incrementar(){
    clicks ++
    document.querySelector('#text').innerText = `O contador esta com ${clicks} cliques`
}

function zerarContador(){
    document.querySelector('#text').innerText = ''
    clicks = 0
}