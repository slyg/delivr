import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ACCESS_TOKEN } from '../conf'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = ACCESS_TOKEN

class MapContainer extends Component {

  componentDidMount () {

    this.map = new mapboxgl.Map({
      container: this.ref,
      style: 'mapbox://styles/mapbox/streets-v8',
      zoom: 8,
      center: [-0.118092, 51.509865],
    })

    this.map.on('load', () => {
      this.map
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
        .addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        })
        .addLayer({
          id: 'points',
          type: 'symbol',
          source: 'points',
          layout: {
            'icon-image': 'marker-15',
            // 'text-field': '{label}',
            'text-offset': [0, 0.6],
            'text-anchor': 'top'
          }
        })
    })

  }

  componentWillReceiveProps ({route, steps}) {

    if (route.exists) {

      const { geometry } = route

      let bounds = new mapboxgl.LngLatBounds()
      geometry.coordinates.forEach(coordinate => bounds.extend(coordinate))

      this.map
        .getSource('route').setData({
          geometry,
          type: 'Feature',
          properties: {}
        })

      this.map
        .fitBounds(bounds, {
          offset: [250, 0],
          padding: 100
        })

    }

    this.map.getSource('points').setData({
      type: 'FeatureCollection',
      features: steps.map(({coordinates, label}) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates
        },
        properties: { label }
      }))
    })

  }

  shouldComponentUpdate () {
    return false
  }

  render() {
    return <div ref={ref => {this.ref = ref}} className='map' />
  }

}

const mapStateToProps = ({route, steps}) => ({route, steps})

export default connect(mapStateToProps)(MapContainer)
