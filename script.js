let dados = []



function adicionar() {
    var número = document.getElementById("número")
    if (número.value.length == 0) {
        window.alert("Adicione um número")
    } else if (número.value > 100) {
        window.alert("O número deve ser entre 1 e 100.")
    } else {
    var lista = document.getElementById("scroll")
    var númeropreenchido = Number(número.value)
    dados.push(númeropreenchido)
    lista.innerText += `\nO número digitado foi ${númeropreenchido}`
}
    número.value = ""
    número.focus()
}



function analisar() {
    if (número.value.length == 0) {
        window.alert("Adicione um número")
    } else {
    // "Ao todo temos X números cadastrados."
    resposta = document.getElementById("resposta")
    resposta.innerText = `Ao todo temos ${dados.length} números cadastrados`

    // "O maior valor informado foi X"
    dados.sort(function(a, b) {
        return b - a;
    });
    resposta.innerText +=`\nO maior valor informado foi ${dados[0]}`

    // "O menor valor informado foi X"
    dados.sort()
    resposta.innerText +=`\n O menor valor informado foi ${dados[0]}`

    // "Somando todos os valores temos X"
    var soma = 0;
        for(var indice = 0; indice < dados.length; indice++) {
            soma += dados[indice];
        }
        resposta.innerText += `\nSomando todos os valores temos ${soma}`
    
    // "A média dos valores digitados é X"
    var média = soma / dados.length
    resposta.innerText += `\nA média dos valores digitados é ${média}`

}}
