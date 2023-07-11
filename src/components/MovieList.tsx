import React from 'react'
import MovieCard from './MovieCard'

interface Movie {
  title: string
  release_date: string
  poster_path: string
  id: number
}

interface MovieListProps {
  movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <div className='grid grid-cols-4 gap-4'>
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
)

export default MovieList
