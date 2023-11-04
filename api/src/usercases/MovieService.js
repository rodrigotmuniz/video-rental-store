// const MongoDbConnection  = require('../frameworks/database/mongodb/MongoDbConnection.js')
// const MovieRepository = require('../interfaces/database/repositories/MovieRepository.js')

class MovieService {
  constructor() {
    // this.db = MongoDbConnection.db
    // this.movie = new MovieRepository(this.db);
  }

  async getAllMovies() {
    return 'ok'
    return await this.movie.getAllMovies();
  }

  async getMovieById(movieId) {
    return await this.movie.getMovieById(movieId);
  }

  async createMovie(movieData) {
    return await this.movie.createMovie(movieData);
  }

  async updateMovie(movieId, movieData) {
    return await this.movie.updateMovie(movieId, movieData);
  }

  async deleteMovie(movieId) {
    return await this.movie.deleteMovie(movieId);
  }
}

module.exports = MovieService