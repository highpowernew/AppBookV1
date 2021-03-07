exports.paginaInicial = (req, res, next) => {
    res.render('index', { title: 'Express' })
};