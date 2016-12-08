import { SEARCH_INPUT_UPDATE } from '../actionTypes'
import { ACCESS_TOKEN } from '../conf'
import { searchInputSuggestionsUpdate } from '../actionCreators'
import { memoize } from 'ramda'

const fetchSuggestions = memoize(
  (value) =>
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${ACCESS_TOKEN}`)
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
