import { MAP_MOUNTED, NEW_ROUTE, ADD_STEP_WITH_COORDINATES } from '../actionTypes'
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

      map.on('load', function() {
        map
          .addSource('points', {
            'type': 'geojson',
            'data': {
              type: 'FeatureCollection',
              features: []
            }
          })
          .addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'points',
            'layout': {
              'icon-image': '{marker-symbol}',
              'text-field': '{label}',
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-offset': [0, 0.6],
              'text-anchor': 'top'
            }
          })
          .addSource('route', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: []
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
              'line-color': '#088',
              'line-width': 8
            }
          })
      })

      break
    }

    case NEW_ROUTE: {

      const { route } = action

      let bounds = new mapboxgl.LngLatBounds()
      route.geometry.coordinates.forEach(coordinate => bounds.extend(coordinate))

      map
        .getSource('route').setData({
          ...route,
          type: 'Feature',
          properties: {}
        })

      map
        .fitBounds(bounds, {
          offset: [250, 0],
          padding: 100
        })

      break
    }

    case ADD_STEP_WITH_COORDINATES : {

      const { coordinates, label } = action

      map.getSource('points').setData({
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates
          },
          properties: { label }
        }]
      })

      break
    }

    default:

  }
}

export default middleware
