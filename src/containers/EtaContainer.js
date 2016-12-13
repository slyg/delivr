import React from 'react'
import Eta from '../components/Eta'
import { connect } from 'react-redux'
import addSeconds from 'date-fns/add_seconds'
import distanceInWords from 'date-fns/distance_in_words'

const EtaContainer = ({route, departure}) => {

  if (route.exists) {

    const { duration } = route // seconds
    const departureDate = departure.date.getTime() // Date
    const etaDate = addSeconds( departureDate, duration) // Date
    const durationInWords = distanceInWords(departureDate, etaDate)

    return <Eta duration={durationInWords} date={etaDate} />
  }
  
  return null
}

const mapStateToProps = ({route, departure}) => ({route, departure})

export default connect(mapStateToProps)(EtaContainer)
