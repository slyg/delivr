// @flow
import { ADD_STEP } from '../actionTypes'
import { addStepWithCoordinates } from '../actionCreators'

import type { ADD_STEP_ActionT } from '../actionTypes'

type Action = ADD_STEP_ActionT

// Enhance step information with the ID retrieved from the store
// by cherry-picking the item's id in the suggestions
export default (store: any) => (next: (a: Action) => void) => (action: Action) => {

  next(action)

  const { type } = action

  if (type === ADD_STEP) {
    const { index, value } = action
    const { dispatch } = store
    const { suggestions } = store.getState()
    const { id, geometry : { coordinates } } = suggestions[index]
    dispatch(addStepWithCoordinates(value, id, coordinates))
  }

}
