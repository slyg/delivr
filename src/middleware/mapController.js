import { MAP_MOUNTED, NEW_ROUTE } from '../actionTypes'
import { ACCESS_TOKEN } from '../conf'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = ACCESS_TOKEN

let map = undefined;

const middleware = store => next => action => {

  next(action)

  const { type } = action

  switch (type) {

    case MAP_MOUNTED: {
      map = new mapboxgl.Map({
        container: action.ref,
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 8,
        center: [-0.118092, 51.509865],
      })
      break;
    }

    case NEW_ROUTE: {

      const { route } = action

      if (map.getSource('route')) map.removeSource('route')

      let bounds = new mapboxgl.LngLatBounds()
      route.geometry.coordinates.forEach(coordinate => bounds.extend(coordinate))

      map
        .addSource('route', {
          type: 'geojson',
          data: {
            ...route,
            type: 'Feature',
            properties: {}
          }
        })
        .addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
              'line-join': 'round',
              'line-cap': 'round'
          },
          paint: {
              'line-color': '#888',
              'line-width': 8
          }
        })
        .fitBounds(bounds, {
          offset: [250, 0],
          padding: 100
        })

      break;
    }

    default:

  }
}

export default middleware
