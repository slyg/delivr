import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapMounted } from '../actionCreators'

class MapContainer extends Component {

  componentDidMount () {
    this.props.dispatch(mapMounted(this.map))
  }

  shouldComponentUpdate () {
    return false
  }

  render() {
    return <div ref={map => {this.map = map}} className='map' />
  }

}

export default connect()(MapContainer)
