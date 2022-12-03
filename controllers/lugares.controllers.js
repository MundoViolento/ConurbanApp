const getInicio = (req, res) => {
    res.render('index')
}

const getContacto = (req, res) => {
    res.render('pag/contacto')
}

const getNosotros = (req, res) => {
    res.render('pag/AcercaDeNosotros')
}

const getZonaX = (req, res) => {
    res.render('pag/zonaX')
}

const getCard = (req, res) => {
    res.render('pag/cardZN')
}

module.exports = {
    getInicio,
    getContacto,
    getNosotros,
    getZonaX,
    getCard
}