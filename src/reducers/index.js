import { combineReducers } from 'redux'
import steps from './steps'
import suggestions from './suggestions'
import route from './route'

const reducers = combineReducers({
  steps,
  suggestions,
  route,
})

export default reducers
