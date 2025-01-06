// Carrossel
const slides = document.querySelectorAll(".carousel img");
let currentSlide = 0;

document.querySelector(".prev").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
});

document.querySelector(".next").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
});

// Inicialização do carrossel
slides[currentSlide].classList.add("active");

// Mini jogo de roupas
const chosenTop = document.getElementById("chosen-top");
const chosenBottom = document.getElementById("chosen-bottom");

document.querySelectorAll("#game .item").forEach(button => {
    button.addEventListener("click", () => {
        const type = button.dataset.type;
        if (type === "top") {
            chosenTop.textContent = `Parte de cima: ${button.textContent}`;
        } else if (type === "bottom") {
            chosenBottom.textContent = `Parte de baixo: ${button.textContent}`;
        }
    });
});
