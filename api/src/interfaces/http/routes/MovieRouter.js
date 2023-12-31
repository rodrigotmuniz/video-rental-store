const express = require('express')
const  MovieController  = require('../controllers/MovieController.js')

export class MovieRouter {
  constructor() {
    this.movieRouter = express.Router();
    this.movieController = new MovieController()
  }

  init() {
    this.movieRouter.get('/', (req, res) => this.movieController.getAll(req, res));

    return this.movieRouter
  }
}

