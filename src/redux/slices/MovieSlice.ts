import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Score } from '../../types/movieTypes'

export interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  scores?: Score[]
}

interface MoviesState {
  movies: Movie[]
}

const initialState: MoviesState = { movies: [] }

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      if (state.movies.length === 0) {
        state.movies = [action.payload]
        return
      }

      const movie = state.movies.find((movie) => movie.id === action.payload.id)

      if (movie) {
        return
      }

      state.movies.push(action.payload)
    },
    addScore: (
      state,
      action: PayloadAction<{ movieId: number; score: Score }>
    ) => {
      const { movieId, score } = action.payload
      const movie = state.movies.find((movie) => movie.id === movieId)
      if (movie) {
        if (!movie.scores) {
          movie.scores = []
        }

        movie.scores.push(score)
      }
    }
  }
})

export const { addMovie, addScore } = moviesSlice.actions

export default moviesSlice.reducer
