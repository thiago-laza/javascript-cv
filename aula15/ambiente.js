let nun = [5,8,2,9,3]

console.log(`Nosso vetor eh o: ${nun}`)

nun[5]=1

console.log(`Nosso vetor , depois na modificacao 1 eh o: ${nun}`)

nun.push(9)

console.log(`Nosso vetor , depois da segunda modificacao eh o: ${nun}`)

console.log(`E o tamanho do vetor eh ${nun.length}`)

console.log(`Ordenando o vetor teremos: ${nun.sort()}`)

console.log(`O elemento na primeira posicao eh ${nun[0]}`)

for(let pos = 0; pos < nun.length;pos++){
    console.log(nun[pos])
}