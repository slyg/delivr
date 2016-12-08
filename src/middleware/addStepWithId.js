import { ADD_STEP } from '../actionTypes'
import { addStepWithId } from '../actionCreators'

// Enhance step information with the ID retrieved from the store
// by cherry-picking the item's id in the stopOversSuggestions
export default store => next => action => {

  const { type } = action

  next(action)

  if (type === ADD_STEP) {
    const { index, value } = action
    const { dispatch } = store
    const { stopOversSuggestions } = store.getState()
    dispatch(addStepWithId(value, stopOversSuggestions[index].id))
  }

}
