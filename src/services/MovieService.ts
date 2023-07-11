import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
  )
  return response.data
}
