let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores para finalizar')
    }else{
        let tot = valores.length
        //let max = Math.max.apply(Math,valores)
        //let min = Math.min.apply(Math,valores)
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let c in valores){
            soma += valores[c]
            if(valores[c]>maior){
                maior = valores[c]
            }  
            if(valores[c]<menor){
                menor = valores[c]
            }
        }

         
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior foi ${maior}</p>`
        res.innerHTML += `<p>O menor foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}`
        res.innerHTML += `<p>A média dos valores foi ${media}`
        
    }
}