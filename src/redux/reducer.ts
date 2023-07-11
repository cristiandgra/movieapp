import { ActionTypes, ADD_SCORE } from './actions'

interface Score {
  score: number
  comment: string
}

interface State {
  scores: { [key: number]: Score[] }
}

const initialState: State = {
  scores: {}
}

const rootReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADD_SCORE:
      const { movieId, score } = action.payload

      return {
        ...state,
        scores: {
          ...state.scores,
          [movieId]: [...(state.scores[movieId] || []), score]
        }
      }

    default:
      return state
  }
}

export default rootReducer
