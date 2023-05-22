function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO, tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src','img2/bebe_m_1.png')
            }else if(idade < 6){
                //crianca1
                img.setAttribute('src','img2/cranca_m_1.png')
            }else if(idade < 13){
                //crianca2
                img.setAttribute('src','img2/crianca_m_2.png')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src','img2/adolescente_m_1.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src','img2/jovem_m_1.png')
            }else if(idade < 40){
                //adulto1
                img.setAttribute('src','img2/adulto_m_1.png')
            }else if(idade < 60){
                //adulto2
                img.setAttribute('src','img2/adulto_m_2.png')
            }else{
                //idoso
                img.setAttribute('src','img2/idoso_m_1.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src','img2/bebe_f_1.png')
            }else if(idade < 6){
                //crianca1
                img.setAttribute('src','img2/crianca_f_1.png')
            }else if(idade < 13){
                //crianca2
                img.setAttribute('src','img2/crianca_f_2.png')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src','img2/adolescente_f_1.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src','img2/jovem_f_1.png')
            }else if(idade < 40){
                //adulto1
                img.setAttribute('src','img2/adulto_f_1.png')
            }else if(idade < 60){
                //adulto2
                img.setAttribute('src','img2/adulto_f_2.png')
            }else{
                //idoso
                img.setAttribute('src','img2/idoso_f_1.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}