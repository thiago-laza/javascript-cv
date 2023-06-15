var valor1 = document.querySelector('input#valor-1')
var valor2 = document.querySelector('input#valor-2')

let soma = document.getElementById('adicao')
let res = document.getElementById('res')




soma.addEventListener('click',clicar)

function clicar(){
    alert(`${Number(valor1.value)+Number(valor2.value)}`)
    res.innerHTML = `${Number(valor1.value)+Number(valor2.value)}`
}




