'use strict'

// ARCHIVO JAVASCRIPT PARA PÁGINA "ORGANIZAR MI BODA":

// HEADER:
// Botón para desplegable de menú principal:
const headerBtn = document.querySelector('.Header_btn')
const headerNav = document.querySelector('.Header_nav')

headerBtn.addEventListener('click', function() {
    if( headerNav.style.display === 'block') {
        headerNav.style.display = 'none'
    }else{
        headerNav.style.display = 'block'
    }
})


 // BOTONES DESPLEGABLES PARA LOS SERVICIOS EN LA PÁGINA DE 'ORGANIZAR MI BODA':

const desplegableBtn = document.querySelectorAll('.Desplegable_btn');
desplegableBtn.forEach(btn => {
    const desplegableP = btn.nextElementSibling;
    btn.addEventListener('click', () => {
        if(desplegableP.style.display === 'block'){
            desplegableP.style.display = 'none';
        } else {
            desplegableP.style.display = 'block';
        }
    });
});
