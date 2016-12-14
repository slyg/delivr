// @flow
import { REMOVE_STEP, ADD_STEP_WITH_COORDINATES } from '../actionTypes'

import type { REMOVE_STEP_ActionT, ADD_STEP_WITH_COORDINATES_ActionT } from '../actionTypes'
import type { Step } from '../types'

type State = Step[]
type Action = REMOVE_STEP_ActionT
            & ADD_STEP_WITH_COORDINATES_ActionT

const initialState = []

const steps = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case REMOVE_STEP:
      return state.filter((_, i) => i !== action.index)
    case ADD_STEP_WITH_COORDINATES: {
      const { label, coordinates } = action
      return [...state, { label, coordinates }]
    }
    default:
      return state
  }

}

export default steps
