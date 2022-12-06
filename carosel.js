const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnAvancar = document.querySelector(".btn--avancar");
const btnVoltar = document.querySelector(".btn--voltar");
const pontos = document.querySelectorAll(".ponto");
let slideAtual = 0;
let slidesMaximo = slides.length;

console.log(slider, slides);

for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${100 * i}%)`;
}

btnAvancar.addEventListener("click", function () {
  if (slideAtual === slidesMaximo - 1) {
    slideAtual = 0;
  } else {
    slideAtual++;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - slideAtual)}%)`;
    pontos[i].classList.remove("cheio");
    pontos[slideAtual].classList.add("cheio");
  }
});

btnVoltar.addEventListener("click", function () {
  if (slideAtual === 0) {
    slideAtual = slidesMaximo - 1;
  } else {
    slideAtual--;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - slideAtual)}%)`;
    pontos[i].classList.remove("cheio");
    pontos[slideAtual].classList.add("cheio");
  }
});
