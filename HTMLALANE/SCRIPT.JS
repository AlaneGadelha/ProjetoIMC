function calcularIMC(){
   let form = document.querySelector(".form");
   let resultado = document.querySelector(".resultado");

   let pessoas = [];

function recebeEventoForm(evento){
    evento.preventDefault();

    let nome = document.querySelector(".nome")
    let sobrenome = document.querySelector(".sobrenome")
    let peso = document.querySelector(".peso")
    let altura = document.querySelector(".altura")

    if(!nome){
        setResultado("Preencha o campo do nome!!", false);
        return
    }
    if(!sobrenome){
        setResultado("Preencha o campo do sobrenome!!", false);
        return
    }
    if(!peso){
        setResultado("Preencha o campo do peso!!", false);
        return
    }
    if(!altura){
        setResultado("Preencha o campo da altura!!", false);
        return
    }
    // chamada da função de calcular o IMC
    let imc = calcIMC(peso.value,altura)
    // chamada da função de verificar o nivel do IMC
    let nivelIMC = nivelIMC();
    //acrescentar os objetos ao array
    //mostrar o array de objetos do document(pagina HTML)
    console.log(pessoas)
    //mostrar a mensagem final da div resultado
    resultado.innerHTML = "<p>"+ pessoas.nome +"<p>"

}

}
calcularIMC();