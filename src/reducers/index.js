import { combineReducers } from 'redux'
import steps from './steps'
import suggestions from './suggestions'
import route from './route'
import departure from './departure'

const reducers = combineReducers({
  steps,
  suggestions,
  route,
  departure,
})

export default reducers
