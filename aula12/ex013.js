var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDay()
var mes = agora.getMonth()
var ano = agora.getFullYear()


switch(mes){
    case 0:
        console.log('Janeiro')
        break
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    default:
        console.log('Data inválida')
}   



