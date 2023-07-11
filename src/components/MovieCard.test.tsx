import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  const movie = {
    id: 1,
    title: 'Test Movie',
    release_date: '2022-01-01',
    poster_path: '/test-poster.jpg'
  }

  test('renders movie details correctly', () => {
    render(
      <BrowserRouter>
        <MovieCard movie={movie} />
      </BrowserRouter>
    )

    const movieLink = screen.getByRole('link')
    expect(movieLink).toHaveAttribute('href', '/movie/1')

    const movieImage = screen.getByRole('img')
    expect(movieImage).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/test-poster.jpg'
    )
    expect(movieImage).toHaveAttribute('alt', 'Test Movie')

    const movieTitle = screen.getByText('Test Movie')
    expect(movieTitle).toBeInTheDocument()

    const releaseDate = screen.getByText('2022-01-01')
    expect(releaseDate).toBeInTheDocument()
  })
})
