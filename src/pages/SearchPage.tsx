import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import { searchMovies } from '../services/MovieService'

const SearchPage: React.FC = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const initialMovies = await searchMovies('a')
      setMovies(initialMovies.results)
    }

    fetchMovies()
  }, [])

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      search: { value: string }
    }

    const movies = await searchMovies(target.search.value)
    setMovies(movies.results)
  }

  return (
    <div className='p-4'>
      <form onSubmit={handleSearch} className='mb-4'>
        <input
          type='text'
          name='search'
          placeholder='Search...'
          className='p-2 border'
        />
        <button type='submit' className='p-2 ml-2 bg-blue-500 text-white'>
          Search
        </button>
      </form>

      <MovieList movies={movies} />

      {movies.length === 0 && (
        <p className='text-2xl text-center my-auto'>No movies found</p>
      )}
    </div>
  )
}

export default SearchPage
