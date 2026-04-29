'use strict'


// 1. HEADER (MENÚ RESPONSIVE): Hace que el header se contraiga cuando la página mida menos de 700 píxeles. Este header deja de visualizarse y aparecce un botón que, al clicar en él, hace que se puedan volver a visualizar los conceptos anteriores en una columna.

const headerBtn = document.querySelector('.Header_btn')
const headerNav = document.querySelector('.Header_nav')

headerBtn.addEventListener('click', function() {
    if( headerNav.style.display === 'block') {
        headerNav.style.display = 'none'
    }else{
        headerNav.style.display = 'block'
    }
})


// 2. SLIDER: Con esta función podemos aportarle al slider principal dos flechas que facilitan que las diapositivas puedan pasarse con facilidad. También aparecen 3 puntos que hacen referencia a las 3 diapositivas que contiene este slider. 

const sliderNext = document.querySelector('.Slider_arrow--next')
const sliderPrev = document.querySelector('.Slider_arrow--prev')
const sliderBtn = document.querySelectorAll('.Slider_btn')
const sliderImg = document.querySelectorAll('.Slider_img')

let posicion = 0

console.log(posicion)

let mostrarImagen = function() {
    sliderImg.forEach(function(each, i) {
        sliderImg[i].classList.remove('isVisible')
        sliderBtn[i].classList.remove('isActive')
    })
    sliderImg[posicion].classList.add('isVisible')
    sliderBtn[posicion].classList.add('isActive')
}

sliderNext.addEventListener ( 'click', function() {
    posicion++
    if(posicion >= 3) {
        posicion = 0
    }
    mostrarImagen()
    console.log(posicion)
})

sliderPrev.addEventListener('click', function() {
    posicion--
    if(posicion < 0) {
        posicion = 2
    }
    mostrarImagen()
    console.log(posicion)
})

sliderBtn.forEach(function(each, i) {
    sliderBtn[i].addEventListener('click', function() {
        posicion = i
        mostrarImagen()
        console.log(posicion)
    })
})

// Slider automático

let autoSlide

function iniciarAutoSlide() {
    autoSlide = setInterval(function() {
        posicion++
        if (posicion >= sliderImg.length) {
            posicion = 0
        }
        mostrarImagen()
    }, 5000)
}

function reiniciarAutoSlide() {
    clearInterval(autoSlide)
    iniciarAutoSlide()
}

iniciarAutoSlide()
