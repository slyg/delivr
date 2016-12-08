import Search from '../components/Search'
import { searchInputUpdate, addStep } from '../actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({stopOversSuggestions, stopOvers}) => ({
  suggestions: stopOversSuggestions.map(({place_name}) => place_name),
  isDisplayed: (stopOvers.length < 4) || (stopOvers.length === 0)
})
const mapDispatchToProps = dispatch => bindActionCreators({ searchInputUpdate, addStep }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
