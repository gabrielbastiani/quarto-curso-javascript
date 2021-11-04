const pessoa = {
    nome: "Maria",
    idade: 58,
    "email": "ela@server.com"
}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
}