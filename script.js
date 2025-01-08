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

// Efeito de borboletas ao clicar na página
document.body.addEventListener("click", (e) => {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = `${e.pageX}px`;
    butterfly.style.top = `${e.pageY}px`;
    document.body.appendChild(butterfly);

    // Remover borboleta após animação
    setTimeout(() => butterfly.remove(), 4000);
});
