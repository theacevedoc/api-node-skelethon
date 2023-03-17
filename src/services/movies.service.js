import { STATUS_200, CODE_OK } from '../utils/lib/constants.mjs';

class MoviesService {
  constructor() {}

  async searchMovies(movieFilter) {
    try {
      return {
        status: STATUS_200,
        code: CODE_OK,
        message: 'Movies retrieved correctly',
        data: {},
      }
    } catch(error) {
      console.log(error);
    }
  }
}

export default MoviesService;
