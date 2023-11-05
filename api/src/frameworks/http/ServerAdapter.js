const MovieController = require("../../interfaces/http/controllers/MovieController")
const ExpressRouteAdapter = require("./express/ExpressRouteAdapter")
const ExpressServer = require("./express/ExpressServer")

class ServerAdapter {
  constructor() {
  }

  createRoutes() {
    const { createFnAdapter } = ExpressRouteAdapter

    const movieController = new MovieController()
    const { getAll } = movieController

    return [
      { path: '/:id', method: 'get', fn: createFnAdapter(movieController, getAll.name) }
    ]
  }

  init() {
    const routes = this.createRoutes()
    ExpressServer.init(routes)
  }
}

module.exports = ServerAdapter
