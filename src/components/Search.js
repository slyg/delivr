import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class Search extends Component {

  constructor (arg) {
    super(arg)
    this.state = {stopOversSuggestions : [
      'London Gatwick Airport, Horley, United Kingdom',
      'St Augustine Parade, Bristol BS1 4UZ, United Kingdom',
      'Porth Teigr, Discovery Quay, Cardiff CF10 4GA, United Kingdom'
    ]}
  }

  componentDidMount () {

    setInterval(() => {
      this.setState({
        ...this.state,
        stopOversSuggestions : [...this.state.stopOversSuggestions, Date.now().toString()]
      })
    }, 5000)

  }

  render () {

    return (
      <div className='standard-spacing'>
        <AutoComplete
          hintText='Add destination'
          dataSource={this.state.stopOversSuggestions}
          onUpdateInput={() => {}}
        />
      </div>
    )
  }
}

export default Search
