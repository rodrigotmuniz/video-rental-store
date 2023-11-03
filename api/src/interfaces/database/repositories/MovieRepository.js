export default class MovieRepository {
  constructor(db) {
    this.collection = db.collection('movies');
  }

  async getAllMovies() {
    return this.collection.find().toArray();
  }

  async getMovieById(movieId) {
    return this.collection.findOne({ _id: movieId });
  }

  async createMovie(movieData) {
    return this.collection.insertOne(movieData);
  }

  async updateMovie(movieId, movieData) {
    return this.collection.findOneAndUpdate({ _id: movieId }, { $set: movieData }, { returnDocument: 'after' });
  }

  async deleteMovie(movieId) {
    return this.collection.findOneAndDelete({ _id: movieId });
  }
}
