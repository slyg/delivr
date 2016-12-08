import { combineReducers } from 'redux'
import stopOvers from './stopOvers'
import stopOversSuggestions from './stopOversSuggestions'

const reducers = combineReducers({
  stopOvers,
  stopOversSuggestions,
})

export default reducers
