import Steps from '../components/Steps'
import { removeStopOver } from '../actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({steps}) => ({steps})
const mapDispatchToProps = dispatch => bindActionCreators({ removeStopOver }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
