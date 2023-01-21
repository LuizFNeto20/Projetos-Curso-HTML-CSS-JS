var btnMenu = document.querySelector(".header__btnMenu");
var menuHeader = document.querySelector(".header-nav");

btnMenu.addEventListener('click', menu);

var clicado = false;
function menu() {
    if (!clicado) {
        menuHeader.style.maxHeight = 'calc(100vh - 76px)';
        clicado = true;
    } else {
        menuHeader.style.maxHeight = '0';
        clicado = false;
    }
}

var minWidth = 1024;

window.addEventListener('resize', e => {
    if (window.innerWidth > minWidth) {
        clicado = false;
        menu();
    }
    else {
        clicado = true;
        menu();
    }
});

var laptopPrev = document.querySelector(".laptop-slider .prev");
var laptopNext = document.querySelector(".laptop-slider .next");
var laptopFigures = document.querySelectorAll(".laptop-slider .figure-slide");

laptopNext.addEventListener('click', next);
laptopPrev.addEventListener('click', prev);

var cont = 0;
function next() {
    if (cont != laptopFigures.length - 1) {
        laptopFigures[cont].classList.toggle('show');
        laptopFigures[cont + 1].classList.toggle('show');

        cont += 1;
    } else {
        laptopFigures[cont].classList.toggle('show');
        laptopFigures[cont - (laptopFigures.length - 1)].classList.toggle('show');

        cont = 0;
    }
}

function prev() {
    if (cont != 0) {
        laptopFigures[cont].classList.toggle('show');
        laptopFigures[cont - 1].classList.toggle('show');

        cont -= 1;
    } else {
        laptopFigures[cont].classList.toggle('show');
        laptopFigures[cont + (laptopFigures.length - 1)].classList.toggle('show');

        cont = laptopFigures.length - 1;
    }
}

var quotePrev = document.querySelector(".quote-container .prev");
var quoteNext = document.querySelector(".quote-container .next");
var quoteFigures = document.querySelectorAll(".quote-slideshow .figure-quote");

quoteNext.addEventListener('click', next2);
quotePrev.addEventListener('click', prev2);

var cont2 = 0;
function next2() {
    if (cont2 != quoteFigures.length - 1) {
        quoteFigures[cont2].classList.toggle('show');
        quoteFigures[cont2 + 1].classList.toggle('show');

        cont2 += 1;
    } else {
        quoteFigures[cont2].classList.toggle('show');
        quoteFigures[cont2 - (quoteFigures.length - 1)].classList.toggle('show');

        cont2 = 0;
    }
}

function prev2() {
    if (cont != 0) {
        quoteFigures[cont].classList.toggle('show');
        quoteFigures[cont - 1].classList.toggle('show');

        cont2 -= 1;
    } else {
        quoteFigures[cont].classList.toggle('show');
        quoteFigures[cont + (quoteFigures.length - 1)].classList.toggle('show');

        cont2 = quoteFigures.length - 1;
    }
}