import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class Search extends Component {

  constructor (props) {
    super(props)
    this.state = { searchText: '' }
  }

  onUpdateInput (searchText) {
    const { searchInputUpdate } = this.props
    searchInputUpdate(searchText)
    this.setState({ searchText })
  }

  onNewRequest (value, index) {
    const { addStep } = this.props
    addStep(value, index)
    this.setState({ searchText: '' })
    if (this.input) {
      this.input.focus()
    }
  }

  componentDidMount () {
    this.input.focus()
  }

  render () {

    const { suggestions, isDisplayed } = this.props

    if (isDisplayed === false) {
      return <p className='standard-spacing info-color'><small>Max number of steps reached</small></p>
    }

    return (
      <div className='standard-spacing'>
        <AutoComplete
          hintText='Add destination'
          dataSource={suggestions}
          filter={AutoComplete.caseInsensitiveFilter}
          onUpdateInput={this.onUpdateInput.bind(this)}
          onNewRequest={this.onNewRequest.bind(this)}
          searchText={this.state.searchText}
          ref={input => {this.input = input}}
        />
      </div>
    )

  }

}


export default Search
