import Search from '../components/Search'
import { searchInputUpdate, addStep } from '../actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({suggestions, steps}) => ({
  suggestions: suggestions.map(({place_name}) => place_name),
  isDisplayed: (steps.length < 4) || (steps.length === 0)
})
const mapDispatchToProps = dispatch => bindActionCreators({ searchInputUpdate, addStep }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
