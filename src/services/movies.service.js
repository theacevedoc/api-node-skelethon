import axios from 'axios';
import { STATUS_200, STATUS_500, CODE_OK, MESSAGE_ERROR } from '../utils/lib/constants.mjs';
import { config } from '../config/config.js';

class MoviesService {
  constructor() {}

  async searchMovies({ name = '' }) {
    try {
      const response = await axios.get(config.URL_OMDB, { params: {
        s: name,
        apikey: config.API_KEY_OMDB,
      }});
      const responseData = response.data;
      const data = {
        movies: responseData.Search,
        totalResults: responseData.totalResults,
      };

      return {
        status: STATUS_200,
        code: CODE_OK,
        message: 'Movies retrieved correctly',
        data,
      }
    } catch(error) {
      console.log(error);
      return {
        status: STATUS_500,
        code: CODE_OK,
        message: MESSAGE_ERROR,
        data: {},
      }
    }
  }
}

export default MoviesService;
