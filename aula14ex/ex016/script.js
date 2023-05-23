function calcular(){
    let inicio = document.getElementById('inicio')
    let i = Number(inicio.value)
    let fim = document.getElementById('fim')
    let f = Number(fim.value)
    let passo = document.getElementById('passo')
    let p = Number(passo.value) 

    let res = document.getElementById('res')

    

    if(inicio.value.length == 0  || fim.value.length == 0 || passo.value.length == 0){
        alert('Impossivel contar')
    }else{
        if(p <= 0){
            alert('Passo invalido, considerando passo igual a 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}`
            }
        }
        

    }
    
    
    
    
    
    
   
    
    
    
    
    

    
}