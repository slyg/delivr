import { SEARCH_INPUT_UPDATE } from '../actionTypes'
import { ACCESS_TOKEN, API_HOST, API_VERSION } from '../conf'
import { searchInputSuggestionsUpdate } from '../actionCreators'
import { memoize } from 'ramda'

const fetchSuggestions = memoize(
  value =>
    fetch(`${API_HOST}/geocoding/${API_VERSION}/mapbox.places/${value}.json?country=gb&access_token=${ACCESS_TOKEN}`)
      .then(r => r.json())
      .then(r => r.features)
)

export default store => next => action => {

  const { type } = action

  if (type === SEARCH_INPUT_UPDATE) {

    const { value } = action

    if (value.length > 2) {
      fetchSuggestions(value)
        .then(r => store.dispatch(searchInputSuggestionsUpdate(r)))
        .catch(({message, stack}) => console.error('Woops', message, stack))
    }

  }

  next(action)

}
