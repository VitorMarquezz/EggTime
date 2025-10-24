const imagens = document.querySelectorAll(".img_ovo");
const imagensDureza = document.querySelectorAll(".img_ovoD");
const palavras = document.querySelectorAll(".palavraDureza");
let dureza;
let tipoOvo;

//EFEITO HOVER FIXO 'TIPO DE OVO'
imagens.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagens.forEach((element) => element.classList.remove("ativa"));
    imagem.classList.add("ativa");
  });
});

//EFEITO HOVER FIXO 'DUREZA'
imagensDureza.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagensDureza.forEach((element) => element.classList.remove("ativa"));
    imagem.classList.add("ativa");
  });
});

function selecionarTipo(ovo) {
  tipoOvo = ovo;
}

function selecionarDureza(ovo) {
  dureza = ovo;
}

let startMinuts;
const rel = document.getElementById("relogio");
let tempoFinal = null;
let rodando = false;

function botaoCozinhar() {
  if (!tipoOvo || !dureza) return alert("Selecione o tipo e a dureza!");

  // Define o tempo de cozimento
  if (tipoOvo === "cozido") {
    if (dureza === "mole") startMinuts = 5;
    if (dureza === "medio") startMinuts = 8;
    if (dureza === "duro") startMinuts = 10;
  }

  if (tipoOvo === "frito") {
    if (dureza === "mole") startMinuts = 2.5;
    if (dureza === "medio") startMinuts = 3.5;
    if (dureza === "duro") startMinuts = 6;
  }

  if (tipoOvo === "mexido") {
    if (dureza === "mole") startMinuts = 5;
    if (dureza === "medio") startMinuts = 7;
    if (dureza === "duro") startMinuts = 9;
  }

  document.getElementById("janela").style.display = "block";

  // Evita iniciar mais de um timer
  if (rodando) return;

  rodando = true;
  const duracao = startMinuts * 60 * 1000;
  tempoFinal = Date.now() + duracao;
  atualizarTimer();
}

function atualizarTimer() {
  const restante = Math.max(0, tempoFinal - Date.now());
  const segundos = Math.floor((restante / 1000) % 60);
  const minutos = Math.floor(restante / 1000 / 60);

  rel.innerHTML = `${String(minutos).padStart(2, "0")}:${String(
    segundos
  ).padStart(2, "0")}`;

  if (restante > 0 && rodando) {
    requestAnimationFrame(atualizarTimer);
  } else {
    rodando = false;
    console.log(" Timer terminou!");
  }
}

function fecharJanela() {
  document.getElementById("janela").style.display = "none";
  rodando = false;
}
