// import MovieService from "../../../usercases/MovieService.js"

export class MovieController {
  constructor() {
    // this.movieService = new MovieService
  }

  async getAll({ headers, body, pathParams, queriesParams }) {
    // const response = await this.movieService.getAllMovies()
    const promise = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('bla')
      }, 500)
    });
    console.log(promise)
    return {
      headers: {},
      body: { message: 'ok' }
    }
  }


}