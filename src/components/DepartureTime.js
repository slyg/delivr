import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class DepartureTime extends Component {

  constructor (props) {
    super(props)
    const { choices, defaultChoiceIndex } = this.props
    this.state = { currentValue: choices[defaultChoiceIndex].kind }
  }

  handleChange = (event, index, value) => {
    this.props.onChange(value)
    this.setState({currentValue: value})
  }

  render () {
    return (
      <div>Departure hour
        <DropDownMenu value={this.state.currentValue} onChange={this.handleChange}>
          {this.props.choices.map(({kind, label}) =>
            <MenuItem key={kind} value={kind} primaryText={label} />
          )}
        </DropDownMenu>
      </div>
    )
  }

}

export default DepartureTime
