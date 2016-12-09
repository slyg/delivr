import { combineReducers } from 'redux'
import steps from './steps'
import suggestions from './suggestions'

const reducers = combineReducers({
  steps,
  suggestions,
})

export default reducers
