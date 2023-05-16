
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var resp = document.getElementById('resp')
    var hora = (resp.value)



    if(hora >= 5  && hora <= 12){
        msg.innerText = `Agora são ${hora} horas, BOM DIA!`
        img.src = 'imagens/dia.png'
        document.body.style.background = '#F0E68C'
    }else if(hora > 12 && hora <=18){
        msg.innerText = `Agora são ${hora} horas, BOA TARDE!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FF8C00'
    }else if(hora > 18 && hora <= 24){
        msg.innerHTML = `Agora são ${hora} horas, BOA NOITE!`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4F4F4F'
    }else if(hora >= 0 && hora < 5){
        msg.innerHTML =`Agora são ${hora} horas, BOA MADRUGADA!`
        img.src = 'imagens/madrugada.png'
        document.body.style.background = ' 	#808080'
    }else{
        msg.innerHTML = `${hora} horas não é uma hora permitida.`
        img.src = 'imagens/nao.png'
        document.body.style.background = '#FF0000'
    }
}






