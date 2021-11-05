// Criar um array com numeros randomicos nao repetidos?
function generateRandonNumberInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <= 20){
    let randonNumber = generateRandonNumberInteger(30);
    console.log(randonNumber)

    if(arr.indexOf(randonNumber) < 0) {
        arr.push(randonNumber)
    }else{
        console.log(randonNumber, "ja existe no arr")
    }
}

console.log(arr)