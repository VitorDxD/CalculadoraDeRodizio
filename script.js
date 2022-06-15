//Cada adulto paga 55 no rodizio
//Crianças não pagam (até 12 anos)
//Cada adulto bebe 1000 ml, se for mais de 6 horas é 1800ml (lata de 350ml = 6 reais)
//cada criança bebe 500ml, se for mais de 6 horas é 900ml
let inputAdulto = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calc(){
    let Adulto = inputAdulto.value;
    let Crianca = inputCrianca.value;
    let Duracao = inputDuracao.value;

    let bebidasCriancas = (bebida_crianca(Duracao) / 2) * Crianca;
    let bebidasAdultos = bebida_crianca(Duracao) * Adulto;

    let valorBebidas = ((bebidasCriancas + bebidasAdultos) / 350) * 6;
    let valorEntradas = Adulto * 55 + (Crianca * 55)/2;

    let valorFinal = valorBebidas + valorEntradas

    console.log(`O valor gasto nas entradas foi R$${valorEntradas.toFixed(2)}`);
    console.log(`O valor gasto com bebida foi R$${valorBebidas.toFixed(2)}`);
    console.log(`Total: R$${valorFinal.toFixed(2)}`)

    resultado.innerHTML = `<p class="pResultado">Entradas: R$${valorEntradas.toFixed(2)}</p>`
    resultado.innerHTML += `<p class="pResultado">Bebidas: R$${valorBebidas.toFixed(2)}</p>`
    resultado.innerHTML += `<p class="pResultado">Total: R$${valorFinal.toFixed(2)}</p>`
}
function bebida_crianca(Duracao){
    if (Duracao < 6){
        return 1000;
    } else {
        return 1800;
    }
}

