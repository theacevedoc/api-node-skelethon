import MoviesService from "../services/movies.service.js";
const moviesService = new MoviesService();

export async function find(req, res) {
  const search = req.params.search

  const movieFilter = {
    name: search
  };

  const response = await moviesService.searchMovies();

  return res.status(response.status).json({
    code: response.code,
    message: response.message,
    data: response.data,
  });
};
