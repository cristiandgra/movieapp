import { ActionCreator } from 'redux'

export const ADD_SCORE = 'ADD_SCORE'

interface AddScoreAction {
  type: typeof ADD_SCORE
  payload: {
    movieId: number
    score: {
      score: number
      comment: string
    }
  }
}

export type ActionTypes = AddScoreAction

export const addScore: ActionCreator<AddScoreAction> = (
  movieId: number,
  score: { score: number; comment: string }
) => ({
  type: ADD_SCORE,
  payload: {
    movieId,
    score
  }
})
