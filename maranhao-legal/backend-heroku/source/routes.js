const {Router} = require('express')

const PdfController = require('./controllers/Pdf')

const routes = Router()

// routes.get('/noticias', NoticiasControllers.index)
// routes.get('/noticia/:id', NoticiasControllers.getNoticiaById)
// routes.get('/noticias/query', NoticiasControllers.getNoticiaByQuery)

// routes.get('/tags', TagsControllers.index)

routes.get('/categorias', PdfController.index)

module.exports = { routes }
