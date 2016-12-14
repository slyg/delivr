import React, { Component, PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

const { arrayOf, string, func, bool } = PropTypes

class Search extends Component {

  static propTypes = {
    searchInputUpdate: func.isRequired,
    addStep: func.isRequired,
    suggestions: arrayOf(string.isRequired),
    isDisplayed: bool.isRequired
  }

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
      return <small className='info-color'>Max number of steps reached</small>
    }

    return (
      <AutoComplete
        hintText='Add destination'
        dataSource={suggestions}
        filter={AutoComplete.caseInsensitiveFilter}
        onUpdateInput={this.onUpdateInput.bind(this)}
        onNewRequest={this.onNewRequest.bind(this)}
        searchText={this.state.searchText}
        ref={input => {this.input = input}}
      />
    )

  }

}


export default Search
