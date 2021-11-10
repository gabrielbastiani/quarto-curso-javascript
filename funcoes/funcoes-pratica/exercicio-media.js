(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("oly numbers")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }

    let media = calcularMedia(2, 4, 7, 8)
    console.log(media)
})()