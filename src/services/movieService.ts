import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(API_URL, {
    params: { query, page },
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return response.data;
};

// import axios from "axios";
// import type { Movie } from "../types/movie";

// interface FetchMoviesResponse {
//   results: Movie[];
//   total_results: number;
// }

// // const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

// export const fetchMovies = async (query: string): Promise<Movie[]> => {
//   console.log("TOKEN:", import.meta.env.VITE_TMDB_TOKEN);
//   const response = await axios.get<FetchMoviesResponse>(
//     "https://api.themoviedb.org/3/search/movie",
//     {
//       params: {
//         query,
//       },
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//       },
//     },
//   );
//   return response.data.results;
// };
