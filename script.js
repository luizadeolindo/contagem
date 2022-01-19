function contar () {
    var inicio = document.querySelector("#inicio")
    var fim = document.querySelector("#fim")
    var passo = document.querySelector("#passo")
    var res = document.querySelector ("#res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ("[ERRO] Confirmar dados")
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert("Não é possivel contar com passo 0. Adotando PASSO = 1")
            p = 1
        } 
        if(i < f) {
                for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}`
                }
        } else {
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}