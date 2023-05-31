valores = [5,8,6,1,3,2]


/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`O valor na posicao ${pos} eh igual a ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`O valor na posicao ${pos} eh igual a ${valores[pos]}`) 
}

console.log(valores.indexOf(14))