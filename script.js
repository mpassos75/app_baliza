// selecionar carro


//++++++++++++++++++++++++++++++++++++++++

const totalBarras = 6;
const left = document.getElementById("leftBars");
const right = document.getElementById("rightBars");
const distanciaText = document.getElementById("distancia");

// criar barras
function criarBarras(container2) {
  container2.innerHTML = "";
  for (let i = 0; i < totalBarras; i++) {
    const div = document.createElement("div");
    div.className = "barra";
    container2.appendChild(div);
  }
}

criarBarras(left);
criarBarras(right);

// simular sensor
function atualizarSensor() {
  // distância simulada (cm)
  const distancia = Math.floor(Math.random() * 150);

  distanciaText.innerText = `Distância Lateral: ${distancia} cm`;

  const barrasAtivas = Math.floor((150 - distancia) / 25);

  atualizarBarras(left, barrasAtivas);
  atualizarBarras(right, barrasAtivas);
}

function atualizarBarras(container2, quantidade2) {
  const barras = container2.children;

  for (let i = 0; i < barras.length; i++) {
    barras[i].className = "barra";

    if (i < quantidade2) {
      let cor = "verde";

      if (i >= 2 && i < 4) cor = "amarelo";
      if (i >= 4) cor = "vermelho";

      barras[i].classList.add("ativa", cor);
    }
  }
}

setInterval(atualizarSensor, 1000);



function selecionarCarro(img) {
  localStorage.setItem("carro", img);
  iniciarApp();
}

// iniciar app
function iniciarApp() {
  const carro = localStorage.getItem("carro");

  if (!carro) return;

  document.getElementById("selecao").style.display = "none";
  document.getElementById("app").style.display = "block";

  document.getElementById("imgCarro").src = carro;

  loop();
}

// trocar carro
function trocarCarro() {
  localStorage.removeItem("carro");
  location.reload();
}
