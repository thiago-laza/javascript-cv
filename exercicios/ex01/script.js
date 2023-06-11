var a = window.document.getElementById('imagem')
var res = document.getElementById('res')


a.addEventListener('mouseenter',entrar)
a.addEventListener('click',clicar)
a.addEventListener('mouseout',sair)






function clicar(){
    res.innerHTML = 'Clicou na imagem da manhã'
}

function entrar(){
    res.innerHTML = 'Entrou na imagem da manhã'
    
}

function sair(){
    res.innerHTML = ''
}