import React from 'react'
import { Link } from 'react-router-dom'

interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
}

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div data-testid='movie-card' className='p-4'>
      <Link to={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={movie.title} className='w-full' />
      </Link>
      <h2 className='text-xl'>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  )
}

export default MovieCard
