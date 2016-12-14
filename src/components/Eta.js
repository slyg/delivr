import React, { PropTypes } from 'react'

const { instanceOf, string } = PropTypes

const Eta = ({date, duration}) =>
  <div className='eta'>
    <p>Duration: {duration}</p>
    <p className='info-color'>ETA: {date.toLocaleString()}</p>
  </div>

Eta.propTypes = {
  duration: string.isRequired,
  date: instanceOf(Date)
}

export default Eta
