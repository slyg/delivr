import { MAP_MOUNTED } from '../actionTypes'
import { ACCESS_TOKEN } from '../conf'
import mapboxgl, { Map } from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = ACCESS_TOKEN

let map = undefined

export default store => next => action => {

  const { type } = action

  if (type === MAP_MOUNTED) {

    map = new Map({
      container: action.ref,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

  }

  next(action)
}
