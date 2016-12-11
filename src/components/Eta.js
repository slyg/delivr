import React from 'react'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const Eta = ({date}) =>
  <div className='eta'>
    <p>Duration: { distanceInWordsToNow(date, { includeSeconds: true }) }</p>
    <p className='info-color'>ETA: {date.toLocaleString()}</p>
  </div>

export default Eta
