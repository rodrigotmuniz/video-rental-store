// const MovieService = require("../../../usercases/MovieService.js"

const MovieService = require( "../../../usercases/MovieService")
class MovieController {
  movieService

  constructor() {
    this.movieService = new MovieService()
  }

  async getAll({ headers, body, pathParams, queriesParams }) {
    const response = await this.movieService.getAllMovies()
    return {
      statusCode: 200,
      headers: {},
      body: { message: 'ok' }
    }
  }
}

module.exports = MovieController