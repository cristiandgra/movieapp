import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'

const MyListPage: React.FC = () => {
  const myList = useSelector((state: any) => state.myList)

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>My List</h1>
      <MovieList movies={myList ?? []} />
    </div>
  )
}

export default MyListPage
