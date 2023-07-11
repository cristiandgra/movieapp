import { render, screen } from '@testing-library/react'
import MovieList from './MovieList'

import { MemoryRouter } from 'react-router-dom'

describe('MovieList', () => {
  const movies = [
    {
      id: 1,
      title: 'Test Movie 1',
      release_date: '2022-01-01',
      poster_path: '/test-poster-1.jpg'
    },
    {
      id: 2,
      title: 'Test Movie 2',
      release_date: '2022-02-01',
      poster_path: '/test-poster-2.jpg'
    },
    {
      id: 3,
      title: 'Test Movie 3',
      release_date: '2022-03-01',
      poster_path: '/test-poster-3.jpg'
    }
  ]

  test('renders movie list correctly', () => {
    render(
      <MemoryRouter>
        <MovieList movies={movies} />
      </MemoryRouter>
    )

    const movieCards = screen.getAllByTestId('movie-card')
    expect(movieCards.length).toBe(3)

    const firstMovie = movies[0]
    const firstMovieTitle = screen.getByText(firstMovie.title)
    expect(firstMovieTitle).toBeInTheDocument()

    const secondMovie = movies[1]
    const secondMovieTitle = screen.getByText(secondMovie.title)
    expect(secondMovieTitle).toBeInTheDocument()

    const thirdMovie = movies[2]
    const thirdMovieTitle = screen.getByText(thirdMovie.title)
    expect(thirdMovieTitle).toBeInTheDocument()
  })
})
