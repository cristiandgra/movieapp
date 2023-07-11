import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'
import { RootState } from '../redux/store'

const MyListPage: React.FC = () => {
  const myList = useSelector((state: RootState) => state.movies.movies)

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>My List</h1>

      {myList.length > 0 ? (
        <MovieList movies={myList} />
      ) : (
        <div className='text-center'>
          <p className='text-lg italic'>Todavía no hay ninguna pelicula.</p>
          <p className='text-lg italic'>
            ¡Añade una review para ir rellanando tu lista!
          </p>
        </div>
      )}
    </div>
  )
}

export default MyListPage
