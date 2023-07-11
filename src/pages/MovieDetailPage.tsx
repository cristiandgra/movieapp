import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ScoreForm from '../components/ScoreForm'
import { fetchMovieDetail } from '../services/MovieService'
import { MovieDetail } from '../types/movieTypes'

interface RouteParams {
  [key: string]: string | undefined
  id?: string
}

interface Score {
  score: number
  comment: string
}

interface State {
  scores: { [key: number]: Score[] }
}

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<RouteParams>()
  const [movie, setMovie] = useState<MovieDetail | null>(null)

  const scores = useSelector((state: State) =>
    state.scores && id ? state.scores[parseInt(id)] || [] : []
  )

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        const movie = await fetchMovieDetail(id)
        setMovie(movie)
      }
      fetchMovie()
    }
  }, [id])

  return (
    <div className='bg-gray-100 min-h-screen py-8 px-4'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        {movie ? (
          <div>
            <h2 className='text-3xl font-bold mb-4'>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='w-full mb-4 rounded-lg shadow'
            />
            <p className='text-lg leading-relaxed mb-4'>{movie.overview}</p>
            <ScoreForm movieId={id ? parseInt(id) : 0} />

            <div className='mt-6'>
              {scores.length > 0 ? (
                <div>
                  <h3 className='text-xl font-bold mb-2'>Opiniones:</h3>
                  {scores.map((score, i) => (
                    <div key={i} className='bg-gray-200 p-4 rounded-lg mb-2'>
                      <p className='text-lg font-semibold'>
                        Puntuación: {score.score}
                      </p>
                      <p>{score.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-lg italic'>No hay opiniones todavía.</p>
              )}
            </div>
          </div>
        ) : (
          <p className='text-lg'>Cargando...</p>
        )}
        <Link to='/' className='text-blue-500 underline mt-4 block'>
          Volver al listado
        </Link>
      </div>
    </div>
  )
}

export default MovieDetailPage
