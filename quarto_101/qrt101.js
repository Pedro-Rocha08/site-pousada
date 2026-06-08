function consultarPreco() {

    const entrada = new Date(
        document.getElementById("checkin").value
    );

    const saida = new Date(
        document.getElementById("checkout").value
    );

    const hospedes = parseInt(
        document.getElementById("hospedes").value
    );

    if (!entrada || !saida) {
        alert("Selecione as datas.");
        return;
    }

    const dias =
        (saida - entrada) / (1000 * 60 * 60 * 24);

    // Regra: 1 pessoa precisa ficar pelo menos 2 dias
    if (hospedes == 1 && dias < 2) {
        alert(
            "Para 1 hóspede o mínimo é 2 diárias."
        );
        return;
    }

    if (dias <= 0) {
        alert("Datas inválidas.");
        return;
    }

    let total = 0;

    let dataAtual = new Date(entrada);

    while (dataAtual < saida) {

        const diaSemana = dataAtual.getDay();

        // Domingo=0, Sexta=5, Sábado=6

        if (
            diaSemana == 5 ||
            diaSemana == 6 ||
            diaSemana == 0
        ) {

            total += 320;

        } else {

            total += 250;

        }

        // adicional por hóspede extra

        if (hospedes > 2) {

            total +=
                ((hospedes - 2) * 40);

        }

        dataAtual.setDate(
            dataAtual.getDate() + 1
        );
    }
    const totalFormatado = total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    document.getElementById("preco").innerHTML =
        `
        <h3>Total: <span id="valorFinal">R$ ${totalFormatado}</span></h3>
        <p>${dias} diária(s)</p>
        `;
}

const imagens = [

    "quarto101.png",
    "images.jpeg",
    "images copy.jpeg"

];

let indice = 0;

const slider =
    document.getElementById("slider");

const totalImagens =
    slider.children.length;

function proximaImagem(){

    indice++;

    if(indice >= totalImagens){
        indice = 0;
    }

    atualizarSlider();
}

function imagemAnterior(){

    indice--;

    if(indice < 0){
        indice = totalImagens - 1;
    }

    atualizarSlider();
}

function atualizarSlider(){

    slider.style.transform =
        `translateX(-${indice * 100}%)`;

    atualizarBolinhas();
}

function atualizarBolinhas(){

    const bolinhas =
        document.querySelectorAll(".bolinha");

    bolinhas.forEach(b =>
        b.classList.remove("ativa")
    );

    bolinhas[indice]
        .classList.add("ativa");
}

function reservar(){

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const hospedes = document.getElementById("hospedes").value;
    const valor = document.getElementById("valorFinal").innerText;

    if (checkin === "" || checkout === "") {
        alert("Selecione as datas.");
        return;
    }

    if (valor === "") {
        alert("Consulte o preço antes de reservar.");
        return;
    }

    const telefone = "5515996304282";

    const mensagem =
        `Olá, gostaria de reservar o Quarto 101.%0A%0A` +
        `Check-in: ${checkin}%0A` +
        `Check-out: ${checkout}%0A` +
        `Hóspedes: ${hospedes}%0A` +
        `Valor: ${valor}%0A`;

    window.open(
        `https://wa.me/${telefone}?text=${mensagem}`,
        "_blank"
    );
}