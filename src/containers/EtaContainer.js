import React from 'react'
import Eta from '../components/Eta'
import { connect } from 'react-redux'
import addSeconds from 'date-fns/add_seconds'

const EtaContainer = ({route}) => {
  if (route.exists) {
    const date = addSeconds(
      new Date(Date.now()),
      route.duration
    )
    return <Eta date={date} />
  }
  return null
}

const mapStateToProps = ({route}) => ({route})

export default connect(mapStateToProps)(EtaContainer)
