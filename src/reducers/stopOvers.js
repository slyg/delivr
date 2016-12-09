import { REMOVE_STOPOVER, ADD_STEP_WITH_ID } from '../actionTypes'

const initialState = []

// state : [{ label: String }]
const stopOvers = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_STOPOVER:
      return state.filter((_, i) => i !== action.index)
    case ADD_STEP_WITH_ID: {
      const { label, id, coordinates } = action
      return [...state, { label, id, coordinates }]
    }
    default:
      return state
  }

}

export default stopOvers
