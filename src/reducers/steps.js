import { REMOVE_STEP, ADD_STEP_WITH_COORDINATES } from '../actionTypes'

const initialState = []

// state : [{ label: String }]
const steps = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_STEP:
      return state.filter((_, i) => i !== action.index)
    case ADD_STEP_WITH_COORDINATES: {
      const { label, id, coordinates } = action
      return [...state, { label, id, coordinates }]
    }
    default:
      return state
  }

}

export default steps
