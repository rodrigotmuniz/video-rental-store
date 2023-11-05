const express = require('express')

const PORT = process.env.PORT || 3000;

class ExpressServer {

  static init(routes) {
    try {
      const app = express()
      app.use(express.json())

      routes.forEach(route => {
        app[route.method](route.path, route.fn)
      })

      app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
    } catch (e) {
      throw new Error('Erro ao inicializar a aplicação: ' + e.message)
    }
  }
}

module.exports = ExpressServer