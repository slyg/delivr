import React from 'react'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'

const DividerContainer = ({isDisplayed}) => {
  if (isDisplayed) {
    return <Divider />
  }
  return <div />
}

const mapStateToProps = ({steps, isSearchDisplayed}) => ({
  isDisplayed: (steps.length > 0) && (steps.length <= 4)
})

export default connect(mapStateToProps)(DividerContainer)
