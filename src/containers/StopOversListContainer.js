import StopOversList from '../components/StopOversList'
import { removeStopOver } from '../actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({stopOvers}) => ({stopOvers})
const mapDispatchToProps = dispatch => bindActionCreators({ removeStopOver }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StopOversList)
