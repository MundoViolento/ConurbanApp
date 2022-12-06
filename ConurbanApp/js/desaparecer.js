//Funciones
let btnPerfil = document.querySelector('.boton_perfil').addEventListener('click', verPerfil)
let btnComent = document.querySelector('.boton_comentarios').addEventListener('click', verComent)
let btnFav = document.querySelector('.boton_favoritos').addEventListener('click', verFav)
let btnConfig = document.querySelector('.boton_configuracion').addEventListener('click', verConfig)

//Cosas a desaparecer

const perfil = document.querySelector('.EditarPerfil')
const coment = document.querySelector('.TusComentarios')
const fav = document.querySelector('.Favoritos')
const config = document.querySelector('.Configuracion')

function verPerfil () {
    desactivar(perfil, coment, fav, config)
}

function verComent () {
    desactivar(coment, perfil, fav, config)
}

function verFav () {
    desactivar(fav, perfil, coment, config)
}

function verConfig () {  
    desactivar(config, perfil, coment, fav)
}

function desactivar (a, b, c, d) {
    a.classList.toggle('desaparecer')
    b.classList.add('desaparecer')
    c.classList.add('desaparecer')
    d.classList.add('desaparecer')
}






