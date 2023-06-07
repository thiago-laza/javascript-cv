var a = window.document.getElementById('imagens')
var res = document.getElementById('res_1')



a.addEventListener('mouseenter',entrar)
a.addEventListener('click',clicar)
a.addEventListener('mouseout',sair)

function clicar(){
    res.innerText = 'Clicou2'
    
}

function entrar(){
    res.innerText = 'Entrou'
}

function sair(){
    res.innerText = ''
    
}