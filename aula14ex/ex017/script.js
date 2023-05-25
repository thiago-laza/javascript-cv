function calcular(){
    let valor = document.getElementById('valor')
    let num = Number(valor.value)
    let res = document.getElementById('resultado')


    if(valor.value.length == 0){
        alert('Digite um numero')
    }else{
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            res.appendChild(item)
        }
    }

    
}