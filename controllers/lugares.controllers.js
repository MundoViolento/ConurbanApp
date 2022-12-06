const getInicio = (req, res) => {
    res.render('index')
}

const getPerfil = (req, res) => {
    res.render('pag/perfilUsuario')
}

const getContacto = (req, res) => {
    res.render('pag/contacto')
}

const getNosotros = (req, res) => {
    res.render('pag/AcercaDeNosotros')
}

const getZonaNorte = (req, res) =>{
    res.render('pag/zonaNorte')
}

const getZonaSur = (req, res) =>{
    res.render('pag/zonaSur')
}

const getZonaOeste = (req, res) =>{
    res.render('pag/zonaOeste')
}

const getZonaRecomendados = (req, res) => {
    res.render('pag/recomendados')
}

module.exports = {
    getInicio,
    getPerfil,
    getContacto,
    getNosotros,
    getZonaNorte,
    getZonaSur,
    getZonaOeste,
    getZonaRecomendados
}