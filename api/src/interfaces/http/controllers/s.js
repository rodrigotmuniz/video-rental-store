import MovieService from "../../../usercases/MovieService";
import { MovieController } from "./MovieController";

test('bla', async () => {
  try {
    const controller = new MovieController()
    await controller.getAll({})
    console.log('finish')
  } catch (error) {
    console.log(error.message)
  }
})