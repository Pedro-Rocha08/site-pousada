let quartoSelecionado = "";

function selecionarQuarto(quarto) {
  quartoSelecionado = quarto;
  alert("Você escolheu: " + quarto);
}

function enviarWhatsApp() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const adultos = document.getElementById("adultos").value;
  const criancas = document.getElementById("criancas").value;

  if (checkin === "" || checkout === "") {
    alert("Escolha a data de check-in e check-out.");
    return;
  }

  if (quartoSelecionado === "") {
    alert("Escolha um quarto antes de reservar.");
    return;
  }

  const telefone = "5515997440778"; // troque pelo WhatsApp da pousada

  const mensagem =
    `Olá! Quero fazer uma reserva.%0A%0A` +
    `Quarto: ${quartoSelecionado}%0A` +
    `Check-in: ${checkin}%0A` +
    `Check-out: ${checkout}%0A` +
    `Adultos: ${adultos}%0A` +
    `Crianças: ${criancas}`;

  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}