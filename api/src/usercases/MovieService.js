import { MongoDbConnection } from '../frameworks/database/mongodb/MongoDbConnection.js';
import MovieRepository from '../interfaces/database/repositories/MovieRepository.js';

export default class MovieService {
  constructor() {
    this.db = MongoDbConnection.db
    this.movie = new MovieRepository(this.db);
  }

  async getAllMovies() {
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
