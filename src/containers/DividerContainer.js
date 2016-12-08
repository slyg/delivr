import React from 'react'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'

const DividerContainer = ({isDisplayed}) => {
  if (isDisplayed) {
    return <Divider />
  }
  return <div />
}

const mapStateToProps = ({stopOvers, isSearchDisplayed}) => ({
  isDisplayed: (stopOvers.length > 0) && (stopOvers.length <= 4)
})

export default connect(mapStateToProps)(DividerContainer)
