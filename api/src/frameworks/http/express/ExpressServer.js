const express = require('express')

const PORT = process.env.PORT || 3000;

class ExpressServer {
  constructor(routes, controllerFnAdapter) {
    this.app = express()
    this.routes = routes
    this.controllerFnAdapter = controllerFnAdapter
  }

  init() {
    try {
      this.app.use(express.json())
      // this.app.use('/api', this.movieRouter.init());
      this.routes.forEach(route => {
        this.app[route.method](route.path, this.controllerFnAdapter(route.fn))
      })

      this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
    } catch (e) {
      throw new Error('Erro ao inicializar a aplicação: ' + e.message)
    }
  }
}

module.exports = ExpressServer