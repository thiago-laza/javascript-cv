function calcular(){
    let inicio = document.getElementById('inicio')
    let i = Number(inicio.value)
    let fim = document.getElementById('fim')
    let f = Number(fim.value)
    let passo = document.getElementById('passo')
    let p = Number(passo.value) 

    let res = document.getElementById('res')

    

    for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c}`
    }
}