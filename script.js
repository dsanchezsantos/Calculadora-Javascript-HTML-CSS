function calcular() {

    //receber os numeros
    var n1 = window.document.querySelector('input#num1')
    var n2 = window.document.querySelector('input#num2')
    var res = window.document.getElementById('res');

    //guardar o valor do formulario
    var op = window.document.getElementsByName('operation')

    //analisar qual a operação e calcular
    if(op[0].checked){//soma
        var x = Number(n1.value) + Number(n2.value)
        res.innerHTML = `${x}`
    } else if (op[1].checked){//subtração
        var x = Number(n1.value) - Number(n2.value)
        res.innerHTML = `${x}`
    } else if (op[2].checked){//multiplicação
        var x = Number(n1.value) * Number(n2.value)
        res.innerHTML = `${x}`
    } else if (op[3].checked){//divisão
        var x = Number(n1.value) / Number(n2.value)
        res.innerHTML = `${x}`
    } else if (op[4].checked){//exponencial
        var x = Number(n1.value) ** Number(n2.value)
        res.innerHTML = `${x}`
    }  

}