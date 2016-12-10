import { ADD_STEP_WITH_COORDINATES, REMOVE_STEP } from '../actionTypes'
import { ACCESS_TOKEN, API_HOST, API_VERSION } from '../conf'
import { newRoute } from '../actionCreators'
import { memoize, compose, prop, map, join } from 'ramda'

const fetchNewRoute = memoize(
  coordinates =>
    fetch(`${API_HOST}/directions/${API_VERSION}/mapbox/driving/${encodeURIComponent(coordinates)}.json?access_token=${ACCESS_TOKEN}&geometries=geojson`)
      .then(r => r.json())
      .then(r => r.routes[0])
)

const extractCoordinates = compose(
  join(';'),
  map(compose(
    join(','),
    prop('coordinates')
  ))
)

export default store => next => action => {

  next(action)

  const { type } = action

  if (type === ADD_STEP_WITH_COORDINATES || type === REMOVE_STEP) {

    const { steps } = store.getState()

    if ( steps.length > 1 ) {

      const coordinates = extractCoordinates(steps)

      fetchNewRoute(coordinates)
        .then(
          (route) =>
            store.dispatch(newRoute(route))
        )
        .catch(({message, stack}) => console.error('Woops', message, stack))
    }

  }
}
