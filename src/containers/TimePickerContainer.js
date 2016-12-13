import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestNewDepartureTime } from '../actionCreators'

class TimePickerWrapper extends Component {

  constructor (props) {
    super(props)
    this.state = {value : null}
  }

  handleChange = (event, time) => {
    this.props.onChange(new Date(time))
    this.setState({value: time})
  }

  componentDidUpdate() {
    const { isDisplayed } = this.props
    if (isDisplayed) {
      this.timePickerRef.openDialog()
    }
  }

  render () {
    const { isDisplayed } = this.props
    if (isDisplayed) {
      return (
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value}
          onChange={this.handleChange}
          autoOk={true}
          ref={(ref) => this.timePickerRef = ref}
        />
      )
    } else {
      return null
    }
  }

}

const mapStateToProps = ({ departure }) => ({ isDisplayed: departure.kind === 'LATER' })
const mapDispatchToProps = dispatch => bindActionCreators({
  onChange: (time) => requestNewDepartureTime('LATER', time)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TimePickerWrapper)
