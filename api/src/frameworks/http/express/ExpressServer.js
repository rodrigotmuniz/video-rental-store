import express from 'express'

const PORT = process.env.PORT || 3000;

export class ExpressServer {
  constructor(routes, controllerAdapter) {
    this.app = express()
  }

  init() {
    try {
      this.app.use(express.json())
      // this.app.use('/api', this.movieRouter.init());
      routes.forEach(route => {
        this.app[route.method](route.path, controllerAdapter(route.controller))
      })

      this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
    } catch (e) {
      throw new Error('Erro ao inicializar a aplicação: ' + e.message)
    }
  }

  getMovieRoutes() {

  }


}