import axios from 'axios'
import { MovieDetail } from '../types/movieTypes'

const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
  )
  return response.data
}

export const fetchMovieDetail = async (id: string): Promise<MovieDetail> => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  )
  return response.data
}
