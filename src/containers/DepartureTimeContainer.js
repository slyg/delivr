import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestNewDepartureTime } from '../actionCreators'
import DepartureTime from '../components/DepartureTime'

const mapStateToProps = ({departure}) => ({...departure})
const mapDispatchToProps = dispatch => bindActionCreators({
  onChange: (kind) => requestNewDepartureTime(kind, new Date(Date.now()))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DepartureTime)
