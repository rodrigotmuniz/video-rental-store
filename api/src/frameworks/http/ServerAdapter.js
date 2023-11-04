const MovieController  = require("../../interfaces/http/controllers/MovieController")
const ExpressServer = require("./express/ExpressServer")

class ServerAdapter {
  constructor() {
    this.routes = this.getRoutes()
    this.server = new ExpressServer(this.routes, this.controllerFnAdapter)
  }

  getRoutes() {
    const controller = new MovieController()
    return [
      { path: '/', method: 'get', fn: controller.getAll.bind(controller) }
    ]
  }

  init() {
    this.server.init()
  }


  getApis() {

  }


  controllerFnAdapter(fn) {
    return async (req, res) => {
      console.log(req, res)

      const input = {
        body: req.body
      }

      const { body, statusCode } = await fn(input)
      res.status(statusCode).json(body)
    }
  }

}

module.exports = ServerAdapter
