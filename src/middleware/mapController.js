import { MAP_MOUNTED } from '../actionTypes'
import { ACCESS_TOKEN } from '../conf'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = ACCESS_TOKEN

const middleware = store => next => action => {

  const { type } = action

  if (type === MAP_MOUNTED) {

    new mapboxgl.Map({
      container: action.ref,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

  }

  next(action)
}

export default middleware
