function togglePesquisa() {
    var searchContainer = document.querySelector('.search-container');
    var input = document.getElementById('searchInput');

    if (searchContainer.style.maxWidth === '0px' || searchContainer.style.maxWidth === '') {
        // Abrir a barra de pesquisa
        searchContainer.style.maxWidth = '200px';
        input.style.width = '170px'; // Ajuste conforme necessário
        input.style.padding = '5px';
        input.style.height = '10px';
        input.style.opacity = '1';
        input.style.border = 'none';
        input.focus();
    } else {
        // Fechar a barra de pesquisa
        searchContainer.style.maxWidth = '0';
        input.style.width = '0';
        input.style.padding = '0';
        input.style.opacity = '0';
    }
}


// fechar menu dentro do menu
function fecharMenu() {
    var menuDireito = document.getElementById('menuDireito');
    menuDireito.style.display = 'none';
}


function toggleMenu() {
    var menuDireito = document.getElementById('menuDireito');

    if (menuDireito.style.display === 'none' || menuDireito.style.display === '') {
        // Abrir o menu direito
        menuDireito.style.display = 'block';
    } else {
        // Fechar o menu direito
        menuDireito.style.display = 'none';
    }
}

// CARROSSEL
let slideIndex = 0;
exibirSlide(slideIndex);

function mudarSlide(n) {
    exibirSlide(slideIndex += n);
}

function exibirSlide(n) {
    let slides = document.querySelectorAll(".carrossel-slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    let translateValue = `translateX(${-slideIndex * 27}%)`;
    document.querySelector(".carrossel-inner").style.transform = translateValue;
}

function autoAvancar() {
    mudarSlide(1);
}
// AVANÇA SE EU QUISER
// Defina a velocidade do carrossel (em milissegundos)
let intervaloCarrossel = setInterval(autoAvancar, 10000); // Avança a cada 2.5 segundos

// Pausa o carrossel quando o mouse entra no contêiner
document.querySelector(".carrossel-container").addEventListener("mouseenter", () => {
    clearInterval(intervaloCarrossel);
});

// Reinicia o carrossel quando o mouse sai do contêiner
document.querySelector(".carrossel-container").addEventListener("mouseleave", () => {
    intervaloCarrossel = setInterval(autoAvancar, 10000);
});

// Adiciona os clones dos slides no final do carrossel
let carrosselInner = document.querySelector(".carrossel-inner");
let slides = document.querySelectorAll(".carrossel-slide");

for (let i = 0; i < slides.length; i++) {
    let clone = slides[i].cloneNode(true);
    carrosselInner.appendChild(clone);
}
let imagensCarrossel = document.querySelectorAll(".carrossel-slide img");
imagensCarrossel.forEach((imagem, index) => {
    imagem.addEventListener("click", () => {
        // Lida com o clique na imagem (pode ser personalizado conforme necessário)
        console.log(`Clicou na imagem ${index + 1}`);
    });
});