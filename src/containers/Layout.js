import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import DividerContainer from './DividerContainer'
import StopOversListContainer from './StopOversListContainer'
import SearchContainer from './SearchContainer'
import MapContainer from './MapContainer'

const Layout = () => (
  <MuiThemeProvider>
    <div>
      <Paper className='standard-spacing control-panel' zDepth={1} rounded={false}>
        <StopOversListContainer />
        <DividerContainer />
        <SearchContainer />
      </Paper>
      <MapContainer />
    </div>
  </MuiThemeProvider>
)

export default Layout
