import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addScore } from '../redux/actions'

interface ScoreFormProps {
  movieId: number
}

const ScoreForm: React.FC<ScoreFormProps> = ({ movieId }) => {
  const [score, setScore] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const handleScoreClick = (value: number) => {
    setScore((prevScore) => (prevScore === value ? null : value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (score !== null) {
      dispatch(addScore(movieId, { score, comment }))
    }
    setScore(null)
    setComment('')
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span
          key={i}
          className={`text-3xl cursor-pointer ${
            i <= (score ?? 0) ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => handleScoreClick(i)}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className='flex items-center mb-4'>
        <div className='mr-2'>Puntuación:</div>
        <div className='flex'>{renderStars()}</div>
      </div>
      <label className='block mb-4'>
        Comentario:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className='border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500'
        />
      </label>
      <button
        type='submit'
        className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 focus:outline-none'
        disabled={score === null}>
        Enviar puntuación
      </button>
    </form>
  )
}

export default ScoreForm
