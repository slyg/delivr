import React from 'react'

const Eta = ({date, duration}) =>
  <div className='eta'>
    <p>Duration: {duration}</p>
    <p className='info-color'>ETA: {date.toLocaleString()}</p>
  </div>

export default Eta
