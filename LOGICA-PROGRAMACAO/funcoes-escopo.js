let n = "global"

function mostraN() {
    let n1 = "n1 local"

    if (true) {
        var n2 = "n2 dentro de if com var"
    }
    console.log("valor de n1: " + n1)
    console.log("valor de n2: " + n2)
}

mostraN()

console.log("valor de n no escopo global: " + n)

function fnExt(){

    let n = "n local na funcao fnExt"
    console.log(n)

    function fnInt(){
        let n = "n local na funcao fnInt"
    }
    fnInt()
    console.log(n)
}

fnExt()