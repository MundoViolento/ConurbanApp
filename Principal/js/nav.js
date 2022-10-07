/* Lo que hacemos es establecer dos constantes, las cuales buscan los elementos en la página usando el selector por clase. */

const primaryNav = document.querySelector('.ul-nav');

const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        
        primaryNav.setAttribute('data-visible', true)// Para el menú
        navToggle.setAttribute('aria-expanded', true)// Para el botón
    
    } else if (visibility === "true") {

        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)

    }
})