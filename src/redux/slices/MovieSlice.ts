import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  rating?: number
  comment?: string
}

interface MoviesState {
  value: Movie[]
}

const initialState: MoviesState = { value: [] }

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.value.push(action.payload)
    }
  }
})

export const { addMovie } = moviesSlice.actions

export default moviesSlice.reducer
