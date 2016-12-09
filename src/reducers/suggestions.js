import { SEARCH_INPUT_SUGGESTIONS_UPDATE } from '../actionTypes'

const initialState = []

// state: [String]
const suggestions = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_SUGGESTIONS_UPDATE:
      return action.suggestions
    default:
      return state
  }

}

export default suggestions